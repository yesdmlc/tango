import { supabase } from '@lib/supabase/client';


export async function fetchUsers() {
  const { data, error } = await supabase
    .from('users')
    .select('id, email, login_id, access_level, is_active, invited_at, confirmed_at, last_sign_in_at')
    .eq('deleted_at', null);

  if (error) throw error;
  return data;
}

export async function addUser(userData) {
  const { data, error } = await supabase
    .from('users')
    .insert([userData]);

  if (error) throw error;
  return data;
}

export async function updateUser(userId, updates) {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId);

  if (error) throw error;
  return data;
}

export async function disableUser(userId) {
  const { data, error } = await supabase
    .from('users')
    .update({ is_active: false })
    .eq('id', userId);

  if (error) throw error;
  return data;
}

export async function removeUser(userId) {
  const { data, error } = await supabase
    .from('users')
    .update({ deleted_at: new Date().toISOString() })
    .eq('id', userId);

  if (error) throw error;
  return data;
}

