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
            <h2>Resultados de Evaluación para {estudiante.name}</h2>
            <div className="estudiante-info">
                <p><strong>Nombre:</strong> {estudiante.name}</p>
                <p><strong>Código:</strong> {id}</p>
                <p><strong>Grado:</strong> {estudiante.grado}</p>
                <p><strong>Jornada:</strong> {estudiante.jornada}</p>
            </div>
            <div className="resultados-lista">
                <div className="resultado-item">
                    <h3>Lingüística</h3>
                    <p>Puntaje: {estudiante.linguistica}</p>
                </div>
                <div className="resultado-item">
                    <h3>Lógica</h3>
                    <p>Puntaje: {estudiante.logica}</p>
                </div>
                <div className="resultado-item">
                    <h3>Espacial</h3>
                    <p>Puntaje: {estudiante.espacial}</p>
                </div>
                <div className="resultado-item">
                    <h3>Musical</h3>
                    <p>Puntaje: {estudiante.musical}</p>
                </div>
                <div className="resultado-item">
                    <h3>Interpersonal</h3>
                    <p>Puntaje: {estudiante.interpersonal}</p>
                </div>
                <div className="resultado-item">
                    <h3>Kinestésico</h3>
                    <p>Puntaje: {estudiante.kinestesico}</p>
                </div>
            </div>
            <h2>Comentarios del Estudiante</h2> 
            <textarea 
                className="comentarios" 
                placeholder="Comentarios..."
                defaultValue={estudiante.comentarios || ""}
            ></textarea>
            <button className="btn-editar">Editar Formulario de Resultados</button>
        </div>
    );
};

export default ResultadosEvaluaciones;






