import { supabase } from '@lib/supabase/client';

export async function loginUser(
  loginId: string,
  loginType: 'email' | 'phone' | 'username' | 'staff_id',
  password: string
) {
  switch (loginType) {
    case 'email':
      return await supabase.auth.signInWithPassword({ email: loginId, password });

    case 'phone':
      return await supabase.auth.signInWithPassword({ phone: loginId, password });

    case 'username':
    case 'staff_id':
      return await fetch('/api/custom-login', {
        method: 'POST',
        body: JSON.stringify({ loginId, loginType, password }),
        headers: { 'Content-Type': 'application/json' },
      });

    default:
      throw new Error('Unsupported login type');
  }
}