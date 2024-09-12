"use client";

import React, { useEffect, useRef, useState } from "react";
import * as $3Dmol from "3dmol/build/3Dmol.js";

const Viewer = ({ pubchemCID, colorScheme, theme }) => {
  const viewerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let viewer = null;

    const initViewer = () => {
      viewer = $3Dmol.createViewer(viewerRef.current, {
        backgroundColor: theme === "dark" ? "black" : "white",
      });
      return viewer;
    };

    const loadMolecule = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/CID/${pubchemCID}/record/SDF/?record_type=3d&response_type=display`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const sdfData = await response.text();

        if (!viewer) {
          viewer = initViewer();
        } else {
          viewer.clear();
        }

        viewer.addModel(sdfData, "sdf");

        // Create a custom color scheme
        const customColors = {};
        colorScheme.forEach((item) => {
          customColors[item.element] = item.color;
        });

        viewer.setStyle(
          {},
          {
            stick: { colorscheme: customColors },
            sphere: { scale: 0.3, colorscheme: customColors },
          }
        );

        viewer.zoomTo();
        viewer.render();
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading molecule:", error);
        setError("Failed to load molecule. Please try again.");
        setIsLoading(false);
      }
    };

    loadMolecule();

    return () => {
      if (viewer) {
        viewer.clear();
      }
    };
  }, [pubchemCID, colorScheme, theme]);

  return (
    <div className="relative w-full h-[400px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 bg-opacity-75 z-10">
          <div className="text-2xl text-gray-600 dark:text-gray-300">
            Loading Molecule...
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 bg-opacity-75 z-10">
          <div className="text-xl text-red-600 dark:text-red-400">{error}</div>
        </div>
      )}
      <div ref={viewerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Viewer;
