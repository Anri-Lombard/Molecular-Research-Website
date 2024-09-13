// app/architectures/ComputationalEfficiency.js
import React from "react";
import { Battery, Zap } from "lucide-react";

const ComputationalEfficiency = () => {
  const efficiencyData = [
    { model: "Safe_Small", utilization: "60% ± 2%", power: 280 },
    { model: "Mamba_Small", utilization: "22% ± 1%", power: 190 },
    { model: "Mamba_Small_Hybrid", utilization: "23% ± 1%", power: 195 },
    { model: "Safe_Large", utilization: "95% ± 5%", power: 360 },
    { model: "Mamba_Large", utilization: "80% ± 15%", power: 280 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
      <h2 className="text-2xl font-semibold mb-4">Computational Efficiency</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Model</th>
              <th className="px-4 py-2 text-left">GPU Utilization</th>
              <th className="px-4 py-2 text-left">Power Consumption</th>
            </tr>
          </thead>
          <tbody>
            {efficiencyData.map((item, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "bg-gray-100 dark:bg-gray-900" : ""
                }
              >
                <td className="px-4 py-2">{item.model}</td>
                <td className="px-4 py-2">
                  <Battery className="inline mr-2" />
                  {item.utilization}
                </td>
                <td className="px-4 py-2">
                  <Zap className="inline mr-2" />
                  {item.power}W
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComputationalEfficiency;
