-- Run once in Supabase Dashboard > SQL Editor.
-- Deletes only the identified test community build.
delete from public.community_builds
where id = 'd3e5ed42-f4f0-4f4b-9cc3-b37078bec142'
  and name = 'test'
  and author_name = 'test';
