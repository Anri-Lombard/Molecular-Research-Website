import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// ImageModal component
const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Close the modal if the click is on the overlay or the image
    if (e.target === e.currentTarget || e.target.tagName === "IMG") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity cursor-pointer"
      onClick={handleOverlayClick}
    >
      <div className="relative max-w-3xl max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

// Main ImageGallery component
const ImageGallery = () => {
  const [activeTab, setActiveTab] = useState("small");
  const [modalImage, setModalImage] = useState(null);

  const distributionProperties = [
    "Table of Metrics",
  ];

  const smallModelImages = distributionProperties.map((prop) => ({
    src: `/images/gabe/combined_final_small.png`,
    alt: `${prop} Distribution (Small Models)`,
  }));

  const largeModelImages = distributionProperties.map((prop) => ({
    src: `/images/gabe/combined_final_big.png`,
    alt: `${prop} Distribution (Large Models)`,
  }));

  // const perplexityImages = [
  //   {
  //     src: "/images/perplexity_small_models.png",
  //     alt: "Perplexity for Small Models",
  //   },
  //   {
  //     src: "/images/perplexity_large_models.png",
  //     alt: "Perplexity for Large Models",
  //   },
  // ];

  const getActiveImages = () => {
    switch (activeTab) {
      case "small":
        return smallModelImages;
      case "large":
        return largeModelImages;
      // case "perplexity":
      //   return perplexityImages;
      default:
        return smallModelImages;
    }
  };

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center space-x-4">
        {["small", "large"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded transition-colors ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "small" && "Small Model Distributions"}
            {tab === "large" && "Large Model Distributions"}
          
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getActiveImages().map((img, index) => (
          <div
            key={index}
            className="relative h-64 bg-gray-200 rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => handleImageClick(img)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit="contain"
              className="transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              {img.alt}
            </div>
          </div>
        ))}
      </div>
      {/* ImageModal can be closed by clicking anywhere on the overlay or the image */}
      <ImageModal
        isOpen={!!modalImage}
        onClose={closeModal}
        imageSrc={modalImage?.src}
        imageAlt={modalImage?.alt}
      />
    </div>
  );
};

export default ImageGallery;
