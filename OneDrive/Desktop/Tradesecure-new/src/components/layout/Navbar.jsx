import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ onStartTrade }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Commodities', href: '#commodities' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-header--scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="navbar-logo" aria-label="TradeSecure Home">
          <svg className="navbar-logo-icon" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <span className="navbar-logo-text">TradeSecure</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav" aria-label="Primary Navigation">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="navbar-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-login-btn"
            onClick={() => onStartTrade && onStartTrade('login')}
          >
            Log in
          </button>
          <button
            type="button"
            className="btn btn-primary navbar-cta-btn"
            onClick={() => onStartTrade && onStartTrade('get-started')}
          >
            <span>Get Started</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="navbar-hamburger"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? 'navbar-mobile-drawer--open' : ''}`}>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-actions">
          <button
            type="button"
            className="navbar-login-btn mobile-login-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onStartTrade && onStartTrade('login');
            }}
          >
            Log in
          </button>
          <button
            type="button"
            className="btn btn-primary mobile-cta-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onStartTrade && onStartTrade('get-started');
            }}
          >
            <span>Get Started</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
