import React, { useState } from 'react';
import '../SignUp.css';
import SidebarComponent from '../components/sideBar';
import { useNavigate } from 'react-router-dom';
import { signin } from '../lib/axios';
import Footer from '../components/footer';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    role: 'User',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { username, email, password } = user;

  const validateInput = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setError('Le format de l’email est invalide.');
      return false;
    }
    if (password.trim().length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return false;
    }
    if (!(user.password === confirmPassword)) {
      setError('Vos mot de passe ne sont pas similaires');
      return false;
    }
    setError(null);
    return true;
  };

  const handleOnChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateInput()) {
      console.log('Entrer des données valides');
    } else {
      try {
        const response = await signin(user);
        console.log(response);
        if (response) {
          navigate('/login');
        } else{
          setError('Cette email existe déja.');
        }
      } catch (e: any) {
        console.error('Erreur lors de la connexion :', e);
        setError(
          e.response?.data?.message || 'Échec de la connexion. Vérifiez vos identifiants.'
        );
      }
    }
  };

  return (
    <div className="overlay body">
      <SidebarComponent />
      <div className="">
        <div className="sign-title">
          <img
            style={{ width: '100px' , paddingBottom: '30px'}}
            src={'./images/icone.png'}
          />
          <h2 className="h2-sign" style={{ marginLeft : '60px', color: 'white'}}>Créez votre compte</h2>
        </div>
        <div className="wrapper">
          <form className="" onSubmit={handleSubmit}>
            {error && <div className="">{error}</div>}
            <div className="input-box">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => handleOnChange(e)}
                placeholder='Courriel'
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                placeholder="Nom d'utilisateur"
                onChange={(e) => handleOnChange(e)}
                required
              
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => handleOnChange(e)}
                placeholder='Mot de passe'
                required
                
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder='Confirmation du mot de passe '
              />
            </div>
            <div >
              <button type="submit" className="btn">S'inscrire</button>
            </div>
          </form>
          <p className="">
            Vous avez déjà un compte ?{' '}
            <a href="/login" className="">Connectez-vous</a>
          </p>
        </div>
      </div>  
      <Footer/>
    </div>
  );
};

export default SignUpPage;
