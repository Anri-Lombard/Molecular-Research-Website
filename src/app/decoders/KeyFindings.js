// app/architectures/KeyFindings.js
import React from "react";
// Our experimentation revealed several key findings. Firstly, it was
// found that this task is an open-ended generation task. This makes
// sampling-based methods more suitable than search-based approaches.
// A notable contrast in performance metrics emerged between these
// search and sampling-based methods. Sampling-based methods con-
// sistently outperformed search-based methods across all metrics
// except with the small model’s QED score, where search-based meth-
// ods performed comparably, but demonstrated poor diversity.
// Moreover, under temperature sampling, the generated output
// quality begins to degrade when the hyper-parameter exceeds 1 for
// both the small and large models, suggesting that while creativity is
// essential for this task, it requires some form of guidance. Interest-
// ingly, adding a repetition penalty improved performance only for
// the large model.
// Search-based methods often produced high SA scores alongside
// low QED scores. Furthermore top-p sampling required a high hyper-
// parameter to match the uniqueness score of the default model, while
// temperature sampling generated unique molecules with a much
// lower hyper-parameter. Moreover, top-p consistently resulted in
const KeyFindings = () => {
  const findings = [
    // "Sampling-based methods outperformed search-based methods in de novo generation",
    // "Temperature and top-p sampling are effective for generating unique molecules",
    // "Introducing a repetition penalty improves performance of the large SAFE-GPT model",
    // "Search-based methods produced high SA scores and low QED scores in de novo molecular generation",
    // "Top-p sampling required a high hyper-parameter to have an adequate uniqueness score",
    "Sampling-based methods (e.g., top-p and temperature sampling) outperformed search-based methods in de novo molecular generation.",
    "Search-based methods yielded higher SA scores but lower QED scores.",
    "Top-p sampling required high hyper-parameters to achieve an adequate uniqueness.",
    "Introducing a repetition penalty improved the performance of the large SAFE-GPT model."

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
