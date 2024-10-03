// app/tokenizers/page.js
"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Cpu,
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  BarChart2,
  Battery,
  Brain,
  ChartBar,
} from "lucide-react";
import PerformanceChart from "./PerformanceChart";
import TokenizationComparisonTable from "./TokenizationComparisonTable";
import ResearchQuestions from "./ResearchQuestions";
import KeyFindings from "./KeyFindings";
import ComputationalEfficiency from "./ComputationalEfficiency";
import ImageGallery from "./ImageGallery";

const FadeInSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

const ArchitectureComparison = ({
  title,
  description,
  icon: Icon,
  expanded,
  onToggle,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out">
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex items-center">
        <Icon className="w-8 h-8 mr-4 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {expanded ? (
        <ChevronUp className="w-6 h-6" />
      ) : (
        <ChevronDown className="w-6 h-6" />
      )}
    </div>
    {expanded && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.3 }}
        className="mt-4"
      >
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </motion.div>
    )}
  </div>
);

const ArchitecturesPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Tokenization Techniques in Molecular Generation
          </h1>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-xl text-center mb-12 text-gray-700 dark:text-gray-300">
          Exploring the impact of Byte Pair Encoding (BPE) and Unigram Language Model (ULM) tokenization techniques on molecular generation using SAFE and SELFIES representations.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4 mb-8 shadow-md">
            <p className="text-sm text-center italic text-blue-800 dark:text-blue-200">
              Research conducted by Mahomed Aadil Ally, supervised by Jan Buys at the
              University of Cape Town
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <ResearchQuestions />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FadeInSection delay={0.5}>
            <ArchitectureComparison
              title="Byte Pair Encoding (BPE)"
              description="BPE iteratively merges frequent character pairs, efficiently capturing common molecular substructures. It is particularly suited for generating shorter sequences, reducing model complexity in molecular generation tasks."
              icon={Zap}
              expanded={expandedSection === "bpe"}
              onToggle={() => toggleSection("bpe")}
            />
          </FadeInSection>
          <FadeInSection delay={0.6}>
            <ArchitectureComparison
              title="Unigram Language Model (ULM)"
              description="ULM tokenization assigns probabilities to potential subword units, offering greater flexibility in segmentation. It excels in handling complex molecular patterns and generating diverse molecular structures."
              icon={Cpu}
              expanded={expandedSection === "ulm"}
              onToggle={() => toggleSection("ulm")}
            />
          </FadeInSection>
        </div>

        <FadeInSection delay={0.7}>
          <KeyFindings />
        </FadeInSection>

        <FadeInSection delay={0.8}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <BarChart2 className="mr-2" />
              Performance Comparison
            </h2>
            <PerformanceChart />
          </div>
        </FadeInSection>

        <FadeInSection delay={0.9}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Brain className="mr-2" />
              Tokenization Comparison
            </h2>
            <TokenizationComparisonTable />
          </div>
        </FadeInSection>

        {/*<FadeInSection delay={1.0}>
          <ComputationalEfficiency />
        </FadeInSection>*/}

        <FadeInSection delay={1.1}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <ChartBar className="mr-2" />
              Molecular Property Distributions and Tokenization Analysis
            </h2>
            <ImageGallery />
          </div>
        </FadeInSection>

        <FadeInSection delay={1.2}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Zap className="mr-2" />
              Implications of Tokenization for AI-Driven Molecular Design
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            The comparison of Byte Pair Encoding (BPE) and Unigram Language Model (ULM) tokenization techniques reveals significant implications for AI-driven molecular design:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>
              Improved efficiency in processing large molecular datasets with BPE's compact representations
              </li>
              <li>
              Enhanced generation of synthetically accessible molecules using ULM, particularly with SELFIES representations
              </li>
              <li>
              Necessity for task-specific optimization due to the complex relationship between tokenization efficiency and molecular generation quality
              </li>
              <li>
              Potential for fine-tuning model performance by balancing vocabulary size and tokenization efficiency
              </li>
              <li>
              Significant impact on the quality and diversity of generated molecules based on tokenization technique choice
              </li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection delay={1.3}>
          <div className="mt-12 text-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/documents/ALLMAH002.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Read Full Research Paper
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a
              href="/documents/ALLMAH002_LR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Read Literature Review
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default ArchitecturesPage;
