import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import Login from "./components/Login";
import EmailSignIn from "./components/EmailSignIn";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard"; // 🔹 Dashboard artık ayrı bir sayfa

const Layout = () => {
  const location = useLocation(); // Mevcut sayfanın URL'ini al

  // Footer'ı gizlemek istediğimiz sayfalar
  const hideFooterPaths = ["/login", "/email-signin", "/signup", "/forgot-password"];

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/email-signin" element={<EmailSignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
      {/* Footer'ı yalnızca belirli sayfalarda gizle */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* 🔹 Dashboard bağımsız çalışacak */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
