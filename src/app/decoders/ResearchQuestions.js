import React from "react";

const ResearchQuestions = () => {
  const questions = [
    "What is the impact of differnt decoding strategies, including stochastic search-based methods, on key metrics of generated meloecules?",
    "What is the effect of adding a repetition penalty constraint on the quality of molecular generation?",
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
