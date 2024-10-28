import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const EditarPerfil = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [email, setEmail] = useState("");
  const [sobreMi, setSobreMi] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setNombre(storedUser.nombre);
      setRol(storedUser.rol);
      setUbicacion(storedUser.ubicacion);
      setEmail(storedUser.email);
      setSobreMi(storedUser.sobreMi);
    }
  }, []);

  const handleSave = () => {
    const updatedUser = { nombre, rol, ubicacion, email, sobreMi };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    navigate('/perfil'); // Redirige de nuevo al perfil después de guardar
  };

  return (
    <div>
      <Navbar />
      <div style={styles.editarPerfilContainer}>
        <h1>Editar Perfil</h1>
        <form>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nombre</label>
            <input style={styles.input} type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Rol</label>
            <input style={styles.input} type="text" value={rol} onChange={(e) => setRol(e.target.value)} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Ubicación</label>
            <input style={styles.input} type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input style={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Sobre mí</label>
            <textarea style={styles.textarea} value={sobreMi} onChange={(e) => setSobreMi(e.target.value)} />
          </div>
          <button type="button" style={styles.button} onClick={handleSave}>Guardar</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  editarPerfilContainer: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '800px',
    margin: 'auto',
    marginTop: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '100px',
  },
  button: {
    padding: '10px 15px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    marginTop: '10px',
  },
};

export default EditarPerfil;