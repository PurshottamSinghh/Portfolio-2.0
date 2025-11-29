import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

function CameraController({ activePlanet, planetPosition, activePlanetSize, onAnimationComplete }) {
  const { camera } = useThree();
  const animationRef = useRef(null);
  const lookAtRef = useRef({ x: 0, y: 0, z: 0 });
  const isAnimatingRef = useRef(false);
  const targetPositionRef = useRef(null);

  // Bird's eye view position (moved outside to avoid dependency issues)
  const overviewPositionRef = useRef([0, 200, 0]);
  const overviewTargetRef = useRef([0, 0, 0]);

  // Continuously track planet position when active (for smooth following)
  useFrame(() => {
    if (activePlanet && planetPosition && !isAnimatingRef.current && targetPositionRef.current) {
      // Smoothly update camera target to follow the planet
      const target = targetPositionRef.current;
      lookAtRef.current.x = target[0];
      lookAtRef.current.y = target[1];
      lookAtRef.current.z = target[2];
      camera.lookAt(lookAtRef.current.x, lookAtRef.current.y, lookAtRef.current.z);
    }
  });

  useEffect(() => {
    // Kill any ongoing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    if (activePlanet && planetPosition) {
      isAnimatingRef.current = true;
      targetPositionRef.current = planetPosition;

      // DYNAMIC ZOOM: Scale distance by planet size to keep visual size constant
      // Base distance of 10 for size 1.0. 
      // Example: Jupiter (2.5) -> 25 distance. Mercury (0.6) -> 6 distance.
      const offsetDistance = (activePlanetSize || 1) * 10;
      const offsetHeight = (activePlanetSize || 1) * 2;

      // Calculate position: Planet Pos + Fixed Offset
      // We use a fixed Z offset so we are always "in front" of the planet relative to the card
      const closeUpPosition = [
        planetPosition[0],
        planetPosition[1] + offsetHeight,
        planetPosition[2] + offsetDistance
      ];

      const closeUpTarget = planetPosition;

      // Update lookAt target
      lookAtRef.current = { x: closeUpTarget[0], y: closeUpTarget[1], z: closeUpTarget[2] };

      // Animate camera position
      animationRef.current = gsap.to(camera.position, {
        x: closeUpPosition[0],
        y: closeUpPosition[1],
        z: closeUpPosition[2],
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          // Update camera lookAt during animation
          camera.lookAt(lookAtRef.current.x, lookAtRef.current.y, lookAtRef.current.z);
        },
        onComplete: () => {
          isAnimatingRef.current = false;
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }
      });

      // Animate camera target (lookAt) smoothly
      gsap.to(lookAtRef.current, {
        x: closeUpTarget[0],
        y: closeUpTarget[1],
        z: closeUpTarget[2],
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(lookAtRef.current.x, lookAtRef.current.y, lookAtRef.current.z);
        }
      });
    } else if (activePlanet === null) {
      isAnimatingRef.current = true;
      targetPositionRef.current = null;
      // Return to overview
      const overviewTarget = overviewTargetRef.current;
      const overviewPosition = overviewPositionRef.current;

      lookAtRef.current = { x: overviewTarget[0], y: overviewTarget[1], z: overviewTarget[2] };

      // Animate camera position back to overview
      animationRef.current = gsap.to(camera.position, {
        x: overviewPosition[0],
        y: overviewPosition[1],
        z: overviewPosition[2],
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(lookAtRef.current.x, lookAtRef.current.y, lookAtRef.current.z);
        },
        onComplete: () => {
          isAnimatingRef.current = false;
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }
      });

      // Animate camera target back to center
      gsap.to(lookAtRef.current, {
        x: overviewTarget[0],
        y: overviewTarget[1],
        z: overviewTarget[2],
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(lookAtRef.current.x, lookAtRef.current.y, lookAtRef.current.z);
        }
      });
    }

    // Update target position when planet position changes (for tracking)
    if (activePlanet && planetPosition) {
      targetPositionRef.current = planetPosition;
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [activePlanet, planetPosition, camera, onAnimationComplete, activePlanetSize]);

  return null;
}

export default CameraController;
