// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { validateLogin } from "../dataBase/functions";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const logout = () => setLogged(false);
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{ logged, logout, setLogged, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
