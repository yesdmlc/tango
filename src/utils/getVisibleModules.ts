import { supabase } from '../lib/supabase/client';

export async function getVisibleModules(userId: string): Promise<string[]> {
  const { data, error } = await supabase
    .from('dashboard')
    .select('module')
    .eq('user_id', userId);

  if (error) {
    console.error('getVisibleModules error:', error);
    return [];
  }

  return (data ?? []).map((row: any) => row.module as string);
}