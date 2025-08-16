import React from 'react';

type Props = {
  title: string;
  data?: { total?: number };
  onClick?: () => void;
};

export const VisitorCountWidget = ({ title, data, onClick }: Props) => {
  const hasValidData = data && typeof data.total === 'number';

  return (
    <div
      className="p-4 border rounded shadow-sm hover:shadow-md cursor-pointer bg-white transition"
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {hasValidData ? (
        <p className="text-2xl font-bold">{data.total} Visitors</p>
      ) : (
        <p className="text-gray-500">No visitor data available</p>
      )}
    </div>
  );
};