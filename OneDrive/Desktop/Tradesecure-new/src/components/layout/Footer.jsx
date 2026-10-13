import React from 'react';
import './Footer.css';

export default function Footer({ onSelectCommodity, onOpenContact }) {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Top Section */}
        <div className="footer-top-row">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <svg className="footer-logo-icon" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 0L32 6.4V16C32 25.8 25.2 34.8 16 38C6.8 34.8 0 25.8 0 16V6.4L16 0Z"
                  fill="#00875A"
                />
                <path
                  d="M16 4L28.8 9.1V16.8C28.8 24.6 23.4 31.8 16 34.4C8.6 31.8 3.2 24.6 3.2 16.8V9.1L16 4Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M13.5 24.5L8.5 19.5L10.6 17.4L13.5 20.3L21.4 12.4L23.5 14.5L13.5 24.5Z"
                  fill="#00875A"
                />
              </svg>
              <span className="footer-logo-text">TradeSecure</span>
            </a>

            <p className="footer-mission-text">
              TradeSecure enables buyers and suppliers to trade agricultural products securely through escrow payments, inspections, shipment tracking, and export documentation.
            </p>

            {/* Social Links */}
            <div className="footer-social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-grid">
            {/* PRODUCT */}
            <div className="footer-col">
              <h4 className="footer-col-title">PRODUCT</h4>
              <ul className="footer-links-list">
                <li><a href="#commodities" className="footer-link">Commodities</a></li>
                <li><a href="#how-it-works" className="footer-link">How it works</a></li>
                <li><a href="#network" className="footer-link">Trade network</a></li>
                <li><a href="#features" className="footer-link">Security & Escrow</a></li>
              </ul>
            </div>

            {/* COMMODITIES */}
            <div className="footer-col">
              <h4 className="footer-col-title">COMMODITIES</h4>
              <ul className="footer-links-list">
                <li>
                  <button
                    type="button"
                    className="footer-btn-link"
                    onClick={() => onSelectCommodity && onSelectCommodity('Cocoa Beans')}
                  >
                    Cocoa
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer-btn-link"
                    onClick={() => onSelectCommodity && onSelectCommodity('Arabica Coffee')}
                  >
                    Coffee
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer-btn-link"
                    onClick={() => onSelectCommodity && onSelectCommodity('Sesame Seeds')}
                  >
                    Sesame
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer-btn-link"
                    onClick={() => onSelectCommodity && onSelectCommodity('Raw Cashew Nuts')}
                  >
                    Cashew
                  </button>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="footer-col">
              <h4 className="footer-col-title">COMPANY</h4>
              <ul className="footer-links-list">
                <li><a href="#features" className="footer-link">About TradeSecure</a></li>
                <li>
                  <button
                    type="button"
                    className="footer-btn-link"
                    onClick={() => onOpenContact && onOpenContact()}
                  >
                    Contact
                  </button>
                </li>
                <li><a href="#network" className="footer-link">Partnerships</a></li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="footer-col">
              <h4 className="footer-col-title">LEGAL</h4>
              <ul className="footer-links-list">
                <li><a href="#faq" className="footer-link">Privacy</a></li>
                <li><a href="#faq" className="footer-link">Terms</a></li>
                <li><a href="#faq" className="footer-link">Cookie notice</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; 2026 TradeSecure. All rights reserved. Built for secure agricultural trade with escrow protection, verified inspections, shipment tracking, and export documentation.
          </p>

          <div className="infrastructure-badge">
            <span className="infrastructure-pulse" />
            <span>Global trade infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
