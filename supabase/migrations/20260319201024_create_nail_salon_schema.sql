/*
  # Create Nail Salon Database Schema

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `name` (text) - Service name
      - `description` (text) - Service description
      - `price` (text) - Service price
      - `duration` (text) - Service duration
      - `category` (text) - Service category (Manicure, Pedicure, Nail Art, etc.)
      - `created_at` (timestamp)

    - `bookings`
      - `id` (uuid, primary key)
      - `customer_name` (text) - Customer full name
      - `customer_email` (text) - Customer email
      - `customer_phone` (text) - Customer phone
      - `service_id` (uuid, foreign key) - Reference to services
      - `appointment_date` (date) - Appointment date
      - `appointment_time` (time) - Appointment time
      - `notes` (text) - Special requests
      - `status` (text) - Booking status (pending, confirmed, completed, cancelled)
      - `created_at` (timestamp)

    - `gallery`
      - `id` (uuid, primary key)
      - `image_url` (text) - Image URL
      - `title` (text) - Image title
      - `description` (text) - Image description
      - `created_at` (timestamp)

    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Sender name
      - `email` (text) - Sender email
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to services and gallery
    - Add policies for public insert access to bookings and contact messages
*/

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price text NOT NULL,
  duration text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  service_id uuid REFERENCES services(id),
  appointment_date date NOT NULL,
  appointment_time time NOT NULL,
  notes text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  title text NOT NULL,
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view gallery"
  ON gallery FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can send contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
