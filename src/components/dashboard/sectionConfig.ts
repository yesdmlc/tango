import SalesOverview from './sections/SalesOverview';
import ClientVisits from './sections/ClientVisits';
import RevenueSummary from './sections/RevenueSummary';
import TopSellingItemsSection from './sections/TopSellingItemsSection';
import UserManagementComponent from '@components/user_management/UserManagementComponent';

export const sectionConfig = {
  client_visits: {
    entryType: 'visits',
    subType: 'recent',
    tags: ['in_store'],
    accessLevel: 2,
    component: ClientVisits,
  },
  revenue_summary: {
    entryType: 'revenue',
    subType: 'daily',
    accessLevel: 1,
    component: RevenueSummary,
  },
  recent_sales: {
    entryType: 'sales',
    subType: 'recent',
    tags: ['completed'],
    accessLevel: 2,
    component: SalesOverview,
  },
  top_selling_items: {
    entryType: 'sales',
    subType: 'top',
    tags: ['completed'],
    accessLevel: 2,
    component: TopSellingItemsSection,
  },
  user_management: {
    component: UserManagementComponent,
    accessLevel: 3,
    defaults: {
      title: "User Management",
      entryType: "user",
    }
  }
};
