/*
  # Fix RLS Security Policies

  1. Security Improvements
    - Drop existing overly permissive RLS policies
    - Implement role-based access control using auth.jwt()
    - Only users with 'admin' role can insert, update, or delete data
    - Public read access remains unchanged for campaign information
    
  2. Implementation
    - Check for 'admin' role in user's JWT app_metadata
    - Restrict all write operations to admin users only
    - Maintain public read access for transparency
    
  3. Notes
    - Campaign data is public (read-only for everyone)
    - Only authenticated admin users can modify data
    - This prevents unauthorized data manipulation while maintaining transparency
*/

-- Drop existing overly permissive policies for candidates
DROP POLICY IF EXISTS "Authenticated users can insert candidates" ON candidates;
DROP POLICY IF EXISTS "Authenticated users can update candidates" ON candidates;
DROP POLICY IF EXISTS "Authenticated users can delete candidates" ON candidates;

-- Drop existing overly permissive policies for voting_locations
DROP POLICY IF EXISTS "Authenticated users can insert voting locations" ON voting_locations;
DROP POLICY IF EXISTS "Authenticated users can update voting locations" ON voting_locations;
DROP POLICY IF EXISTS "Authenticated users can delete voting locations" ON voting_locations;

-- Drop existing overly permissive policies for early_voting_dates
DROP POLICY IF EXISTS "Authenticated users can insert early voting dates" ON early_voting_dates;
DROP POLICY IF EXISTS "Authenticated users can update early voting dates" ON early_voting_dates;
DROP POLICY IF EXISTS "Authenticated users can delete early voting dates" ON early_voting_dates;

-- Create new restrictive policies for candidates table
CREATE POLICY "Only admins can insert candidates"
  ON candidates FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Only admins can update candidates"
  ON candidates FOR UPDATE
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  )
  WITH CHECK (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Only admins can delete candidates"
  ON candidates FOR DELETE
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

-- Create new restrictive policies for voting_locations table
CREATE POLICY "Only admins can insert voting locations"
  ON voting_locations FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Only admins can update voting locations"
  ON voting_locations FOR UPDATE
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  )
  WITH CHECK (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Only admins can delete voting locations"
  ON voting_locations FOR DELETE
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

-- Create new restrictive policies for early_voting_dates table
CREATE POLICY "Only admins can insert early voting dates"
  ON early_voting_dates FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Only admins can update early voting dates"
  ON early_voting_dates FOR UPDATE
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  )
  WITH CHECK (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Only admins can delete early voting dates"
  ON early_voting_dates FOR DELETE
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );