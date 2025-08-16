import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@lib/supabase/client';
import type { User } from '@supabase/supabase-js';

type AuthContextType = {
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error('Error fetching auth user:', error);
        setUser(null);
      } else {
        setUser(user);
      }

      setLoading(false);
    };

    getUser();
  }, []);

  // 🔄 Sync user to custom users table
  useEffect(() => {
    const syncUser = async () => {
      if (!user) return;

      const { data: existingUser, error } = await supabase
        .from('users')
        .select('id')
        .eq('id', user.id)
        .single();

      if (!existingUser && !error) {
        await supabase.from('users').insert({
          id: user.id,
          email: user.email,
          first_name: user.user_metadata?.first_name || '',
          last_name: user.user_metadata?.last_name || '',
          access_level: 3
        });
      }
    };

    syncUser();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
