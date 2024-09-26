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
  const findings = ["Molecular generation is an open-ended  task",
                    "Sampling-based methods outperformed search-based methods",
                    "Temperature sampling is effective for generating unique molecules",
                    "Repetition penalty improved performance for the large model",
                    "Search-based methods produced high SA scores and low QED scores",
                    "Top-p sampling required a high hyper-parameter to have an adequate the uniqueness score",
                    
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
