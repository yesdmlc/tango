import { supabase } from '@lib/supabase/client';

export const fetchExtendedUser = async (authUserId: string) => {
  const { data, error } = await supabase
    .from('users') // your custom table
    .select('*')
    .eq('auth_id', authUserId) // adjust if your linking column is named differently
    .single();

  if (error) {
    console.error('Error fetching extended user:', error);
    return null;
  }

  return data;
};
