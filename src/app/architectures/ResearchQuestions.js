import React from "react";

const ResearchQuestions = () => {
  const questions = [
    "How do MAMBA models compare to Transformer-based models in terms of molecular generation quality?",
    "What are the computational efficiency differences between MAMBA and Transformer models?",
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
      <h2 className="text-2xl font-semibold mb-4">Research Questions</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchQuestions;
