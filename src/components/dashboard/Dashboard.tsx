import React from 'react';
import { widgetRegistry } from './widgetRegistry';
import { FallbackWidget } from './widgets/FallbackWidget';

interface DashboardProps {
  widgets: Array<{
    type: string;
    title: string;
  }>;
  data: { [key: string]: any };
  onWidgetClick?: (type: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ widgets, data, onWidgetClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {widgets.map(widget => {
        const isChart = widget.type === 'sales_chart';
        const WidgetComponent = widgetRegistry[widget.type] || FallbackWidget;

        console.log('Widget type:', widget.type);
        console.log('Resolved component:', WidgetComponent);

        if (WidgetComponent === FallbackWidget) {
          console.warn(`Missing widget for type: ${widget.type}`);
        }

        return (
          <div
            key={widget.type}
            className={`p-4 border rounded shadow-sm cursor-pointer ${isChart ? 'lg:col-span-2' : ''}`}
          >
            <WidgetComponent
              type={widget.type}
              title={widget.title}
              data={data[widget.type]}
              onClick={() => onWidgetClick?.(widget.type)}
            />
          </div>
        );
      })}
    </div>
  );
};