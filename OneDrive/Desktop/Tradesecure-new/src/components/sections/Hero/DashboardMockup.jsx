import React, { useState } from 'react';
import './DashboardMockup.css';

export default function DashboardMockup({ onCreateTrade }) {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Trades', icon: 'trades' },
    { name: 'Escrow', icon: 'escrow' },
    { name: 'Inspections', icon: 'inspections' },
    { name: 'Shipments', icon: 'shipments' },
    { name: 'Documents', icon: 'documents' },
    { name: 'Disputes', icon: 'disputes' },
    { name: 'Partners', icon: 'partners' },
    { name: 'Notifications', icon: 'notifications' },
    { name: 'Settings', icon: 'settings' },
  ];

  const recentTrades = [
    { id: 'TR-9421', partner: 'Rotterdam Cocoa BV', commodity: 'Cocoa Beans', status: 'In Transit', value: '$18,500', statusType: 'transit' },
    { id: 'TR-9418', partner: 'Hamburg Roasters', commodity: 'Arabica Coffee', status: 'Inspection', value: '$14,200', statusType: 'inspection' },
    { id: 'TR-9405', partner: 'Dubai Agri Trade', commodity: 'Sesame Seeds', status: 'Escrow Funded', value: '$12,300', statusType: 'escrow' },
  ];

  const pendingActions = [
    { title: 'Upload export documents', count: 3, icon: 'doc' },
    { title: 'Approve inspection reports', count: 2, icon: 'shield' },
    { title: 'Funds escrow for trades', count: 2, icon: 'bank' },
    { title: 'Review shipment updates', count: 1, icon: 'truck' },
  ];

  return (
    <div className="dashboard-mockup-wrapper">
      <div className="dashboard-window">
        {/* Mockup Sidebar */}
        <aside className="mockup-sidebar">
          <div className="mockup-sidebar-logo">
            <svg width="22" height="24" viewBox="0 0 32 36" fill="none">
              <path d="M16 0L32 6.4V16C32 25.8 25.2 34.8 16 38C6.8 34.8 0 25.8 0 16V6.4L16 0Z" fill="#00875A"/>
              <path d="M13.5 24.5L8.5 19.5L10.6 17.4L13.5 20.3L21.4 12.4L23.5 14.5L13.5 24.5Z" fill="#FFFFFF"/>
            </svg>
            <span>TradeSecure</span>
          </div>

          <nav className="mockup-sidebar-nav">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                className={`mockup-nav-item ${activeTab === item.name ? 'mockup-nav-item--active' : ''}`}
                onClick={() => setActiveTab(item.name)}
              >
                <span className="mockup-nav-icon">
                  {item.icon === 'dashboard' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <rect x="1" y="1" width="6" height="6" rx="1.5"/>
                      <rect x="9" y="1" width="6" height="6" rx="1.5"/>
                      <rect x="1" y="9" width="6" height="6" rx="1.5"/>
                      <rect x="9" y="9" width="6" height="6" rx="1.5"/>
                    </svg>
                  )}
                  {item.icon === 'trades' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 5L14 5M14 5L10 2M14 5L10 8"/>
                      <path d="M14 11L2 11M2 11L6 8M2 11L6 14"/>
                    </svg>
                  )}
                  {item.icon === 'escrow' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <ellipse cx="8" cy="4" rx="6" ry="2.5"/>
                      <path d="M2 4V8C2 9.4 4.7 10.5 8 10.5C11.3 10.5 14 9.4 14 8V4"/>
                      <path d="M2 8V12C2 13.4 4.7 14.5 8 14.5C11.3 14.5 14 13.4 14 12V8"/>
                    </svg>
                  )}
                  {item.icon === 'inspections' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="7" cy="7" r="4.5"/>
                      <path d="M10.5 10.5L14 14"/>
                    </svg>
                  )}
                  {item.icon === 'shipments' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="1.5" y="4.5" width="10" height="7" rx="1.5"/>
                      <path d="M11.5 7.5H14.5L14.5 11.5H11.5"/>
                      <circle cx="4.5" cy="12.5" r="1.5"/>
                      <circle cx="10.5" cy="12.5" r="1.5"/>
                    </svg>
                  )}
                  {item.icon === 'documents' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 2.5C3 1.9 3.5 1.5 4 1.5H10L13.5 5V13.5C13.5 14.1 13.1 14.5 12.5 14.5H4C3.5 14.5 3 14.1 3 13.5V2.5Z"/>
                      <path d="M6 7H10.5M6 10H10.5"/>
                    </svg>
                  )}
                  {item.icon === 'disputes' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 2V14M3 6L8 4L13 6M3 6L1 11H5L3 6ZM13 6L11 11H15L13 6Z"/>
                    </svg>
                  )}
                  {item.icon === 'partners' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="6" cy="5" r="2.5"/>
                      <path d="M1.5 13.5C1.5 11 3.5 9 6 9C8.5 9 10.5 11 10.5 13.5"/>
                      <circle cx="12" cy="6" r="2"/>
                      <path d="M11 10.5C12.5 10.5 14.5 11.5 14.5 13.5"/>
                    </svg>
                  )}
                  {item.icon === 'notifications' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 2C5.5 2 4 3.8 4 6.5C4 9.5 2.5 10.5 2.5 10.5H13.5C13.5 10.5 12 9.5 12 6.5C12 3.8 10.5 2 8 2Z"/>
                      <path d="M6.5 13C6.5 13.8 7.2 14.5 8 14.5C8.8 14.5 9.5 13.8 9.5 13"/>
                    </svg>
                  )}
                  {item.icon === 'settings' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="8" cy="8" r="2.5"/>
                      <path d="M8 1.5V3M8 13V14.5M1.5 8H3M13 8H14.5M3.4 3.4L4.5 4.5M11.5 11.5L12.6 12.6M3.4 12.6L4.5 11.5M11.5 4.5L12.6 3.4"/>
                    </svg>
                  )}
                </span>
                <span className="mockup-nav-label">{item.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Workspace Area */}
        <div className="mockup-content">
          {/* Top Bar */}
          <header className="mockup-topbar">
            <div className="mockup-search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#94A3B8" strokeWidth="1.5">
                <circle cx="7" cy="7" r="4.5"/>
                <path d="M10.5 10.5L14 14"/>
              </svg>
              <input
                type="text"
                placeholder="Search trades, suppliers, or documents..."
                readOnly
                className="mockup-search-input"
              />
            </div>

            <div className="mockup-topbar-actions">
              <button type="button" className="mockup-icon-btn" aria-label="Notifications">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#64748B" strokeWidth="1.5">
                  <path d="M8 2C5.5 2 4 3.8 4 6.5C4 9.5 2.5 10.5 2.5 10.5H13.5C13.5 10.5 12 9.5 12 6.5C12 3.8 10.5 2 8 2Z"/>
                  <path d="M6.5 13C6.5 13.8 7.2 14.5 8 14.5C8.8 14.5 9.5 13.8 9.5 13"/>
                </svg>
                <span className="mockup-badge-dot" />
              </button>
              
              <button type="button" className="mockup-icon-btn" aria-label="Help">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#64748B" strokeWidth="1.5">
                  <circle cx="8" cy="8" r="6"/>
                  <path d="M6.5 6.5C6.5 5.5 7.2 4.8 8 4.8C8.8 4.8 9.5 5.5 9.5 6.3C9.5 7.5 8 7.8 8 9M8 11.2V11.4"/>
                </svg>
              </button>

              <button
                type="button"
                className="mockup-create-btn"
                onClick={() => onCreateTrade && onCreateTrade()}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 2V12M2 7H12"/>
                </svg>
                <span>Create New Trade</span>
              </button>

              <div className="mockup-user-profile">
                <div className="mockup-avatar">S</div>
                <div className="mockup-user-info">
                  <span className="mockup-user-name">Safari</span>
                  <span className="mockup-user-role">Supplier</span>
                </div>
              </div>
            </div>
          </header>

          {/* Greeting Banner */}
          <div className="mockup-greeting">
            <h3 className="mockup-greeting-title">
              Good morning, Safari <span className="greeting-wave">👋</span>
            </h3>
            <p className="mockup-greeting-sub">Manage your agricultural trades in one secure place.</p>
          </div>

          {/* Metric Stats Cards */}
          <div className="mockup-stats-grid">
            <div className="mockup-stat-card">
              <div className="stat-card-header">
                <span className="stat-label">Active Trades</span>
                <div className="stat-icon-wrapper stat-icon-wrapper--green">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.5">
                    <rect x="2" y="2" width="12" height="12" rx="2.5"/>
                    <path d="M2 6H14M6 6V14"/>
                  </svg>
                </div>
              </div>
              <div className="stat-value">12</div>
              <div className="stat-trend stat-trend--positive">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 9L9 2M9 2H4M9 2V7"/>
                </svg>
                <span>2 New this week</span>
              </div>
            </div>

            <div className="mockup-stat-card">
              <div className="stat-card-header">
                <span className="stat-label">Funds In Escrow</span>
                <div className="stat-icon-wrapper stat-icon-wrapper--teal">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#0D9488" strokeWidth="1.5">
                    <ellipse cx="8" cy="4" rx="6" ry="2"/>
                    <path d="M2 4V8C2 9.1 4.7 10 8 10C11.3 10 14 9.1 14 8V4"/>
                    <path d="M2 8V12C2 13.1 4.7 14 8 14C11.3 14 14 13.1 14 12V8"/>
                  </svg>
                </div>
              </div>
              <div className="stat-value">$45,000</div>
              <div className="stat-trend stat-trend--positive">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 9L9 2M9 2H4M9 2V7"/>
                </svg>
                <span>14% this month</span>
              </div>
            </div>

            <div className="mockup-stat-card">
              <div className="stat-card-header">
                <span className="stat-label">Pending Inspection</span>
                <div className="stat-icon-wrapper stat-icon-wrapper--amber">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#D97706" strokeWidth="1.5">
                    <circle cx="7" cy="7" r="4.5"/>
                    <path d="M10.5 10.5L14 14"/>
                  </svg>
                </div>
              </div>
              <div className="stat-value">3</div>
              <div className="stat-trend stat-trend--amber">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 9L9 2M9 2H4M9 2V7"/>
                </svg>
                <span>1 awaiting inspection</span>
              </div>
            </div>

            <div className="mockup-stat-card">
              <div className="stat-card-header">
                <span className="stat-label">Shipment in Transit</span>
                <div className="stat-icon-wrapper stat-icon-wrapper--blue">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#2563EB" strokeWidth="1.5">
                    <path d="M1 4.5H10V11.5H1V4.5Z"/>
                    <path d="M10 7H13.5L15 9V11.5H10"/>
                    <circle cx="4" cy="12" r="1.5"/>
                    <circle cx="12" cy="12" r="1.5"/>
                  </svg>
                </div>
              </div>
              <div className="stat-value">5</div>
              <div className="stat-trend stat-trend--blue">
                <span>On schedule</span>
              </div>
            </div>
          </div>

          {/* Lower Dashboard Grid */}
          <div className="mockup-lower-grid">
            {/* Left Column: Progress Stepper & Recent Trades */}
            <div className="mockup-col-main">
              {/* Trade Progress Stepper with Floating Tooltip */}
              <div className="mockup-progress-panel">
                <div className="panel-header">
                  <span className="panel-title">Trade Progress Overview</span>
                </div>
                
                <div className="progress-timeline-wrapper">
                  <div className="progress-timeline-bar">
                    <div className="timeline-segment timeline-segment--completed" />
                    <div className="timeline-segment timeline-segment--completed" />
                    <div className="timeline-segment timeline-segment--active" />
                    <div className="timeline-segment timeline-segment--pending" />
                  </div>

                  <div className="timeline-nodes">
                    <div className="timeline-node timeline-node--completed">
                      <span className="node-dot">✓</span>
                      <span className="node-label">Active Trades</span>
                    </div>
                    <div className="timeline-node timeline-node--completed">
                      <span className="node-dot">✓</span>
                      <span className="node-label">Funds in Escrow</span>
                    </div>
                    <div className="timeline-node timeline-node--active">
                      <span className="node-dot" />
                      <span className="node-label">Pending Inspection</span>
                    </div>
                    <div className="timeline-node timeline-node--transit">
                      <span className="node-dot" />
                      <span className="node-label">Shipment in Transit</span>
                    </div>
                    <div className="timeline-node timeline-node--pending">
                      <span className="node-dot" />
                      <span className="node-label">Document Pending</span>
                    </div>
                  </div>

                  {/* Floating Live Shipment Callout */}
                  <div className="mockup-floating-callout">
                    <div className="callout-header">
                      <div className="callout-icon">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="2">
                          <path d="M1 4.5H10V11.5H1V4.5Z"/>
                          <path d="M10 7H13.5L15 9V11.5H10"/>
                          <circle cx="4" cy="12" r="1.5"/>
                          <circle cx="12" cy="12" r="1.5"/>
                        </svg>
                      </div>
                      <span className="callout-title">Shipment Transit</span>
                    </div>
                    <p className="callout-body">
                      Vessel MV Oceanic en route to Rotterdam. <strong>ETA: 4 Days.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Recent Trades Table Preview */}
              <div className="mockup-table-panel">
                <div className="panel-header">
                  <span className="panel-title">Recent Trades</span>
                  <a href="#trades" className="panel-link">View all trades ↗</a>
                </div>

                <div className="table-responsive">
                  <table className="mockup-table">
                    <thead>
                      <tr>
                        <th>Trade ID</th>
                        <th>Partner Name</th>
                        <th>Commodity</th>
                        <th>Status</th>
                        <th className="text-right">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTrades.map((trade) => (
                        <tr key={trade.id}>
                          <td className="trade-id">{trade.id}</td>
                          <td className="partner-name">{trade.partner}</td>
                          <td className="commodity-name">{trade.commodity}</td>
                          <td>
                            <span className={`status-pill status-pill--${trade.statusType}`}>
                              {trade.status}
                            </span>
                          </td>
                          <td className="text-right trade-value">{trade.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column: Pending Actions */}
            <div className="mockup-col-side">
              <div className="mockup-actions-panel">
                <div className="panel-header">
                  <span className="panel-title">Pending Actions</span>
                </div>
                <div className="pending-actions-list">
                  {pendingActions.map((action) => (
                    <div key={action.title} className="pending-action-item">
                      <div className="action-info">
                        <div className="action-icon-circle">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#00875A" strokeWidth="1.5">
                            <path d="M3 2.5H10L13.5 6V13.5H3V2.5Z"/>
                          </svg>
                        </div>
                        <span className="action-title">{action.title}</span>
                      </div>
                      <span className="action-badge">{action.count} &rsaquo;</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mockup-transit-card">
                <div className="transit-header">
                  <span className="transit-label">Shipment in transit</span>
                  <span className="transit-link">View all ↗</span>
                </div>
                <div className="transit-route">
                  <div className="route-port">
                    <span className="port-code">GHA</span>
                    <span className="port-city">Tema Port</span>
                  </div>
                  <div className="route-arrow">&rarr;</div>
                  <div className="route-port text-right">
                    <span className="port-code">NLD</span>
                    <span className="port-city">Rotterdam</span>
                  </div>
                </div>
                <div className="transit-cargo">
                  <span>500 MT Cocoa Beans</span>
                  <span className="cargo-tag">AIS Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
