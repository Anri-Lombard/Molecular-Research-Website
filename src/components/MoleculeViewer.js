"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Viewer = dynamic(() => import("./Viewer"), { ssr: false });

const MoleculeViewer = () => {
  const [currentMolecule, setCurrentMolecule] = useState(0);
  const [smilesData, setSmilesData] = useState({});
  const { theme } = useTheme();

  const molecules = [
    { cid: "962", name: "Caffeine" },
    { cid: "5793", name: "Ethanol" },
    { cid: "5862", name: "Serotonin" },
    { cid: "6057", name: "Dopamine" },
    { cid: "6322", name: "Cysteine" },
    { cid: "1051", name: "Adenosine triphosphate (ATP)" },
    { cid: "124886", name: "Methionine" },
  ];

  const colorLegend = [
    { element: "C", color: "#808080", pattern: "solid", name: "Carbon" },
    { element: "O", color: "#0000FF", pattern: "dots", name: "Oxygen" },
    { element: "N", color: "#FF8000", pattern: "stripes", name: "Nitrogen" },
    { element: "H", color: "#FFFFFF", pattern: "solid", name: "Hydrogen" },
    { element: "S", color: "#FFFF00", pattern: "crosshatch", name: "Sulfur" },
    { element: "P", color: "#00FF00", pattern: "diagonal", name: "Phosphorus" },
  ];

  useEffect(() => {
    const fetchSMILES = async () => {
      const cid = molecules[currentMolecule].cid;
      if (!smilesData[cid]) {
        try {
          const response = await fetch(
            `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/property/CanonicalSMILES/JSON`
          );
          const data = await response.json();
          setSmilesData((prev) => ({
            ...prev,
            [cid]: data.PropertyTable.Properties[0].CanonicalSMILES,
          }));
        } catch (error) {
          console.error("Error fetching SMILES:", error);
        }
      }
    };

    fetchSMILES();
  }, [currentMolecule]);

  const handleNextMolecule = () => {
    setCurrentMolecule((prev) => (prev + 1) % molecules.length);
  };

  const handlePrevMolecule = () => {
    setCurrentMolecule(
      (prev) => (prev - 1 + molecules.length) % molecules.length
    );
  };

  const LegendItem = ({ color, pattern, name, element }) => {
    const patternStyle = {
      solid: {},
      dots: {
        backgroundImage: `radial-gradient(${
          theme === "dark" ? "#fff" : "#000"
        } 1px, transparent 1px)`,
        backgroundSize: "5px 5px",
      },
      stripes: {
        backgroundImage: `linear-gradient(45deg, ${
          theme === "dark" ? "#fff" : "#000"
        } 25%, transparent 25%, transparent 50%, ${
          theme === "dark" ? "#fff" : "#000"
        } 50%, ${
          theme === "dark" ? "#fff" : "#000"
        } 75%, transparent 75%, transparent 100%)`,
        backgroundSize: "10px 10px",
      },
      crosshatch: {
        backgroundImage: `linear-gradient(45deg, ${
          theme === "dark" ? "#fff" : "#000"
        } 25%, transparent 25%, transparent 75%, ${
          theme === "dark" ? "#fff" : "#000"
        } 75%, ${theme === "dark" ? "#fff" : "#000"}), 
                          linear-gradient(45deg, ${
                            theme === "dark" ? "#fff" : "#000"
                          } 25%, transparent 25%, transparent 75%, ${
          theme === "dark" ? "#fff" : "#000"
        } 75%, ${theme === "dark" ? "#fff" : "#000"})`,
        backgroundPosition: "0 0, 5px 5px",
        backgroundSize: "10px 10px",
      },
      diagonal: {
        backgroundImage: `linear-gradient(45deg, ${
          theme === "dark" ? "#fff" : "#000"
        } 25%, transparent 25%, transparent 75%, ${
          theme === "dark" ? "#fff" : "#000"
        } 75%, ${theme === "dark" ? "#fff" : "#000"})`,
        backgroundSize: "10px 10px",
      },
    };

    return (
      <div className="flex items-center mr-4 mb-2">
        <div
          className="w-6 h-6 mr-2 border border-gray-300 dark:border-gray-700"
          style={{
            backgroundColor: color,
            ...patternStyle[pattern],
          }}
        ></div>
        <span>
          {name} ({element})
        </span>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <Viewer
          key={molecules[currentMolecule].cid}
          pubchemCID={molecules[currentMolecule].cid}
          colorScheme={colorLegend}
          theme={theme}
        />
        <div className="p-4 flex flex-col items-center">
          <div className="flex justify-between items-center w-full mb-4">
            <button
              onClick={handlePrevMolecule}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Previous
            </button>
            <div className="text-center">
              <p className="text-lg font-semibold dark:text-white">
                {molecules[currentMolecule].name}
              </p>
              <p className="text-sm dark:text-gray-300">
                PubChem CID: {molecules[currentMolecule].cid}
              </p>
            </div>
            <button
              onClick={handleNextMolecule}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Next
            </button>
          </div>
          <div className="w-full text-center mb-4">
            <p className="font-semibold dark:text-white">
              SMILES Representation:
            </p>
            <p className="break-all dark:text-gray-300">
              {smilesData[molecules[currentMolecule].cid] || "Loading..."}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold mb-2 dark:text-white">
              Color and Pattern Legend:
            </p>
            <div className="flex flex-wrap">
              {colorLegend.map((item) => (
                <LegendItem key={item.element} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoleculeViewer;
