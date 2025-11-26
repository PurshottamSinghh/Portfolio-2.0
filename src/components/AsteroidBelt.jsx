import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Pure, deterministic pseudo-random function to keep component render pure
function pseudoRandom(seed, offset = 0) {
  const x = Math.sin(seed * 12.9898 + offset) * 43758.5453;
  return x - Math.floor(x); // value in [0, 1)
}

function AsteroidBelt() {
  const meshRef = useRef();
  
  // Configuration
  const asteroidCount = 5000; // Safe number for performance
  const radius = 60;          // Distance from Sun (midway between Mars (50) and Ceres (70))
  const width = 5;            // How wide the belt is

  // Generate random positions for the asteroids ONCE
  const asteroids = useMemo(() => {
    const temp = [];
    for (let i = 0; i < asteroidCount; i++) {
      // 1. Random Angle (0 to 360 degrees)
      const angle = (i / asteroidCount) * 2 * Math.PI;

      // 2. Random Distance (Radius +/- width jitter)
      const distance = radius + (pseudoRandom(i, 1) - 0.5) * width;
      
      // 3. Convert to X and Z coordinates
      const x = Math.cos(angle) * distance;
      const z = Math.sin(angle) * distance;
      
      // 4. Random Height (Y axis) so it's not a flat disc
      const y = (pseudoRandom(i, 2) - 0.5) * 3; 

      // 5. Random Scale (Size of rock)
      const scale = 0.2 + pseudoRandom(i, 3) * 0.4;

      // 6. Random Rotation
      const rotation = [
        pseudoRandom(i, 4) * Math.PI, 
        pseudoRandom(i, 5) * Math.PI, 
        0
      ];

      temp.push({ position: [x, y, z], scale, rotation });
    }
    return temp;
  }, []);

  // Animate: Slowly rotate the entire belt ring
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    // <instancedMesh> renders the same geometry 1000 times efficiently
    <instancedMesh ref={meshRef} args={[null, null, asteroidCount]}>
      {/* The shape of the rock (Dodecahedron looks rocky and low-poly) */}
      <dodecahedronGeometry args={[0.2, 0]} />
      {/* Gray, slightly rough rock material */}
      <meshStandardMaterial color="#888888" roughness={0.8} />

      {/* Helper component to position every single rock */}
      {asteroids.map((data, i) => (
        <InstanceHelper 
          key={i} 
          index={i} 
          data={data} 
          parentRef={meshRef} 
        />
      ))}
    </instancedMesh>
  );
}

// Helper to set the position of each individual rock in the instance
const InstanceHelper = ({ index, data, parentRef }) => {
  // Create a temporary 3D object helper
  const tempObject = useMemo(() => new THREE.Object3D(), []);

  // Run this logic once to place the rock
  React.useLayoutEffect(() => {
    if (parentRef.current) {
      tempObject.position.set(...data.position);
      tempObject.rotation.set(...data.rotation);
      tempObject.scale.set(data.scale, data.scale, data.scale);
      tempObject.updateMatrix();
      
      // Update the specific instance at index 'i'
      parentRef.current.setMatrixAt(index, tempObject.matrix);
      
      // Start slightly randomized to avoid visual glitches
      parentRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [data, index, parentRef, tempObject]);

  return null;
};

export default AsteroidBelt;