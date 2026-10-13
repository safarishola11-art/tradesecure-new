import React, { useState } from 'react';
import './FAQSection.css';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does TradeSecure protect buyer capital and supplier payment?',
      a: 'TradeSecure operates dedicated multi-currency escrow accounts held in segregated custody with Tier-1 international banking institutions. Buyer funds are locked upon trade agreement execution and released in strict accordance with verified contract milestones—such as laboratory quality approval, bill of lading issuance, or destination port discharge confirmation.',
    },
    {
      q: 'How are SGS and pre-shipment inspections verified on the platform?',
      a: 'TradeSecure integrates directly with accredited inspection agencies including SGS, Bureau Veritas, and Cotecna. Inspection certificates, moisture analysis, foreign matter ratios, and grade classifications are transmitted directly from laboratory systems to verify cargo specifications prior to dispatch.',
    },
    {
      q: 'What currencies and international payment rails are supported?',
      a: 'Transactions can be contracted, held, and settled in USD ($), EUR (€), and GBP (£). TradeSecure supports international SWIFT (MT103) wire rails, European SEPA rails, and local corporate accounts across primary export corridors, ensuring seamless cross-border settlement without multi-intermediary friction.',
    },
    {
      q: 'What happens in the event of cargo quality discrepancies or delivery disputes?',
      a: 'Every trade contract generated through TradeSecure incorporates standardized international commodity arbitration clauses (aligned with GAFTA, FCCA, and ICC trade rules). If inspection reports show cargo variance exceeding contractual tolerance limits, escrow payout triggers are frozen while designated independent adjudicators resolve adjustments.',
    },
    {
      q: 'What documentation is required for institutional KYB vetting and onboarding?',
      a: 'Both buyers and suppliers submit certificates of incorporation, agricultural export/import licenses, tax identification numbers, and Ultimate Beneficial Ownership (UBO) filings. Our automated compliance engine screens entities against global sanctions, AML registries, and PEP databases within 24–48 business hours.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        {/* Header */}
        <div className="faq-header">
          <div className="pill-badge pill-badge--light">
            FAQ
          </div>
          <h2 className="faq-title">
            Frequently asked questions about <span className="highlight-emerald">TradeSecure</span>
          </h2>
          <p className="faq-sub">
            Learn how our escrow, inspection validation, and international settlement protocols ensure transparent agricultural trade.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <span className="faq-toggle-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 6L8 10L12 6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>

                <div className="faq-answer-collapse">
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="faq-help-card">
          <div className="help-card-text">
            <h4 className="help-card-title">Have a specific question about your trade requirements?</h4>
            <p className="help-card-desc">Our commodity trade specialists and escrow desk officers are available to assist.</p>
          </div>
          <a href="#how-it-works" className="btn btn-primary help-card-btn">
            Talk to our team &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
