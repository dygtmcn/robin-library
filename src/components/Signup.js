import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import "../styles/Signup.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (name && email && password) {
      console.log("User registered:", { name, email, password });
      // Burada kayıt işlemi için API çağrısı yapılabilir
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h1>Sign Up</h1>

        {/* Name Input */}
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-input"
          />
        </div>

        {/* Email Input */}
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

        {/* Password Input */}
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

        {/* Terms & Conditions */}
        <p className="terms-text">
          By registering, you agree to our{" "}
          <span className="terms-link" onClick={() => navigate("/terms")}>
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="terms-link" onClick={() => navigate("/privacy")}>
            Privacy Policy
          </span>.
        </p>

        {/* Buttons */}
        <div className="button-group">
          <button className="auth-btn pink-btn" onClick={() => navigate("/login")}>
            Back
          </button>
          <button
            className="auth-btn yellow-btn"
            onClick={handleRegister}
            disabled={!name || !email || !password}
          >
            Register
          </button>
        </div>

        {/* Already have an account? Login */}
        <p className="login-text">
          Already have an account?{" "}
          <span className="login-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
