import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // CSS dosyasını eklemeyi unutma

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h1>Log in</h1>
        <p>Choose a sign-in method to continue.</p>

        <div className="login-buttons">
          <button className="auth-btn pink-btn">Sign in with Google</button>
          <button className="auth-btn yellow-btn" onClick={() => navigate("/email-signin")}>
            Sign in with Email
          </button>
        </div>

        <p className="signup-text">
          Don't have an account?
          <span className="signup-link" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
