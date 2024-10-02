// app/tokenizers/PerformanceChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart = () => {
  const data = [
    {
      metric: "Average Token Length",
      "BPE SAFE": 0.45,
      "ULM SAFE": 0.5,
      "BPE SELFIES": 0.35,
      "ULM SELFIES": 0.4,
    },
    {
      metric: "Compression Ratio",
      "BPE SAFE": 1.8,
      "ULM SAFE": 1.6,
      "BPE SELFIES": 2.05,
      "ULM SELFIES": 1.9,
    },
    {
      metric: "QED Score",
      "BPE SAFE": 0.72,
      "ULM SAFE": 0.81,
      "BPE SELFIES": 0.65,
      "ULM SELFIES": 0.85,
    },
    {
      metric: "SAS Score",
      "BPE SAFE": 3.5,
      "ULM SAFE": 2.8,
      "BPE SELFIES": 3.72,
      "ULM SELFIES": 2.54,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="metric" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="BPE SAFE" fill="#8884d8" />
        <Bar dataKey="ULM SAFE" fill="#82ca9d" />
        <Bar dataKey="BPE SELFIES" fill="#ffc658" />
        <Bar dataKey="ULM SELFIES" fill="#ff7300" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
