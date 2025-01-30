import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Kullanıcı giriş fonksiyonlarını al
import "../styles/Auth.css";
import "../styles/EmailSignIn.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Giriş fonksiyonunu al

  const handleLogin = () => {
    if (email && password) {
      login(); // Kullanıcı giriş yapmış olarak işaretlenir
      navigate("/dashboard"); // Girişten sonra dashboard'a yönlendirme
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h1>Log in</h1>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
        </div>

        <div className="button-group">
          <button className="auth-btn pink-btn" onClick={() => navigate("/")}>
            Back
          </button>
          <button className="auth-btn yellow-btn" onClick={handleLogin} disabled={!email || !password}>
            Login
          </button>
        </div>

        <p className="forgot-password-container">
          <span className="forgot-password-link" onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </span>
        </p>

        <p className="auth-text">
          Don't have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;


