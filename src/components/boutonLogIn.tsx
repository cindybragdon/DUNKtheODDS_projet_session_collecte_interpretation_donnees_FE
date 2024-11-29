import React from "react";
import { useNavigate } from 'react-router-dom';


const BoutonLogIn = () => {

const navigate = useNavigate();

const handleNavigate = (path: string) => {
navigate(path);
};

    return (

        <div >
            <button className="custom-button"onClick={() => handleNavigate('/login')}>Login</button>
        </div>
    );
    };

export default BoutonLogIn;