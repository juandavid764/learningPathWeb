// IntelligencesForm.js
import React, { useState } from "react";
import IntelligenceSection from "./IntelligenceSection";

const IntelligencesForm = () => {
  const [scores, setScores] = useState({
    logica: 0,
    espacial: 0,
    musical: 0,
    interpersonal: 0,
    kinestesico: 0,
  });

  const handleSectionScoreChange = (intelligence, score) => {
    setScores((prevScores) => ({
      ...prevScores,
      [intelligence]: score,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Puntajes finales:", scores);
    // Aquí puedes manejar el envío de datos a la base de datos o hacer otra lógica.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded shadow"
    >
      <h1 className="text-2xl font-bold text-center mb-6">
        Evaluación de Inteligencias Múltiples
      </h1>
      <IntelligenceSection
        title="Lógica"
        onSectionScore={(score) => handleSectionScoreChange("logica", score)}
      />
      <IntelligenceSection
        title="Espacial"
        onSectionScore={(score) => handleSectionScoreChange("espacial", score)}
      />
      <IntelligenceSection
        title="Musical"
        onSectionScore={(score) => handleSectionScoreChange("musical", score)}
      />
      <IntelligenceSection
        title="Interpersonal"
        onSectionScore={(score) =>
          handleSectionScoreChange("interpersonal", score)
        }
      />
      <IntelligenceSection
        title="Kinestésico"
        onSectionScore={(score) =>
          handleSectionScoreChange("kinestesico", score)
        }
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded mt-6"
      >
        Enviar Evaluación
      </button>
    </form>
  );
};

export default IntelligencesForm;
