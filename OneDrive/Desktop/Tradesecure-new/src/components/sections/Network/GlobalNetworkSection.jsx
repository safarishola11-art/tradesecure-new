import React, { useState } from 'react';
import networkBg from '../../../assets/images/network-bg.png';
import './GlobalNetworkSection.css';

export default function GlobalNetworkSection() {
  const [activeCorridor, setActiveCorridor] = useState('wa-eu');

  const corridors = [
    {
      id: 'wa-eu',
      title: 'West Africa → Europe',
      origin: 'West Africa (Tema / Abidjan)',
      destination: 'Rotterdam / Hamburg / Antwerp',
      commodities: 'Cocoa Beans, Cashew, Robusta Coffee',
      eta: '12–16 Days',
      volume: '185,000 MT / year',
      activeRoutes: ['route-wa-eu'],
    },
    {
      id: 'wa-me',
      title: 'West Africa → Middle East',
      origin: 'West Africa (Lagos / Cotonou)',
      destination: 'Dubai (Jebel Ali) / Jeddah',
      commodities: 'Sesame Seeds, Raw Cashew, Soybeans',
      eta: '18–22 Days',
      volume: '95,000 MT / year',
      activeRoutes: ['route-wa-me'],
    },
    {
      id: 'wa-asia',
      title: 'West Africa → Asia',
      origin: 'West Africa (Abidjan / San Pedro)',
      destination: 'Singapore / Vietnam / Shanghai',
      commodities: 'Raw Cashew Nuts, Sesame, Cocoa Butter',
      eta: '24–30 Days',
      volume: '140,000 MT / year',
      activeRoutes: ['route-wa-asia'],
    },
    {
      id: 'ea-global',
      title: 'East Africa → Global markets',
      origin: 'East Africa (Mombasa / Dar es Salaam)',
      destination: 'Europe, Middle East & North America',
      commodities: 'Arabica Coffee, Sesame, Tea, Spices',
      eta: '14–20 Days',
      volume: '120,000 MT / year',
      activeRoutes: ['route-ea-eu', 'route-ea-me', 'route-ea-asia'],
    },
  ];

  const currentCorridorInfo = corridors.find((c) => c.id === activeCorridor) || corridors[0];

  return (
    <section className="network-section" id="network">
      <div className="network-bg-texture" style={{ backgroundImage: `url(${networkBg})` }} />

      <div className="container network-container">
        {/* Header */}
        <div className="network-header-row">
          <div className="network-header-left">
            <div className="pill-badge pill-badge--light">
              Global trade network
            </div>
            <h2 className="network-title">
              Trade across borders with <span className="highlight-emerald">confidence</span>
            </h2>
          </div>

          <div className="network-header-right">
            <p className="network-desc">
              Connect trusted African supply with international demand through visible, coordinated trade routes built for modern commerce.
            </p>
          </div>
        </div>

        {/* Map Visualization Container */}
        <div className="network-map-stage">
          <svg
            className="network-world-svg"
            viewBox="0 0 1000 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Diagonal Hatching Pattern for Continents */}
              <pattern id="diagonal-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#94A3B8" strokeWidth="2.5" opacity="0.65" />
              </pattern>
              
              <pattern id="diagonal-hatch-dark" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#64748B" strokeWidth="3" opacity="0.8" />
              </pattern>

              {/* Glow Filter for Active Routes */}
              <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Stylized Continents Group */}
            <g className="world-continents">
              {/* North America */}
              <path
                d="M170 120 C180 100 230 90 280 110 C310 120 340 150 350 180 C360 210 330 240 300 260 C270 280 230 260 210 230 C190 200 160 170 170 120 Z"
                fill="url(#diagonal-hatch)"
              />
              <path
                d="M190 220 L240 280 L220 310 L190 270 Z"
                fill="url(#diagonal-hatch)"
              />

              {/* South America */}
              <path
                d="M260 300 C290 290 340 310 350 350 C360 400 320 450 300 480 C280 470 260 420 250 370 C245 330 250 310 260 300 Z"
                fill="url(#diagonal-hatch)"
              />

              {/* Europe */}
              <path
                d="M450 140 C470 120 520 120 540 140 C550 160 540 190 520 210 C490 220 460 200 450 170 Z"
                fill="url(#diagonal-hatch)"
              />
              <path
                d="M480 110 C500 100 520 105 530 120 L510 135 Z"
                fill="url(#diagonal-hatch)"
              />

              {/* Africa (Highlighted with Primary Origin Density) */}
              <path
                d="M460 230 C500 210 550 220 560 260 C580 300 580 360 550 420 C520 460 480 420 460 360 C440 310 440 260 460 230 Z"
                fill="url(#diagonal-hatch-dark)"
              />

              {/* Asia & Eurasia */}
              <path
                d="M550 130 C600 110 700 100 780 130 C840 160 850 220 800 260 C750 280 700 270 650 250 C610 230 560 200 550 130 Z"
                fill="url(#diagonal-hatch)"
              />

              {/* India */}
              <path
                d="M650 250 C670 270 680 310 660 330 C640 310 635 280 650 250 Z"
                fill="url(#diagonal-hatch)"
              />

              {/* Southeast Asia & Islands */}
              <path
                d="M740 270 C760 260 790 280 780 310 C760 320 740 300 740 270 Z"
                fill="url(#diagonal-hatch)"
              />
              <path
                d="M780 340 L820 350 L800 370 Z"
                fill="url(#diagonal-hatch)"
              />

              {/* Australia */}
              <path
                d="M780 390 C830 380 870 410 860 460 C840 480 790 470 770 440 C760 410 770 395 780 390 Z"
                fill="url(#diagonal-hatch)"
              />
            </g>

            {/* Trade Corridor Route Arcs */}
            <g className="network-routes">
              {/* West Africa -> North America */}
              <path
                id="route-wa-na"
                d="M 480 330 Q 360 240 260 215"
                className="route-arc"
                fill="none"
              />

              {/* West Africa -> Europe */}
              <path
                id="route-wa-eu"
                d="M 480 330 Q 470 230 500 170"
                className={`route-arc ${activeCorridor === 'wa-eu' ? 'route-arc--active' : ''}`}
                fill="none"
              />

              {/* West Africa -> Middle East */}
              <path
                id="route-wa-me"
                d="M 480 330 Q 550 280 625 245"
                className={`route-arc ${activeCorridor === 'wa-me' ? 'route-arc--active' : ''}`}
                fill="none"
              />

              {/* West Africa -> Asia */}
              <path
                id="route-wa-asia"
                d="M 480 330 Q 610 390 760 300"
                className={`route-arc ${activeCorridor === 'wa-asia' ? 'route-arc--active' : ''}`}
                fill="none"
              />

              {/* East Africa -> Europe */}
              <path
                id="route-ea-eu"
                d="M 545 340 Q 530 230 500 170"
                className={`route-arc ${activeCorridor === 'ea-global' ? 'route-arc--active' : ''}`}
                fill="none"
              />

              {/* East Africa -> Middle East */}
              <path
                id="route-ea-me"
                d="M 545 340 Q 590 280 625 245"
                className={`route-arc ${activeCorridor === 'ea-global' ? 'route-arc--active' : ''}`}
                fill="none"
              />

              {/* East Africa -> Asia */}
              <path
                id="route-ea-asia"
                d="M 545 340 Q 650 320 760 300"
                className={`route-arc ${activeCorridor === 'ea-global' ? 'route-arc--active' : ''}`}
                fill="none"
              />
            </g>

            {/* Destination Hub Nodes */}
            <g className="destination-nodes">
              {/* North America (New York / Houston) */}
              <g className="node-group" transform="translate(260, 215)">
                <circle r="4" fill="#00875A" />
                <circle r="7" stroke="#00875A" strokeWidth="1.5" opacity="0.6" />
                <text x="-8" y="-10" className="map-node-label" textAnchor="end">North America</text>
              </g>

              {/* Europe (Rotterdam) */}
              <g className="node-group" transform="translate(500, 170)">
                <circle r="5" fill="#00875A" />
                <circle r="9" stroke="#00875A" strokeWidth="1.5" opacity="0.7" />
                <text x="0" y="-12" className="map-node-label" textAnchor="middle">Europe (Rotterdam)</text>
              </g>

              {/* Middle East (Dubai) */}
              <g className="node-group" transform="translate(625, 245)">
                <circle r="4.5" fill="#00875A" />
                <circle r="8" stroke="#00875A" strokeWidth="1.5" opacity="0.6" />
                <text x="10" y="-8" className="map-node-label" textAnchor="start">Middle East</text>
              </g>

              {/* Asia (Singapore / China) */}
              <g className="node-group" transform="translate(760, 300)">
                <circle r="5" fill="#00875A" />
                <circle r="9" stroke="#00875A" strokeWidth="1.5" opacity="0.7" />
                <text x="12" y="4" className="map-node-label" textAnchor="start">Asia</text>
              </g>
            </g>

            {/* Primary Origin Nodes (West & East Africa) with Pulsing Waves */}
            <g className="origin-nodes">
              {/* West Africa (Tema / Abidjan) */}
              <g className="node-group origin-pulse" transform="translate(480, 330)">
                <circle r="14" className="pulse-ring" />
                <circle r="9" fill="#00875A" />
                <circle r="5" fill="#FFFFFF" />
                <text x="-12" y="24" className="map-origin-label" textAnchor="middle">West Africa</text>
              </g>

              {/* East Africa (Mombasa / Dar es Salaam) */}
              <g className="node-group origin-pulse" transform="translate(545, 340)">
                <circle r="14" className="pulse-ring" />
                <circle r="8" fill="#00875A" />
                <circle r="4" fill="#FFFFFF" />
                <text x="16" y="24" className="map-origin-label" textAnchor="start">East Africa</text>
              </g>
            </g>
          </svg>

          {/* Interactive Glassmorphic Corridor Tabs */}
          <div className="network-corridors-bar">
            {corridors.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`corridor-tab ${activeCorridor === c.id ? 'corridor-tab--active' : ''}`}
                onClick={() => setActiveCorridor(c.id)}
              >
                <div className="corridor-tab-indicator" />
                <span className="corridor-tab-title">{c.title}</span>
              </button>
            ))}
          </div>

          {/* Active Corridor Quick Details Badge */}
          <div className="active-corridor-details">
            <div className="detail-item">
              <span className="detail-label">Origin:</span>
              <span className="detail-val">{currentCorridorInfo.origin}</span>
            </div>
            <div className="detail-divider">|</div>
            <div className="detail-item">
              <span className="detail-label">Key Cargo:</span>
              <span className="detail-val">{currentCorridorInfo.commodities}</span>
            </div>
            <div className="detail-divider">|</div>
            <div className="detail-item">
              <span className="detail-label">Transit ETA:</span>
              <span className="detail-val highlight">{currentCorridorInfo.eta}</span>
            </div>
          </div>

          {/* Map Legend */}
          <div className="network-map-legend">
            <div className="legend-item">
              <span className="legend-dot legend-dot--origin" />
              <span>Primary origin network</span>
            </div>
            <div className="legend-item">
              <span className="legend-line legend-line--corridor" />
              <span>Active trade corridor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
