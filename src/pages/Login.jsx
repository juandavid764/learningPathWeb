import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { validateLogin } from "../dataBase/functions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setLogged, setUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await validateLogin(username, password);
    setUsername("");
    setPassword("");
    if (!data) {
      setError("Credenciales incorrectas");
      console.error("Error de autenticación");
    } else {
      setError(null);
      // Redirecciona o maneja el inicio de sesión exitoso aquí
      console.log("Inicio de sesión exitoso", data);
      setUser(data);
      setLogged(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white-100">
      <div className="p-6 bg-white rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded"
          >
            Iniciar Sesión
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
