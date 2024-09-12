import MoleculeViewer from "../components/MoleculeViewer";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Welcome to Our DrugGPT Research Projects
      </h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-8">
        Explore our cutting-edge work in machine learning and molecular
        generation using ZINC database molecules.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Interactive Molecule Viewer
        </h2>
        <MoleculeViewer />
        <p className="mt-6 text-gray-600 dark:text-gray-300">
          This interactive 3D viewer showcases molecules with their associated
          SMILES Representation. You can rotate, zoom, and pan to explore the
          molecules from different angles. Use the buttons to navigate through
          different molecules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Tokenizers", "Architectures", "Decoders"].map((project) => (
          <div
            key={project}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {project}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn more about our research in {project.toLowerCase()} and their
              application in molecular generation using ZINC database molecules.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
