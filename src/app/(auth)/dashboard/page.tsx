'use client';

import React from 'react';
import { DashboardSection } from '@components/dashboard/DashboardSection';
import { sectionConfig } from '@components/dashboard/sectionConfig';
import { getRangeBounds } from '@utils/date';
import { useAuth } from '@context/AuthContext';
import type { DashboardSectionType } from '@components/dashboard/DashboardSection';

type UserWithClientId = {
  client_id: string;
  [key: string]: any;
};

const DashboardPage = () => {
  const { user } = useAuth() as { user: UserWithClientId | null };

  type SectionInstance = {
    key: string;
    type: DashboardSectionType;
    overrides: Record<string, any>;
  };

  const sectionInstances: SectionInstance[] = [
    {
      key: 'client_visits_1',
      type: 'client_visits',
      overrides: { title: 'Client Visits', dateRange: getRangeBounds('this_week') },
    },
    {
      key: 'revenue_summary_1',
      type: 'revenue_summary',
      overrides: { title: 'Revenue Summary', dateRange: getRangeBounds('this_week') },
    },
    {
      key: 'recent_sales_1',
      type: 'recent_sales',
      overrides: { title: 'Recent Sales', dateRange: getRangeBounds('this_week') },
    },
    {
      key: 'top_selling_items_1',
      type: 'top_selling_items',
      overrides: { title: 'Best Sellers This Week', dateRange: getRangeBounds('this_week') },
    },
    {
      key: 'user_management_1',
      type: 'user_management',
      overrides: { title: 'Manage Users', dateRange: getRangeBounds('this_month') },
    },
  ];

  if (!user || !user.client_id) {
    return <div>Loading user info…</div>;
  }

  return (
    <div className="dashboard">
      {sectionInstances.map((instance) => (
        <DashboardSection
          key={instance.key}
          type={instance.type}
          accessLevel={sectionConfig[instance.type].accessLevel}
          overrides={instance.overrides}
          user={user}
        />
      ))}
    </div>
  );
};

export default DashboardPage;
