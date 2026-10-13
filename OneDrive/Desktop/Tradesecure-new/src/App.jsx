import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/Hero/HeroSection';
import CapabilitiesSection from './components/sections/Capabilities/CapabilitiesSection';
import CommoditiesSection from './components/sections/Commodities/CommoditiesSection';
import TradeFlowSection from './components/sections/TradeFlow/TradeFlowSection';
import GlobalNetworkSection from './components/sections/Network/GlobalNetworkSection';
import FAQSection from './components/sections/FAQ/FAQSection';
import FinalCTASection from './components/sections/CTA/FinalCTASection';
import Footer from './components/layout/Footer';
import TradeModal from './components/common/TradeModal';
import './App.css';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('trade');
  const [selectedCommodity, setSelectedCommodity] = useState('Cocoa Beans');

  const handleOpenTradeModal = (mode = 'trade', commodity = 'Cocoa Beans') => {
    setModalMode(mode);
    setSelectedCommodity(commodity);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="tradesecure-app">
      {/* Top Sticky Navigation */}
      <Navbar onStartTrade={(mode) => handleOpenTradeModal(mode)} />

      {/* Main Landing Page Flow */}
      <main>
        {/* Hero Section with Dashboard Mockup */}
        <HeroSection
          onStartTrade={(mode) => handleOpenTradeModal(mode)}
          onLearnMore={() => handleScrollToSection('how-it-works')}
        />

        {/* Core Capabilities (Verify -> Manage -> Protect) */}
        <CapabilitiesSection />

        {/* Commodities Asymmetric Bento Grid */}
        <CommoditiesSection
          onSelectCommodity={(commodityName) => handleOpenTradeModal('trade', commodityName)}
        />

        {/* Connected 5-Step Trade Flow */}
        <TradeFlowSection
          onOpenJourney={() => handleOpenTradeModal('trade')}
        />

        {/* Global Trade Network (Vector Hatched Map & Corridor Switcher) */}
        <GlobalNetworkSection />

        {/* Enterprise Trade FAQ Accordion */}
        <FAQSection />

        {/* Final Conversion CTA Banner */}
        <FinalCTASection
          onStartTrade={(mode) => handleOpenTradeModal(mode)}
          onTalkToTeam={() => handleOpenTradeModal('team')}
        />
      </main>

      {/* Standardized Multi-Column Footer */}
      <Footer
        onSelectCommodity={(commodityName) => handleOpenTradeModal('trade', commodityName)}
        onOpenContact={() => handleOpenTradeModal('team')}
      />

      {/* Interactive Escrow & Trade Inquiry Modal */}
      <TradeModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialMode={modalMode}
      />
    </div>
  );
}
