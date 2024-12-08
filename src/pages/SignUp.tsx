import React, { useState } from 'react';
import '../LogSign.css'
import { useSearchParams } from 'react-router-dom';
import { login, signin } from '../lib/axios';

const SignUpPage = () => {
  const [user, setUser] = useState( {
    username : '',
    email: '',
    password: ''  
  })
  const [confirmPassword , setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

 const {username, email, password} = user; 
  

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
    if (!(password == confirmPassword)){
      setError('Vos mot de passe ne sont pas similaires')
    }
    setError(null);
    return true;
  };

  const handleOnChange = (e : any) =>{
    setUser({...user, [e.target.name] : e.target.value})
  }

  const handleSubmit = async (e: any ) =>{
    if ( !validateInput){
      console.log("Entrer des données valides");
    } else {
      try
      { 
        const response  =  await signin(user); 
        console.log('Connexion réussie :', response?.data);
      }catch(e : any){
        console.error('Erreur lors de la connexion :', e);
        setError(
          e.response?.data?.message || 'Échec de la connexion. Vérifiez vos identifiants.'
        );

      }

    }
  }

  return (
    <div className='overlay'>
      <div className="flex max-h-screen text-center mt-5 p-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto max-w-xs"
            style={{ width: '64px' }}
            src={'./images/icone.png'}
            alt="Your Company"
          />
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-white">
            Create your account
          </h2>
        </div>

        <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
          {error && (
              <div className="text-red-500 text-sm text-center mb-4">{error}</div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  onChange = {(e) => handleOnChange(e)}
                  required
                  className=" rounded block w-full rounded-lg bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-900 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <div className="mt-2">
                <input
                  type="username"
                  name="username"
                  id="username"
                  autoComplete="username"
                  onChange = {(e) => handleOnChange(e)}
                  value={username}
                  required
                  className=" rounded block w-full rounded-lg bg-white px-3 py-1.5 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-900 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-white">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  onChange = {(e) => handleOnChange(e)}
                  value={password}
                  required
                  className="rounded block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  autoComplete="confirm password"
                  value={confirmPassword}
                  onChange = {(e) => setConfirmPassword(e.target.value)}
                  required
                  className=" rounded block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" rounded flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-sm text-white">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
