import React, { useEffect, useState } from 'react';
import { getStudentStats } from "../dataBase/functions.js";
import { Bar } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";
import "./Evaluaciones.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Evaluaciones = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEstudiantes, setFilteredEstudiantes] = useState([]);
    const navigate = useNavigate();

    const fetchEstudiantes = async () => {
        const data = await getStudentStats();
        const fetchedEstudiantes = data.map(student => ({
            id: student.id,
            name: student.name,  // Aseguramos que use el nombre correcto de la base de datos
            grado: student.grado || 'N/A',
            jornada: student.jornada || 'N/A',
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
        const filtered = estudiantes.filter(est => 
            est.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            est.id.toString().includes(searchTerm)
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
                <button className="btn-search" onClick={handleSearch}>Buscar</button>
            </div>

            <div className="tarjetas-container">
                {filteredEstudiantes.map(est => (
                    <div key={est.id} className="tarjeta">
                        <h3>{est.name}</h3>
                        <p>Grado: {est.grado}</p>
                        <p>Jornada: {est.jornada}</p>
                        <p>Estadísticas Inteligencias Múltiples</p>
                        
                        <Bar 
                            data={{
                                labels: ['Lingüística', 'Lógica', 'Espacial', 'Musical', 'Interpersonal', 'Kinestésico'],
                                datasets: [
                                    {
                                        label: 'Puntaje',
                                        data: [
                                            est.linguistica, 
                                            est.logica, 
                                            est.espacial, 
                                            est.musical, 
                                            est.interpersonal, 
                                            est.kinestesico
                                        ],
                                        backgroundColor: [
                                            '#40bb2d',
                                            '#0021c8',
                                            '#8526b8',
                                            '#e9d82b',
                                            '#ec574a',
                                            '#c85dbb'
                                        ],
                                    },
                                ],
                            }}
                            options={{
                                indexAxis: 'y',
                                scales: {
                                    x: { beginAtZero: true, max: 100 }
                                },
                                plugins: {
                                    legend: { display: false }
                                }
                            }}
                        />

                        <button 
                            className="btn-resultados" 
                            onClick={() => navigate(`/evaluaciones/resultados/${est.id}`)}
                        >
                            Resultado de Evaluaciones
                        </button>
                    </div>
                ))}
            </div>
            <button 
                className="btn-formulario" 
                onClick={() => navigate('/evaluaciones/formulario')}
            >
                Llenar Formulario de Evaluaciones
            </button>
        </div>
    );
};

export default Evaluaciones;










