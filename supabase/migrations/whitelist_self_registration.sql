-- Whitelist-gated self-registration for course students.
-- Applied to the Finanskurset project (sibrgwhcqgghcemkjszo) on 2026-08-15.
--
-- Flow: a student registers with email + password. A DB trigger checks the
-- email against public.approved_emails (the class roster). If it matches, a
-- student profile is created automatically and the student is in. If not, the
-- signup is rejected. Admin-invited users (inviteUserByEmail sets invited_at)
-- bypass the gate and keep the existing manual-approval flow.

-- 1) Roster / whitelist table
create table if not exists public.approved_emails (
  email       text primary key,
  full_name   text,
  cohort      text,                       -- e.g. 'BUS220-H2026'
  added_at    timestamptz not null default now(),
  claimed_at  timestamptz,
  claimed_by  uuid references auth.users(id) on delete set null
);

alter table public.approved_emails enable row level security;

-- Only admins can read/manage the roster (SECURITY DEFINER functions bypass RLS)
drop policy if exists approved_emails_admin_all on public.approved_emails;
create policy approved_emails_admin_all on public.approved_emails
  for all using (public.is_admin()) with check (public.is_admin());

-- 2) Public check used by the registration form for a friendly message.
--    Returns only a boolean; the list itself is never exposed to the client.
create or replace function public.is_email_approved(check_email text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.approved_emails
    where lower(email) = lower(trim(check_email))
  );
$$;

revoke all on function public.is_email_approved(text) from public;
grant execute on function public.is_email_approved(text) to anon, authenticated;

-- 3) On self-signup: gate by roster and auto-create the student profile.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  approved boolean;
  roster_name text;
begin
  -- Admin-invited users (inviteUserByEmail sets invited_at) keep the existing
  -- flow; their profile is created by the invite-user edge function.
  if new.invited_at is not null then
    return new;
  end if;

  select true, full_name into approved, roster_name
  from public.approved_emails
  where lower(email) = lower(new.email)
  limit 1;

  if approved is not true then
    raise exception 'not_on_roster'
      using message = 'E-posten står ikke på klasselisten for dette kurset.';
  end if;

  insert into public.profiles (id, email, full_name, role, has_completed_signup)
  values (
    new.id,
    new.email,
    coalesce(nullif(new.raw_user_meta_data->>'full_name',''), roster_name, ''),
    'student',
    true
  )
  on conflict (id) do nothing;

  update public.approved_emails
    set claimed_at = now(), claimed_by = new.id
    where lower(email) = lower(new.email) and claimed_at is null;

  return new;
end;
$$;

-- Trigger functions don't need EXECUTE grants; keep it off the public API surface.
revoke execute on function public.handle_new_user() from anon, authenticated, public;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
