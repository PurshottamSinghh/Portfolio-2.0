import React, { useEffect } from 'react';
import ConnectSection from './ConnectSection';
import './RightDetailSidebar.css';

/**
 * RightDetailSidebar
 * 
 * Liquid Glass sliding panel from the right edge.
 * Renders extended project details, structured sections (for Core Profile),
 * collaborators, document links, and a ConnectSection for the Core Profile.
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

  const isStructured = Array.isArray(projectData.extendedDetails);
  const isCoreProfile = projectData.category === 'Me';

  /**
   * Helper to parse text for bullet points or newlines and render as a list if found.
   */
  const renderContent = (text, className) => {
    if (!text) return null;

    if (text.includes('•') || text.includes('\n')) {
      const items = text
        .split(/[\n•]/)
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

      return (
        <ul className="details-list">
          {items.map((item, i) => (
            <li key={i} className={className}>
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return <p className={className}>{text}</p>;
  };

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

      {/* Chromatic edge accent */}
      <div className="right-sidebar__chroma-edge"></div>

      {/* Scrollable Content */}
      <div className="right-sidebar__content">
        {/* Header */}
        <div className="right-sidebar__header">
          <span className="right-sidebar__label">Full Specifications</span>
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

        {/* Overview / Extended Details */}
        <div className="right-sidebar__section">
          <h3 className="right-sidebar__section-title">Overview</h3>
          <p className="right-sidebar__text">{projectData.description}</p>

          {/* Structured sections (for Core Profile) */}
          {isStructured && projectData.extendedDetails.map((section, i) => (
            <div key={i} className="right-sidebar__bio-section">
              <h4 className="right-sidebar__bio-title">{section.title}</h4>
              {renderContent(section.content, "right-sidebar__bio-text")}
            </div>
          ))}

          {/* Plain string extended details (for other entries) */}
          {!isStructured && projectData.extendedDetails && 
            renderContent(projectData.extendedDetails, "right-sidebar__text right-sidebar__text--extended")
          }
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

        {/* Collaborators / Organizations */}
        {projectData.collaborators && projectData.collaborators.length > 0 && (
          <div className="right-sidebar__section">
            <h3 className="right-sidebar__section-title">
              {projectData.category === 'Experiences' ? 'Organizations/Departments' : 'Collaborators'}
            </h3>
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

        {/* Connect Section — only for Core Profile */}
        {isCoreProfile && (
          <>
            <div className="right-sidebar__divider"></div>
            <div className="right-sidebar__section">
              <h3 className="right-sidebar__section-title">Connect With Me</h3>
              <ConnectSection />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RightDetailSidebar;
