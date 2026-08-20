/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutEcosystem } from './components/AboutEcosystem';
import { NineEcosystems } from './components/NineEcosystems';
import { AIEngineSimulator } from './components/AIEngineSimulator';
import { FoundationSection } from './components/FoundationSection';
import { LeadershipAndDocuments } from './components/LeadershipAndDocuments';
import { RoadmapSection } from './components/RoadmapSection';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { DocumentModal } from './components/DocumentModal';
import { AnnouncementModal } from './components/AnnouncementModal';
import { PartnerApplyModal } from './components/PartnerApplyModal';
import { Language, Announcement } from './types';
import { Globe, ArrowUp, ShieldCheck, Sparkles, Send } from 'lucide-react';

export default function App() {
  // English is shown by default as requested; Chinese is 1-click switchable
  const [lang, setLang] = useState<Language>('en');

  // Modal States
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [docModalType, setDocModalType] = useState<'authorization-letter' | 'membership-certificate'>('authorization-letter');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'zh' : 'en'));
  };

  const handleOpenDoc = (docId?: 'authorization-letter' | 'membership-certificate') => {
    if (docId) setDocModalType(docId);
    setIsDocModalOpen(true);
  };

  const handleOpenAnnouncement = (ann: Announcement) => {
    setSelectedAnnouncement(ann);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      
      {/* Top Fixed Header Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenDocModal={() => handleOpenDoc('authorization-letter')}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenDocModal={() => handleOpenDoc('authorization-letter')}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />

        {/* 2. Core Architecture & CogniQuant AI Labs */}
        <AboutEcosystem lang={lang} />

        {/* 3. 9 Major Ecosystems Interactive Matrix */}
        <NineEcosystems lang={lang} />

        {/* 4. Live AI Quant Telemetry Stream Simulator */}
        <AIEngineSimulator lang={lang} />

        {/* 5. Cogni Quant Foundation (Governing Body & 20M USDT AUM) */}
        <FoundationSection
          lang={lang}
          onOpenDocModal={() => handleOpenDoc('membership-certificate')}
        />

        {/* 6. Organizational Structure, Leadership Team & Official Legal Documents */}
        <LeadershipAndDocuments
          lang={lang}
          onOpenDocModal={handleOpenDoc}
        />

        {/* 7. Ecosystem Development Roadmap (2026 - 2027) */}
        <RoadmapSection
          lang={lang}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />

        {/* 8. Latest Platform Announcements & Notice Board */}
        <AnnouncementsSection
          lang={lang}
          onSelectAnnouncement={handleOpenAnnouncement}
          onOpenDocModal={() => handleOpenDoc('authorization-letter')}
        />

        {/* 9. Official Community Channels (TG, X, Goldhouse) */}
        <CommunitySection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenDocModal={() => handleOpenDoc('authorization-letter')}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
      />

      {/* Floating Action Quick Bar (Bottom-Right for Mobile & Desktop) */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
        {/* Floating Language Quick Switcher */}
        <button
          onClick={toggleLanguage}
          className="p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 shadow-xl backdrop-blur-md flex items-center gap-1.5 text-xs font-bold transition-all hover:scale-105"
          title={lang === 'en' ? 'Switch to Chinese / 切换为中文' : 'Switch to English / 切换为英文'}
        >
          <Globe className="w-4 h-4 text-cyan-400" />
          <span>{lang === 'en' ? 'EN' : '中文'}</span>
        </button>

        {/* Floating Official Mandate Verify Quick Button */}
        <button
          onClick={() => handleOpenDoc('authorization-letter')}
          className="p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-400 shadow-xl backdrop-blur-md transition-all hover:scale-105 hidden sm:flex"
          title={lang === 'en' ? 'Inspect Official Foundation Letter & Seal' : '查阅官方授权书与钢印'}
        >
          <ShieldCheck className="w-5 h-5" />
        </button>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </button>
        )}
      </div>

      {/* Modals */}
      <DocumentModal
        isOpen={isDocModalOpen}
        onClose={() => setIsDocModalOpen(false)}
        lang={lang}
        initialDoc={docModalType}
      />

      <AnnouncementModal
        isOpen={!!selectedAnnouncement}
        onClose={() => setSelectedAnnouncement(null)}
        announcement={selectedAnnouncement}
        lang={lang}
        onOpenDoc={handleOpenDoc}
      />

      <PartnerApplyModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
