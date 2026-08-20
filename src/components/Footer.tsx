import React from 'react';
import { ShieldCheck, Globe, Send, Twitter, MessageSquare, ArrowUpRight, ExternalLink } from 'lucide-react';
import { CogniLogo } from './CogniLogo';
import { Language } from '../types';
import { translations, communityChannelsData } from '../data/translations';

interface FooterProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenDocModal: () => void;
  onOpenPartnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onToggleLang,
  onOpenDocModal,
  onOpenPartnerModal
}) => {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;
  const isEn = lang === 'en';

  return (
    <footer className="bg-[#03060d] text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <CogniLogo size={42} />
            
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm max-w-md">
              {t.desc}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 space-y-1 font-mono-tech">
              <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CogniQuant Foundation LLC</span>
              </div>
              <p className="text-slate-400">
                {t.foundationNote}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono-tech">
              {isEn ? 'Ecosystem Navigation' : '生态系统导航'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  {nav.about}
                </a>
              </li>
              <li>
                <a href="#ecosystems" className="hover:text-cyan-300 transition-colors">
                  {nav.ecosystem}
                </a>
              </li>
              <li>
                <a href="#foundation" className="hover:text-cyan-300 transition-colors">
                  {nav.foundation}
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-cyan-300 transition-colors">
                  {nav.leadership}
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-cyan-300 transition-colors">
                  {nav.roadmap}
                </a>
              </li>
              <li>
                <a href="#announcements" className="hover:text-cyan-300 transition-colors">
                  {nav.announcements}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Verification */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono-tech">
              {isEn ? 'Official Verification' : '官方核验与通道'}
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={onOpenDocModal}
                className="w-full text-left p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-300 flex items-center justify-between transition-colors"
              >
                <span>{isEn ? 'Official Appointment & Colorado Seal' : '查阅官方授权公函与钢印'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenPartnerModal}
                className="w-full text-left p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-300 flex items-center justify-between transition-colors"
              >
                <span>{isEn ? 'Global Partner Recruitment Portal' : '全球合伙人招募门户'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-2">
                {communityChannelsData.map((c, idx) => (
                  <a
                    key={idx}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                    title={c.name}
                  >
                    {c.icon === 'Send' && <Send className="w-4 h-4" />}
                    {c.icon === 'Twitter' && <Twitter className="w-4 h-4" />}
                    {c.icon === 'MessageSquare' && <MessageSquare className="w-4 h-4" />}
                  </a>
                ))}

                <button
                  onClick={onToggleLang}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-mono-tech text-[11px] flex items-center gap-1 ml-auto"
                >
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isEn ? 'Switch to 中文' : 'Switch to EN'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            {t.rights}
          </div>
          <p className="max-w-2xl text-center md:text-right leading-normal text-[10px]">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
