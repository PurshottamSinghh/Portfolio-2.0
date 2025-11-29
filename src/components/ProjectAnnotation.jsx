import React, { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';

function ProjectAnnotation({ planetSize, isVisible }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  }, [isVisible]);

  // Calculate simple offset: Radius (size/2) + Gap (2 units)
  // Since this component is a child of the Planet mesh, [0,0,0] is the planet center.
  const radius = planetSize / 2;
  const offset = radius + 4;

  return (
    <Html
      // Position text to the right of the planet
      position={[offset, 0, 0]}
      // Centers the 3D pivot point on the HTML element
      center
      // Distance factor scales the DOM element based on camera distance (prevents it getting huge)
      distanceFactor={15}
      // Ensure it renders on top
      zIndexRange={[100, 0]}
      style={{
        transition: 'opacity 0.5s',
        opacity: showContent ? 1 : 0,
        // Allow interaction with buttons, but let clicks pass through empty areas if needed
        pointerEvents: 'none'
      }}
    >
      <div className="project-annotation">
        <h3 className="annotation-title">Project Title</h3>
        <p className="annotation-text">
          Project details coming soon. This is where you can describe the project tech stack and goals.
        </p>
        <div className="annotation-actions">
          <button className="annotation-btn">View Case Study</button>
        </div>
      </div>
    </Html>
  );
}

export default ProjectAnnotation;