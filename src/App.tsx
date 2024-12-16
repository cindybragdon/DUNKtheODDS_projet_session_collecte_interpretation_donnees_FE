import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.tsx"; // Acceuil avec les cartes de joueurs
import Picks from "./pages/Picks.tsx"; // matchs d'aujourd'hui avec prédictions déjà calculées.  Choix de 2 équipes pour calculer moneyline, Spread, over/under
import SignUp from "./pages/SignUp.tsx"; //créer un compte
import Login from "./pages/Login.tsx"; //S'authentifier
import MyAccount from "./pages/MyAccount.tsx"; //Mon compte, update le compte, ma collection d'équipes suivies
import ToS from "./pages/ToS.tsx";
import About from "./pages/About.tsx";
import Legality from "./pages/Legality.tsx";
import TeamDashboard from "./pages/PointsDashboard.tsx";  //Comparaison des points par equipe lors des derniers matchs.  Tableau des 5 meilleurs équipes pour les points par match
import NBAdashboard from "./pages/NBAdashboard.tsx"; // Comparaison des spread par equipe lors des derniers matchs.
import AdminRoute from "./components/adminRoute.tsx";
import Contact from "./pages/Contact.tsx";
import TeamOverview from "./pages/TeamOverview.tsx"; // Toues les infos et stats d'une équipe : Bilan des victoires et défaites à domicile ou non, Performances récentes (Points), Derniers résultats des matchs , Nombre total de matchs joués , Bilan général contre les autres équipes 
import UserManagement from "./pages/UserManagement.tsx"; //Page admin où l'administrateur pour faire le CRUD des users et changer leur role

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
        <Route path="/Contact" element={<Contact />} />

        <Route path="/team-overview" element={<TeamOverview />} />


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
