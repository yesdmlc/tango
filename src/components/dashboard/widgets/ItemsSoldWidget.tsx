import React from 'react';

type Props = {
  title: string;
  data: any;
  onClick?: () => void;
};

export const ItemsSoldWidget = ({ title, data, onClick }: Props) => {
  if (!data || !data.total) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-gray-500">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white shadow-md rounded-lg p-6 hover:bg-gray-50 transition"
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-2xl font-bold">{data.total}</p>
    </div>
  );
};