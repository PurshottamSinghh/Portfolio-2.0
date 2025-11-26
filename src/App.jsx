import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Components
import Sun from './components/Sun';
import Planet from './components/Planet';
import AsteroidBelt from './components/AsteroidBelt';
import CustomStars from './components/CustomStars';

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

// Thin orbit ring for visualizing planetary orbits
const OrbitRing = ({ radius }) => (
  <mesh rotation-x={-Math.PI / 2}>
    {/* Very thin ring: inner radius slightly smaller than outer */}
    <ringGeometry args={[radius - 0.1, radius + 0.1, 128]} />
    <meshBasicMaterial
      color="#ffffff"
      transparent
      opacity={0.05}
      depthWrite={false}
      side="DoubleSide" // Ensure visibility from all angles
    />
  </mesh>
);

function App() {
  // Adaptive quality based on viewport size
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activePlanet, setActivePlanet] = useState(null);
  
  useEffect(() => {
    const checkScreenSize = () => {
      // Consider screens wider than 1920px as "large"
      setIsLargeScreen(window.innerWidth > 1920 || window.innerHeight > 1080);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []); // Your existing resize logic here...

  // --- THE PLANET CONFIGURATION ---
  // Distance: Roughly spaced out
  // Size: Relative sizes (Earth = 1)
  // Speed: Calculated using inverse square root relationship (Kepler's laws)
  // Closer planets move faster: speed ∝ 1/√distance
  const referenceDistance = 40; // Earth's distance
  const referenceSpeed = 0.4;   // Earth's speed
  
  const calculateSpeed = (distance) => {
    return referenceSpeed * Math.sqrt(referenceDistance / distance);
  };

  const planetsData = [
    { name: "Mercury", distance: 20, size: 0.6, speed: calculateSpeed(20), texture: MercuryImg },
    { name: "Venus", distance: 30, size: 0.9, speed: calculateSpeed(30), texture: VenusImg },
    { name: "Earth", distance: 40, size: 1.0, speed: calculateSpeed(40), texture: EarthImg },
    { name: "Mars", distance: 50, size: 0.7, speed: calculateSpeed(50), texture: MarsImg },
    { name: "Ceres", distance: 70, size: 0.4, speed: calculateSpeed(70), texture: CeresImg }, // Dwarf planet inside belt
    { name: "Jupiter", distance: 90, size: 2.5, speed: calculateSpeed(90), texture: JupiterImg },
    { name: "Saturn", distance: 116, size: 2.2, speed: calculateSpeed(116), texture: SaturnImg },
    { name: "Uranus", distance: 140, size: 1.8, speed: calculateSpeed(140), texture: UranusImg },
    { name: "Neptune", distance: 160, size: 1.8, speed: calculateSpeed(160), texture: NeptuneImg },
    { name: "Makemake", distance: 184, size: 0.6, speed: calculateSpeed(184), texture: MakemakeImg },
    { name: "Haumea", distance: 200, size: 0.5, speed: calculateSpeed(200), texture: HaumeaImg },
  ];

  return (
    <Canvas 
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 200, 0], fov: 100 }} // Bird's eye view: looking down from above
    >
      <OrbitControls target={[0, 0, 0]} />
      <CustomStars radius={600} count={2000} /> {/* Reduced count by half with random brightness */}
      <ambientLight intensity={2.0} />
      <Sun />

      {/* RENDER ORBIT RINGS */}
      {planetsData.map((planet, index) => (
        <OrbitRing key={`orbit-${planet.name}-${index}`} radius={planet.distance} />
      ))}

      {/* RENDER PLANETS FROM DATA */}
      {planetsData.map((planet, index) => (
        <Planet 
          key={index}
          name={planet.name}
          distance={planet.distance}
          size={planet.size}
          speed={planet.speed}
          textureFile={planet.texture}
          isActive={activePlanet === planet.name}
          setActive={setActivePlanet}
        />
      ))}

      {/* RENDER ASTEROID BELT */}
      <AsteroidBelt />

      {/* Post Processing (Keep your existing settings) */}
      {!isLargeScreen && (
        <EffectComposer>
          <Bloom intensity={0.5} luminanceThreshold={0.5} luminanceSmoothing={0.3} mipmapBlur={false} resolutionScale={0.25} />
        </EffectComposer>
      )}
    </Canvas>
  );
}

export default App;
