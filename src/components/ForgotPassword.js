import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css"; // Ortak CSS dosyasını kullan

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (email) {
      console.log("Reset password request sent for:", email);
      // Burada backend API çağrısı yapılabilir
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h1>Forgot Password</h1>
        <p>Enter your email address to reset your password.</p>

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

        {/* Buttons */}
        <div className="button-group">
          <button className="auth-btn pink-btn" onClick={() => navigate("/login")}>
            Back
          </button>
          <button className="auth-btn yellow-btn" onClick={handleResetPassword} disabled={!email}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

