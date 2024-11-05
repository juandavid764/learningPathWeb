// IntelligenceSection.js
import React, { useState } from "react";
import QuestionComponent from "./QuestionComponent";

const IntelligenceSection = ({ title, onSectionScore, questions }) => {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

  const handleAnswerChange = (index, score) => {
    const newAnswers = [...answers];
    newAnswers[index] = score;
    setAnswers(newAnswers);
    const averageScore =
      newAnswers.reduce((a, b) => a + b, 0) / newAnswers.length;
    onSectionScore(averageScore);
  };

  return (
    <div className="flex flex-col border border-gray-300 rounded-lg mb-4">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      {questions.map((question, index) => (
        <QuestionComponent
          key={index}
          questionText={question}
          onAnswerChange={(score) => handleAnswerChange(index, score)}
        />
      ))}
    </div>
  );
};

export default IntelligenceSection;
