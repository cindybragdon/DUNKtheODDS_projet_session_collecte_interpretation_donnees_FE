import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Picks from "./pages/Picks.tsx";
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";
import UserManagement from "./pages/UserManagement.tsx";
import MyAccount from "./pages/MyAccount.tsx";
import ToS from "./pages/ToS.tsx";
import About from "./pages/About.tsx";
import Legality from "./pages/Legality.tsx";
import TeamDashboard from "./pages/PointsDashboard.tsx";
import NBAdashboard from "./pages/NBAdashboard.tsx";
import PrivateRoute from "./components/privateRoute.tsx";
import AdminRoute from "./components/adminRoute.tsx";

function App() {
  const isAuthenticated = false; 
  const isAdmin = false; 

  return (
    <BrowserRouter>
      <Routes>
        {/**Routes accessibles a tous les users */}
        <Route path="/" element={<Home />} />
        <Route path="/picks" element={<Picks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/ToS" element={<ToS />} />
        <Route path="/About" element={<About />} />
        <Route path="/Legality" element={<Legality />} />
        <Route path="/team-dashboard" element={<TeamDashboard />} />
        <Route path="/nba-dashboard" element={<NBAdashboard />} />

        {/**Route accessible a un user connecté */}
        <Route
          path="/myaccount"
          element={
            isAuthenticated ? <MyAccount /> : <Navigate to="/login" />
          }

        />

        {/**Route accessible a un user connecté qui a le role admin */}
        <Route
          path="/user-management"
          element={
            isAuthenticated && isAdmin ? (
              <UserManagement />
            ) : (
              <Navigate to={isAuthenticated ? "/" : "/login"} />
            )
          }
        />

        <Route path='/user-management' element={<AdminRoute/>}>
            <Route path='/user-management' element={<UserManagement/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
