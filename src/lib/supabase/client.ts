import { createClient } from '@supabase/supabase-js';

// Read without non-null assertions to avoid build-time throws
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Use undefined on the server and localStorage in the browser
const storage = typeof window !== 'undefined' ? window.localStorage : undefined;

// Export a client only if env vars exist; otherwise export a safe proxy that errors at runtime
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          storage,
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      })
    : (new Proxy(
        {},
        {
          get() {
            throw new Error(
              'Supabase env vars missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
            );
          },
        }
      ) as any);