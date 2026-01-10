-- Fix RLS policies for profiles table
-- Run this in Supabase SQL Editor

-- First, check if RLS is enabled
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public' AND tablename = 'profiles';

-- Drop existing policies (if any) and recreate
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Enable read access for users to own profile" ON profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON profiles;
DROP POLICY IF EXISTS "profiles_select_own" ON profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON profiles;

-- Create simple, non-circular policies
-- Allow users to SELECT their own profile
CREATE POLICY "profiles_select_own" ON profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Allow users to UPDATE their own profile
CREATE POLICY "profiles_update_own" ON profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Allow authenticated users to INSERT their own profile
CREATE POLICY "profiles_insert_own" ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Verify policies are created
SELECT policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'profiles';
