import React from 'react';
import '../../src/userManagement.css';

const mockUsers = [
  { id: 1, name: 'Yeray Rosales', email: 'name@email.com', status: 'Not Logged in', roles: ['Manager', 'Admin', 'Auditor'] },
  { id: 2, name: 'Lennert Nijenbijvank', email: 'name@email.com', status: '', roles: ['Manager', 'Admin'] },
  { id: 3, name: 'Tallah Cotton', email: 'name@email.com', status: '', roles: ['Admin', 'Auditor'] },
  { id: 4, name: 'Adaora Azubuike', email: 'name@email.com', status: 'Not Logged in', roles: ['Admin', 'Auditor'] },
  { id: 5, name: 'Antonin Hafer', email: 'name@email.com', status: '', roles: ['Manager'] },
  { id: 6, name: 'Sudanka Bakalowits', email: 'name@email.com', status: '', roles: ['Auditor'] },
  { id: 7, name: 'Lilah Ioselev', email: 'name@email.com', status: 'Not Logged in', roles: [] },
  { id: 8, name: 'Nawf El Azam', email: 'name@email.com', status: '', roles: ['Auditor'] },
];

const UserManagement: React.FC = () => {
  return (
    <div className="user-management">
      <header className="header">
        <h1>User Management</h1>
        <div className="actions">
          <input type="text" placeholder="Search User" className="search-bar" />
          <button className="add-user-btn">Add User</button>
        </div>
      </header>
      <table className="user-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>User Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="user-info">
                  <img
                    src={`https://via.placeholder.com/40`}
                    alt={user.name}
                    className="user-avatar"
                  />
                  <div>
                    <p className="user-name">{user.name}</p>
                    <p className="user-email">{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="user-roles">
                  {user.roles.map((role, index) => (
                    <span key={index} className={`role ${role.toLowerCase()}`}>
                      {role}
                    </span>
                  ))}
                </div>
              </td>
              <td>
                <button className="action-btn">Modify Roles</button>
                <button className="action-btn remove">Remove User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="pagination">
        <button>First</button>
        <button>10</button>
        <button className="active">11</button>
        <button>...</button>
        <button>26</button>
        <button>Last</button>
      </footer>
    </div>
  );
};

export default UserManagement;
