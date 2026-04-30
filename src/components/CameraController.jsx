import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { gsap } from 'gsap';

function CameraController({ activePlanet, planetPosition, activePlanetSize, onAnimationComplete }) {
  const { camera } = useThree();
  const animationRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // Constants for Overview
  const overviewPosition = [0, 200, 0];
  const overviewTarget = [0, 0, 0];

  // Track History
  const prevActivePlanetRef = useRef(null);

  // Initialize camera
  useEffect(() => {
    camera.position.set(...overviewPosition);
    camera.lookAt(...overviewTarget);
  }, []);

  useEffect(() => {
    // Kill any running animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // ---------------------------------------------------------
    // SCENARIO A: Moving TO a Planet (Active Planet Set)
    // ---------------------------------------------------------
    if (activePlanet && planetPosition) {
      isAnimatingRef.current = true;

      const isFromOverview = prevActivePlanetRef.current === null;

      // Target LookAt is ALWAYS the new planet center immediately
      const targetLookAt = {
        x: planetPosition[0],
        y: planetPosition[1],
        z: planetPosition[2]
      };

      // Determine END Camera Position (The Flight Path)
      let endCameraPos;

      // Check if this is the Sun (position at/near origin)
      const distFromSun = Math.sqrt(planetPosition[0] ** 2 + planetPosition[1] ** 2 + planetPosition[2] ** 2);
      const isSunTarget = distFromSun < 1;

      if (isSunTarget) {
        // Special Sun handling: approach from a fixed angle
        // Sun radius is 16, so stay well outside
        const sunZoomDist = 40;
        endCameraPos = [
          sunZoomDist * 0.7,
          sunZoomDist * 0.5,
          sunZoomDist * 0.7
        ];

      } else if (isFromOverview) {
        // Path 1: Eclipse View (From Overview)
        // Fly BEHIND the planet relative to Sun(0,0,0)
        const dir = {
          x: planetPosition[0] / distFromSun,
          y: planetPosition[1] / distFromSun,
          z: planetPosition[2] / distFromSun
        };
        const zoomDist = (activePlanetSize || 1) * 7.0;

        endCameraPos = [
          planetPosition[0] + dir.x * zoomDist,
          planetPosition[1] + (activePlanetSize || 1) * 2, // Highlight elevation
          planetPosition[2] + dir.z * zoomDist
        ];

      } else {
        // Path 2: Direct Flight (From Planet)
        // Fly to FRONT of planet relative to Current Camera
        const cam = camera.position;
        const toPlanet = {
          x: planetPosition[0] - cam.x,
          y: planetPosition[1] - cam.y,
          z: planetPosition[2] - cam.z
        };
        const distToPlanet = Math.sqrt(toPlanet.x ** 2 + toPlanet.y ** 2 + toPlanet.z ** 2);
        const dir = {
          x: toPlanet.x / distToPlanet,
          y: toPlanet.y / distToPlanet,
          z: toPlanet.z / distToPlanet
        };

        // Stop short distance
        const stopDist = isSunTarget ? 40 : (activePlanetSize || 1) * 6.0;

        // ADD ELEVATION: prevent "locked to orbital plane" feel.
        const elevation = isSunTarget ? 20 : (activePlanetSize || 1) * 3.0;

        endCameraPos = [
          planetPosition[0] - dir.x * stopDist,
          planetPosition[1] + elevation,
          planetPosition[2] - dir.z * stopDist
        ];
      }

      // ANIMATE
      animationRef.current = gsap.to(camera.position, {
        x: endCameraPos[0],
        y: endCameraPos[1],
        z: endCameraPos[2],
        duration: 2.5,
        ease: "power2.inOut",
        onStart: () => {
          // IMMEDIATE FOCUS LOCK
          camera.lookAt(targetLookAt.x, targetLookAt.y, targetLookAt.z);
        },
        onUpdate: () => {
          // Keep locked on target every frame
          camera.lookAt(targetLookAt.x, targetLookAt.y, targetLookAt.z);
        },
        onComplete: () => {
          isAnimatingRef.current = false;
          prevActivePlanetRef.current = activePlanet;
          // Ensure final state
          camera.lookAt(targetLookAt.x, targetLookAt.y, targetLookAt.z);

          if (onAnimationComplete) onAnimationComplete();
        }
      });

      // ---------------------------------------------------------
      // SCENARIO B: Returning to Overview
      // ---------------------------------------------------------
    } else if (!activePlanet) {
      if (prevActivePlanetRef.current !== null) {
        isAnimatingRef.current = true;

        const targetLookAt = { x: overviewTarget[0], y: overviewTarget[1], z: overviewTarget[2] };

        animationRef.current = gsap.to(camera.position, {
          x: overviewPosition[0],
          y: overviewPosition[1],
          z: overviewPosition[2],
          duration: 2.0,
          ease: "power2.inOut",
          onUpdate: () => {
            // Look at center
            camera.lookAt(targetLookAt.x, targetLookAt.y, targetLookAt.z);
          },
          onComplete: () => {
            isAnimatingRef.current = false;
            prevActivePlanetRef.current = null; // Reset history
            camera.lookAt(targetLookAt.x, targetLookAt.y, targetLookAt.z);

            if (onAnimationComplete) onAnimationComplete();
          }
        });
      }
    }

    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, [activePlanet, planetPosition, camera, onAnimationComplete, activePlanetSize]);

  return null;
}

export default CameraController;
