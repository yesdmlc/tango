// @components/user_management/UserManagementComponent.tsx

import React from 'react';

type UserEntry = {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
};

type Props = {
  data: UserEntry[];
};

export default function UserManagementComponent({ data }: Props) {
  return (
    <div className="space-y-4">
      {data.map((user) => (
        <div
          key={user.id}
          className="border rounded p-4 shadow-sm bg-white hover:shadow-md transition"
        >
          <h4 className="text-lg font-semibold">{user.name}</h4>
          <p className="text-sm text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500">Role: {user.role}</p>
          <p className="text-xs text-gray-400">Joined: {new Date(user.created_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
