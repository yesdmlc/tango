import React from 'react';

type Props = {
  title: string;
  type: string;
  onClick?: () => void;
};

export const FallbackWidget = ({ title, type, onClick }: Props) => (
  <div
    onClick={onClick}
    className="cursor-pointer bg-gray-200 rounded-lg p-6 hover:bg-gray-300 transition"
  >
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-sm text-gray-600">No widget found for type: {type}</p>
  </div>
);