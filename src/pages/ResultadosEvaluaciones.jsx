import React from 'react';
import "./ResultadosEvaluaciones.css";

const ResultadosEvaluaciones = () => {
    const estudiante = {
        nombre: 'Santiago Collantes',
        codigo: '12345',
        grado: '1ro',
        jornada: 'Diurna',
        inteligencias: [
            { tipo: 'Lingüística', puntaje: 85 },
            { tipo: 'Lógico', puntaje: 70 },
            { tipo: 'Espacial', puntaje: 90 },
            { tipo: 'Musical', puntaje: 75 },
            { tipo: 'Interpersonal', puntaje: 65 },
            { tipo: 'Kinestésico', puntaje: 80 },
        ],
    };

    return (
        <div className="resultados-container">
            <h2>Resultados de Evaluación</h2>
            <div className="estudiante-info">
                <p>Nombre: {estudiante.nombre}</p>
                <p>Código: {estudiante.codigo}</p>
                <p>Grado: {estudiante.grado}</p>
                <p>Jornada: {estudiante.jornada}</p>
            </div>
            <div className="resultados-lista">
                {estudiante.inteligencias.map((inteligencia, index) => (
                    <div key={index} className="resultado-item">
                        <h3>{inteligencia.tipo}</h3>
                        <p>Puntaje: {inteligencia.puntaje}</p>
                    </div>
                ))}
            </div>
            <h2>Comentarios estudiante</h2> 
            <textarea className="comentarios" placeholder="Comentarios..."></textarea>
            <button className="btn-editar">Editar Formulario de Resultados</button>
        </div>
    );
};

export default ResultadosEvaluaciones;
