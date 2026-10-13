import React from 'react';
import DashboardMockup from './DashboardMockup';
import './HeroSection.css';

export default function HeroSection({ onStartTrade, onLearnMore }) {
  return (
    <section className="hero-section" id="hero">
      {/* Background SVG Watermark Pattern */}
      <div className="hero-pattern-bg" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" width="90" height="90" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
              {/* Stylized agricultural leaf / bean contour */}
              <path
                d="M45 10 C60 10 75 25 75 45 C75 65 60 80 45 80 C30 80 15 65 15 45 C15 25 30 10 45 10 Z"
                fill="none"
                stroke="rgba(255, 255, 255, 0.035)"
                strokeWidth="2"
              />
              <path
                d="M45 15 C45 35 45 60 45 75"
                fill="none"
                stroke="rgba(255, 255, 255, 0.025)"
                strokeWidth="1.5"
              />
              <path
                d="M45 35 C55 30 65 32 68 38"
                fill="none"
                stroke="rgba(255, 255, 255, 0.025)"
                strokeWidth="1.2"
              />
              <path
                d="M45 50 C35 45 25 47 22 53"
                fill="none"
                stroke="rgba(255, 255, 255, 0.025)"
                strokeWidth="1.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="container hero-container">
        {/* Hero Copy */}
        <div className="hero-content">
          <h1 className="hero-title">
            Trade Agricultural Commodities With Confidence.
          </h1>
          <p className="hero-subtitle">
            Verify trading partners, protect payments with escrow, and track every shipment from agreement to delivery.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-white hero-btn-primary"
              onClick={() => onStartTrade && onStartTrade('start-trade')}
            >
              <span>Start a trade</span>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <a
              href="#how-it-works"
              className="btn btn-outline-dark hero-btn-secondary"
              onClick={(e) => {
                if (onLearnMore) {
                  e.preventDefault();
                  onLearnMore();
                }
              }}
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Floating SaaS Dashboard Preview */}
        <DashboardMockup onCreateTrade={() => onStartTrade && onStartTrade('create-trade')} />
      </div>
    </section>
  );
}
