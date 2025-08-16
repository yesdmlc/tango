import React from 'react';

type Props = {
  title?: string;
  clientId: string;
  dateRange?: 'this_week' | 'this_month';
};

const TopSellingItemsSection: React.FC<Props> = ({ title = 'Top-Selling Items', clientId, dateRange = 'this_week' }) => {
  // TODO: Fetch and display top-selling items for the given clientId and dateRange

  return (
    <div className="section-card">
      <h2>{title}</h2>
      <p>Coming soon: Top-selling items for {dateRange}.</p>
    </div>
  );
};

export default TopSellingItemsSection;
