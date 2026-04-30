import React, { useEffect } from 'react';
import './RightDetailSidebar.css';

/**
 * RightDetailSidebar
 * 
 * A sliding panel that animates in from the right side of the screen.
 * Displays extended project details, collaborators, and document links
 * for the currently active node.
 * 
 * Props:
 *  - isOpen: boolean controlling visibility
 *  - onClose: callback to close the panel
 *  - projectData: the active project data object from projectsData.js
 */
function RightDetailSidebar({ isOpen, onClose, projectData }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!projectData) return null;

  return (
    <div className={`right-sidebar ${isOpen ? 'right-sidebar--open' : ''}`}>
      {/* Close Button */}
      <button
        className="right-sidebar__close"
        onClick={onClose}
        aria-label="Close detail panel"
      >
        <span className="right-sidebar__close-x">✕</span>
      </button>

      {/* Animated Scanline */}
      <div className="right-sidebar__scanline"></div>

      {/* Scrollable Content */}
      <div className="right-sidebar__content">
        {/* Header */}
        <div className="right-sidebar__header">
          <span className="right-sidebar__label">FULL SPECIFICATIONS</span>
          <h2 className="right-sidebar__title">{projectData.projectTitle}</h2>
          <div className="right-sidebar__category-badge">
            {projectData.category}
          </div>
        </div>

        <div className="right-sidebar__divider"></div>

        {/* Status Metrics */}
        <div className="right-sidebar__section">
          <h3 className="right-sidebar__section-title">Status</h3>
          <div className="right-sidebar__metrics-grid">
            <div className="right-sidebar__metric-card">
              <span className="right-sidebar__metric-icon">{projectData.statusIcon}</span>
              <div className="right-sidebar__metric-info">
                <span className="right-sidebar__metric-label">Status</span>
                <span className="right-sidebar__metric-value">{projectData.statusStat}</span>
              </div>
            </div>
            <div className="right-sidebar__metric-card">
              <span className="right-sidebar__metric-icon">◈</span>
              <div className="right-sidebar__metric-info">
                <span className="right-sidebar__metric-label">Telemetry</span>
                <span className="right-sidebar__metric-value">{projectData.telemetry}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-sidebar__divider"></div>

        {/* Extended Details */}
        <div className="right-sidebar__section">
          <h3 className="right-sidebar__section-title">Overview</h3>
          <p className="right-sidebar__text">{projectData.description}</p>
          {projectData.extendedDetails && (
            <p className="right-sidebar__text right-sidebar__text--extended">
              {projectData.extendedDetails}
            </p>
          )}
        </div>

        <div className="right-sidebar__divider"></div>

        {/* Tech Stack */}
        <div className="right-sidebar__section">
          <h3 className="right-sidebar__section-title">Technologies</h3>
          <div className="right-sidebar__tech-grid">
            {projectData.techStack.map((tech, i) => (
              <span key={i} className="right-sidebar__tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="right-sidebar__divider"></div>

        {/* Collaborators */}
        {projectData.collaborators && projectData.collaborators.length > 0 && (
          <div className="right-sidebar__section">
            <h3 className="right-sidebar__section-title">Collaborators</h3>
            <ul className="right-sidebar__collab-list">
              {projectData.collaborators.map((collab, i) => (
                <li key={i} className="right-sidebar__collab-item">
                  <span className="right-sidebar__collab-dot"></span>
                  {collab}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Document Links */}
        {projectData.documentLinks && projectData.documentLinks.length > 0 && (
          <>
            <div className="right-sidebar__divider"></div>
            <div className="right-sidebar__section">
              <h3 className="right-sidebar__section-title">Documents</h3>
              <div className="right-sidebar__links">
                {projectData.documentLinks.map((doc, i) => (
                  <a
                    key={i}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="right-sidebar__link"
                  >
                    <span className="right-sidebar__link-icon">→</span>
                    {doc.label}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RightDetailSidebar;
