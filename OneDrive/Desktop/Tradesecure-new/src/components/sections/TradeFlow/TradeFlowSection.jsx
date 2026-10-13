import React, { useState } from 'react';
import './TradeFlowSection.css';

export default function TradeFlowSection({ onOpenJourney }) {
  const [activeStep, setActiveStep] = useState(2); // default step 03 active or interactive

  const steps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'Find verified commodity suppliers and available inventory.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#10B981" strokeWidth="1.8">
          <circle cx="9" cy="9" r="6"/>
          <path d="M13.5 13.5L18 18" strokeLinecap="round"/>
          <path d="M7 9L8.5 10.5L11 7.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Agree',
      desc: 'Review specifications, negotiate terms, and create the trade agreement.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#10B981" strokeWidth="1.8">
          <path d="M4 3H12L16 7V17H4V3Z"/>
          <path d="M8 11L9.5 12.5L12.5 9.5"/>
          <path d="M7 7H10"/>
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Secure',
      desc: 'Funds enter protected escrow while required conditions are verified',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#10B981" strokeWidth="1.8">
          <rect x="3.5" y="8" width="13" height="10" rx="2.5"/>
          <path d="M6.5 8V5.5C6.5 3.5 8 2 10 2C12 2 13.5 3.5 13.5 5.5V8"/>
          <circle cx="10" cy="13" r="1.5" fill="#10B981"/>
        </svg>
      ),
    },
    {
      step: '04',
      title: 'Ship',
      desc: 'Track inspections, documentation, and cargo movement in real time.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#10B981" strokeWidth="1.8">
          <path d="M2 13L3.5 8H16.5L18 13C18 13 15 16 10 16C5 16 2 13 2 13Z"/>
          <path d="M6 8V4.5H14V8"/>
          <path d="M10 4.5V2"/>
        </svg>
      ),
    },
    {
      step: '05',
      title: 'Settle',
      desc: 'Once delivery conditions are met, payment is released.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#10B981" strokeWidth="1.8">
          <path d="M10 2L17 5V10C17 14.5 14 18 10 19C6 18 3 14.5 3 10V5L10 2Z"/>
          <path d="M7.5 10.5L9 12L13 8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="trade-flow-section" id="how-it-works">
      {/* Background Jigsaw / Contour Watermark */}
      <div className="flow-bg-pattern" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="jigsaw-flow-pattern" width="180" height="180" patternUnits="userSpaceOnUse">
              <path
                d="M0 90 Q45 60 90 90 T180 90"
                fill="none"
                stroke="rgba(16, 185, 129, 0.04)"
                strokeWidth="28"
              />
              <path
                d="M90 0 Q60 45 90 90 T90 180"
                fill="none"
                stroke="rgba(16, 185, 129, 0.04)"
                strokeWidth="28"
              />
              <circle cx="90" cy="90" r="24" fill="none" stroke="rgba(16, 185, 129, 0.05)" strokeWidth="12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jigsaw-flow-pattern)" />
        </svg>
      </div>

      <div className="container flow-container">
        {/* Header Row */}
        <div className="flow-header-row">
          <div className="flow-header-left">
            <div className="pill-badge pill-badge--dark">
              How it works
            </div>
            <h2 className="flow-title">
              From verified supply to delivered cargo
            </h2>
          </div>

          <div className="flow-header-right">
            <p className="flow-sub">
              One connected trade journey, with every agreement, condition, shipment, and payment visible from start to settlement.
            </p>
            <div className="protection-badge">
              <span className="protection-dot" />
              <span>End-to-end trade protection</span>
            </div>
          </div>
        </div>

        {/* 5-Step Connected Progression Box */}
        <div className="flow-stepper-box">
          {/* Luminous Route Line Behind Nodes */}
          <div className="flow-luminous-line" />

          {/* 5 Progression Columns */}
          <div className="flow-steps-grid">
            {steps.map((st, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <div
                  key={st.step}
                  className={`flow-step-col ${isSelected ? 'flow-step-col--active' : ''} ${isPassed ? 'flow-step-col--passed' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveStep(idx);
                  }}
                >
                  {/* Top Bar inside column: Number & Icon */}
                  <div className="step-col-top">
                    <span className="step-num">{st.step}</span>
                    <div className="step-icon-bubble">{st.icon}</div>
                  </div>

                  {/* Concentric Node Circle */}
                  <div className="step-node-anchor">
                    <div className="step-node-dot">
                      <span className="node-center-point" />
                    </div>
                  </div>

                  {/* Step Text Info */}
                  <div className="step-col-body">
                    <h3 className="step-title">{st.title}</h3>
                    <p className="step-desc">{st.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Flow Footer Line */}
        <div className="flow-bottom-bar">
          <div className="flow-status-progress">
            <span className="status-label">Supply verified</span>
            <div className="status-progress-line">
              <div className="status-progress-fill" style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }} />
            </div>
            <span className="status-label">Trade settled</span>
          </div>

          <button
            type="button"
            className="btn btn-outline-dark flow-journey-btn"
            onClick={() => onOpenJourney && onOpenJourney()}
          >
            <span>See the trade journey</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
