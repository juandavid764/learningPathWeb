import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { useEffect } from "react";
import { Usuario } from "./Model/Usuario.js";
import { createUser } from "./dataBase/functions";
import Alumnos from "./pages/Alumnos.jsx";
import Evaluaciones from "./pages/Evaluaciones.jsx";
import Perfil from "./pages/Perfil.jsx";
import Soporte from "./pages/Soporte.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import AgregarAlumno from './pages/AgregarAlumno.jsx';
import EditarPerfil from "./pages/EditarPerfil.jsx"; 



let user = new Usuario({
  id: 1,
  name: "David",
  about: "Esta es mi descripcion",
  rol: "Profesor",
  ubicacion: "Santiago de Cali",
  email: "juan@gmail.com",
  contrasena: "juandavid123",
});

function App() {
  useEffect(() => {
    const user = {}; // Suponiendo que tienes un objeto `user`
    createUser(user).then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="ml-64 w-full">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/alumnos" element={<Alumnos />} />
            <Route path="/evaluaciones" element={<Evaluaciones />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/soporte" element={<Soporte />} />
            <Route path="/alumnos/agregar" element={<AgregarAlumno onSave={true} />} />
            <Route path="/editar-perfil" element={<EditarPerfil />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
