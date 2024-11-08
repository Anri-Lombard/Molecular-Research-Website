// app/architectures/page.js
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
import PerplexityTable from "./PerplexityTable";
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

const ImplicationsSection = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-semibold mb-4 flex items-center">
      <Zap className="mr-2" />
      Implications for AI-Driven Molecular Design
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      The comparable performance of MAMBA models to Transformer-based models,
      along with their efficiency advantages, has important implications for
      AI-driven molecular design.
    </p>
    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
      <li>
        MAMBA models can handle longer molecular sequences more efficiently,
        which could improve the modeling of complex molecules.
      </li>
      <li>
        The improved efficiency of these models might accelerate the drug
        discovery process, potentially reducing the time needed to find new
        therapeutic compounds.
      </li>
      <li>
        State Space Models offer an efficient alternative to Transformers for
        large-scale applications in molecular design and analysis.
      </li>
      <li>
        The speed of MAMBA models could allow researchers to explore a wider
        range of molecular structures, potentially leading to new discoveries in
        various fields of chemistry.
      </li>
    </ul>
    <p className="mt-4 text-gray-600 dark:text-gray-300">
      These advancements in MAMBA models have the potential to bring about
      significant improvements in computational chemistry methods and drug
      discovery processes.
    </p>
  </div>
);

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
            Model Architectures in Molecular Generation
          </h1>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-xl text-center mb-12 text-gray-700 dark:text-gray-300">
            Comparing Transformer and MAMBA (State Space Models) architectures
            for de novo molecular generation using the SAFE representation
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4 mb-8 shadow-md">
            <p className="text-sm text-center italic text-blue-800 dark:text-blue-200">
              Research conducted by Anri Lombard, supervised by Jan Buys at the
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
              title="MAMBA (State Space Models)"
              description="MAMBA represents a significant advancement in sequence modeling, building upon structured state space models (SSMs). It incorporates a selective state space model, allowing dynamic focus on specific inputs based on content. This efficiency in modeling complex sequences makes it particularly well-suited for capturing the nature of molecular structures."
              icon={Zap}
              expanded={expandedSection === "mamba"}
              onToggle={() => toggleSection("mamba")}
            />
          </FadeInSection>
          <FadeInSection delay={0.6}>
            <ArchitectureComparison
              title="Transformers (SAFE-GPT)"
              description="Transformer-based models, specifically SAFE-GPT, have been widely adopted in NLP tasks and molecular generation. The core of the Transformer is its self-attention mechanism, which allows the model to weigh the importance of different parts of the input sequence dynamically. This has proven especially effective in capturing long-range dependencies in molecular structures."
              icon={Cpu}
              expanded={expandedSection === "transformer"}
              onToggle={() => toggleSection("transformer")}
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
              Perplexity Comparison
            </h2>
            <PerplexityTable />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Note: Lower perplexity values indicate better model performance.
              MAMBA models consistently showed lower perplexity compared to
              their SAFE counterparts.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={1.0}>
          <ComputationalEfficiency />
        </FadeInSection>

        <FadeInSection delay={1.1}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <ChartBar className="mr-2" />
              Molecular Property Distributions and Perplexity
            </h2>
            <ImageGallery />
          </div>
        </FadeInSection>

        <FadeInSection delay={1.2}>
          <ImplicationsSection />
        </FadeInSection>

        <FadeInSection delay={1.3}>
          <div className="mt-12 text-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/documents/LMBANR001.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Read Full Research Paper
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a
              href="/documents/LMBANR001_LR.pdf"
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
