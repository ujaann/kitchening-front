import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState(() => {
    const savedAuthInfo = localStorage.getItem("authInfo");
    return savedAuthInfo ? JSON.parse(savedAuthInfo) : { token: null, username: null, userId: null };
  });

  
  useEffect(() => {
    if (authInfo.token) {
      localStorage.setItem("authInfo", JSON.stringify(authInfo));
    } else {
      localStorage.removeItem("authInfo");
    }
  }, [authInfo]);

  const login = (token, username, userId) => {
    setAuthInfo({ token, username, userId });
  };

  const logout = () => {
    setAuthInfo({ token: null, username: null, userId: null });
  };

  return (
    <AuthContext.Provider value={{ authInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};