import React, { useState, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// Components
import Sun from './components/Sun';
import Planet from './components/Planet';
import AsteroidBelt from './components/AsteroidBelt';
import CustomStars from './components/CustomStars';
import CameraController from './components/CameraController';
import SlidingSidebar from './components/SlidingSidebar';
import HolographicCard from './components/HolographicCard';

// Data
import projectsData from './data/projectsData';

// Textures Imports
import MercuryImg from './assets/2k_mercury.jpg';
import VenusImg from './assets/2k_venus_surface.jpg';
import EarthImg from './assets/2k_earth_daymap.jpg';
import MarsImg from './assets/2k_mars.jpg';
import CeresImg from './assets/2k_ceres.jpg';
import JupiterImg from './assets/2k_jupiter.jpg';
import SaturnImg from './assets/2k_saturn.jpg';
import UranusImg from './assets/2k_uranus.jpg';
import NeptuneImg from './assets/2k_neptune.jpg';
import MakemakeImg from './assets/2k_makemake.jpg';
import HaumeaImg from './assets/2k_haumea.jpg';

function App() {
  // ── Core State ──────────────────────────────────────────
  const [activePlanet, setActivePlanet] = useState(null);
  const [planetPosition, setPlanetPosition] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showHologram, setShowHologram] = useState(false);
  const orbitControlsRef = useRef(null);

  // ── Planet Configuration ────────────────────────────────
  const planetsData = [
    { name: "Mercury", distance: 20, size: 0.6, speed: 0.6, texture: MercuryImg },
    { name: "Venus", distance: 30, size: 0.9, speed: 0.5, texture: VenusImg },
    { name: "Earth", distance: 40, size: 1.0, speed: 0.4, texture: EarthImg },
    { name: "Mars", distance: 50, size: 0.7, speed: 0.35, texture: MarsImg },
    { name: "Ceres", distance: 65, size: 0.4, speed: 0.28, texture: CeresImg },
    { name: "Jupiter", distance: 85, size: 2.5, speed: 0.2, texture: JupiterImg },
    { name: "Saturn", distance: 110, size: 2.2, speed: 0.15, texture: SaturnImg },
    { name: "Uranus", distance: 135, size: 1.8, speed: 0.1, texture: UranusImg },
    { name: "Neptune", distance: 155, size: 1.8, speed: 0.08, texture: NeptuneImg },
    { name: "Makemake", distance: 175, size: 0.6, speed: 0.06, texture: MakemakeImg },
    { name: "Haumea", distance: 190, size: 0.5, speed: 0.05, texture: HaumeaImg },
  ];

  const referenceSpeed = 0.5;
  const referenceDistance = 20;

  const calculateSpeed = (distance) => {
    return referenceSpeed * Math.sqrt(referenceDistance / distance) * 0.25;
  };

  // ── Sidebar Handlers ───────────────────────────────────
  const handleToggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  /**
   * Called when the user selects a project from the sidebar.
   * Triggers the full sequence: close sidebar → set planet → camera animates.
   */
  const handleSelectProject = useCallback((planetName) => {
    if (activePlanet === planetName) {
      // Already viewing this planet — just close sidebar
      setIsSidebarOpen(false);
      return;
    }

    // 1. Close sidebar
    setIsSidebarOpen(false);

    // 2. Hide any existing hologram immediately
    setShowHologram(false);

    // 3. Trigger planet selection (this drives freeze + camera)
    setActivePlanet(planetName);
    setPlanetPosition(null); // Wait for planet to report its frozen position
    setIsAnimating(true);
  }, [activePlanet]);

  // ── Planet Position Reporting ───────────────────────────
  const handlePositionUpdate = useCallback((pos) => {
    setPlanetPosition(pos);
  }, []);

  // ── Camera Animation Complete ──────────────────────────
  const handleAnimationComplete = useCallback(() => {
    setIsAnimating(false);

    // Sync OrbitControls target
    if (orbitControlsRef.current) {
      if (activePlanet && planetPosition) {
        orbitControlsRef.current.target.set(...planetPosition);
      } else {
        orbitControlsRef.current.target.set(0, 0, 0);
      }
      orbitControlsRef.current.update();
    }

    // Show hologram card AFTER camera settles (only if a planet is active)
    if (activePlanet) {
      setShowHologram(true);
    }
  }, [activePlanet, planetPosition]);

  // ── Back to Overview ───────────────────────────────────
  const handleBackToOverview = useCallback(() => {
    setActivePlanet(null);
    setPlanetPosition(null);
    setIsAnimating(true);
    setShowHologram(false);
    setIsSidebarOpen(false);
  }, []);

  // ── Derived Data ───────────────────────────────────────
  const activePlanetData = planetsData.find(p => p.name === activePlanet);
  const activePlanetSize = activePlanetData ? activePlanetData.size : 1;
  const activeProjectData = projectsData.find(p => p.planetName === activePlanet);

  return (
    <>
      {/* Back to Overview Button */}
      {activePlanet && (
        <button
          className="back-button"
          onClick={handleBackToOverview}
          aria-label="Return to solar system overview"
        >
          ← Back to Overview
        </button>
      )}

      {/* Sliding Sidebar (HTML overlay, outside Canvas) */}
      <SlidingSidebar
        isOpen={isSidebarOpen}
        onToggle={handleToggleSidebar}
        projects={projectsData}
        activePlanet={activePlanet}
        onSelectProject={handleSelectProject}
      />

      {/* 3D Canvas */}
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 200, 0], fov: 100 }}
      >
        <CameraController
          activePlanet={activePlanet}
          planetPosition={planetPosition}
          activePlanetSize={activePlanetSize}
          onAnimationComplete={handleAnimationComplete}
        />

        <OrbitControls
          ref={orbitControlsRef}
          enableZoom={!isAnimating}
          enablePan={!isAnimating}
          enableRotate={!isAnimating}
        />

        <CustomStars radius={1000} count={1000} />
        <ambientLight intensity={1.0} />
        <Sun />

        {planetsData.map((planet, index) => (
          <React.Fragment key={index}>
            {/* Orbital ring */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[planet.distance - 0.2, planet.distance + 0.2, 64]} />
              <meshBasicMaterial
                color="#ffffff"
                opacity={0.15}
                transparent
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Planet — clickable to zoom, or select via sidebar */}
            <Planet
              name={planet.name}
              distance={planet.distance}
              size={planet.size}
              speed={calculateSpeed(planet.distance)}
              textureFile={planet.texture}
              isActive={activePlanet === planet.name}
              onSelect={handleSelectProject}
              onPositionUpdate={handlePositionUpdate}
            />

            {/* Holographic Card — rendered in 3D space near frozen planet */}
            {activePlanet === planet.name && (
              <HolographicCard
                projectData={activeProjectData}
                planetPosition={planetPosition}
                planetSize={planet.size}
                visible={showHologram && !isAnimating}
              />
            )}
          </React.Fragment>
        ))}

        <AsteroidBelt />

        <EffectComposer>
          <Bloom
            intensity={1.0}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.3}
            mipmapBlur={false}
            resolutionScale={0.5}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;