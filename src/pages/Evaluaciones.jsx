import React from 'react';
import "./Evaluaciones.css";




const Evaluaciones = () => {
    const estudiantes = [
        { id: 1, nombre: 'Juan Pérez', progreso: '80%', nivel: 'Avanzado' },
        { id: 2, nombre: 'María García', progreso: '65%', nivel: 'Intermedio' },
        { id: 3, nombre: 'Carlos Sánchez', progreso: '90%', nivel: 'Avanzado' },
        // Agrega más estudiantes si es necesario
    ];

    return (
        <div className="evaluaciones-container">
            <h2>Evaluaciones de Estudiantes</h2>
            <input type="text" placeholder="Buscar estudiante..." className="search-input" />

            <div className="tarjetas-container">
                {estudiantes.map(est => (
                    <div key={est.id} className="tarjeta">
                        <h3>{est.nombre}</h3>
                        <p>Progreso: {est.progreso}</p>
                        <p>Nivel: {est.nivel}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Evaluaciones;
