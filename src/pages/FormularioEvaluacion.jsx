import React, { useState } from 'react';
import "./FormularioEvaluacion.css";


const FormularioEvaluacion = () => {
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [puntaje, setPuntaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría el código para enviar la evaluación al backend
        console.log('Formulario enviado', { nombre, fecha, puntaje });
    };

    return (
        <div className="formulario-container">
            <h2>Formulario de Evaluación</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre del Estudiante:
                    <input 
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Fecha de Evaluación:
                    <input 
                        type="date" 
                        value={fecha} 
                        onChange={(e) => setFecha(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Puntaje:
                    <input 
                        type="number" 
                        value={puntaje} 
                        onChange={(e) => setPuntaje(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit" className="btn-submit">Registrar Evaluación</button>
            </form>
        </div>
    );
};

export default FormularioEvaluacion;
