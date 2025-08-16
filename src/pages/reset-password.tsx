// pages/reset-password.tsx
import { useState } from 'react';
import { supabase } from '@lib/supabase/client';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const sendResetEmail = async () => {
    if (!email) {
      setMessage('Please enter your email.');
      return;
    }

    setSubmitting(true);
    setMessage('');
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/reset-password` : undefined,
      });
      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('Password reset email sent!');
      }
    } catch (e: any) {
      setMessage(`Error: ${e?.message || 'Unexpected error'}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        type="button"
        onClick={sendResetEmail}
        disabled={submitting}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Reset'}
      </button>
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
