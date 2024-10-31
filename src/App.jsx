import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Alumnos from "./pages/Alumnos.jsx";
import Evaluaciones from "./pages/Evaluaciones.jsx";
import Perfil from "./pages/Perfil.jsx";
import Soporte from "./pages/Soporte.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import AgregarAlumno from "./pages/AgregarAlumno.jsx";
import FormularioEvaluacion from "./pages/FormularioEvaluacion.jsx";
import ResultadosEvaluaciones from "./pages/ResultadosEvaluaciones.jsx";
import EditarPerfil from "./pages/EditarPerfil.jsx";
import { useAuth } from "./context/AuthContext.jsx";

function App() {
  const { logged } = useAuth();

  return (
    <Router>
      <div className="flex">
        {logged && <Navbar />}
        <div className={logged ? "ml-64 w-full" : "w-full"}>
          <Routes>
            {/* Esto debería funcionar pero se me recarga, idk why */}
            <Route
              path="/"
              element={logged ? <Navigate to="/home" /> : <Login />}
            />

            {logged ? (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/alumnos" element={<Alumnos />} />
                <Route path="/evaluaciones" element={<Evaluaciones />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/soporte" element={<Soporte />} />
                <Route
                  path="/alumnos/agregar"
                  element={<AgregarAlumno onSave={true} />}
                />
                <Route
                  path="/evaluaciones/formulario"
                  element={<FormularioEvaluacion />}
                />
                <Route
                  path="/evaluaciones/resultados"
                  element={<ResultadosEvaluaciones />}
                />
                <Route path="/editar-perfil" element={<EditarPerfil />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
