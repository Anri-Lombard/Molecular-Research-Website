"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import MolecularTitle from "../components/MolecularTitle";
import MoleculeViewer from "../components/MoleculeViewer";
import EvaluationMetrics from "../components/EvaluationMetrics";
import {
  ChevronDown,
  Search,
  FlaskConical,
  Zap,
  FileText,
  BarChart,
  ArrowRight,
} from "lucide-react";

const FadeInSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

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

const InfoCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
    <Icon className="w-12 h-12 mb-4 text-primary" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <MolecularTitle />
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Exploring AI-driven molecular generation for drug discovery insights
        </p>
        <ChevronDown className="w-10 h-10 animate-bounce text-primary" />
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              AI-Assisted Molecular Generation
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={0.2}>
              <InfoCard
                title="Rapid Exploration"
                description="Leveraging AI to efficiently navigate vast chemical spaces for potential drug candidates"
                icon={Search}
              />
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <InfoCard
                title="Novel Compound Generation"
                description="Creating and analyzing new molecular structures with therapeutic potential"
                icon={FlaskConical}
              />
            </FadeInSection>
            <FadeInSection delay={0.6}>
              <InfoCard
                title="Cutting-Edge Performance"
                description="Comparing state-of-the-art models with previous approaches in molecular generation"
                icon={Zap}
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Molecular Representation
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeInSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">Why It Matters</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Effective molecular representation is crucial for AI models to
                  understand and generate novel drug candidates. It bridges the
                  gap between complex 3D structures and machine-readable
                  formats.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Our research explores various string-based representations
                  like SMILES, SELFIES, and SAFE to optimize molecular
                  generation tasks and improve drug discovery efficiency.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <FileText className="w-16 h-16 mb-4 text-primary mx-auto" />
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Advanced string representations enable AI models to process
                  and generate potential drug molecules more efficiently,
                  accelerating the drug discovery pipeline.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Interactive Molecule Viewer
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <MoleculeViewer />
          </FadeInSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Evaluation Metrics
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <EvaluationMetrics />
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <FadeInSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Measuring Success
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  These metrics help us evaluate the effectiveness of different
                  molecular generation approaches. By visualizing these metrics,
                  we can easily compare the performance of various models and
                  techniques.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.6}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <BarChart className="w-16 h-16 mb-4 text-primary mx-auto" />
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Visualizing these metrics allows us to quickly assess the
                  strengths and weaknesses of each approach in molecular
                  generation.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Research Focus
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tokenizers",
                description:
                  "Exploring various tokenization methods for molecular representations",
              },
              {
                name: "Architectures",
                description:
                  "Comparing Mamba (state space architecture) with Transformers for de novo molecular generation, evaluating performance metrics and computational efficiency",
              },
              {
                name: "Decoders",
                description:
                  "Investigating various decoding strategies in de novo molecular generation as a means to maximse the quality of the generated output",
              },
            ].map((project, index) => (
              <FadeInSection key={project.name} delay={0.2 * (index + 1)}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/documents/project_proposal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Project Proposal
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a
                href="/documents/poster.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Poster
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
