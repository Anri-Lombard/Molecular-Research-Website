// app/tokenizers/TokenizerComparisonTable.js
import React from "react";

const TokenizerComparisonTable = () => {
  const tokenizerComparisonData = [
    {
      metric: "Efficiency",
      "BPE": "Better token length, higher compression ratio",
      "ULM": "Longer token length, lower compression ratio",
    },
    {
      metric: "Training Time",
      "BPE": "Faster with larger vocab sizes",
      "ULM": "Slower training with larger vocab sizes",
    },
    {
      metric: "Suitability",
      "BPE": "Efficient for structured data like SAFE strings",
      "ULM": "Better for data with more variability (SELFIES)",
    },
    {
      metric: "Use in NLP",
      "BPE": "Common in language models (e.g., GPT, BERT)",
      "ULM": "Less common but efficient for specialized tasks",
    },
    {
      metric: "Overall Performance",
      "BPE": "High performance on molecular datasets",
      "ULM": "Lower tokenization efficiency, but more flexibility",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
      <h2 className="text-2xl font-semibold mb-4">Tokenizer Comparison</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Metric</th>
              <th className="px-4 py-2 text-left">BPE</th>
              <th className="px-4 py-2 text-left">ULM</th>
            </tr>
          </thead>
          <tbody>
            {tokenizerComparisonData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100 dark:bg-gray-900" : ""}
              >
                <td className="px-4 py-2">{item.metric}</td>
                <td className="px-4 py-2">{item.BPE}</td>
                <td className="px-4 py-2">{item.ULM}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TokenizerComparisonTable;
