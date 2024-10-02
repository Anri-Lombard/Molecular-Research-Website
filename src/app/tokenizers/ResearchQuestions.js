import React from "react";

const ResearchQuestions = () => {
  const questions = [
    "How do Byte Pair Encoding (BPE) and Unigram Language Model (ULM) compare in terms of tokenization efficiency for molecular data?",
    "What impact does the choice of tokenization technique have on the performance of transformer models in molecular generation?",
    "How does tokenization influence the validity and novelty of generated molecules across different molecular representations (SAFE and SELFIES)?",
    "What are the trade-offs between vocabulary size and model performance in molecular generation using BPE and ULM?",
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
