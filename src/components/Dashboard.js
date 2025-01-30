import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import DashboardContent from "./DashboardContent"; 
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Eğer giriş yapılmamışsa, login sayfasına yönlendir
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="dashboard-page">
      <Navbar /> {/* Dashboard'ta Navbar olacak */}
      <DashboardContent />
    </div>
  );
};

export default Dashboard;

