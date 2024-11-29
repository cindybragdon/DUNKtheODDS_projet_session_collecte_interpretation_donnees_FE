import React from "react";
import { useNavigate } from 'react-router-dom';


const BoutonSignIn = () => {

const navigate = useNavigate();

const handleNavigate = (path: string) => {
    navigate(path);
};

return (

    <div >
        <button className="custom-button"onClick={() => handleNavigate('/signin')}>Sign In</button>
    </div>
);
};

export default BoutonSignIn;