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
      name: "BPE SAFE",
      "Average Token Length": 31.80,
      "Compression Ratio": 1.41,
    },
    {
      name: "ULM SAFE",
      "Average Token Length": 45.50,
      "Compression Ratio": 0.99,
    },
    {
      name: "BPE SELFIES",
      "Average Token Length": 79.88,
      "Compression Ratio": 2.05,
    },
    {
      name: "ULM SELFIES",
      "Average Token Length": 164.99,
      "Compression Ratio": 0.99,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={tokenData} margin={{ left: 20, right: 20, top: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="token" orientation="left" label={{ value: "Token Length", angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="compression" orientation="right" label={{ value: "Compression Ratio", angle: 90, position: 'insideRight' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Average Token Length" fill="#8884d8" yAxisId="token" />
        <Bar dataKey="Compression Ratio" fill="#82ca9d" yAxisId="compression" />
      </BarChart>
    </ResponsiveContainer>
  );
};

// Component for QED and SAS Scores chart
const QSASChart = () => {
  const scoreData = [
    {
      name: "BPE SAFE",
      "QED Score": 0.72,
      "SAS Score": 3.5,
    },
    {
      name: "ULM SAFE",
      "QED Score": 0.81,
      "SAS Score": 2.8,
    },
    {
      name: "BPE SELFIES",
      "QED Score": 0.65,
      "SAS Score": 3.72,
    },
    {
      name: "ULM SELFIES",
      "QED Score": 0.85,
      "SAS Score": 2.54,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={scoreData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="QED Score" fill="#8884d8" />
        <Bar dataKey="SAS Score" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

// Main Component
const PerformanceChart = () => {
  return (
    <div>
      <h2>Token Length and Compression Ratio</h2>
      <TokenizationChart />

      <h2>QED and SAS Scores</h2>
      <QSASChart />
    </div>
  );
};

export default PerformanceChart;