import React from 'react';

import { useAuth } from '@context/AuthContext';

export const UserListTable = ({ onEdit }: { onEdit: (user: any) => void }) => {
  const auth = useAuth() as any;
  const users = (auth?.users ?? []) as any[];

  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Login ID</th>
          <th>Access Level</th>
          <th>Status</th>
          <th>Last Sign-In</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.login_id}</td>
            <td>{user.access_level}</td>
            <td>{user.is_active ? 'Active' : 'Disabled'}</td>
            <td>{user.last_sign_in_at || '—'}</td>
            <td>
              <button onClick={() => onEdit(user)}>Edit</button>
              {/* You could add Disable/Remove buttons here */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
