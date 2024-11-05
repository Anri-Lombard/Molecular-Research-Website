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

// Component for Token Length and Compression Ratio chart
const TokenizationChart = () => {
  const tokenData = [
    {
      metric: "Average Token Length",
      "BPE SAFE": 31.80,
      "ULM SAFE": 45.50,
      "BPE SELFIES": 79.88,
      "ULM SELFIES": 164.99,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={tokenData}>
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

// Component for QED and SAS Scores chart
const QSASChart = () => {
  const scoreData = [
    {
      metric: "Compression Ratio",
      "BPE SAFE": 1.41,
      "ULM SAFE": 0.99,
      "BPE SELFIES": 2.05,
      "ULM SELFIES": 0.99,
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
      <BarChart data={scoreData}>
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

// Main Component
const PerformanceCharts = () => {
  return (
    <div>
      <h2>Average Token Length</h2>
      <TokenizationChart />

      <h2>Compression Ratios, QED and SAS Scores</h2>
      <QSASChart />
    </div>
  );
};

export default PerformanceCharts;

