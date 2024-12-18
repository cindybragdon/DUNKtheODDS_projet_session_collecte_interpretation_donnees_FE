import React, { useEffect, useState } from 'react';
import SidebarComponent from '../components/sideBar';
import Footer from '../components/footer';
import UpdateModal from '../components/UpdateModal';
import "../MyAccount.css"
import '../LogSign.css';
import { deleteUser, updateUser } from '../lib/axios';

const MyAccount: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>('none');
  const [username, setUsername] = useState<string>('none');
  const [userRole, setUserRole] = useState<string>('none');
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

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

  const handleDeleteAccount = async () => {

    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte ?')) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      if (user) {

        localStorage.setItem('user', JSON.stringify(user));
        const response = await deleteUser(user._id);

        localStorage.setItem('user', "null");
        localStorage.setItem('token', "null");
        if(response) {
          window.location.reload();
          alert('Votre compte a été supprimé.');
          window.location.href = '/';
        } else {
          setError("Erreur : n'a pas réussis à supprimer l'utilisateur");
        }
      }
    }
  };

  const handleUpdateUserInfo = async (newUsername: string, newPassword: string) => {

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user) {
      user.username = newUsername;
      user.password = newPassword;
      localStorage.setItem('user', JSON.stringify(user));

      const response = await updateUser(user._id, user);
      if(response) {
        window.location.reload();
      } else {
        setError("Erreur : n'a pas réussis à modifier l'utilisateur")
      }
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
        <h1
          style={{
            color: "rgba(255, 0, 0, 0.7)", // Jaune translucide (Chart.js palette)
            fontSize: "20px", // Taille agrandie pour les chiffres
          }}>
        {error}
        </h1>
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
