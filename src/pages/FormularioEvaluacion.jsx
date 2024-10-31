import React, { useState } from 'react';
import "./FormularioEvaluacion.css";
import { updateForm } from '../dataBase/functions.js'; 
import { getStudents, updateStudent, deleteStudent } from "../dataBase/functions.js";// Importa la función de actualización

const FormularioEvaluacion = () => {
    const [nombre, setNombre] = useState('');
    const [id, setId] = useState('');
    const [linguistica, setLinguistica] = useState('');
    const [logica, setLogica] = useState('');
    const [espacial, setEspacial] = useState('');
    const [musical, setMusical] = useState('');
    const [interpersonal, setInterpersonal] = useState('');
    const [kinestesico, setKinestesico] = useState('');
    const [comentarios, setComentarios] = useState('');

    const handleSave = async (e) => {
        e.preventDefault();
        
        const student = {
            id: id,
            name: nombre,
            linguistica: linguistica,
            logica: logica,
            espacial: espacial,
            musical: musical,
            interpersonal: interpersonal,
            kinestesico: kinestesico,
            comentarios: comentarios,
        };

        const result = await updateStudent(student);

        if (result) {
            console.log('Estudiante actualizado correctamente:', result);
        } else {
            console.log('Error al actualizar el estudiante');
        }
    };

    return (
        <div className="formulario-evaluacion">
            <h2>Formulario de Evaluación</h2>
            <div className="formulario-container">
                <form onSubmit={handleSave}>
                    <div className="fila-datos">
                        <label>
                            ID:
                            <input
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                required
                            />
                        </label>
                    </div>

                    <div className="inteligencias-container">
                        <label>
                            Lingüística:
                            <input
                                type="number"
                                value={linguistica}
                                onChange={(e) => setLinguistica(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Lógica:
                            <input
                                type="number"
                                value={logica}
                                onChange={(e) => setLogica(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Espacial:
                            <input
                                type="number"
                                value={espacial}
                                onChange={(e) => setEspacial(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Musical:
                            <input
                                type="number"
                                value={musical}
                                onChange={(e) => setMusical(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Interpersonal:
                            <input
                                type="number"
                                value={interpersonal}
                                onChange={(e) => setInterpersonal(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Kinestésico:
                            <input
                                type="number"
                                value={kinestesico}
                                onChange={(e) => setKinestesico(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" className="btn-submit">Guardar Evaluación</button>
                </form>
            </div>
        </div>
    );
};

export default FormularioEvaluacion;

