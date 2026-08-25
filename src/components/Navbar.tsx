import React, { useState, useEffect } from 'react';
import { ShieldCheck, Globe, Menu, X, ChevronRight, Send, Twitter } from 'lucide-react';
import { Language } from '../types';
import { BrandLogos } from '../assets';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenDocModal?: (docId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#ecosystem', labelEn: '9 Ecosystems', labelZh: '九大生态' },
    { href: '#roadmap', labelEn: 'Roadmap', labelZh: '发展路线' },
    { href: '#technology', labelEn: 'AI Labs & Tech', labelZh: 'AI 实验室' },
    { href: '#leadership', labelEn: 'Leadership', labelZh: '高管团队' },
    { href: '#compliance', labelEn: 'Compliance & MSB', labelZh: '合规牌照' },
    { href: '#announcements', labelEn: 'Announcements', labelZh: '官方公告' },
    { href: '#contact', labelEn: 'Denver HQ', labelZh: '丹佛总部' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Entity Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform bg-slate-950 flex items-center justify-center p-0.5 border border-blue-500/30">
              <img
                src={BrandLogos.sm}
                alt="CogniGrid Official Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">
                  CogniGrid<span className="text-blue-600 font-bold">.ai</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/60 px-1.5 py-0.5 rounded">
                  FOUNDATION
                </span>
              </div>
              <span className="text-[10px] text-slate-500 tracking-wide font-mono-code flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                FinCEN MSB #31000337267999
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-600 transition-colors py-1 hover:border-b-2 hover:border-blue-600"
              >
                {lang === 'zh' ? link.labelZh : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Actions & Utilities */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Community Channels */}
            <a
              href="https://s.share11.top/CogniGrid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              title="Official Telegram"
            >
              <Send className="w-4 h-4" />
            </a>

            <a
              href="https://x.com/CogniGrid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              title="Official X (Twitter)"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* Language Switcher */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-full px-3 py-1.5 transition-all"
              title={lang === 'zh' ? 'Switch to English' : '切换至简体中文'}
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>

            {/* Direct License Verification CTA */}
            <a
              id="verify-license-nav-btn"
              href="#compliance"
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-full shadow-sm transition-all hover:shadow"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'zh' ? '官方合规牌照' : 'FinCEN MSB'}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-full"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 rounded-lg bg-slate-100 border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-slate-200 bg-white rounded-2xl p-4 shadow-xl border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{lang === 'zh' ? link.labelZh : link.labelEn}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-1 flex flex-col gap-2">
                <a
                  href="#compliance"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 py-2.5 rounded-full"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'zh' ? '查看官方牌照与政府备案' : 'View Official Registrations'}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
