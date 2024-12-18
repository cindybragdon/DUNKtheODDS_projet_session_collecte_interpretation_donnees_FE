import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx"; // Accueil avec les cartes de joueurs
import Picks from "./pages/Picks.tsx"; // Matchs d'aujourd'hui avec prédictions déjà calculées
import SignUp from "./pages/SignUp.tsx"; // Créer un compte
import Login from "./pages/Login.tsx"; // S'authentifier
import MyAccount from "./pages/MyAccount.tsx"; // Mon compte
import ToS from "./pages/ToS.tsx";
import About from "./pages/About.tsx";
import Legality from "./pages/Legality.tsx";
import TeamDashboard from "./pages/PointsDashboard.tsx"; // Comparaison des points
import NBAdashboard from "./pages/NBAdashboard.tsx"; // Comparaison des spread
import AdminRoute from "./components/adminRoute.tsx";
import Contact from "./pages/Contact.tsx";
import TeamOverview from "./pages/TeamOverview.tsx"; // Infos d'une équipe
import UserManagement from "./pages/UserManagement.tsx"; // Page admin pour le CRUD
import ConnectedRoute from "./components/connectedRoute.tsx";
import NotFound from "./pages/404notFound.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/** Routes accessibles à tous les utilisateurs */}
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

        {/** Route accessible à un utilisateur connecté */}
        <Route path="/myaccount" element={<ConnectedRoute />}>
          <Route index element={<MyAccount />} />
        </Route>

        {/** Route accessible à un utilisateur connecté avec rôle admin */}
        <Route path="/user-management" element={<AdminRoute />}>
          <Route index element={<UserManagement />} />
        </Route>

        {/** Catch-all pour les routes non reconnues */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
