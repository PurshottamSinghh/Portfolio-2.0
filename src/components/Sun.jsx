import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
// You'll need to find a sun texture online.
// Search for "8k sun texture" or "2k sun texture".
// This is a free one you can use to start:
import SunTexture from '../assets/2k_sun.jpg'; 

function Sun() {
  const sunRef = useRef();
  
  // Load the texture
  const texture = useTexture(SunTexture);

  // Make the sun slowly rotate
  useFrame(({ clock }) => {
    sunRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <mesh ref={sunRef}>
      {/* Reduced geometry segments from 24 to 16 for better performance */}
      <sphereGeometry args={[16, 48, 48]} />
      
      {/* - map: Applies the 2D texture to the surface.
        - emissiveMap: Makes the texture itself glow.
        - emissive: The glow color. We set this to white so it
          multiplies with the texture's natural colors.
        - emissiveIntensity: How bright the glow is.
      */}
      <meshStandardMaterial 
        map={texture} 
        emissiveMap={texture}
        emissive="white"
        emissiveIntensity={2} 
      />
      
      {/* We still need a light source *inside* the sun */}
      <pointLight position={[0, 0, 0]} intensity={3} />
    </mesh>
  );
}

export default Sun;