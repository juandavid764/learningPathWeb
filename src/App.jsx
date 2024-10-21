import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { useEffect } from "react";
import { Estudiante } from './Model/Estudiante.js';
import { getStudentById } from "./dataBase/functions";

function App() {

  useEffect(async () => {
    let estudiante = new Estudiante({
      id: 1,
      name: "Juan Perez",
      grado: "10",
      jornada: "Mañana",
      linguistica: 85,
      logica: 90,
      espacial: 75,
      musical: 80,
      interpersonal: 70,
      kinestesico: 65
    });

    let result = await getStudentById(estudiante)

    console.log(result);
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
