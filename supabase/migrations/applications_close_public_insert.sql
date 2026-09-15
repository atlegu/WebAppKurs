-- Søknadsskjemaet er fjernet fra appen, så ingen skal lenger kunne sette inn
-- rader i public.applications via API-et. Fjerner de to åpne INSERT-policyene
-- (WITH CHECK (true)) og trekker tilbake INSERT-rettigheten for anon og
-- authenticated. Admin leser/oppdaterer fortsatt via is_admin()-policyene, og
-- Edge Function invite-user bruker service_role (upåvirket).
--
-- Bakgrunn: Supabase security advisor flagget policyen
-- «Anyone can submit application» (INSERT, WITH CHECK (true)).
-- Anvendt i produksjon 2026-09-15 via Supabase MCP (apply_migration).

drop policy if exists "Anyone can submit application" on public.applications;
drop policy if exists "Anyone can submit applications" on public.applications;
revoke insert on table public.applications from anon, authenticated;
