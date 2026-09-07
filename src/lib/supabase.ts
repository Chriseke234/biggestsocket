import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface BookingInquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferred_date?: string;
  message: string;
  created_at?: string;
}
