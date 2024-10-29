import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Colombia from "../assets/Colombia.png"; 

const Perfil = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nombre: "Juan Trujillo",
    rol: "Administrador",
    ubicacion: "Valle del Cauca, Colombia",
    email: "juan@aspaen.edu.co",
    sobreMi: "Soy uno de los administradores principales de Learning Path, me apasiona la enseñanza y la pedagogía. Estoy muy emocionado por el alcance de este proyecto."
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleEdit = () => {
    navigate('/editar-perfil');
  };

  return (
    <div>
      <Navbar />
      <div style={styles.perfilContainer}>
        <div style={styles.profileBox}>
          <div style={styles.columnContainer}>
            <div style={styles.columnLeft}>
              <h1 style={styles.name}>{user.nombre}</h1>
              <p style={styles.role}>{user.rol}</p>
              <div style={styles.about}>
                <h2 style={styles.aboutHeader}>Sobre mí</h2>
                <p>{user.sobreMi}</p>
              </div>
            </div>
            <div style={styles.columnRight}>
              <div style={styles.profileInfo}>
                <p><strong>Rol:</strong> {user.rol}</p>
                <p><strong>Ubicación:</strong> {user.ubicacion}
                  <img src={Colombia} alt="Colombia" style={styles.iconoColombia} />
                </p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
              <button style={styles.editButton} onClick={handleEdit}>Editar</button>
              <button
                style={styles.logoutButton}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.logoutButtonHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.logoutButton.backgroundColor}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  perfilContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  profileBox: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '800px',
  },
  columnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  columnLeft: {
    flex: 1,
    marginRight: '20px',
  },
  columnRight: {
    flex: 1,
    marginLeft: '20px',
    textAlign: 'left',
  },
  name: {
    margin: '0',
    fontWeight: 'bold',
    fontSize: '1.5em', // Mayor tamaño que "Administrador"
  },
  role: {
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#666', // Color más opaco
  },
  about: {
    marginBottom: '20px',
  },
  aboutHeader: {
    fontWeight: 'bold',
    marginBottom: '10px',
    marginLeft: '0', // Mover a la izquierda
  },
  aboutText: {
    textAlign: 'left', // Alinear a la izquierda
  },
  profileInfo: {
    marginBottom: '20px',
  },
  iconoColombia: {
    width: '20px', // Ajusta el tamaño según sea necesario
    height: 'auto',
    marginRight: '5px', // Espacio entre la imagen y el texto
  },
  editButton: {
    display: 'block',
    marginBottom: '10px',
    padding: '10px 15px',
    cursor: 'pointer',
    width: '100%',
    backgroundColor: '#000', // Botón "Editar" en negro
    color: 'white',
    border: 'none',
    textAlign: 'center',
  },
  logoutButton: {
    display: 'block',
    padding: '10px 15px',
    cursor: 'pointer',
    backgroundColor: '#fff', // Botón "Cerrar Sesión" en blanco
    color: '#000', // Texto en negro
    border: '1px solid #000',
    width: '100%',
    textAlign: 'center',
  },
  logoutButtonHover: {
    backgroundColor: '#f0f0f0', // Cambio de color al hacer hover
  },
};

export default Perfil;
