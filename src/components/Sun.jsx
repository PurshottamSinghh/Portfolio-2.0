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
  const ringMaterialRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Smoothed animation values
  const scaleRef = useRef(1);
  const emissiveRef = useRef(2);

  // Load the texture
  const texture = useTexture(SunTexture);

  useFrame(({ clock }, delta) => {
    // Slow rotation
    sunRef.current.rotation.y = clock.getElapsedTime() * 0.1;

    // ── Smooth hover animation ──────────────────────────────
    const targetScale = hovered ? 1.08 : 1.0;
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, 5 * delta);
    sunRef.current.scale.set(scaleRef.current, scaleRef.current, scaleRef.current);

    const targetEmissive = hovered ? 3.0 : 2.0;
    emissiveRef.current = THREE.MathUtils.lerp(emissiveRef.current, targetEmissive, 5 * delta);
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = emissiveRef.current;
    }

    // ── Pulsing interaction ring ─────────────────────────────
    if (ringMaterialRef.current && !isActive) {
      const pulse = Math.sin(clock.elapsedTime * 1.5) * 0.5 + 0.5;
      const baseOpacity = hovered ? 0.25 : 0.08;
      const pulseAmount = hovered ? 0.15 : 0.08;
      ringMaterialRef.current.opacity = baseOpacity + pulse * pulseAmount;
    } else if (ringMaterialRef.current && isActive) {
      ringMaterialRef.current.opacity = 0;
    }
  });

  return (
    <group>
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

      {/* Pulsing interaction ring — warm tone for the Sun */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[18, 18.5, 64]} />
        <meshBasicMaterial
          ref={ringMaterialRef}
          color="#ffcc66"
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default Sun;