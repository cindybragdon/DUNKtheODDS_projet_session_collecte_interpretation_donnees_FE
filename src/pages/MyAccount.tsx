import { useEffect, useState } from 'react';
import '../LogSign.css';
import SidebarComponent from '../components/sideBar';

const MyAccount = () => {

  const [userEmail, setUserEmail] = useState('none');
  const [username, setUsername] = useState('none');
  const [userRole, setUserRole] = useState('none');

  useEffect(() => {
    const userObject = localStorage.getItem("user");
    const user = JSON.parse(userObject ||  "null") ;
    setUserEmail(user.email);
    setUsername(user.username);
    setUserRole(user.role);
  }, []);






    return (
    <div className="overlay">
      <h1>BIENVENUE DANS MY ACCOUNT</h1>
      <div>
        <h1>userEmail : {userEmail}</h1>
        <h1>username : {username}</h1>
        <h1>userRole : {userRole}</h1>
      </div>
      <SidebarComponent />
      
    </div>
  );
};

export default MyAccount;
