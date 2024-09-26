// app/architectures/PerplexityTable.js
import React from "react";

const PerplexityTable = () => {
  const perplexityData = [
    { model: "SAFE Small", perplexity: 1.5 },
    { model: "MAMBA Small", perplexity: 1.4 },
    { model: "MAMBA Small Hybrid", perplexity: 1.4 },
    { model: "SAFE Large", perplexity: 1.5 },
    { model: "MAMBA Large", perplexity: 1.3 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">Model</th>
            <th className="px-4 py-2 text-left">Final Perplexity</th>
          </tr>
        </thead>
        <tbody>
          {perplexityData.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100 dark:bg-gray-900" : ""}
            >
              <td className="px-4 py-2">{item.model}</td>
              <td className="px-4 py-2">{item.perplexity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerplexityTable;
