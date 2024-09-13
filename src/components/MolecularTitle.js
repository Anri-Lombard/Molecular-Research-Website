import React, { useRef, useEffect, useState, useMemo } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useTheme } from "next-themes";

const MolecularTitle = () => {
  const mountRef = useRef(null);
  const titleRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const { theme } = useTheme();

  const colorScheme = useMemo(
    () => ({
      dark: {
        atoms: 0x00ffff,
        bonds: 0x4d4dff,
        textPrimary: "#ffffff",
        textSecondary: "#cccccc",
        textShadowPrimary: "0 0 10px #00ffff, 0 0 20px #00ffff",
        textShadowSecondary: "0 0 5px #4d4dff",
      },
      light: {
        atoms: 0x0080ff,
        bonds: 0xff6600,
        textPrimary: "#000000",
        textSecondary: "#333333",
        textShadowPrimary: "0 0 10px #0080ff, 0 0 20px #0080ff",
        textShadowSecondary: "0 0 5px #ff6600",
      },
    }),
    []
  );

  useEffect(() => {
    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;
    let frameId;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // Enable alpha (transparency)
    });

    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    mountRef.current.appendChild(renderer.domElement);

    // Orbital controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create molecule structure
    const moleculeGroup = new THREE.Group();
    const atomGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const bondGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 32);

    const createAtom = (x, y, z, color) => {
      const atomMaterial = new THREE.MeshPhongMaterial({
        color,
        shininess: 100,
      });
      const atom = new THREE.Mesh(atomGeometry, atomMaterial);
      atom.position.set(x, y, z);
      return atom;
    };

    const createBond = (start, end, color) => {
      const bondMaterial = new THREE.MeshPhongMaterial({
        color,
        shininess: 100,
      });
      const bond = new THREE.Mesh(bondGeometry, bondMaterial);
      bond.position.copy(start);
      bond.position.lerp(end, 0.5);
      bond.lookAt(end);
      bond.scale.set(1, start.distanceTo(end), 1);
      return bond;
    };

    // Define atom positions
    const atomPositions = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1, 1, 1),
      new THREE.Vector3(-1, 1, -1),
      new THREE.Vector3(1, -1, -1),
      new THREE.Vector3(-1, -1, 1),
    ];

    // Create atoms and bonds
    const updateColors = () => {
      const colors = theme === "dark" ? colorScheme.dark : colorScheme.light;

      moleculeGroup.children.forEach((child) => {
        if (child.geometry.type === "SphereGeometry") {
          child.material.color.setHex(colors.atoms);
        } else if (child.geometry.type === "CylinderGeometry") {
          child.material.color.setHex(colors.bonds);
        }
      });
    };

    atomPositions.forEach((position, index) => {
      const atom = createAtom(
        position.x,
        position.y,
        position.z,
        colorScheme.dark.atoms
      );
      moleculeGroup.add(atom);

      for (let i = index + 1; i < atomPositions.length; i++) {
        const bond = createBond(
          position,
          atomPositions[i],
          colorScheme.dark.bonds
        );
        moleculeGroup.add(bond);
      }
    });

    scene.add(moleculeGroup);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      if (isAnimating) {
        moleculeGroup.rotation.x += 0.005;
        moleculeGroup.rotation.y += 0.005;
      }
      controls.update();
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    animate();
    updateColors();

    // Handle resize
    const handleResize = () => {
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isAnimating, theme, colorScheme]);

  // Toggle animation on click
  const handleClick = () => {
    setIsAnimating((prev) => !prev);
  };

  const colors = theme === "dark" ? colorScheme.dark : colorScheme.light;

  return (
    <div className="relative w-full h-[400px]" onClick={handleClick}>
      <div ref={mountRef} className="w-full h-full" />
      <div
        ref={titleRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <h1
          className="text-4xl md:text-6xl font-bold mb-2"
          style={{
            color: colors.textPrimary,
            textShadow: colors.textShadowPrimary,
          }}
        >
          DrugGPT
        </h1>
        <p
          className="text-xl md:text-2xl"
          style={{
            color: colors.textSecondary,
            textShadow: colors.textShadowSecondary,
          }}
        >
          Research
        </p>
      </div>
    </div>
  );
};

export default MolecularTitle;
