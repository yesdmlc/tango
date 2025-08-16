import React, { lazy, Suspense } from 'react';

// Fix lazy imports to wrap named exports as default for React.lazy
const ItemsSold = lazy(() =>
  import('./ItemsSoldWidget').then(m => ({ default: m.ItemsSoldWidget }))
);
const VisitorCount = lazy(() =>
  import('./VisitorCountWidget').then(m => ({ default: m.VisitorCountWidget }))
);
const SalesChart = lazy(() =>
  import('./SalesChartWidget').then(m => ({ default: m.SalesChartWidget }))
);
const UnknownWidget = lazy(() =>
  import('./FallbackWidget').then(m => ({ default: m.FallbackWidget }))
);

// Ensure consistent props typing for all widgets
export interface WidgetProps {
  type: string;
  title: string;
  data: any;
  onClick?: () => void;
}

// Main widget renderer component
export default function Widget(props: WidgetProps) {
  const { type, title, data, onClick } = props;

  return (
    <Suspense fallback={<div className="p-4 text-gray-400">Loading widget...</div>}>
      {(() => {
        switch (type) {
          case 'items_sold':
            return <ItemsSold title={title} data={data} onClick={onClick} />;
          case 'visitor_count':
            return <VisitorCount title={title} data={data} onClick={onClick} />;
          case 'sales_chart':
            return <SalesChart title={title} data={data} onClick={onClick} />;
          default:
            return <UnknownWidget title={title} type={type} onClick={onClick} />;
        }
      })()}
    </Suspense>
  );
}