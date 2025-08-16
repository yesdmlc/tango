import React from 'react';

export default function ClientVisits({ data }) {
  if (!data || data.length === 0) return <p>No client visits recorded.</p>;

  const recentVisits = data.slice(0, 5); // Show top 5 recent visits

  return (
    <div>
      <h3>Recent Client Visits</h3>
      <ul>
        {recentVisits.map((visit, index) => (
          <li key={index}>
            {visit.client_name || 'Unknown Client'} visited on {new Date(visit.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}