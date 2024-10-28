import React from 'react';
import "./ResultadosEvaluaciones.css";

const ResultadosEvaluaciones = () => {
    const resultados = [
        { inteligencia: 'Lingüística', puntaje: 85 },
        { inteligencia: 'Lógico-Matemática', puntaje: 70 },
        { inteligencia: 'Espacial', puntaje: 90 },
        // Agrega más resultados si es necesario
    ];

    return (
        <div className="resultados-container">
            <h2>Resultados de Evaluación</h2>
            
            <div className="resultados-lista">
                {resultados.map((res, index) => (
                    <div key={index} className="resultado-item">
                        <h3>{res.inteligencia}</h3>
                        <p>Puntaje: {res.puntaje}%</p>
                    </div>
                ))}
            </div>

            <textarea className="comentarios" placeholder="Comentarios..."></textarea>
            <button className="btn-editar">Editar Resultados</button>
        </div>
    );
};

export default ResultadosEvaluaciones;
