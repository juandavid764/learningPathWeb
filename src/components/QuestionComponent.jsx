// QuestionComponent.js
import React from "react";

const QuestionComponent = ({ questionText, onAnswerChange }) => {
  const options = [
    { label: "Muy en desacuerdo", value: 25 },
    { label: "En desacuerdo", value: 50 },
    { label: "De acuerdo", value: 75 },
    { label: "Muy de acuerdo", value: 100 },
  ];

  return (
    <div className="my-4">
      <p className="font-semibold mb-2">{questionText}</p>
      <div className="flex space-x-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              name={questionText}
              value={option.value}
              onChange={(e) => onAnswerChange(parseInt(e.target.value))}
              className="form-radio text-blue-500"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionComponent;
