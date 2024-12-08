import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/userManagement.css';
import SidebarComponent from '../components/sideBar';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'User',
  });

  // Fonction pour charger les utilisateurs depuis l'API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users/');
      setUsers(response.data);
    } catch (error) {
      console.error('Erreur lors du fetch des utilisateurs :', error);
    }
  };

  // Appel initial pour charger les utilisateurs
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addUser = async () => {
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      alert('All fields are required!');
      return;
    }

    const newUser = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
      role: form.role,
    };

    try {
      await axios.post('http://localhost:3000/users/', newUser);
      alert('Utilisateur ajouté avec succès !');
      setForm({ firstName: '', lastName: '', email: '', password: '', role: 'User' });
      fetchUsers(); // Rafraîchir les utilisateurs
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      alert('Utilisateur supprimé avec succès !');
      fetchUsers(); // Rafraîchir les utilisateurs
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    }
  };

  return (
    <div className="user-management">
      <SidebarComponent />
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
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span>
              </td>
              <td>
                <button className="action-btn remove" onClick={() => deleteUser(user._id)}>
                  Remove User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
