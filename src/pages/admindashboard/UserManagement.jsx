import React, { useEffect, useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://mental-health-api-ur3r.onrender.com/admin/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleSuspend = async (userId) => {
    try {
      await fetch(`https://mental-health-api-ur3r.onrender.com/admin/users/${userId}/suspend`, {
        method: 'PUT',
      });
      setUsers(users.map(user => user.id === userId ? { ...user, status: 'suspended' } : user));
    } catch (error) {
      console.error('Error suspending user:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await fetch(`https://mental-health-api-ur3r.onrender.com/admin/users/${userId}`, {
        method: 'DELETE',
      });
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Email</th>
            <th className="border-b p-2">Status</th>
            <th className="border-b p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.status}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => handleSuspend(user.id)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                  disabled={user.status === 'suspended'}
                >
                  Suspend
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default UserManagement