'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@lib/supabase/client';
import { sectionConfig } from '@components/dashboard/sectionConfig';
import { DateRange, getRangeBounds } from '@utils/date';
import { useAuth } from '@context/AuthContext';

type SectionInstanceOverrides = {
  title?: string;
  entryType?: string;
  subType?: string;
  tags?: string[];
  limit?: number;
  dateRange?: DateRange;
  children?: React.ReactNode;
};

export type DashboardSectionProps = {
  type: keyof typeof sectionConfig;
  accessLevel?: number;
  overrides?: SectionInstanceOverrides;
};

export function DashboardSection({ type, accessLevel = 3, overrides }: DashboardSectionProps) {
  const def = sectionConfig[type];
  if (!def) return null;

  if (accessLevel > def.accessLevel) return null;

  const { user, loading: authLoading } = useAuth();
  if (authLoading || !user) return null;

  const { client_id } = user;
  if (!client_id) return null;

  const merged = {
    ...def.defaults,
    ...overrides,
  };

  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);

      let query = supabase
        .from('entries')
        .select('*')
        .eq('client_id', client_id)
        .eq('entry_type', merged.entryType);

      if (merged.subType) query = query.eq('sub_type', merged.subType);
      if (merged.tags?.length) query = query.contains('tags', merged.tags);

      const { start, end } = getRangeBounds(merged.dateRange);
      query = query
        .gte('created_at', start.toISOString())
        .lte('created_at', end.toISOString())
        .order('created_at', { ascending: false });

      if (typeof merged.limit === 'number') {
        query = query.limit(merged.limit);
      }

      const { data, error } = await query;

      if (!isMounted) return;
      if (error) {
        console.error(`[DashboardSection:${type}] fetch error`, error);
        setData([]);
      } else {
        setData(data ?? []);
      }
      setLoading(false);
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [type, client_id, merged.entryType, merged.subType, JSON.stringify(merged.tags), merged.limit, merged.dateRange]);

  const SectionComponent = def.component;

  if (loading) {
    return (
      <div className="bg-white shadow rounded p-4 mb-6">
        <h3 className="text-base font-semibold mb-2">{merged.title}</h3>
        <div className="text-gray-400">Loading…</div>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="bg-white shadow rounded p-4 mb-6">
        <h3 className="text-base font-semibold mb-2">{merged.title}</h3>
        <div className="text-gray-500">No data available.</div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded p-4 mb-6">
      <h3 className="text-base font-semibold mb-3">{merged.title}</h3>
      <SectionComponent data={data} />
    </div>
  );
}

export default DashboardSection;