'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@lib/supabase/client';

type VisitorLog = {
  id: number;
  created_at: string;
  user_id: string;
  client_id: string;
  entry_type: string;
};

export default function VisitorCountPage() {
  const [visitors, setVisitors] = useState<VisitorLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      const { data, error } = await supabase
        .from('entries')
        .select('id, created_at, user_id, client_id, entry_type') // ✅ updated
        .eq('entry_type', 'visitor')
        .order('created_at', { ascending: false }) // ✅ updated timestamp reference
        .limit(50);

      if (error) {
        console.error('Error fetching visitors:', JSON.stringify(error, null, 2));
      } else {
        setVisitors(data ?? []);
      }

      setLoading(false);
    };

    fetchVisitors(); // ✅ this line was missing
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Visitor Count</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Timestamp</th>
              <th className="border p-2 text-left">User</th>
              <th className="border p-2 text-left">Client</th>
              <th className="border p-2 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor) => (
              <tr key={visitor.id}>
                <td className="border p-2">{new Date(visitor.created_at).toLocaleString()}</td>
                <td className="border p-2">{visitor.user_id}</td>
                <td className="border p-2">{visitor.client_id}</td>
                <td className="border p-2">{visitor.entry_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}