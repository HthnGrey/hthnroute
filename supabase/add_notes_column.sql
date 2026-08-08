-- Run this standalone migration in Supabase Dashboard > SQL Editor.
-- It is safe to run even if the column has already been added.
alter table public.community_builds
add column if not exists notes text check (char_length(notes) <= 1000);
