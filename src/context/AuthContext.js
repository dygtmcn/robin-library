import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Kullanıcı giriş yapınca çağrılır
  const login = () => setIsAuthenticated(true);

  // Kullanıcı çıkış yapınca çağrılır
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Kullanımı kolaylaştırmak için özel hook
export const useAuth = () => useContext(AuthContext);
