// app/tokenizers/KeyFindings.js
import React from "react";

const KeyFindings = () => {
  const findings = [
    "Byte Pair Encoding (BPE) consistently produced shorter token sequences, improving model training efficiency.",
    "Unigram Language Model (ULM) achieved better results in generating diverse and novel molecular structures, particularly with larger vocabulary sizes.",
    "BPE tokenization resulted in higher compression ratios, making it more efficient for handling large-scale molecular datasets.",
    "ULM tokenization showed advantages in handling complex molecular substructures, especially in the SELFIES representation.",
    "The choice of tokenization technique significantly impacted the model's ability to generate valid and synthesizable molecules.",
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
