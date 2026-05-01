import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
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
  const materialRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Smoothed animation values
  const scaleRef = useRef(1);
  const emissiveRef = useRef(2); // Sun's base emissive is 2

  // Load the texture
  const texture = useTexture(SunTexture);

  useFrame(({ clock }, delta) => {
    // Slow rotation
    sunRef.current.rotation.y = clock.getElapsedTime() * 0.1;

    // ── Smooth hover animation ──────────────────────────────
    // Scale: 1.0 → 1.08 on hover (subtler for the Sun since it's large)
    const targetScale = hovered ? 1.08 : 1.0;
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, 5 * delta);
    sunRef.current.scale.set(scaleRef.current, scaleRef.current, scaleRef.current);

    // Emissive: 2.0 → 3.0 on hover (the Sun "flares" brighter)
    const targetEmissive = hovered ? 3.0 : 2.0;
    emissiveRef.current = THREE.MathUtils.lerp(emissiveRef.current, targetEmissive, 5 * delta);
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = emissiveRef.current;
    }
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
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
    >
      <sphereGeometry args={[16, 48, 48]} />
      <meshStandardMaterial
        ref={materialRef}
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