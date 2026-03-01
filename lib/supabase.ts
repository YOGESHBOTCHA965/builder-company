// supabase.ts — server-side only; never import this in client components
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
// Use the service-role key (SUPABASE_SERVICE_ROLE_KEY) for server operations.
// Never expose this key to the browser — it bypasses Row-Level Security.
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    'Missing Supabase environment variables: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    // Disable automatic session persistence — this is a server-side client
    persistSession: false,
    autoRefreshToken: false,
  },
});
