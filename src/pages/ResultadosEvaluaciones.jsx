import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getStudentById } from "../dataBase/functions"; // Importa la función correcta
import "./ResultadosEvaluaciones.css";

const ResultadosEvaluaciones = () => {
    const { id } = useParams();
    const [estudiante, setEstudiante] = useState(null);

    useEffect(() => {
        const fetchEstudiante = async () => {
            const data = await getStudentById({ id }); // Pasa el ID como objeto a la función
            if (data) {
                setEstudiante(data);
            }
        };
        fetchEstudiante();
    }, [id]);

    if (!estudiante) {
        return <p>Cargando resultados...</p>;
    }

    return (

        <div className="resultados-container">
            <h2 className='font-semibold'>Detalles Resultados</h2>
            <div className="estudiante-info">
                <p><strong>Nombre:</strong> {estudiante.name}</p>
                <p><strong>Código:</strong> {id}</p>
                <p><strong>Grado:</strong> {estudiante.grado}</p>
                <p><strong>Jornada:</strong> {estudiante.jornada}</p>
            </div>
            <div className="resultados-lista">

                <div className=" bg-[#40bb2d] bg-opacity-50 p-4 rounded-lg shadow-md mb-4">
                    <h3 className="text-xl font-semibold">Lingüística</h3>
                    <p className="text-gray-700">Puntaje: {estudiante.linguistica}</p>
                </div>
                <div className="resultado-item bg-[#0021c8] bg-opacity-50  p-4 rounded-lg shadow-md mb-4">
                    <h3 className="text-xl font-semibold">Lógica</h3>
                    <p className="text-gray-700">Puntaje: {estudiante.logica}</p>
                </div>
                <div className="resultado-item bg-[#8526b8] bg-opacity-50 p-4 rounded-lg shadow-md mb-4">
                    <h3 className="text-xl font-semibold">Espacial</h3>
                    <p className="text-gray-700">Puntaje: {estudiante.espacial}</p>
                </div>
                <div className="resultado-item bg-[#e9d82b] bg-opacity-50p-4 rounded-lg shadow-md mb-4">
                    <h3 className="text-xl font-semibold">Musical</h3>
                    <p className="text-gray-700">Puntaje: {estudiante.musical}</p>
                </div>
                <div className="resultado-item bg-[#ec574a] bg-opacity-50 p-4 rounded-lg shadow-md mb-4">
                    <h3 className="text-xl font-semibold">Interpersonal</h3>
                    <p className="text-gray-700">Puntaje: {estudiante.interpersonal}</p>
                </div>
                <div className="resultado-item bg-[#c85dbb] bg-opacity-50p-4 rounded-lg shadow-md mb-4">
                    <h3 className="text-xl font-semibold">Kinestésico</h3>
                    <p className="text-gray-700">Puntaje: {estudiante.kinestesico}</p>
                </div>
            </div>
        </div>
    );
};

export default ResultadosEvaluaciones;






