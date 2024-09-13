// app/architectures/PerformanceChart.js
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
      metric: "Validity",
      "SAFE Small": 1.0,
      "MAMBA Small": 1.0,
      "Hybrid Small": 1.0,
      "MAMBA Large": 1.0,
      "SAFE Large": 0.98,
    },
    {
      metric: "Uniqueness",
      "SAFE Small": 0.999,
      "MAMBA Small": 0.999,
      "Hybrid Small": 0.999,
      "MAMBA Large": 1.0,
      "SAFE Large": 1.0,
    },
    {
      metric: "Diversity",
      "SAFE Small": 0.864,
      "MAMBA Small": 0.86,
      "Hybrid Small": 0.862,
      "MAMBA Large": 0.873,
      "SAFE Large": 0.88,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="metric" />
        <YAxis domain={[0, 1]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="SAFE Small" fill="#8884d8" />
        <Bar dataKey="MAMBA Small" fill="#82ca9d" />
        <Bar dataKey="Hybrid Small" fill="#ffc658" />
        <Bar dataKey="MAMBA Large" fill="#ff7300" />
        <Bar dataKey="SAFE Large" fill="#a4de6c" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
