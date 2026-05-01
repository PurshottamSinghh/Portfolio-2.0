import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Planet({
  distance = 10,
  speed = 0.1,
  size = 0.5,
  textureFile,
  name,
  isActive,
  onSelect,
  onPositionUpdate,
}) {
  const meshRef = useRef();
  const planetMeshRef = useRef();
  const materialRef = useRef();
  const frozenPositionRef = useRef(null);
  const wasActiveRef = useRef(false);

  // Hover state
  const [hovered, setHovered] = useState(false);

  // Smoothed values for animation (refs to avoid re-renders)
  const scaleRef = useRef(1);
  const emissiveRef = useRef(0);

  // Use a ref to track the accumulated angle. 
  // Initialize with a random start angle so planets aren't all aligned.
  const angleRef = useRef(Math.random() * Math.PI * 2);

  const texture = useTexture(textureFile);
  const { camera } = useThree();

  useEffect(() => {
    if (isActive && !wasActiveRef.current && meshRef.current) {
      // Planet just became active - freeze position
      // meshRef now refers to the group, which holds the planet's orbital position
      const currentPos = meshRef.current.position;
      const frozen = [currentPos.x, currentPos.y, currentPos.z];
      frozenPositionRef.current = frozen;

      // Notify parent
      if (onPositionUpdate) {
        onPositionUpdate(frozen);
      }
    } else if (!isActive && wasActiveRef.current) {
      // Planet just became inactive
      frozenPositionRef.current = null;
    }
    wasActiveRef.current = isActive;
  }, [isActive, onPositionUpdate]);

  useFrame((state, delta) => {
    if (isActive && frozenPositionRef.current) {
      // Keep frozen at the stored position
      if (meshRef.current) {
        meshRef.current.position.set(
          frozenPositionRef.current[0],
          frozenPositionRef.current[1],
          frozenPositionRef.current[2]
        );
      }
    } else {
      // Orbit: Update angle based on speed and delta time
      // This ensures we resume exactly where we left off
      angleRef.current += speed * delta;

      const x = Math.sin(angleRef.current) * distance;
      const z = Math.cos(angleRef.current) * distance;

      if (meshRef.current) {
        meshRef.current.position.set(x, 0, z);
      }
    }

    // Rotate the planet itself (only when not active)
    if (planetMeshRef.current && !isActive) {
      planetMeshRef.current.rotation.y += 0.005;
    }

    // ── Smooth hover animation ──────────────────────────────
    // Lerp scale: target is 1.15 when hovered, 1.0 when not
    const targetScale = hovered ? 1.15 : 1.0;
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, 6 * delta);

    // Lerp emissive: target is 0.35 when hovered, 0 when not
    const targetEmissive = hovered ? 0.35 : 0;
    emissiveRef.current = THREE.MathUtils.lerp(emissiveRef.current, targetEmissive, 6 * delta);

    // Apply smooth scale to planet mesh
    if (planetMeshRef.current) {
      const s = scaleRef.current;
      planetMeshRef.current.scale.set(s, s, s);
    }

    // Apply smooth emissive intensity to material
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = emissiveRef.current;
    }
  });

  return (
    <group
      ref={meshRef}
      onClick={(e) => {
        e.stopPropagation();
        if (!isActive && onSelect) {
          onSelect(name);
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
      {/* The rotating planet mesh */}
      <mesh ref={planetMeshRef}>
        <sphereGeometry args={[size * 2, 32, 32]} />
        <meshStandardMaterial
          ref={materialRef}
          map={texture}
          emissive={new THREE.Color(0.6, 0.7, 1.0)}
          emissiveIntensity={0}
        />
      </mesh>
    </group>
  );
}

export default Planet;