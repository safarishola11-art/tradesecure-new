import React from 'react';
import cocoaImg from '../../../assets/images/cocoa-beans.png';
import coffeeImg from '../../../assets/images/coffee-beans.png';
import sesameImg from '../../../assets/images/sesame-seeds.png';
import cashewImg from '../../../assets/images/cashew-nuts.png';
import './CommoditiesSection.css';

export default function CommoditiesSection({ onSelectCommodity }) {
  const commodities = [
    {
      id: 'cocoa',
      num: '01',
      title: 'Cocoa',
      subtitle: 'West African origin • Export-ready supply',
      origin: 'GH • CI',
      originFull: 'Ghana & Côte d\'Ivoire',
      image: cocoaImg,
      tall: true,
      tradeName: 'Cocoa Beans',
    },
    {
      id: 'coffee',
      num: '02',
      title: 'Coffee',
      subtitle: 'Traceable origins • Quality-focused sourcing',
      origin: 'ET • KE',
      originFull: 'Ethiopia & Kenya',
      image: coffeeImg,
      wide: true,
      tradeName: 'Arabica Coffee',
    },
    {
      id: 'sesame',
      num: '03',
      title: 'Sesame',
      subtitle: 'Verified supply • Global export markets',
      origin: 'NG • TZ',
      originFull: 'Nigeria & Tanzania',
      image: sesameImg,
      tradeName: 'Sesame Seeds',
    },
    {
      id: 'cashew',
      num: '04',
      title: 'Cashew',
      subtitle: 'Quality graded • International demand',
      origin: 'CI • NG',
      originFull: 'Côte d\'Ivoire & Nigeria',
      image: cashewImg,
      tradeName: 'Raw Cashew Nuts',
    },
  ];

  return (
    <section className="commodities-section" id="commodities">
      <div className="container commodities-container">
        {/* Section Header Row */}
        <div className="commodities-header-row">
          <div className="commodities-header-left">
            <div className="pill-badge pill-badge--light">
              Commodities
            </div>
            <h2 className="commodities-title">
              Built for global <span className="highlight-emerald">agricultural trade</span>
            </h2>
          </div>

          <div className="commodities-header-right">
            <p className="commodities-desc">
              Access quality agricultural commodities from trusted origins and connect supply with global markets through a more transparent and reliable trading experience.
            </p>
            <button
              type="button"
              className="btn btn-primary commodities-explore-btn"
              onClick={() => onSelectCommodity && onSelectCommodity('Cocoa Beans')}
            >
              <span>Explore commodities</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="commodities-bento-grid">
          {commodities.map((item) => (
            <div
              key={item.id}
              className={`commodity-bento-card ${item.tall ? 'bento-card--tall' : ''} ${item.wide ? 'bento-card--wide' : ''}`}
              onClick={() => onSelectCommodity && onSelectCommodity(item.tradeName)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectCommodity && onSelectCommodity(item.tradeName);
                }
              }}
            >
              {/* Background Image with Cinematic Gradient */}
              <div className="commodity-bg-wrapper">
                <img src={item.image} alt={item.title} className="commodity-bg-image" loading="lazy" />
                <div className="commodity-gradient-overlay" />
              </div>

              {/* Card Header Top Badges */}
              <div className="commodity-card-top">
                <span className="commodity-number">{item.num}</span>
                <span className="commodity-origin-pill" title={item.originFull}>
                  {item.origin}
                </span>
              </div>

              {/* Card Footer Content */}
              <div className="commodity-card-bottom">
                <div className="commodity-info">
                  <h3 className="commodity-name">{item.title}</h3>
                  <p className="commodity-meta">{item.subtitle}</p>
                </div>
                <div className="commodity-action-circle" aria-label={`Trade ${item.title}`}>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="commodities-trust-row">
          <span className="trust-item">Trusted origins</span>
          <span className="trust-bullet">•</span>
          <span className="trust-item">Verified supply</span>
          <span className="trust-bullet">•</span>
          <span className="trust-item">Global market access</span>
        </div>
      </div>
    </section>
  );
}
