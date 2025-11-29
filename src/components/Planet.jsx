import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import ProjectAnnotation from './ProjectAnnotation';

function Planet({
  distance = 10,
  speed = 0.1,
  size = 0.5,
  textureFile,
  name,
  isActive,
  setActive,
  onPositionUpdate,
  isAnimating
}) {
  const [showAnnotation, setShowAnnotation] = React.useState(false);

  const meshRef = useRef();
  const frozenPositionRef = useRef(null);
  const wasActiveRef = useRef(false);

  // We use this state to trigger re-renders when freezing, 
  // but we don't need to pass it to the annotation anymore.
  const [frozenPosition, setFrozenPosition] = React.useState(null);

  const texture = useTexture(textureFile);

  useEffect(() => {
    if (isActive && !wasActiveRef.current && meshRef.current) {
      // Planet just became active - freeze position
      const currentPos = meshRef.current.position;
      const frozen = [currentPos.x, currentPos.y, currentPos.z];
      frozenPositionRef.current = frozen;
      setFrozenPosition(frozen);

      // Notify parent
      if (onPositionUpdate) {
        onPositionUpdate(frozen);
      }

      // Delay showing annotation
      setTimeout(() => {
        setShowAnnotation(true);
      }, 1500);
    } else if (!isActive && wasActiveRef.current) {
      // Planet just became inactive
      frozenPositionRef.current = null;
      setFrozenPosition(null);
      setShowAnnotation(false);
    }
    wasActiveRef.current = isActive;
  }, [isActive, onPositionUpdate]);

  useFrame(({ clock }) => {
    if (isActive && frozenPositionRef.current) {
      // Keep frozen
      if (meshRef.current) {
        meshRef.current.position.set(
          frozenPositionRef.current[0],
          frozenPositionRef.current[1],
          frozenPositionRef.current[2]
        );
      }
    } else {
      // Orbit
      const elapsedTime = clock.getElapsedTime();
      const x = Math.sin(elapsedTime * speed) * distance;
      const z = Math.cos(elapsedTime * speed) * distance;

      if (meshRef.current) {
        meshRef.current.position.set(x, 0, z);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      onClick={(e) => {
        e.stopPropagation();
        // CHANGED: Only set active if it isn't already. 
        // We removed the toggle logic (isActive ? null : name)
        if (!isActive) {
          setActive(name);
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
      <sphereGeometry args={[size * 2, 32, 32]} />
      <meshStandardMaterial map={texture} />

      {/* Annotation is now a child of the mesh.
         It will automatically be positioned at the planet's center (0,0,0 local).
         The ProjectAnnotation component handles the offset to the right.
      */}
      {isActive && frozenPosition && !isAnimating && (
        <ProjectAnnotation
          planetSize={size * 2}
          isVisible={showAnnotation}
        />
      )}
    </mesh>
  );
}

export default Planet;