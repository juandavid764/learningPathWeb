import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Colombia from "../assets/Colombia.png";
import { useAuth } from "../context/AuthContext";

const Perfil = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleEdit = () => {
    navigate("/editar-perfil");
  };

  if (!user) return <p>Cargando perfil...</p>;

  return (
    <div>
      <Navbar />
      <div style={styles.perfilContainer}>
        <div style={styles.profileBox}>
          <div style={styles.columnContainer}>
            <div style={styles.columnLeft}>
              <h1 style={styles.name}>{user.name}</h1>
              <p style={styles.role}>{user.rol}</p>
              <div style={styles.about}>
                <h2 style={{ fontWeight: "bold", textAlign: "left" }}>Sobre mí</h2>
                <p>{user.about}</p>
              </div>
            </div>
            <div style={styles.columnRight}>
              <div style={styles.profileInfo}>
                <p>
                  <strong>Rol:</strong> {user.rol}
                </p>
                <p className="flex flex-row">
                  <strong>Ubicación:</strong> {user.ubicacion}
                  <img
                    src={Colombia}
                    alt="Colombia"
                    style={styles.iconoColombia}
                  />
                </p>
                <p className="flex flex-row">
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
              <button style={styles.editButton} onClick={handleEdit}>
                Editar
              </button>
              <button
                style={styles.logoutButton}
                onClick={logout}
                onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.logoutButtonHover.backgroundColor)
                }
                onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.logoutButton.backgroundColor)
                }
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
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  profileBox: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    width: "80%",
    maxWidth: "800px",
  },
  columnContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  columnLeft: {
    flex: 1,
    marginRight: "20px",
  },
  columnRight: {
    flex: 1,
    marginLeft: "20px",
    textAlign: "left",
  },
  name: {
    margin: "0",
    fontWeight: "bold",
    fontSize: "1.5em",
  },
  role: {
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#666",
  },
  about: {
    marginBottom: "20px",
  },
  aboutHeader: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  profileInfo: {
    marginBottom: "20px",
  },
  iconoColombia: {
    width: "20px",
    height: "auto",
    marginRight: "5px",
  },
  editButton: {
    display: "block",
    marginBottom: "10px",
    padding: "10px 15px",
    cursor: "pointer",
    width: "100%",
    backgroundColor: "#000",
    color: "white",
    border: "none",
    textAlign: "center",
  },
  logoutButton: {
    display: "block",
    padding: "10px 15px",
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #000",
    width: "100%",
    textAlign: "center",
  },
  logoutButtonHover: {
    backgroundColor: "#f0f0f0",
  },
};

export default Perfil;
