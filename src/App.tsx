import React from "react";
import Home from "./pages/Home.tsx";
import Picks from "./pages/Picks.tsx";
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/privateRoute.tsx";
import UserManagement from "./pages/UserManagement.tsx";
import ToS from "./pages/ToS.tsx";
import About from "./pages/About.tsx";
import Legality from "./pages/Legality.tsx";



function App() {
  const isAuthenticated = true; // mock
  const isAdmin = true; // mock

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/picks" element={<Picks />} />
        <Route
          path="/user-management"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin}>
              <UserManagement />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<SignUp/>}/>
        <Route path="/ToS" element={<ToS/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Legality" element={<Legality/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
