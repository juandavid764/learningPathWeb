import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getUserById, updateUser } from "../dataBase/functions";

const EditarPerfil = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [email, setEmail] = useState("");
  const [sobreMi, setSobreMi] = useState("");

  useEffect(() => {
    if (user?.id) {
      // Cargar datos del usuario desde la base de datos
      getUserById(user.id).then((userData) => {
        if (userData) {
          setNombre(userData.name || "");
          setRol(userData.rol || "");
          setUbicacion(userData.ubicacion || "");
          setEmail(userData.email || "");
          setSobreMi(userData.about || "");
        }
      });
    }
  }, [user]);

  const handleSave = async () => {
    const updatedUser = {
      id: user.id,
      name: nombre || user.name,
      rol: rol || user.rol,
      ubicacion: ubicacion || user.ubicacion,
      email: email || user.email,
      about: sobreMi || user.about,
    };

    const result = await updateUser(updatedUser);

    if (result) {
      setUser(result[0]); // Actualiza el contexto con los nuevos datos
      navigate("/perfil"); // Redirige de nuevo al perfil después de guardar
    } else {
      console.error("Error al guardar los cambios.");
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styles.editarPerfilContainer}>
        <h1>Editar Perfil</h1>
        <form>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nombre</label>
            <input
              placeholder={user.name || "Ingresa tu nombre"}
              style={styles.input}
              type="text"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Rol</label>
            <input
              placeholder={user.rol || "Ingresa tu rol"}
              style={styles.input}
              type="text"
              onChange={(e) => setRol(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Ubicación</label>
            <input
              placeholder={user.ubicacion || "Ingresa tu Ubicacion"}
              style={styles.input}
              type="text"
              onChange={(e) => setUbicacion(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              placeholder={user.email || "Ingresa tu email"}
              style={styles.input}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Sobre mí</label>
            <textarea
              placeholder={user.about || "Sobre mi"}
              style={styles.textarea}
              onChange={(e) => setSobreMi(e.target.value)}
            />
          </div>
          <button type="button" style={styles.button} onClick={handleSave}>
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  editarPerfilContainer: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    width: "80%",
    maxWidth: "800px",
    margin: "auto",
    marginTop: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    height: "100px",
  },
  button: {
    padding: "10px 15px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    marginTop: "10px",
  },
};

export default EditarPerfil;
