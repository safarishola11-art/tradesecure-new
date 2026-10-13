import React from 'react';
import cocoaHarvestImg from '../../../assets/images/cocoa-harvest.png';
import cargoVesselImg from '../../../assets/images/cargo-vessel.png';
import './CapabilitiesSection.css';

export default function CapabilitiesSection() {
  return (
    <section className="capabilities-section" id="features">
      <div className="container capabilities-container">
        {/* Section Header */}
        <div className="capabilities-header">
          <div className="pill-badge pill-badge--light">
            Core Capabilities
          </div>
          <h2 className="capabilities-main-title">
            Everything you need for secure <span className="highlight-emerald">global trade</span>
          </h2>
          <p className="capabilities-main-sub">
            One secure platform to verify trading partners, manage trade operations, and protect payments from agreement to settlement.
          </p>
        </div>

        {/* Alternating Z-Pattern Rows */}
        <div className="capabilities-rows">
          {/* STEP 01: VERIFY */}
          <div className="capability-row capability-row--normal">
            {/* Visual Card Left */}
            <div className="capability-card-wrapper">
              <div className="capability-card">
                <div className="card-top-bar">
                  <div className="card-icon-bubble card-icon-bubble--green">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.8">
                      <path d="M8 1L14 4V8C14 11.5 11.5 14.5 8 15.5C4.5 14.5 2 11.5 2 8V4L8 1Z"/>
                      <path d="M6 8L7.5 9.5L10.5 6.5"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="card-top-title">Partner Verification</h4>
                    <p className="card-top-sub">Verified partners, Safe trades.</p>
                  </div>
                </div>

                <div className="card-image-box">
                  <img
                    src={cocoaHarvestImg}
                    alt="Agricultural farm harvest inspection"
                    className="card-feature-img"
                    loading="lazy"
                  />
                  <div className="card-floating-badge badge--verified">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <circle cx="6" cy="6" r="5" fill="#F59E0B"/>
                      <path d="M4 6L5.5 7.5L8 4.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>Verified</span>
                  </div>
                </div>

                <div className="card-entity-info">
                  <div className="entity-name-row">
                    <span className="entity-name">Cocoa Export Ltd</span>
                    <span className="verified-check-pill">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#00875A" strokeWidth="2">
                        <path d="M2.5 6L5 8.5L9.5 3.5"/>
                      </svg>
                    </span>
                  </div>
                  <p className="entity-desc">
                    Registered agricultural commodity exporter specialized in cocoa and related product.
                  </p>
                </div>

                <div className="card-checks-list">
                  <div className="check-item">
                    <div className="check-icon-circle check-icon-circle--doc">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.6">
                        <path d="M3 2.5H10L13.5 6V13.5H3V2.5Z"/>
                        <path d="M6 7H10.5M6 10H10.5"/>
                      </svg>
                    </div>
                    <div className="check-text">
                      <div className="check-title">Registration</div>
                      <div className="check-desc">Business registration and corporate documents</div>
                    </div>
                  </div>

                  <div className="check-item">
                    <div className="check-icon-circle check-icon-circle--user">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.6">
                        <circle cx="6" cy="5" r="2.5"/>
                        <path d="M1.5 13.5C1.5 11 3.5 9 6 9C8.5 9 10.5 11 10.5 13.5"/>
                      </svg>
                    </div>
                    <div className="check-text">
                      <div className="check-title">Identity</div>
                      <div className="check-desc">Directors and beneficial ownership verification</div>
                    </div>
                  </div>

                  <div className="check-item">
                    <div className="check-icon-circle check-icon-circle--shield">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.6">
                        <path d="M8 1.5L13.5 4V7.5C13.5 10.5 11.2 13.2 8 14.5C4.8 13.2 2.5 10.5 2.5 7.5V4L8 1.5Z"/>
                      </svg>
                    </div>
                    <div className="check-text">
                      <div className="check-title">Compliance</div>
                      <div className="check-desc">AML sanctions and regulatory compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column Right */}
            <div className="capability-text-col">
              <div className="step-pill">STEP 01</div>
              <h3 className="capability-title">
                Know exactly who you are trading with— before moving cargo or capital.
              </h3>
              <p className="capability-description">
                Eliminate counterparty fraud and regulatory delays. TradeSecure automatically aggregates global registry data, performs institutional identity checks, and validates cargo inspections so you can issue agreements with total confidence.
              </p>

              <div className="capability-bullets">
                <div className="bullet-point">
                  <div className="bullet-icon">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="#00875A" strokeWidth="1.8"/>
                      <path d="M6 10L9 13L14 7" stroke="#00875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="bullet-text">
                    <h5 className="bullet-heading">Institutional KYB & Corporate Vetting</h5>
                    <p className="bullet-detail">Verify registration, licenses and tax identification across jurisdictions.</p>
                  </div>
                </div>

                <div className="bullet-point">
                  <div className="bullet-icon">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="#00875A" strokeWidth="1.8"/>
                      <path d="M6 10L9 13L14 7" stroke="#00875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="bullet-text">
                    <h5 className="bullet-heading">Beneficial Ownership & Director Screening</h5>
                    <p className="bullet-detail">
                      Automated background checks matching Ultimate Beneficial Owners (UBOs) and company directors against global AML, sanctions, and PEP watchlists.
                    </p>
                  </div>
                </div>

                <div className="bullet-point">
                  <div className="bullet-icon">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="#00875A" strokeWidth="1.8"/>
                      <path d="M6 10L9 13L14 7" stroke="#00875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="bullet-text">
                    <h5 className="bullet-heading">Pre-Shipment Inspection Integration</h5>
                    <p className="bullet-detail">
                      Direct integration with accredited lab networks (e.g., SGS) to confirm crop quality, moisture content, and cargo grades before dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 02: MANAGE (Reversed Layout) */}
          <div className="capability-row capability-row--reverse">
            {/* Text Column Left */}
            <div className="capability-text-col">
              <div className="step-pill">STEP 02</div>
              <h3 className="capability-title">
                Coordinate contracts, documents, and real-time cargo tracking in one workspace
              </h3>
              <p className="capability-description">
                Eliminate paper trails and communication silos. TradeSecure keeps buyers, suppliers, and logistics partners aligned through automated trade timelines, tamper-proof document vaults, and live vessel tracking.
              </p>

              <div className="capability-bullets">
                <div className="bullet-point">
                  <div className="bullet-icon">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="#00875A" strokeWidth="1.8"/>
                      <path d="M6 10L9 13L14 7" stroke="#00875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="bullet-text">
                    <h5 className="bullet-heading">Digitized Smart Contracts & Trade Workflows</h5>
                    <p className="bullet-detail">
                      Generate, sign, and execute standardized international commodity contracts with built-in milestone conditions.
                    </p>
                  </div>
                </div>

                <div className="bullet-point">
                  <div className="bullet-icon">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="#00875A" strokeWidth="1.8"/>
                      <path d="M6 10L9 13L14 7" stroke="#00875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="bullet-text">
                    <h5 className="bullet-heading">Tamper-Proof Document Vault</h5>
                    <p className="bullet-detail">
                      Secure storage and instant sharing of phytosanitary certificates, bills of lading, customs clearances, and warehouse receipts.
                    </p>
                  </div>
                </div>

                <div className="bullet-point">
                  <div className="bullet-icon">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="#00875A" strokeWidth="1.8"/>
                      <path d="M6 10L9 13L14 7" stroke="#00875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="bullet-text">
                    <h5 className="bullet-heading">Real-Time Vessel & Cargo Tracking</h5>
                    <p className="bullet-detail">
                      Live AIS satellite tracking for ocean freight, providing automated ETA updates and geofenced milestone triggers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Card Right */}
            <div className="capability-card-wrapper">
              <div className="capability-card">
                <div className="card-top-bar">
                  <div className="card-icon-bubble card-icon-bubble--teal">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#0D9488" strokeWidth="1.8">
                      <rect x="2" y="3" width="12" height="10" rx="2"/>
                      <path d="M2 6.5H14"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="card-top-title">Manage</h4>
                    <p className="card-top-sub">Document, contracts & shipments</p>
                  </div>
                </div>

                <div className="card-image-box">
                  <img
                    src={cargoVesselImg}
                    alt="Cargo container ship in transit"
                    className="card-feature-img"
                    loading="lazy"
                  />
                  <div className="card-floating-badge badge--transit">
                    <span className="pulsing-radar-dot" />
                    <span>In Transit • ETA 4 Days</span>
                  </div>
                </div>

                <div className="card-entity-info">
                  <div className="entity-name-row">
                    <span className="entity-name">Connected workflows, zero paperwork delays.</span>
                  </div>
                  <p className="entity-route-tag">
                    Ghana (GHA) &rarr; Netherlands (NLD)
                  </p>
                </div>

                <div className="card-checks-list">
                  <div className="check-item">
                    <div className="check-icon-circle check-icon-circle--doc">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.6">
                        <path d="M3 2.5H10L13.5 6V13.5H3V2.5Z"/>
                        <path d="M6 7H10.5"/>
                      </svg>
                    </div>
                    <div className="check-text">
                      <div className="check-title">Bill of Lading</div>
                      <div className="check-desc">Digitized eB/L & title ownership</div>
                    </div>
                  </div>

                  <div className="check-item">
                    <div className="check-icon-circle check-icon-circle--shield">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.6">
                        <path d="M8 1L14 4V8C14 11.5 11.5 14.5 8 15.5C4.5 14.5 2 11.5 2 8V4L8 1Z"/>
                        <path d="M6 8L7.5 9.5L10.5 6.5"/>
                      </svg>
                    </div>
                    <div className="check-text">
                      <div className="check-title">Phytosanitary Cert</div>
                      <div className="check-desc">SGS approved lab clearance</div>
                    </div>
                  </div>

                  <div className="check-item">
                    <div className="check-icon-circle check-icon-circle--ship">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.6">
                        <path d="M2 10.5L3 7H13L14 10.5C14 10.5 12 12.5 8 12.5C4 12.5 2 10.5 2 10.5Z"/>
                        <path d="M5 7V4H11V7"/>
                      </svg>
                    </div>
                    <div className="check-text">
                      <div className="check-title">Customs Clearance</div>
                      <div className="check-desc">Automated duty & port clearance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 03: PROTECT */}
          <div className="capability-row capability-row--normal">
            {/* Visual Card Left */}
            <div className="capability-card-wrapper">
              <div className="capability-card">
                <div className="card-top-bar">
                  <div className="card-icon-bubble card-icon-bubble--green">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.8">
                      <rect x="2.5" y="6" width="11" height="8" rx="2"/>
                      <path d="M5 6V4.5C5 2.8 6.3 1.5 8 1.5C9.7 1.5 11 2.8 11 4.5V6"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="card-top-title">Protect</h4>
                    <p className="card-top-sub">Escrow & milestone-based payments</p>
                  </div>
                </div>

                {/* Digital Escrow Mock Display */}
                <div className="escrow-visual-container">
                  <div className="escrow-screen-mock">
                    <div className="screen-header">
                      <div className="screen-title-badge">
                        <span className="dot-green" /> Escrow Balance
                      </div>
                      <span className="screen-status-secured">Secured</span>
                    </div>

                    <div className="screen-balance-amount">$250,000</div>
                    
                    <div className="screen-milestones">
                      <div className="milestone-step done">
                        <span className="step-check">✓</span> Contract Signed
                      </div>
                      <div className="milestone-step done">
                        <span className="step-check">✓</span> Inspection Passed
                      </div>
                      <div className="milestone-step active">
                        <span className="step-spinner" /> Shipment Departed
                      </div>
                      <div className="milestone-step pending">
                        <span className="step-dot" /> Delivery Confirmed
                      </div>
                    </div>
                  </div>

                  <div className="card-floating-badge badge--escrow-release">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="2">
                      <path d="M8 1L14 4V8C14 11.5 11.5 14.5 8 15.5C4.5 14.5 2 11.5 2 8V4L8 1Z"/>
                      <path d="M6 8L7.5 9.5L10.5 6.5"/>
                    </svg>
                    <span>$250,000 • Secured in Escrow</span>
                  </div>
                </div>

                <div className="card-entity-info">
                  <div className="entity-name-row">
                    <span className="entity-name">Milestone Payouts & Escrow</span>
                  </div>
                  <p className="entity-desc">
                    Tier-1 Bank Custody • USD / EUR / GBP
                  </p>
                </div>

                <div className="card-checks-list">
                  <div className="check-item">
                    <div className="check-icon-circle check-icon-circle--lock">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.6">
                        <rect x="3" y="6" width="10" height="8" rx="2"/>
                        <path d="M5 6V4.5C5 2.8 6.3 1.5 8 1.5C9.7 1.5 11 2.8 11 4.5V6"/>
                      </svg>
                    </div>
                    <div className="check-text">
                      <div className="check-title">Segregated Vault Funding</div>
                      <div className="check-desc">Multi-currency custody accounts (Tier-1)</div>
                    </div>
                  </div>

                  <div className="check-item">
                    <div className="check-icon-circle check-icon-circle--key">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.6">
                        <circle cx="5.5" cy="8" r="3.5"/>
                        <path d="M9 8H14M11.5 8V10.5M14 8V10.5"/>
                      </svg>
                    </div>
                    <div className="check-text">
                      <div className="check-title">Milestone Execution</div>
                      <div className="check-desc">Automated release upon SGS port verification</div>
                    </div>
                  </div>

                  <div className="check-item">
                    <div className="check-icon-circle check-icon-circle--shield">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.6">
                        <path d="M8 1L14 4V8C14 11.5 11.5 14.5 8 15.5C4.5 14.5 2 11.5 2 8V4L8 1Z"/>
                        <path d="M8 6V9M8 11.5V11.8"/>
                      </svg>
                    </div>
                    <div className="check-text">
                      <div className="check-title">Arbiter Protocol</div>
                      <div className="check-desc">Integrated international trade arbitration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column Right */}
            <div className="capability-text-col">
              <div className="step-pill">STEP 03</div>
              <h3 className="capability-title">
                Protect your capital until every milestone is verified.
              </h3>
              <p className="capability-description">
                TradeSecure holds funds securely and releases them only when agreed trade conditions are verified.
              </p>

              <div className="capability-bullets">
                <div className="bullet-point">
                  <div className="bullet-icon">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="#00875A" strokeWidth="1.8"/>
                      <path d="M6 10L9 13L14 7" stroke="#00875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="bullet-text">
                    <h5 className="bullet-heading">Multi-Currency Segregated Custody</h5>
                    <p className="bullet-detail">
                      Hold capital securely in Tier-1 bank accounts supported in USD, EUR, and GBP, protecting buyer funds until agreed shipping criteria are met.
                    </p>
                  </div>
                </div>

                <div className="bullet-point">
                  <div className="bullet-icon">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="#00875A" strokeWidth="1.8"/>
                      <path d="M6 10L9 13L14 7" stroke="#00875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="bullet-text">
                    <h5 className="bullet-heading">Automated Port Discharge Payouts</h5>
                    <p className="bullet-detail">
                      Payouts trigger automatically upon digital confirmation from accredited inspection partners (e.g., SGS) and port authorities.
                    </p>
                  </div>
                </div>

                <div className="bullet-point">
                  <div className="bullet-icon">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="#00875A" strokeWidth="1.8"/>
                      <path d="M6 10L9 13L14 7" stroke="#00875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="bullet-text">
                    <h5 className="bullet-heading">Counterparty Default Protection</h5>
                    <p className="bullet-detail">
                      Built-in international trade arbitration rules ensure funds remain protected, audited, and recoverable in the event of trade disputes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
