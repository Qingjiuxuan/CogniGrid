import React, { useState } from 'react';
import { Language, DocumentInfo } from './types';
import { OFFICIAL_DOCUMENTS } from './data';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketTicker } from './components/MarketTicker';
import { EcosystemsSection } from './components/EcosystemsSection';
import { RoadmapTimeline } from './components/RoadmapTimeline';
import { BusinessScope } from './components/BusinessScope';
import { QuantTechStack } from './components/QuantTechStack';
import { StrategySimulator } from './components/StrategySimulator';
import { GovernanceLeadership } from './components/GovernanceLeadership';
import { ComplianceCenter } from './components/ComplianceCenter';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { ContactFooter } from './components/ContactFooter';
import { DocumentModal } from './components/DocumentModal';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  const selectedDoc: DocumentInfo | null = selectedDocId
    ? OFFICIAL_DOCUMENTS.find((d) => d.id === selectedDocId) || null
    : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500/20 selection:text-blue-900 font-sans">
      {/* Top Fixed Institutional Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenDocModal={(id) => setSelectedDocId(id)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Spotlight */}
        <Hero
          lang={lang}
          onOpenDocModal={(id) => setSelectedDocId(id)}
        />

        {/* 2. Global Multi-Asset Market Ticker */}
        <MarketTicker lang={lang} />

        {/* 3. Nine Major Ecosystems & 4 Core Layers */}
        <EcosystemsSection lang={lang} />

        {/* 4. 2026-2027 Ecosystem Development Roadmap */}
        <RoadmapTimeline lang={lang} />

        {/* 5. Five Major Core Business Scopes */}
        <BusinessScope lang={lang} />

        {/* 6. CogniQuant AI Labs Tech Stack */}
        <QuantTechStack lang={lang} />

        {/* 7. Alpha Simulation Sandbox */}
        <StrategySimulator lang={lang} />

        {/* 8. Executive Leadership (7 Officers with Photos & Foundation Governance) */}
        <GovernanceLeadership lang={lang} />

        {/* 9. Dual-Tier US Compliance & FinCEN MSB Vault */}
        <ComplianceCenter
          lang={lang}
          onOpenDocModal={(id) => setSelectedDocId(id)}
        />

        {/* 10. Official Platform Announcements */}
        <AnnouncementsSection lang={lang} />
      </main>

      {/* 11. Footer & Community Channels (TG, X, Goldhouse) */}
      <ContactFooter lang={lang} />

      {/* Interactive Official Certificate Inspection Modal */}
      {selectedDoc && (
        <DocumentModal
          doc={selectedDoc}
          lang={lang}
          onClose={() => setSelectedDocId(null)}
          onSelectDoc={(id) => setSelectedDocId(id)}
        />
      )}
    </div>
  );
}
