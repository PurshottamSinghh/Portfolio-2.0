import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import './HolographicCard.css';

/**
 * HolographicCard
 * 
 * Renders a translucent holographic projection card in 3D space near the
 * selected planet. Uses @react-three/drei's <Html> to overlay DOM content
 * at a world-space position, achieving the "floating hologram" effect.
 * 
 * Props:
 *  - projectData: The project object from projectsData.js
 *  - planetPosition: [x, y, z] world position of the frozen planet
 *  - planetSize: radius of the planet (for offset calculations)
 *  - visible: whether the card should be shown (after camera settles)
 */
function HolographicCard({ projectData, planetPosition, planetSize, visible }) {
  const [isRevealed, setIsRevealed] = useState(false);

  // Staggered reveal after becoming visible
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setIsRevealed(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsRevealed(false);
    }
  }, [visible]);

  if (!projectData || !planetPosition || !visible) return null;

  return (
    <Html
      position={planetPosition}
      zIndexRange={[100, 0]}
      style={{
        pointerEvents: 'none',
        transition: 'opacity 0.6s ease',
        opacity: isRevealed ? 1 : 0,
        /* Fixed screen-space offset: always to the right and vertically centered */
        transform: 'translate(60px, -50%)',
        transformOrigin: 'left center',
      }}
    >
      <div className={`holo-card ${isRevealed ? 'holo-card--visible' : ''}`}>
        {/* Connection line from planet to card */}
        <div className="holo-card__connector">
          <div className="holo-card__connector-dot"></div>
        </div>

        {/* Main card body */}
        <div className="holo-card__body">
          {/* Top accent bar */}
          <div className="holo-card__accent-bar">
            <div className="holo-card__accent-glow"></div>
          </div>

          {/* Header section */}
          <div className="holo-card__header">
            <span className="holo-card__label">PROJECT:</span>
            <h3 className="holo-card__title">{projectData.projectTitle}</h3>
          </div>

          {/* Description */}
          <p className="holo-card__description">{projectData.description}</p>

          {/* Divider */}
          <div className="holo-card__divider"></div>

          {/* Metrics row */}
          <div className="holo-card__metrics">
            <div className="holo-card__metric">
              <span className="holo-card__metric-icon">{projectData.statusIcon}</span>
              <span className="holo-card__metric-value">{projectData.statusStat}</span>
            </div>
            <div className="holo-card__metric">
              <span className="holo-card__metric-icon">◈</span>
              <span className="holo-card__metric-value">{projectData.telemetry}</span>
            </div>
          </div>

          {/* Tech stack */}
          <div className="holo-card__tech">
            <span className="holo-card__tech-label">TECHNOLOGIES:</span>
            <div className="holo-card__tech-list">
              {projectData.techStack.map((tech, i) => (
                <span key={i} className="holo-card__tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom scanline decoration */}
          <div className="holo-card__scanline"></div>
        </div>
      </div>
    </Html>
  );
}

export default HolographicCard;
