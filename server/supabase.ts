import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ CRITICAL ERROR: Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment variables');
  // We don't throw here to avoid crashing the whole function initialization, 
  // but subsequent DB calls will fail.
}

const finalUrl = supabaseUrl || 'https://placeholder.supabase.co';
const finalKey = supabaseServiceKey || 'placeholder';

export const supabase = createClient(finalUrl, finalKey);
