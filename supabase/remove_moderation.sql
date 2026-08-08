-- Run only if you previously ran community_moderation.sql or admin_access.sql.
-- This removes the report/review and admin-moderation database objects.

drop trigger if exists block_flagged_build_content on public.community_builds;
drop trigger if exists queue_reported_community_build on public.community_build_reports;
drop function if exists public.block_flagged_build_content();
drop function if exists public.queue_reported_community_build();
drop function if exists public.is_community_build_moderator();

drop policy if exists "Moderators can manage community builds" on public.community_builds;
drop policy if exists "Anyone can view published community builds" on public.community_builds;
drop policy if exists "Anyone can view community builds" on public.community_builds;
create policy "Anyone can view community builds"
on public.community_builds for select
to anon, authenticated
using (true);

drop table if exists public.community_build_reports;
drop table if exists public.community_build_moderators;

alter table public.community_builds
  drop column if exists moderation_status,
  drop column if exists moderation_note,
  drop column if exists reviewed_at;
