import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import SunTexture from '../assets/2k_sun.jpg';

/**
 * Sun component
 * 
 * Props:
 *  - isActive: whether this Sun is currently selected
 *  - onSelect: callback when the Sun is clicked
 */
function Sun({ isActive, onSelect }) {
  const sunRef = useRef();

  // Load the texture
  const texture = useTexture(SunTexture);

  // Make the sun slowly rotate
  useFrame(({ clock }) => {
    sunRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <mesh
      ref={sunRef}
      onClick={(e) => {
        e.stopPropagation();
        if (!isActive && onSelect) {
          onSelect('Sun');
        }
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default';
      }}
    >
      <sphereGeometry args={[16, 48, 48]} />
      <meshStandardMaterial
        map={texture}
        emissiveMap={texture}
        emissive="white"
        emissiveIntensity={2}
      />
      <pointLight position={[0, 0, 0]} intensity={3} />
    </mesh>
  );
}

export default Sun;