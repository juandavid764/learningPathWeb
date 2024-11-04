// IntelligenceSection.js
import React, { useState } from "react";
import QuestionComponent from "./QuestionComponent";

const IntelligenceSection = ({ title, onSectionScore }) => {
  const [answers, setAnswers] = useState(Array(5).fill(0));

  const handleAnswerChange = (index, score) => {
    const newAnswers = [...answers];
    newAnswers[index] = score;
    setAnswers(newAnswers);
    const averageScore =
      newAnswers.reduce((a, b) => a + b, 0) / newAnswers.length;
    onSectionScore(averageScore);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg mb-4">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      {[...Array(5)].map((_, index) => (
        <QuestionComponent
          key={index}
          questionText={`Pregunta ${index + 1}`}
          onAnswerChange={(score) => handleAnswerChange(index, score)}
        />
      ))}
    </div>
  );
};

export default IntelligenceSection;
