import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./AlumnosCss.css";
import { getStudents, updateStudent, deleteStudent } from "../dataBase/functions.js";

const Alumnos = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      const fetchedStudents = await getStudents();
      setStudents(fetchedStudents);
    };

    fetchStudents();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddButtonClick = () => {
    navigate('/alumnos/agregar');
  };

  const handleEditStudent = async (student) => {
    const updatedStudent = await updateStudent(student);
    if (updatedStudent) {
      setStudents(students.map((s) => (s.id === student.id ? updatedStudent[0] : s)));
      setEditingStudent(null);
    }
  };

  const handleEditButtonClick = (student) => {
    setEditingStudent(student);
  };

  const handleInputChange = (e) => {
    setEditingStudent({
      ...editingStudent,
      [e.target.name]: e.target.value,
    });
  };

  const openDeleteModal = (studentId) => {
    setStudentToDelete(studentId);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setStudentToDelete(null);
    setIsModalOpen(false);
  };

  const handleDeleteStudent = async () => {
    if (studentToDelete) {
      const deletedStudent = await deleteStudent({ id: studentToDelete });
      if (deletedStudent) {
        setStudents(students.filter((student) => student.id !== studentToDelete));
        closeDeleteModal();
      }
    }
  };

  return (
    <div className="ml-5">
      <Navbar />
      <input
        type="text"
        placeholder="Buscar alumno por nombre"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button
        onClick={handleAddButtonClick}
        className="btn-resultados bg-gray-900 text-white p-2 rounded mt-2"
      >
        Agregar Alumno
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Grado</th>
            <th>Jornada</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students
            .filter((student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{editingStudent?.id === student.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editingStudent.name}
                    onChange={handleInputChange}
                    className="agregarStudentForm"
                  />
                ) : (
                  student.name
                )}</td>
                <td>{editingStudent?.id === student.id ? (
                  <input
                    type="text"
                    name="grado"
                    value={editingStudent.grado}
                    onChange={handleInputChange}
                    className="agregarStudentForm"
                  />
                ) : (
                  student.grado
                )}</td>
                <td>{editingStudent?.id === student.id ? (
                  <input
                    type="text"
                    name="jornada"
                    value={editingStudent.jornada}
                    onChange={handleInputChange}
                    className="agregarStudentForm"
                  />
                ) : (
                  student.jornada
                )}</td>
                <td>
                  {editingStudent?.id === student.id ? (
                    <button onClick={() => handleEditStudent(editingStudent)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Guardar</button>

                  ) : (
                    <><div className="flex">
                      <div>
                        <button onClick={() => handleEditButtonClick(student)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Editar</button>
                      </div>
                      <div>
                        <button onClick={() => openDeleteModal(student.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Eliminar</button>
                      </div>
                    </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>¿Desea eliminar este Alumno?</h2>
            <p>Esta acción es permanente, ¿Estás seguro?</p>
            <button onClick={handleDeleteStudent} className="confirmarbtn">Eliminar</button>
            <button onClick={closeDeleteModal} className="cancelarbtn">Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alumnos;

