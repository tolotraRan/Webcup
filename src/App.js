import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Landing from "./screens/Landing.jsx";
import Signup from "./components/Singup";
import Login from "./components/Login";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import TopNavbarConnected from "./components/Nav/TopNavbarConnected.jsx";

export default function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
        {/* Affichez TopNavbar ou TopNavbarConnected en fonction de la présence du token */}
        {user ? <TopNavbarConnected /> : <TopNavbarWrapper />}
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Empêchez l'accès à la route /signup si l'utilisateur est déjà connecté */}
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
          {/* Empêchez l'accès à la route /login si l'utilisateur est déjà connecté */}
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </>
  );
}

function TopNavbarWrapper() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/signup";
  if (isLoginPage) {
    return null;
  }
  return <TopNavbar />;
}
