import React, { useState } from 'react';
import "./FormularioEvaluacion.css";

const FormularioEvaluacion = () => {
    const [nombre, setNombre] = useState('');
    const [id, setId] = useState('');
    const [grado, setGrado] = useState('');
    const [jornada, setJornada] = useState('');
    const [linguistica, setLinguistica] = useState('');
    const [logica, setLogica] = useState('');
    const [espacial, setEspacial] = useState('');
    const [musical, setMusical] = useState('');
    const [interpersonal, setInterpersonal] = useState('');
    const [kinestesico, setKinestesico] = useState('');
    const [comentarios, setComentarios] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado', { nombre, id, grado, jornada, linguistica, logica, espacial, musical, interpersonal, kinestesico, comentarios });
    };

    return (
        <div className="formulario-evaluacion">
            <h2>Formulario de Evaluación</h2>
            <div className="formulario-container">
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
                        <label>
                            Grado:
                            <input
                                type="text"
                                value={grado}
                                onChange={(e) => setGrado(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Jornada:
                            <input
                                type="text"
                                value={jornada}
                                onChange={(e) => setJornada(e.target.value)}
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

                    <label>
                        Comentarios:
                        <textarea
                            value={comentarios}
                            onChange={(e) => setComentarios(e.target.value)}
                            className="comentarios"
                            placeholder="Escribe tus comentarios aquí..."
                        ></textarea>
                    </label>
                    <button type="submit" className="btn-submit">Guardar Evaluación</button>
                </form>
            </div>
        </div>
    );
};

export default FormularioEvaluacion;
