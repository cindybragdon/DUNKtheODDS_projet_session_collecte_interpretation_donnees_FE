import React, { useState } from 'react';
import '../../src/userManagement.css';

const mockUsers = [
  { id: 1, firstName: 'Yeray', lastName: 'Rosales', email: 'yeray@email.com', role: 'Admin' },
  { id: 2, firstName: 'Lennert', lastName: 'Nijenbijvank', email: 'lennert@email.com', role: 'User' },
  { id: 3, firstName: 'Tallah', lastName: 'Cotton', email: 'tallah@email.com', role: 'Admin' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'User',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addUser = () => {
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      alert('All fields are required!');
      return;
    }
    const newUser = {
      id: users.length + 1,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      role: form.role,
    };
    setUsers([...users, newUser]);
    setForm({ firstName: '', lastName: '', email: '', password: '', role: 'User' });
  };

  return (
    <div className="user-management">
      <header className="header">
        <h1>User Management</h1>
        <div className="actions">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
          />
          <select name="role" value={form.role} onChange={handleInputChange}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          <button className="add-user-btn" onClick={addUser}>
            Add User
          </button>
        </div>
      </header>
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span>
              </td>
              <td>
                <button className="action-btn edit">Modify Roles</button>
                <button className="action-btn remove">Remove User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
