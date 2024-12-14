import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../src/userManagement.css';
import SidebarComponent from '../components/sideBar';
import { deleteUser, getAllUsers, updateUser, signin } from '../lib/axios';

const UserManagement = () => {
  const [users, setUsers] = useState<any>([{}]);
  const [editableUserId, setEditableUserId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'User',
  });
  const [newUserForm, setNewUserForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'User',
  });

  useEffect(() => {
    const fetchData = async () => {
      const users = await getAllUsers();
      setUsers(users);
    };
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (editableUserId) {
      setEditForm({ ...editForm, [name]: value });
    } else {
      setNewUserForm({ ...newUserForm, [name]: value });
    }
  };

  const handleAddUser = async () => {
    if (!newUserForm.username || !newUserForm.email || !newUserForm.password) {
      toast.error('Tous les champs sont requis !');
      return;
    }

    const newUser = {
      username: newUserForm.username,
      email: newUserForm.email,
      password: newUserForm.password,
      role: newUserForm.role,
    };

    try {
      const addedUser = await signin(newUser); 
      setUsers([...users, addedUser]); 
      setNewUserForm({
        username: '',
        email: '',
        password: '',
        role: 'User',
      });
      toast.success('Utilisateur ajouté avec succès !');
    } catch (error) {
      toast.error('Erreur lors de l\'ajout de l\'utilisateur.');
      console.error(error);
    }
  };

  const handleEditClick = (user: any) => {
    setEditableUserId(user._id);
    setEditForm({
      username: user.username,
      email: user.email,
      password: '', 
      role: user.role,
    });
  };

  const handleUpdateClick = async () => {
    if (editableUserId) {
      const updatedUser = {
        username: editForm.username,
        email: editForm.email,
        password: editForm.password || undefined, 
        role: editForm.role,
      };

      try {
        await updateUser(editableUserId, updatedUser);
        const updatedUsers = users.map((user: any) =>
          user._id === editableUserId ? { ...user, ...updatedUser } : user
        );
        setUsers(updatedUsers);
        setEditableUserId(null);
        toast.success('Utilisateur mis à jour avec succès !');
      } catch (error) {
        toast.error('Erreur lors de la mise à jour de l\'utilisateur.');
        console.error(error);
      }
    }
  };

  const handleDeleteClick = async (userId: string) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user: any) => user._id !== userId));
      toast.success('Utilisateur supprimé avec succès !');
    } catch (error) {
      toast.error('Erreur lors de la suppression de l\'utilisateur.');
      console.error(error);
    }
  };

  return (
    <div className="user-management">
      <SidebarComponent />
      <header className="header">
        <h1>User Management</h1>
      </header>
      <div className="add-user-section">
        <h3>Ajouter un utilisateur</h3>
        <div className="actions">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={newUserForm.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUserForm.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={newUserForm.password}
            onChange={handleInputChange}
          />
          <select name="role" value={newUserForm.role} onChange={handleInputChange}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          <button className="add-user-btn" onClick={handleAddUser}>
            Ajouter un utilisateur
          </button>
        </div>
      </div>
      <br></br>
      <h3>Pour modifier un utilisateur, cliquez sur le champ erroné</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: any) => (
            <tr key={user?._id}>
              <td>
                {editableUserId === user?._id ? (
                  <input
                    type="text"
                    name="username"
                    value={editForm.username}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span onClick={() => handleEditClick(user)}>{user?.username}</span>
                )}
              </td>
              <td>
                {editableUserId === user?._id ? (
                  <input
                    type="email"
                    name="email"
                    value={editForm.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span onClick={() => handleEditClick(user)}>{user?.email}</span>
                )}
              </td>
              <td>
                {editableUserId === user?._id ? (
                  <input
                    type="password"
                    name="password"
                    value={editForm.password}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
                  />
                ) : (
                  <span onClick={() => handleEditClick(user)}>******</span>
                )}
              </td>
              <td>
                {editableUserId === user?._id ? (
                  <select
                    name="role"
                    value={editForm.role}
                    onChange={handleInputChange}
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                ) : (
                  <span onClick={() => handleEditClick(user)}>{user?.role}</span>
                )}
              </td>
              <td>
                <button
                  className="action-btn remove"
                  onClick={() => handleDeleteClick(user?._id)}
                >
                  Remove User
                </button>
                {editableUserId === user?._id && (
                  <button className="action-btn update" onClick={handleUpdateClick}>
                    Update User
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default UserManagement;
