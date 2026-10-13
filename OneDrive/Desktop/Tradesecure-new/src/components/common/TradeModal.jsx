import React, { useState } from 'react';
import './TradeModal.css';

export default function TradeModal({ isOpen, onClose, initialMode = 'trade' }) {
  const [role, setRole] = useState('Buyer');
  const [commodity, setCommodity] = useState('Cocoa Beans');
  const [volume, setVolume] = useState('500');
  const [origin, setOrigin] = useState('West Africa (Ghana/Ivory Coast)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-icon-bubble">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00875A" strokeWidth="2.5">
                <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="success-title">Trade Request Initiated</h3>
            <p className="success-msg">
              Your inquiry for <strong>{volume} MT of {commodity}</strong> has been secured. Our trade verification team will connect with your institution shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div className="modal-badge">
                <span className="badge-dot" />
                <span>TradeSecure Escrow & Onboarding</span>
              </div>
              <h2 className="modal-title">
                {initialMode === 'login' ? 'Institutional Log In' : 'Initiate Secure Trade Inquiry'}
              </h2>
              <p className="modal-sub">
                Connect with verified agricultural commodity suppliers and institutional buyers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label">I am trading as a:</label>
                <div className="role-selector-grid">
                  {['Buyer', 'Supplier', 'Broker / Trader'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      className={`role-choice-btn ${role === r ? 'role-choice-btn--active' : ''}`}
                      onClick={() => setRole(r)}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="commodity-select">Commodity</label>
                  <select
                    id="commodity-select"
                    className="form-select"
                    value={commodity}
                    onChange={(e) => setCommodity(e.target.value)}
                  >
                    <option value="Cocoa Beans">Cocoa Beans (West Africa)</option>
                    <option value="Arabica Coffee">Arabica Coffee (East Africa)</option>
                    <option value="Sesame Seeds">Natural Sesame Seeds</option>
                    <option value="Raw Cashew Nuts">Raw Cashew Nuts (RCN)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="volume-input">Target Volume (Metric Tons)</label>
                  <input
                    id="volume-input"
                    type="number"
                    className="form-input"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    min="10"
                    placeholder="e.g. 500"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email-input">Institutional Email</label>
                <input
                  id="email-input"
                  type="email"
                  className="form-input"
                  placeholder="contact@tradingfirm.com"
                  required
                />
              </div>

              <div className="modal-trust-callout">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.8">
                  <path d="M8 1L14 4V8C14 11.5 11.5 14.5 8 15.5C4.5 14.5 2 11.5 2 8V4L8 1Z"/>
                  <path d="M6 8L7.5 9.5L10.5 6.5"/>
                </svg>
                <span>All trades are escrow protected with Tier-1 bank custody & SGS inspection verification.</span>
              </div>

              <button type="submit" className="btn btn-primary modal-submit-btn">
                <span>Submit Trade Inquiry &rarr;</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
