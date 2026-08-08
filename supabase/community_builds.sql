-- Run this once in Supabase Dashboard > SQL Editor.
create table if not exists public.community_builds (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 3 and 60),
  author_name text not null check (char_length(author_name) between 2 and 32),
  relics jsonb not null default '[]'::jsonb,
  blessings jsonb not null default '[]'::jsonb,
  regions jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

-- Safe to run after the initial setup too.
alter table public.community_builds
add column if not exists gear jsonb not null default '{}'::jsonb;

alter table public.community_builds
add column if not exists notes text check (char_length(notes) <= 1000);

alter table public.community_builds enable row level security;

create policy "Anyone can view community builds"
on public.community_builds for select
to anon, authenticated
using (true);

create policy "Anyone can publish a valid community build"
on public.community_builds for insert
to anon, authenticated
with check (
  char_length(name) between 3 and 60
  and char_length(author_name) between 2 and 32
  and jsonb_typeof(relics) = 'array'
  and jsonb_typeof(blessings) = 'array'
  and jsonb_typeof(regions) = 'array'
);
