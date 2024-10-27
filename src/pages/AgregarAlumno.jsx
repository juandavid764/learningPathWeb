import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./AgregarAlumnoC.css";
import { createStudent } from "../dataBase/functions"; // Asegúrate de que esta ruta sea correcta

const AgregarAlumno = () => {
  const [student, setStudent] = useState({
    name: "",
    grado: "",
    jornada: "",
  });
  
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSave = async () => {
    const createdStudent = await createStudent(student);
    if (!createdStudent) {
      console.log("Alumno creado:", student); // Verifica que esto se ejecute
      navigate('/alumnos'); // Redirige a la página de alumnos
    } else {
      console.log("No se pudo crear el alumno"); // Verifica si no se crea
    }
  };
  

  return (
    <div className="formulario-agregar-alumno">
      <h2>Agregar Alumno</h2>
      <div>
        <label>Nombre:</label>
        <input
        placeholder="Nombre del Estudiante"
          type="text"
          name="name"
          value={student.name}
          onChange={handleInputChange}
          className="agregarStudentForm"
        />
      </div>
      <div>
        <label>Grado:</label>
        <input
        placeholder="Numero del grado 1-11"
          type="text"
          name="grado"
          value={student.grado}
          onChange={handleInputChange}
          className="agregarStudentForm"
        />
      </div>
      <div>
        <label>Jornada:</label>
        <input
        placeholder="Tarde o Mañana"
          type="text"
          name="jornada"
          value={student.jornada}
          onChange={handleInputChange}
          className="agregarStudentForm"
        />
      </div>
      <div>
        <button onClick={handleSave} className="guardarbtn2">Guardar</button>
      </div>
    </div>
  );
};

export default AgregarAlumno;
