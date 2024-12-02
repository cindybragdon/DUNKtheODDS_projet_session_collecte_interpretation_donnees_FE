import React from "react";
import Home from "./pages/Home.tsx";
import Picks from "./pages/Picks.tsx";
<<<<<<< HEAD
import UserManagement from "./pages/UserManagement.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/privateRoute.tsx"
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";


>>>>>>> 7e26213123b8f2a1133ccd6c29802d23a92f64d9

function App() {
  const isAuthenticated = true; // mock
  const isAdmin = true; // mock

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/picks" element={<Picks />} />
<<<<<<< HEAD
        <Route
          path="/user-management"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin}>
              <UserManagement />
            </PrivateRoute>
          }
        />
=======
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<SignUp/>}/>
>>>>>>> 7e26213123b8f2a1133ccd6c29802d23a92f64d9
      </Routes>
    </BrowserRouter>
  );
}

export default App;
