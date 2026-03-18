/*
  # Campaign Website Database Schema

  1. New Tables
    - `candidates`
      - `id` (uuid, primary key)
      - `name` (text) - Candidate's full name
      - `bio` (text) - Candidate biography
      - `image_url` (text) - URL to candidate photo
      - `platform` (text) - Campaign platform/key issues
      - `order` (integer) - Display order on the page
      - `created_at` (timestamptz)
    
    - `voting_locations`
      - `id` (uuid, primary key)
      - `name` (text) - Location name (e.g., "Semmes", "Lions")
      - `address` (text) - Full street address
      - `city` (text) - City name
      - `hours` (text) - Operating hours
      - `created_at` (timestamptz)
    
    - `early_voting_dates`
      - `id` (uuid, primary key)
      - `date` (date) - Voting date
      - `start_time` (time) - Start time
      - `end_time` (time) - End time
      - `notes` (text) - Additional information
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (campaign info is public)
    - Restrict write access to authenticated users only

  3. Notes
    - All campaign information is publicly readable
    - Only authenticated users can modify data
    - Default values ensure data integrity
*/

-- Create candidates table
CREATE TABLE IF NOT EXISTS candidates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text DEFAULT '',
  image_url text DEFAULT '',
  platform text DEFAULT '',
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create voting_locations table
CREATE TABLE IF NOT EXISTS voting_locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  city text DEFAULT '',
  hours text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create early_voting_dates table
CREATE TABLE IF NOT EXISTS early_voting_dates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  start_time time,
  end_time time,
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE voting_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE early_voting_dates ENABLE ROW LEVEL SECURITY;

-- Policies for candidates table
CREATE POLICY "Anyone can view candidates"
  ON candidates FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert candidates"
  ON candidates FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update candidates"
  ON candidates FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete candidates"
  ON candidates FOR DELETE
  TO authenticated
  USING (true);

-- Policies for voting_locations table
CREATE POLICY "Anyone can view voting locations"
  ON voting_locations FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert voting locations"
  ON voting_locations FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update voting locations"
  ON voting_locations FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete voting locations"
  ON voting_locations FOR DELETE
  TO authenticated
  USING (true);

-- Policies for early_voting_dates table
CREATE POLICY "Anyone can view early voting dates"
  ON early_voting_dates FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert early voting dates"
  ON early_voting_dates FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update early voting dates"
  ON early_voting_dates FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete early voting dates"
  ON early_voting_dates FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample candidates
INSERT INTO candidates (name, bio, platform, "order")
VALUES 
  ('Yolanda Huff', 'Dedicated community leader with 15 years of public service experience.', 'Education reform, community safety, and economic development.', 1),
  ('Stephanie Boyd', 'Small business owner and advocate for local families.', 'Supporting small businesses, affordable healthcare, and environmental protection.', 2),
  ('Grace Uzomba', 'Former educator committed to positive change.', 'Quality education, infrastructure improvements, and transparent governance.', 3);

-- Insert sample voting locations
INSERT INTO voting_locations (name, address, city, hours)
VALUES 
  ('Semmes Community Center', '123 Main Street', 'Semmes', '7:00 AM - 7:00 PM'),
  ('Lions Recreation Center', '456 Oak Avenue', 'Lions', '7:00 AM - 7:00 PM');

-- Insert sample early voting dates
INSERT INTO early_voting_dates (date, start_time, end_time, notes)
VALUES 
  ('2026-10-20', '08:00', '17:00', 'First day of early voting'),
  ('2026-10-21', '08:00', '17:00', ''),
  ('2026-10-22', '08:00', '17:00', ''),
  ('2026-10-23', '08:00', '17:00', ''),
  ('2026-10-24', '08:00', '17:00', ''),
  ('2026-10-27', '08:00', '17:00', ''),
  ('2026-10-28', '08:00', '17:00', ''),
  ('2026-10-29', '08:00', '17:00', ''),
  ('2026-10-30', '08:00', '17:00', 'Last day of early voting');