import React, { useEffect, useRef } from 'react';
import './SlidingSidebar.css';

function SlidingSidebar({ isOpen, onToggle, projects, activePlanet, onSelectProject }) {
  const sidebarRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) onToggle();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onToggle]);

  const handleProjectClick = (project) => {
    onSelectProject(project.planetName);
    // Sidebar will close via parent state
  };

  return (
    <>
      {/* Toggle Button — always visible */}
      <button
        className={`sidebar-toggle ${isOpen ? 'sidebar-toggle--open' : ''}`}
        onClick={onToggle}
        aria-label={isOpen ? 'Close project sidebar' : 'Open project sidebar'}
      >
        <div className="sidebar-toggle__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Sidebar Panel */}
      <div
        ref={sidebarRef}
        className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}
      >
        {/* Header */}
        <div className="sidebar__header">
          <div className="sidebar__header-glow"></div>
          <h2 className="sidebar__title">Projects</h2>
          <div className="sidebar__header-line"></div>
        </div>

        {/* Project List */}
        <div className="sidebar__list">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`sidebar__item ${activePlanet === project.planetName ? 'sidebar__item--active' : ''}`}
              onClick={() => handleProjectClick(project)}
              style={{ animationDelay: isOpen ? `${index * 0.04}s` : '0s' }}
            >
              {/* Planet thumbnail circle */}
              <div className="sidebar__item-thumb">
                <div
                  className="sidebar__item-dot"
                  style={{
                    background: getPlanetColor(project.planetName),
                    boxShadow: `0 0 8px ${getPlanetColor(project.planetName)}80`,
                  }}
                ></div>
              </div>

              {/* Project info */}
              <div className="sidebar__item-info">
                <span className="sidebar__item-name">{project.projectTitle}</span>
                <span className="sidebar__item-category">{project.category}</span>
              </div>

              {/* Status indicator */}
              <div className="sidebar__item-status">
                <span className="sidebar__item-status-dot"></span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="sidebar__footer">
          <div className="sidebar__footer-line"></div>
          <span className="sidebar__footer-text">
            {projects.length} Projects · System Active
          </span>
        </div>
      </div>
    </>
  );
}

/** Returns a representative color for each planet */
function getPlanetColor(planetName) {
  const colors = {
    Mercury: '#a0a0a0',
    Venus: '#e8c56d',
    Earth: '#4a90d9',
    Mars: '#c1440e',
    Ceres: '#8a7d6b',
    Jupiter: '#c88b3a',
    Saturn: '#d4b675',
    Uranus: '#73c2c6',
    Neptune: '#3f54ba',
    Makemake: '#c49882',
    Haumea: '#9a9a9a',
  };
  return colors[planetName] || '#4da6ff';
}

export default SlidingSidebar;
