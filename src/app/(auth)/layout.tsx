// src/app/(auth)/layout.tsx
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Tango</h1>
        <nav className="space-x-4">
          <Link href="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
          <Link href="/profile" className="text-blue-600 hover:underline">Profile</Link>
          <Link href="/login" className="text-red-600 hover:underline">Logout</Link>
        </nav>
      </header>
      <main className="p-8">{children}</main>
    </div>
  );
}