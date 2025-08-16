'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@lib/supabase/client';
import type { User } from '@supabase/supabase-js';
import { Dashboard } from '@components/dashboard/Dashboard';
import { useAuthRedirect } from '../../../hooks/useAuthRedirect';

// Sample config and data
const sampleConfig = [
  { type: 'items_sold', title: 'Items Sold' },
  { type: 'visitor_count', title: 'Visitor Count' },
  { type: 'unknown_widget', title: 'Mystery Widget' }, // 👈 This will trigger the fallback
];

const sampleData = {
  items_sold: { total: 120 },
  visitor_count: { total: 450 },
  unknown_widget: {},
};

export default function DashboardPage() {
  const { user, loading, role } = useAuthRedirect();
  const router = useRouter();

  if (loading) return <div>Loading...</div>;

  // 🔐 Role-based access control
  if (role === 'guest') {
    return <div>Access denied. Please contact your administrator.</div>;
  }

  // 🧩 Role-based widget filtering
  const roleModules: Record<string, string[]> = {
    admin: ['items_sold', 'visitor_count', 'unknown_widget'],
    staff: ['items_sold', 'visitor_count'],
    guest: [],
  };

  const filteredConfig = sampleConfig.filter(widget =>
    roleModules[role]?.includes(widget.type)
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6 text-gray-600">Welcome, {user?.email} ({role})</p>
      <Dashboard widgets={filteredConfig} data={sampleData} />
    </div>
  );
}