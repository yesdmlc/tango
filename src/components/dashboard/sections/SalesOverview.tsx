import React from 'react';

export default function SalesOverview({ data }) {
  if (!data || data.length === 0) return <p>No sales data available.</p>;

  const totalSales = data.reduce((sum, entry) => sum + (entry.amount || 0), 0);
  const recentSales = data.slice(0, 5); // Show top 5 recent sales

  return (
    <div>
      <h3>Sales Overview</h3>
      <p>Total Sales: ${totalSales.toFixed(2)}</p>
      <ul>
        {recentSales.map((sale, index) => (
          <li key={index}>
            {sale.item_name || 'Unnamed Item'} — ${sale.amount?.toFixed(2)} on {new Date(sale.created_at).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}