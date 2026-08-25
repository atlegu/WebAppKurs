-- Admin student-activity dashboard: secured read functions.
-- Applied to project sibrgwhcqgghcemkjszo on 2026-08-25.
--
-- Both functions run SECURITY DEFINER and guard on is_admin(), so an admin can
-- read cohort activity + per-student progress (joining auth.users, profiles and
-- progress tables) without exposing those tables directly to the client.

-- Per-student activity overview across cohorts (admin only).
-- p_module_ids: when provided, section/module/quiz counts are scoped to those
-- module ids (the current course), ignoring legacy/foreign progress rows that
-- share this Supabase project.
create or replace function public.admin_cohort_activity(p_module_ids text[] default null)
returns table (
  user_id uuid,
  email text,
  cohort text,
  full_name text,
  registered boolean,
  confirmed boolean,
  claimed_at timestamptz,
  last_sign_in_at timestamptz,
  last_active timestamptz,
  sections_done integer,
  modules_touched integer,
  quizzes_passed integer
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'not_authorized';
  end if;

  return query
  select
    ae.claimed_by as user_id,
    ae.email,
    ae.cohort,
    p.full_name,
    (ae.claimed_at is not null) as registered,
    (u.email_confirmed_at is not null) as confirmed,
    ae.claimed_at,
    u.last_sign_in_at,
    (select max(up.last_accessed) from public.user_progress up
       where up.user_id = ae.claimed_by
         and (p_module_ids is null or up.module_id = any(p_module_ids))) as last_active,
    (select count(distinct s) from public.user_progress up, unnest(up.completed_sections) s
       where up.user_id = ae.claimed_by
         and (p_module_ids is null or up.module_id = any(p_module_ids)))::int as sections_done,
    (select count(distinct up.module_id) from public.user_progress up
       where up.user_id = ae.claimed_by
         and (p_module_ids is null or up.module_id = any(p_module_ids)))::int as modules_touched,
    (select count(*) from public.module_quiz_results q
       where q.user_id = ae.claimed_by and q.passed
         and (p_module_ids is null or q.module_id = any(p_module_ids)))::int as quizzes_passed
  from public.approved_emails ae
  left join auth.users u on u.id = ae.claimed_by
  left join public.profiles p on p.id = ae.claimed_by
  order by ae.cohort, (ae.claimed_at is not null) desc,
           (select max(up.last_accessed) from public.user_progress up where up.user_id = ae.claimed_by) desc nulls last,
           ae.email;
end;
$$;

grant execute on function public.admin_cohort_activity(text[]) to authenticated;

-- Per-module drill-down for one student (admin only).
create or replace function public.admin_student_progress(p_user_id uuid)
returns table (
  module_id text,
  last_accessed timestamptz,
  sections_completed integer,
  quiz_score integer,
  quiz_passed boolean,
  quiz_attempts integer
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'not_authorized';
  end if;

  return query
  select
    up.module_id,
    up.last_accessed,
    coalesce(array_length(up.completed_sections, 1), 0) as sections_completed,
    q.score as quiz_score,
    q.passed as quiz_passed,
    q.attempts as quiz_attempts
  from public.user_progress up
  left join public.module_quiz_results q
    on q.user_id = up.user_id and q.module_id = up.module_id
  where up.user_id = p_user_id
  order by up.last_accessed desc nulls last;
end;
$$;

grant execute on function public.admin_student_progress(uuid) to authenticated;
