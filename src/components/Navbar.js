import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Kullanıcı giriş bilgilerini çekiyoruz
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); // Giriş yapmış mı kontrol et

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/images/logo3.png" className="logo-circle" alt="Logo" />
        <span className="logo-text">Little Robin Library</span>
      </div>

      <div className="nav-buttons">
        {!isAuthenticated ? (
          <>
            <button className="btn nav-button" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn nav-button signup" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button className="btn nav-button logout" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;

