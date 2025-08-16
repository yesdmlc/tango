'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo + Section Links */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-lg font-semibold text-gray-900">
              Tango
            </Link>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>

          {/* Right side Buttons */}
          <div>
            <Link
              href="/login"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              href="/admin/users"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              User Management
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}