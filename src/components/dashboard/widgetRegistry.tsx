import { VisitorCountWidget } from './widgets/VisitorCountWidget';
import { ItemsSoldWidget } from './widgets/ItemsSoldWidget';
import { SalesChartWidget } from './widgets/SalesChartWidget';

interface Props {
  type: string;
  title: string;
  data: any;
  onClick?: () => void;
}

export const widgetRegistry: Record<string, React.FC<Props>> = {
  items_sold: ItemsSoldWidget,
  visitor_count: VisitorCountWidget,
  sales_chart: (props) => {
    return (
      <div>Sales Chart Placeholder</div>
    );
  },
  // Add more widgets here
};
