'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@lib/auth/loginUser';
import { supabase } from '@lib/supabase/client';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await loginUser(email, 'email', password); // 👈 Use your utility

    if ('error' in result && result.error) {
      setError(result.error.message);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>

        <div className="mt-4 text-center">
          <p
            className="mt-4 text-center text-sm text-blue-600 cursor-pointer"
            onClick={() => supabase.auth.resetPasswordForEmail('')}
          >
            <Link href="/reset-password" className="text-blue-600 underline hover:text-blue-800 text-sm">
              Forgot your password?
            </Link>
          </p>

        </div>


        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-600 underline hover:text-blue-800">
            Go to Homepage
          </Link>

        </div>
      </div>
    </div>
  );
}