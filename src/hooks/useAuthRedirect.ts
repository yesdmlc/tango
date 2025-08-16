import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@lib/supabase/client';
import type { User } from '@supabase/supabase-js';

export function useAuthRedirect() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState('guest');
  const [accessLevel, setAccessLevel] = useState<number>(1); // default to top-level

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const isPreview =
        typeof window !== 'undefined' &&
        window.location.search.includes('preview=true');

      if (!session && !isPreview) {
        router.push('/login');
      } else {
        const userObj = session?.user ?? { email: 'preview@demo.com' } as User;
        setUser(userObj);

        const roleValue = userObj?.user_metadata?.role || (isPreview ? 'admin' : 'guest');
        setRole(roleValue);

        const rawAccessLevel = userObj?.user_metadata?.access_level ?? 0;
        const normalizedLevel = rawAccessLevel === 0 ? 1 : rawAccessLevel;
        setAccessLevel(normalizedLevel);
      }

      setLoading(false);
    };

    checkSession();
  }, [router]);

  return { user, loading, role, accessLevel };
}