import React, { useEffect, useState } from 'react';
import SidebarComponent from '../components/sideBar';
import Footer from '../components/footer';
import UpdateModal from '../components/UpdateModal';
import "../MyAccount.css"
import '../LogSign.css';

const MyAccount: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>('none');
  const [username, setUsername] = useState<string>('none');
  const [userRole, setUserRole] = useState<string>('none');
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const userObject = localStorage.getItem('user');
    if (userObject) {
      const user = JSON.parse(userObject);
      setUserEmail(user.email);
      setUsername(user.username);
      setUserRole(user.role);
    }
    setLoading(false);
  }, []);

  const handleModifyInfo = () => setIsModalOpen(true);

  const handleDeleteAccount = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte ?')) {
      localStorage.removeItem('user');
      alert('Votre compte a été supprimé.');
      window.location.href = '/';
    }
  };

  const handleUpdateUserInfo = (newUsername: string, newPassword: string) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user) {
      user.username = newUsername;
      user.password = newPassword;
      localStorage.setItem('user', JSON.stringify(user));

      fetch('/api/update-user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          username: newUsername,
          password: newPassword,
        }),
      })
        .then((response) => response.json())
        window.location.reload();
    }
  };

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="overlay">
      <h1 className="account-title">Bonjour, {username}</h1>

      <div className="account-box">
        <div className="account-info">
          <h5>Email : {userEmail}</h5>
          <h5>Nom d'utilisateur : {username}</h5>
          <h5>Rôle : {userRole}</h5>
        </div>
        <div>
          <button className="btn" onClick={handleModifyInfo}>Modifier vos infos</button>
          <br />
          <button className="btn" onClick={handleDeleteAccount}>Supprimer votre compte</button>
        </div>
      </div>

      <SidebarComponent />
      <Footer />

      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdateUserInfo}
      />
    </div>
  );
};

export default MyAccount;
