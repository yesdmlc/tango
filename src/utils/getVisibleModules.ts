import { supabase } from '../lib/supabase/client';

type DashboardModule = {
  module_key: string;
};

export async function getVisibleModules(userId: string): Promise<string[]> {
  const { data, error } = await supabase
    .from<any, any>('dashboard_modules')
    .select('module_key')
    .eq('user_id', userId);

  if (error) throw error;
  return data?.map(mod => mod.module_key) ?? [];
}