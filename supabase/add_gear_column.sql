-- Run this in Supabase Dashboard > SQL Editor.
-- Safe to run repeatedly.
alter table public.community_builds
add column if not exists gear jsonb not null default '{}'::jsonb;
