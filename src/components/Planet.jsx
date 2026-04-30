import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

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
  const frozenPositionRef = useRef(null);
  const wasActiveRef = useRef(false);

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
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default';
      }}
    >
      {/* The rotating planet mesh */}
      <mesh ref={planetMeshRef}>
        <sphereGeometry args={[size * 2, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}

export default Planet;