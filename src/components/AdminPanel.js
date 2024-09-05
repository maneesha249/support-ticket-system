import React from 'react';

const AdminPanel = () => {
  return (
    <main>
      <h2>Admin Panel</h2>
      <section>
        <h3>System Statistics</h3>
        <p>Total Tickets: 0</p>
        <p>Average Response Time: 0 minutes</p>
      </section>
      <section>
        <h3>User Management</h3>
        <button>Add New Agent</button>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Render user list here */}
          </tbody>
        </table>
      </section>
      <section>
        <h3>Configuration Settings</h3>
        {/* Settings form */}
      </section>
    </main>
  );
};

export default AdminPanel;
