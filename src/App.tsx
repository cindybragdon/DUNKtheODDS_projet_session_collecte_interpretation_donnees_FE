import React from "react";
import Home from "./pages/Home.tsx";
import Picks from "./pages/Picks.tsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/picks" element={<Picks />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
