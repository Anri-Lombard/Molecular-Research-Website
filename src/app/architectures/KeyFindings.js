// app/architectures/KeyFindings.js
import React from "react";

const KeyFindings = () => {
  const findings = [
    "Both MAMBA and Transformer models achieved high validity (98-100%) and uniqueness (99.9-100%) scores.",
    "MAMBA models demonstrated lower GPU power consumption (up to 30% reduction) compared to Transformer models.",
    "MAMBA models consistently showed lower perplexity throughout the training process.",
    "Large MAMBA models (90M parameters) completed training in 64 hours compared to 90 hours for equivalent Transformer models.",
    "MAMBA models showed slightly higher diversity scores, particularly in larger model configurations.",
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
      <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
        {findings.map((finding, index) => (
          <li key={index}>{finding}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeyFindings;
