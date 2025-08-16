// pages/reset-password.tsx
import { useState } from 'react';
import { supabase } from '@lib/supabase/client';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendResetEmail = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Password reset email sent!');
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
      <button onClick={sendResetEmail} className="bg-blue-500 text-white px-4 py-2 rounded">
        Send Reset Email
      </button>
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
