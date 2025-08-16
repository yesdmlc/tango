import React, { lazy, Suspense } from 'react';

const ItemsSold = lazy(() => import('./ItemsSold'));
const VisitorCount = lazy(() => import('./VisitorCount'));
const SalesChart = lazy(() => import('./SalesChart'));
const UnknownWidget = lazy(() => import('./UnknownWidget'));

interface WidgetProps {
  type: string;
  data: any;
  onClick?: () => void;
}

export default function Widget({ type, data, onClick }: WidgetProps) {
  const renderWidget = () => {
    switch (type) {
      case 'items_sold':
        return <ItemsSold data={data} onClick={onClick} />;
      case 'visitor_count':
        return <VisitorCount data={data} onClick={onClick} />;
      case 'sales_chart':
        return <SalesChart data={data} onClick={onClick} />;
      default:
        return <UnknownWidget message={data?.message ?? 'Unsupported widget'} />;
    }
  };

  return (
    <Suspense fallback={<div className="p-4 text-gray-400">Loading widget...</div>}>
      {renderWidget()}
    </Suspense>
  );
}