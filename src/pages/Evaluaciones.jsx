import React from 'react';
import "./Evaluaciones.css";

const Evaluaciones = () => {
    const estudiantes = [
        { id: 1, nombre: 'Juan Pérez', progreso: 80, nivel: 'Avanzado' },
        { id: 2, nombre: 'María García', progreso: 65, nivel: 'Intermedio' },
        { id: 3, nombre: 'Carlos Sánchez', progreso: 90, nivel: 'Avanzado' },
        { id: 4, nombre: 'Ana López', progreso: 75, nivel: 'Intermedio' },
    ];

    return (
        <div className="evaluaciones-container">
            <h2>Evaluaciones de Estudiantes</h2>
            <div className="search-bar">
                <input type="text" placeholder="Buscar estudiante..." className="search-input" />
                <button className="btn-search">Buscar</button>
            </div>
            <div className="tarjetas-container">
                {estudiantes.map(est => (
                    <div key={est.id} className="tarjeta">
                        <h3>{est.nombre}</h3>
                        <div className="progress-bar" style={{ width: `${est.progreso}%` }}></div>
                        <p>Estadísticas Inteligencias Múltiples</p>
                        <button 
                            className="btn-resultados" 
                            onClick={() => window.location.href = '/evaluaciones/resultados'}
                        >
                            Resultado de Evaluaciones
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Evaluaciones;

