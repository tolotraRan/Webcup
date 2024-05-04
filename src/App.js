import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Landing from "./screens/Landing.jsx";
import Signup from "./components/Singup";
import Login from "./components/Login";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import TopNavbarConnected from "./components/Nav/TopNavbarConnected.jsx";
import Rdv from "./components/Sections/Rdv.jsx";
import ServiceFiltre from "./components/Sections/ServiceFiltre.jsx";

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
        {user ? <TopNavbarWrapperConnected /> : <TopNavbarWrapper />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/rdv"
            element={!user ? <Navigate to="/" /> : <Rdv />}
          />
          <Route
            path="/services/:nomservice"
            element={<ServiceFiltre />}
          />
        </Routes>
      </Router>
    </>
  );
}

function TopNavbarWrapper() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/rdv" || location.pathname ==="/services/:nomservice";
  if (isLoginPage) {
    return null;
  }
  return <TopNavbar />;
}
function TopNavbarWrapperConnected() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/rdv" || location.pathname ==="/services/:nomservice";
  if (isLoginPage) {
    return null;
  }
  return <TopNavbarConnected />;
}