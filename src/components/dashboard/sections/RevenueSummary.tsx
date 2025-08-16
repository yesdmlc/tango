import React from 'react';

export default function RevenueSummary({ data }) {
  if (!data || data.length === 0) return <p>No revenue data available.</p>;

  const totalRevenue = data.reduce((sum, entry) => sum + (entry.revenue || 0), 0);
  const dailyBreakdown = data.slice(0, 7); // Show last 7 days

  return (
    <div>
      <h3>Revenue Summary</h3>
      <p>Total Revenue: ${totalRevenue.toFixed(2)}</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {dailyBreakdown.map((entry, index) => (
            <tr key={index}>
              <td>{new Date(entry.created_at).toLocaleDateString()}</td>
              <td>${entry.revenue?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}