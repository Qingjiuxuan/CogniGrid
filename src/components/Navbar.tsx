import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ShieldCheck, ChevronRight, Sparkles, FileText, ArrowUpRight } from 'lucide-react';
import { CogniLogo } from './CogniLogo';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenDocModal: () => void;
  onOpenPartnerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenDocModal,
  onOpenPartnerModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang].nav;
  const isEn = lang === 'en';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.about, href: '#about' },
    { label: t.ecosystem, href: '#ecosystems' },
    { label: t.foundation, href: '#foundation' },
    { label: t.leadership, href: '#leadership' },
    { label: t.roadmap, href: '#roadmap' },
    { label: t.announcements, href: '#announcements' },
    { label: t.community, href: '#community' }
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050811]/90 backdrop-blur-xl border-b border-cyan-500/20 py-2.5 shadow-xl shadow-cyan-950/20'
          : 'bg-gradient-to-b from-[#050811]/95 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <CogniLogo size={38} />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Foundation AUM Pill */}
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono-tech text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>AUM: $20M USDT</span>
          </div>

          {/* Official Document Verify Button */}
          <button
            onClick={onOpenDocModal}
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold text-cyan-300 flex items-center gap-1.5 transition-all shadow-sm"
            title={isEn ? 'Inspect Official Foundation Letter of Appointment & Seal' : '查阅官方全权授权书'}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">{isEn ? 'Official Seal' : '官方授权'}</span>
          </button>

          {/* Bilingual Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-xs font-medium text-slate-200 transition-all cursor-pointer"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold">{isEn ? 'EN' : '中文'}</span>
            <span className="text-[10px] text-slate-400 border-l border-slate-700 pl-1">
              {isEn ? 'ZH' : 'EN'}
            </span>
          </button>

          {/* Partner Portal CTA */}
          <button
            onClick={onOpenPartnerModal}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.applyPartner}</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleLang}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-cyan-300"
          >
            {isEn ? 'EN' : '中'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#070b16] border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/80 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDocModal(); }}
              className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                {isEn ? 'Official Appointment & Seal' : '查看官方任命授权公函'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenPartnerModal(); }}
              className="w-full py-2.5 px-3 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.applyPartner}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
