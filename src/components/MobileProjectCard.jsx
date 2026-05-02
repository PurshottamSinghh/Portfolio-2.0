import React from 'react';
import './MobileProjectCard.css';

/**
 * MobileProjectCard
 * 
 * A fixed bottom-sheet card for mobile viewports.
 * Renders the same project data as HolographicCard but anchored
 * to the bottom of the screen so it's always fully visible.
 *
 * Props:
 *  - projectData: object from projectsData.js
 *  - visible: whether the card should be shown
 *  - isExiting: whether the card is currently animating out
 *  - onMoreInfo: callback to open the detail sidebar
 */
function MobileProjectCard({ projectData, visible, isExiting, onMoreInfo }) {
  if (!projectData || (!visible && !isExiting)) return null;

  return (
    <div className={`mobile-card ${visible ? 'mobile-card--visible' : ''} ${isExiting ? 'mobile-card--exiting' : ''}`}>
      <div className="mobile-card__body">
        {/* Top accent */}
        <div className="mobile-card__accent"></div>

        {/* Header */}
        <div className="mobile-card__header">
          <span className="mobile-card__label">
            {projectData.isSun ? 'PROFILE:' : 'PROJECT:'}
          </span>
          <h3 className="mobile-card__title">{projectData.projectTitle}</h3>
        </div>

        {/* Description */}
        <p className="mobile-card__description">{projectData.description}</p>

        {/* Divider */}
        <div className="mobile-card__divider"></div>

        {/* Metrics */}
        <div className="mobile-card__metrics">
          <div className="mobile-card__metric">
            <span className="mobile-card__metric-icon">{projectData.statusIcon}</span>
            <span className="mobile-card__metric-value">{projectData.statusStat}</span>
          </div>
          <div className="mobile-card__metric">
            <span className="mobile-card__metric-icon">◈</span>
            <span className="mobile-card__metric-value">{projectData.telemetry}</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mobile-card__tech">
          <div className="mobile-card__tech-list">
            {projectData.techStack.map((tech, i) => (
              <span key={i} className="mobile-card__tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {/* View Full Specs */}
        <button
          className="mobile-card__more-btn"
          onClick={() => { if (onMoreInfo) onMoreInfo(); }}
        >
          <span className="mobile-card__more-btn-icon">→</span>
          View Full Specs
        </button>
      </div>
    </div>
  );
}

export default MobileProjectCard;
