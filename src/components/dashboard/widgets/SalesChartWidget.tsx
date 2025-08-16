import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface SalesChartWidgetProps {
  title: string;
  data: any[];
  onClick?: () => void;
}

export const SalesChartWidget: React.FC<SalesChartWidgetProps> = ({ title, data, onClick }) => {
  const hasValidData = Array.isArray(data) && data.length > 0;

  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-50 transition"
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      {hasValidData ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="text-gray-500 text-center py-12">No sales data available</div>
      )}
    </div>
  );
};