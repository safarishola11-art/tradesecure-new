import React from 'react';
import './FinalCTASection.css';

export default function FinalCTASection({ onStartTrade, onTalkToTeam }) {
  return (
    <section className="final-cta-section" id="contact">
      {/* Decorative Radial Lines and Vector Accents */}
      <div className="cta-vector-bg" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1200 480" fill="none" preserveAspectRatio="none">
          {/* Sweeping Left Arc */}
          <path
            d="M -100 240 C 200 240 300 400 450 480"
            stroke="rgba(16, 185, 129, 0.18)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx="120" cy="245" r="4" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.5" />
          <circle cx="360" cy="315" r="4" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.5" />

          {/* Sweeping Right Orbital Arc */}
          <path
            d="M 850 480 C 850 200 1000 80 1300 80"
            stroke="rgba(16, 185, 129, 0.25)"
            strokeWidth="2"
          />
          <circle cx="890" cy="130" r="4.5" fill="none" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1.5" />
          <circle cx="950" cy="75" r="3.5" fill="none" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1.5" />
          <circle cx="1160" cy="78" r="4" fill="none" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1.5" />

          {/* Large Soft Glow Center Disc */}
          <circle cx="980" cy="180" r="280" fill="rgba(0, 135, 90, 0.08)" />
        </svg>
      </div>

      <div className="container cta-container">
        {/* Top Badge */}
        <div className="pill-badge pill-badge--dark cta-pill">
          Trade with TradeSecure
        </div>

        {/* Headline & Subhead */}
        <h2 className="cta-headline">
          Ready to trade with confidence?
        </h2>

        <p className="cta-subhead">
          Connect with verified partners, protect every transaction, and move agricultural commodities across borders with clarity.
        </p>

        {/* Action Buttons */}
        <div className="cta-button-group">
          <button
            type="button"
            className="btn btn-white cta-btn-white"
            onClick={() => onStartTrade && onStartTrade('start-trade')}
          >
            <span>Start a trade</span>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            type="button"
            className="btn btn-outline-dark cta-btn-team"
            onClick={() => onTalkToTeam && onTalkToTeam('team')}
          >
            Talk to our team
          </button>
        </div>

        {/* Bottom Trust Highlights */}
        <div className="cta-trust-tags">
          <div className="trust-tag-item">
            <span className="trust-pulse-dot" />
            <span>VERIFIED PARTNERS</span>
          </div>
          <span className="tag-separator">•</span>
          <div className="trust-tag-item">
            <span>PROTECTED PAYMENTS</span>
          </div>
          <span className="tag-separator">•</span>
          <div className="trust-tag-item">
            <span>VISIBLE SHIPMENTS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
