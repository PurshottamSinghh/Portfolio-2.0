import React, { useState, useEffect, useCallback } from 'react';
import './WelcomeHint.css';

/**
 * WelcomeHint
 * 
 * A first-visit overlay that teaches the user planets are interactive.
 * Uses localStorage to only show once. Auto-dismisses after 6 seconds
 * or on first click/tap anywhere.
 */
function WelcomeHint() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('portfolio-visited');
    if (!hasVisited) {
      // Delay appearance so the scene loads first
      const showTimer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(showTimer);
    }
  }, []);

  const dismiss = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    localStorage.setItem('portfolio-visited', 'true');
    setTimeout(() => setVisible(false), 500);
  }, [exiting]);

  // Auto-dismiss after 6 seconds
  useEffect(() => {
    if (visible && !exiting) {
      const timer = setTimeout(dismiss, 6000);
      return () => clearTimeout(timer);
    }
  }, [visible, exiting, dismiss]);

  // Dismiss on any click/tap
  useEffect(() => {
    if (visible) {
      const handler = () => dismiss();
      window.addEventListener('pointerdown', handler, { once: true });
      return () => window.removeEventListener('pointerdown', handler);
    }
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div className={`welcome-hint ${exiting ? 'welcome-hint--exiting' : ''}`}>
      <div className="welcome-hint__card">
        {/* Animated tap icon */}
        <div className="welcome-hint__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
            <path d="M15 15.5V13a1 1 0 0 1 1-1 1 1 0 0 1 1 1v1.5" />
            <path d="M17 14.5V13a1 1 0 0 1 1-1 1 1 0 0 1 1 1v6.5a4 4 0 0 1-4 4H12a4 4 0 0 1-2.83-1.17l-3.34-3.34a1.5 1.5 0 0 1 0-2.12 1.5 1.5 0 0 1 2.12 0L10 14.5V5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v8.5" />
            <path d="M13 13.5V5" />
          </svg>
          <div className="welcome-hint__ripple"></div>
        </div>

        <p className="welcome-hint__text">
          Tap a planet to explore
        </p>
        <span className="welcome-hint__subtext">
          or use the menu below
        </span>
      </div>
    </div>
  );
}

export default WelcomeHint;
