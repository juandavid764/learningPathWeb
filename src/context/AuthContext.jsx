// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const login = (username, password) => {
    //AQui se hace la consulta del socio
    if (username === "usuarioDemo" && password === "1234") {
      setLogged(true);
      return true;
    }
    return false;
  };

  const logout = () => setLogged(false);

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
