// IntelligencesForm.js
import React, { useState } from "react";
import IntelligenceSection from "./IntelligenceSection";
import { updateStudentIntelligences } from "../dataBase/functions";
import {
  linguistica,
  logica,
  espacial,
  musical,
  interpersonal,
  kinestesico,
} from "../dataBase/data";
import { Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const IntelligencesForm = () => {
  const [scores, setScores] = useState({
    id: "",
    linguistica: 0,
    logica: 0,
    espacial: 0,
    musical: 0,
    interpersonal: 0,
    kinestesico: 0,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
    navigate("/evaluaciones"); // Redirigir cuando se cierre el snackbar
  };

  // Manejar el cambio del ID del estudiante
  const handleIdChange = (e) => {
    setScores((prevScores) => ({
      ...prevScores,
      id: e.target.value, // Actualiza el ID del estudiante en el estado
    }));
  };

  const handleSectionScoreChange = (intelligence, score) => {
    setScores((prevScores) => ({
      ...prevScores,
      [intelligence]: score,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateStudentIntelligences(
      scores.id, // Aquí pasas el ID
      scores.linguistica,
      scores.logica,
      scores.espacial,
      scores.musical,
      scores.interpersonal,
      scores.kinestesico
    );
    if (result) {
      setOpenSnackbar(true); // Muestra la notificación en caso de éxito
    } else {
      console.error("Error al enviar la evaluación.");
    }
  };

  return (
    <div className="flex items-start justify-center max-h-screen bg-gray-100 overflow-y-auto">
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Evaluación de Inteligencias Múltiples
        </h1>

        <div className="mb-4">
          <label
            htmlFor="studentId"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            ID del Estudiante:
          </label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            required
            value={scores.id} // Usar el valor del estado para el ID
            onChange={handleIdChange} // Actualizar el ID en el estado
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <IntelligenceSection
          title="Lingüística"
          onSectionScore={(score) =>
            handleSectionScoreChange("linguistica", score)
          }
          questions={linguistica}
        />
        <IntelligenceSection
          title="Lógica"
          onSectionScore={(score) => handleSectionScoreChange("logica", score)}
          questions={logica}
        />
        <IntelligenceSection
          title="Espacial"
          onSectionScore={(score) =>
            handleSectionScoreChange("espacial", score)
          }
          questions={espacial}
        />
        <IntelligenceSection
          title="Musical"
          onSectionScore={(score) => handleSectionScoreChange("musical", score)}
          questions={musical}
        />
        <IntelligenceSection
          title="Interpersonal"
          onSectionScore={(score) =>
            handleSectionScoreChange("interpersonal", score)
          }
          questions={interpersonal}
        />
        <IntelligenceSection
          title="Kinestésico"
          onSectionScore={(score) =>
            handleSectionScoreChange("kinestesico", score)
          }
          questions={kinestesico}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded mt-6"
        >
          Enviar Evaluación
        </button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Evaluación completada con éxito!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default IntelligencesForm;
