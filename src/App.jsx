import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { useEffect } from "react";
import { Usuario } from './Model/Usuario.js';
import { createUser } from "./dataBase/functions";

let user = new Usuario({
  id: 1,
  name: "David",
  about: "Esta es mi descripcion",
  rol: "Profesor",
  ubicacion: "Santiago de Cali",
  email: "juan@gmail.com",
  contrasena: "juandavid123"
});

function App() {
  useEffect(() => {

    createUser(user).then(result => {
      console.log(result)
    });
  }, []);

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
