// app/tokenziers/TokenizationEfficiencyTable.js
import React from "react";

const TokenizationEfficiencyTable = () => {
  const efficiencyData = [
    { representation: "SAFE", "BPE Token Length": 45, "ULM Token Length": 50, "BPE Compression": "2.1x", "ULM Compression": "1.9x" },
    { representation: "SELFIES", "BPE Token Length": 35, "ULM Token Length": 40, "BPE Compression": "2.3x", "ULM Compression": "2.0x" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
      <h2 className="text-2xl font-semibold mb-4">Tokenization Efficiency</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Representation</th>
              <th className="px-4 py-2 text-left">BPE Token Length</th>
              <th className="px-4 py-2 text-left">ULM Token Length</th>
              <th className="px-4 py-2 text-left">BPE Compression</th>
              <th className="px-4 py-2 text-left">ULM Compression</th>
            </tr>
          </thead>
          <tbody>
            {efficiencyData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100 dark:bg-gray-900" : ""}
              >
                <td className="px-4 py-2">{item.representation}</td>
                <td className="px-4 py-2">{item["BPE Token Length"]}</td>
                <td className="px-4 py-2">{item["ULM Token Length"]}</td>
                <td className="px-4 py-2">{item["BPE Compression"]}</td>
                <td className="px-4 py-2">{item["ULM Compression"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TokenizationEfficiencyTable;

