import React, { useState } from 'react';
import '../LogSign.css';
import { login } from '../lib/axios';
import SidebarComponent from '../components/sideBar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';


const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validateInput = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setError('Le format de l’email est invalide.');
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!validateInput()) return;

    try {
      const credentials = { email, password };
      const response = await login(credentials.email, credentials.password);
      console.log('Connexion réussie :', response?.data);
      if(response) {
        navigate('/picks');
      } else {
        setError(
          'Échec de la connexion. Vérifiez vos identifiants.'
        );
      }
    } catch (err: any) {
      console.error('Erreur lors de la connexion :', err);
      setError(
        err.response?.data?.message || 'Échec de la connexion. Vérifiez vos identifiants.'
      );
    }
  };

  return (
    <div className="overlay body">
      <SidebarComponent />
      <div >
        <div >
          <img
             style={{ width: '100px', paddingBottom: '30px'}}
            src={'./images/icone.png'}
            alt="Your Company"
          />
          <h2 style={{  color: 'white'}}>
            Connectez-vous à votre compte
          </h2>
        </div>

        <div className="wrapper">
          <form  onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-500 text-sm text-center mb-4">{error}</div>
            )}
            <div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Courriel'
                />
              </div>
            </div>

            <div>
             
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Mot de passe'
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn"
              >
                Se connecter
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 p-4">
            <a
              href="/Signin"
              className="font-semibold text-purple-600 hover:text-pink-500 mt-4"
            >
              Créez un compte
            </a>
          </p>
        </div>
      </div>
      
          <Footer/>
    </div>
  );
};

export default LoginPage;
