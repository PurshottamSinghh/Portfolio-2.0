import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

// Pure, deterministic pseudo-random function to keep component render pure
function pseudoRandom(seed, offset = 0) {
  const x = Math.sin(seed * 12.9898 + offset) * 43758.5453;
  return x - Math.floor(x); // value in [0, 1)
}

function CustomStars({ radius, count }) {
  const pointsRef = useRef();
  
  // Create a circular texture for round stars
  const starTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    
    // Create a radial gradient for a soft circular star
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random position on sphere surface
      const theta = pseudoRandom(i, 1) * Math.PI * 2; // Azimuth
      const phi = Math.acos(2 * pseudoRandom(i, 2) - 1); // Elevation
      const r = radius + (pseudoRandom(i, 3) - 0.5) * radius * 0.1; // Slight depth variation
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      // Highly varied brightness: very dim to very bright (0.05 to 1.0)
      // Using power function to create extreme contrast - many very dim stars, some very bright ones
      const randomValue = pseudoRandom(i, 4);
      const brightness = 0.05 + Math.pow(randomValue, 0.3) * 0.95; // Lower power = more extreme variation
      colors[i * 3] = brightness;
      colors[i * 3 + 1] = brightness;
      colors[i * 3 + 2] = brightness;
    }
    
    return { positions, colors };
  }, [count, radius]);

  React.useLayoutEffect(() => {
    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry;
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;
    }
  }, [positions, colors]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={6}
        map={starTexture}
        vertexColors
        sizeAttenuation={true}
        depthWrite={false}
        transparent
        alphaTest={0.01}
      />
    </points>
  );
}

export default CustomStars;
