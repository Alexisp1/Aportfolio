import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Candidate {
  id: string;
  name: string;
  bio: string;
  image_url: string;
  platform: string;
  order: number;
  created_at: string;
}

export interface VotingLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: string;
  created_at: string;
}

export interface EarlyVotingDate {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  notes: string;
  created_at: string;
}
