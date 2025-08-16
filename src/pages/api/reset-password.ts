import { supabaseServer } from '@lib/supabase/server';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  const { error } = await supabaseServer.auth.resetPasswordForEmail(email, {
  redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/update-password`,
});

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Password reset email sent.' });
}
