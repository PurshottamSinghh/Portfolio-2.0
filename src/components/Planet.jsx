import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei'; // 1. Import useTexture

// 1. We now accept an object full of props as an argument
function Planet({ 
  distance = 10, 
  speed = 0.1, 
  size = 0.5, 
  textureFile // 2. Add a new prop for the texture file 
}) {
  
  const meshRef = useRef();

  const texture = useTexture(textureFile);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    // 2. We use the PROPS instead of hard-coded numbers
    const x = Math.sin(elapsedTime * speed) * distance;
    const z = Math.cos(elapsedTime * speed) * distance;
    
    if (meshRef.current) {
      meshRef.current.position.set(x, 0, z);
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* 3. Reduced geometry segments from 24 to 16 for better performance */}
      <sphereGeometry args={[size * 2, 16, 16]} />
      {/* 4. Apply the texture to the 'map' property.
          Unlike the sun, we DON'T make planets emissive.
      */}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Planet;