import React from "react";
import Navbar from "../components/Navbar";
import pibe from '../assets/pibe.png';
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Soporte = () => {

  const whatsappUrl = "https://wa.me/3112267915?text=¡Hola!%20Necesito%20ayuda%20con%20soporte%20técnico."; 
  const emailUrl = "mailto:nicolas.rojas_cabal@uao.edu.co"; 

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.helpSection}>
          <img
            src={pibe}
            alt="Soporte"
            style={styles.image}
          />
          <h2 style={styles.title}>¿Necesitas ayuda?</h2>
          <p style={styles.description}>
            Contacta a una persona de soporte, ¡es gratis!
          </p>
          <div style={styles.buttonContainer}>
            <button style={styles.button}onClick={() => window.location.href = whatsappUrl}>
              <FaPhone /> Llamar
            </button>
            <button style={styles.button}onClick={() => window.location.href = emailUrl}>
              <FaEnvelope /> Enviar email
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

// Estilos en línea
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  helpSection: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "250px",
    marginBottom: "20px",
    marginLeft: "45px",
    
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#000",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#333",
  },
};

export default Soporte;
