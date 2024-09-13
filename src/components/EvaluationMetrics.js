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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const dummyData = [
  { name: "Validity", value: 0.95, optimal: "Higher is better" },
  { name: "Uniqueness", value: 0.88, optimal: "Higher is better" },
  { name: "Novelty", value: 0.75, optimal: "Higher is better" },
  { name: "Diversity", value: 0.82, optimal: "Higher is better" },
  { name: "Drug-likeness (QED)", value: 0.7, optimal: "Higher is better" },
  {
    name: "Synthetic Accessibility (SAS)",
    value: 0.65,
    optimal: "Lower is better",
  },
];

const EvaluationMetrics = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-2 border border-gray-300 dark:border-gray-700 rounded shadow-lg">
          <p className="font-semibold">{`${label} : ${payload[0].value.toFixed(
            2
          )}`}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {payload[0].payload.optimal}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h3 className="text-2xl font-semibold mb-4 text-center">
        Evaluation Metrics Visualization
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <h4 className="text-lg font-medium mb-2">Bar Chart Representation</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dummyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
              <YAxis domain={[0, 1]} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <h4 className="text-lg font-medium mb-2">
            Radar Chart Representation
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={dummyData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis angle={30} domain={[0, 1]} />
              <Radar
                name="Metrics"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        <h4 className="text-lg font-medium mb-2">Understanding the Metrics</h4>
        <ul className="list-disc list-inside space-y-2">
          {dummyData.map((metric) => (
            <li key={metric.name}>
              <strong>{metric.name}:</strong>{" "}
              {getMetricDescription(metric.name)}
              <span className="block ml-6 text-sm text-gray-600 dark:text-gray-400">
                {metric.optimal}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function getMetricDescription(metricName) {
  switch (metricName) {
    case "Validity":
      return "The proportion of generated molecules that are chemically valid.";
    case "Uniqueness":
      return "The proportion of generated molecules that are unique within the set.";
    case "Novelty":
      return "The proportion of generated molecules that are not present in the training data.";
    case "Diversity":
      return "A measure of how different the generated molecules are from each other.";
    case "Drug-likeness (QED)":
      return "Quantitative Estimate of Drug-likeness, indicating how likely a molecule is to be a viable drug.";
    case "Synthetic Accessibility (SAS)":
      return "A score indicating how easy it would be to synthesize the molecule.";
    default:
      return "";
  }
}

export default EvaluationMetrics;
