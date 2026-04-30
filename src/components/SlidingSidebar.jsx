import React, { useEffect, useRef, useMemo } from 'react';
import './SlidingSidebar.css';

/**
 * SlidingSidebar
 * 
 * Groups projects by category (Core Profile, Projects, Experiences)
 * and renders them in distinct sections with headers.
 */
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

  // Group projects by category, in display order
  const groupedProjects = useMemo(() => {
    const categoryOrder = ['Core Profile', 'Projects', 'Experiences'];
    const groups = {};

    categoryOrder.forEach(cat => {
      const items = projects.filter(p => p.category === cat);
      if (items.length > 0) {
        groups[cat] = items;
      }
    });

    return groups;
  }, [projects]);

  const handleProjectClick = (project) => {
    onSelectProject(project.planetName);
  };

  // Flat index counter for staggered animation delays
  let flatIndex = 0;

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
          <h2 className="sidebar__title">Navigation</h2>
          <div className="sidebar__header-line"></div>
        </div>

        {/* Grouped Project List */}
        <div className="sidebar__list">
          {Object.entries(groupedProjects).map(([category, items]) => (
            <div key={category} className="sidebar__group">
              {/* Category Section Header */}
              <div className="sidebar__group-header">
                <span className="sidebar__group-icon">
                  {getCategoryIcon(category)}
                </span>
                <span className="sidebar__group-label">{category}</span>
                <span className="sidebar__group-count">{items.length}</span>
              </div>

              {/* Items in this category */}
              {items.map((project) => {
                const currentIndex = flatIndex++;
                return (
                  <button
                    key={project.id}
                    className={`sidebar__item ${activePlanet === project.planetName ? 'sidebar__item--active' : ''} ${project.isSun ? 'sidebar__item--sun' : ''}`}
                    onClick={() => handleProjectClick(project)}
                    style={{ animationDelay: isOpen ? `${currentIndex * 0.04}s` : '0s' }}
                  >
                    {/* Planet/Sun thumbnail circle */}
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
                      <span className="sidebar__item-category">{project.telemetry}</span>
                    </div>

                    {/* Status indicator */}
                    <div className="sidebar__item-status">
                      <span className="sidebar__item-status-dot"></span>
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sidebar__footer">
          <div className="sidebar__footer-line"></div>
          <span className="sidebar__footer-text">
            {projects.length} Nodes · System Active
          </span>
        </div>
      </div>
    </>
  );
}

/** Returns a category icon */
function getCategoryIcon(category) {
  switch (category) {
    case 'Core Profile': return '☀';
    case 'Projects': return '◈';
    case 'Experiences': return '◆';
    default: return '○';
  }
}

/** Returns a representative color for each planet/sun */
function getPlanetColor(planetName) {
  const colors = {
    Sun: '#ffaa33',
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
