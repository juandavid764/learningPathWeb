import React, { useEffect, useState } from "react";
import { getStudentStats } from "../dataBase/functions.js";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import "./Evaluaciones.css";
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

  const fetchEstudiantes = async () => {
    const data = await getStudentStats();
    const fetchedEstudiantes = data.map((student) => ({
      id: student.id,
      name: student.name, // Aseguramos que use el nombre correcto de la base de datos
      grado: student.grado || "N/A",
      jornada: student.jornada || "N/A",
      linguistica: student.linguistica || null,
      logica: student.logica || null,
      espacial: student.espacial || null,
      musical: student.musical || null,
      interpersonal: student.interpersonal || null,
      kinestesico: student.kinestesico || null,
    }));

    setEstudiantes(fetchedEstudiantes);
    setFilteredEstudiantes(fetchedEstudiantes);
    setLoading(false);
  };

  useEffect(() => {
    fetchEstudiantes();
  }, []);

  const handleSearch = () => {
    const filtered = estudiantes.filter(
      (est) =>
        est.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        est.id.toString().includes(searchTerm)
    );
    setFilteredEstudiantes(filtered);
  };

  if (loading) {
    return <p>Cargando evaluaciones...</p>;
  }

  return (
    <div className="evaluaciones-container w-full">
      <h2 className="text-2xl font-bold mb-4">Evaluaciones de Estudiantes</h2>
      <div className="search-bar mb-4">
        <input
          type="text"
          placeholder="Buscar estudiante por nombre o ID..."
          className="search-input p-2 border border-gray-300 rounded mr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-resultados bg-gray-900 text-white p-2 rounded mt-2" onClick={handleSearch}>
          Buscar
        </button>
      </div>
      <button
        className="btn-resultados bg-gray-900 text-white p-2 rounded mt-2"
        onClick={() => navigate("/evaluaciones/formulario")}
      >
        Realizar test
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredEstudiantes.map((est) => (

          <div key={est.id} className="p-2 border border-gray-300 rounded shadow flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">{est.id + " " + est.name}</h3>
            <p className="mb-1">Grado: {est.grado}</p>
            <p className="mb-1">Jornada: {est.jornada}</p>
            <p className="font-bold mb-2">Resultados</p>
            <div className="">
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
                      backgroundColor: [
                        "#40bb2d",
                        "#0021c8",
                        "#8526b8",
                        "#e9d82b",
                        "#ec574a",
                        "#c85dbb",
                      ],
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
            </div>
            <button
              className="btn-resultados bg-gray-900 text-white p-2 rounded mt-2"
              onClick={() => navigate(`/evaluaciones/resultados/${est.id}`)}
            >
              Detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evaluaciones;
