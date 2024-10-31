import React, { useEffect, useState } from "react";
import { getStudentStats } from "../dataBase/functions.js";
import { Bar } from "react-chartjs-2";
import "./Evaluaciones.css";
import { useNavigate } from "react-router-dom";

// Importa los componentes y tipos necesarios de Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Evaluaciones = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEstudiantes, setFilteredEstudiantes] = useState([]);
  const navigate = useNavigate();

  // Función para traer los datos de la base de datos
  const fetchEstudiantes = async () => {
    const ids = [1, 2, 3, 4]; // Ajusta los IDs según sea necesario
    const fetchedEstudiantes = [];

    for (const id of ids) {
      const data = await getStudentStats(id);
      if (data) {
        fetchedEstudiantes.push({ id, ...data });
      }
    }

    setEstudiantes(fetchedEstudiantes);
    setFilteredEstudiantes(fetchedEstudiantes); // Inicializa con todos los estudiantes
    setLoading(false);
  };

  // Efecto para cargar los estudiantes al montar el componente
  useEffect(() => {
    fetchEstudiantes();
  }, []);

  // Función de búsqueda para filtrar estudiantes
  const handleSearch = () => {
    const filtered = estudiantes.filter(
      (est) =>
        est.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        est.id.toString() === searchTerm
    );
    setFilteredEstudiantes(filtered);
  };

  if (loading) {
    return <p>Cargando evaluaciones...</p>;
  }

  return (
    <div className="evaluaciones-container">
      <h2>Evaluaciones de Estudiantes</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar estudiante por nombre o ID..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-search" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      <div className="tarjetas-container">
        {filteredEstudiantes.map((est) => (
          <div key={est.id} className="tarjeta">
            <h3>{est.nombre}</h3>
            <p>Estadísticas Inteligencias Múltiples</p>

            {/* Gráfico de barras unificado */}
            <Bar
              data={{
                labels: [
                  "Lingüística",
                  "Lógica",
                  "Espacial",
                  "Musical",
                  "Interpersonal",
                  "Kinestésico",
                ],
                datasets: [
                  {
                    label: "Puntaje",
                    data: [
                      est.linguistica,
                      est.logica,
                      est.espacial,
                      est.musical,
                      est.interpersonal,
                      est.kinestesico,
                    ],
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                  },
                ],
              }}
              options={{
                indexAxis: "y",
                scales: {
                  x: { beginAtZero: true, max: 100 },
                },
                plugins: {
                  legend: { display: false },
                },
              }}
            />

            <button
              className="btn-resultados"
              onClick={() => navigate("/evaluaciones/resultados")}
            >
              Resultado de Evaluaciones
            </button>
          </div>
        ))}
      </div>
      <button
        className="btn-resultados"
        onClick={() => navigate("/evaluaciones/Formulario")}
      >
        Llenar formulario de estudiante
      </button>
    </div>
  );
};

export default Evaluaciones;
