import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Cpu, Layers, Activity, ChevronDown, CheckCircle2, Lock } from 'lucide-react';
import { CogniLogo } from './CogniLogo';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  lang: Language;
  onOpenDocModal: () => void;
  onOpenPartnerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenDocModal,
  onOpenPartnerModal
}) => {
  const t = translations[lang].hero;
  const isEn = lang === 'en';

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{t.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12]">
              <span className="block">{t.titleLine1}</span>
              <span className="text-gradient-cyan block mt-1">{t.titleLine2}</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#ecosystems"
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25 group cursor-pointer"
              >
                <span>{t.exploreBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenDocModal}
                className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-300 text-cyan-300 font-semibold text-sm flex items-center gap-2 transition-all backdrop-blur-md shadow-sm cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>{t.verifyDocBtn}</span>
              </button>

              <button
                onClick={onOpenPartnerModal}
                className="px-5 py-3 rounded-xl bg-blue-950/40 hover:bg-blue-900/50 border border-blue-500/30 text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all backdrop-blur-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.partnerBtn}</span>
              </button>
            </div>

            {/* Verification Guarantee Stamp */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 font-mono-tech">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isEn ? 'Colorado LLC Registered' : '美国科罗拉多州合法注册'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isEn ? 'Audited 20M USDT Reserve' : '2000万 USDT 储备审计'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>{isEn ? 'CEO Exclusive Mandate' : 'CEO 独家全权授权'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Holographic AI Core & Ecosystem Node Visualizer */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-6 flex flex-col items-center justify-center">
              
              {/* Outer Orbit Ring 1 */}
              <div className="absolute inset-4 rounded-full border border-cyan-500/20 border-dashed animate-spin [animation-duration:40s] pointer-events-none" />
              
              {/* Orbit Ring 2 with counter rotation */}
              <div className="absolute inset-10 rounded-full border border-blue-500/25 animate-spin [animation-duration:25s] [animation-direction:reverse] pointer-events-none" />

              {/* Orbit Ring 3 */}
              <div className="absolute inset-20 rounded-full border border-cyan-400/30 pointer-events-none" />

              {/* Satellite Node Badges */}
              <div className="absolute top-4 left-6 px-3 py-1 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-[10px] font-mono-tech text-cyan-300 backdrop-blur-md shadow-lg flex items-center gap-1.5 animate-bounce [animation-duration:3s]">
                <Cpu className="w-3 h-3 text-cyan-400" />
                <span>AI Quant Engine</span>
              </div>

              <div className="absolute bottom-6 right-4 px-3 py-1 rounded-lg bg-slate-900/90 border border-amber-500/30 text-[10px] font-mono-tech text-amber-300 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-amber-400" />
                <span>Gold RWA Vault</span>
              </div>

              <div className="absolute top-1/2 -right-2 -translate-y-1/2 px-3 py-1 rounded-lg bg-slate-900/90 border border-blue-500/30 text-[10px] font-mono-tech text-blue-300 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-emerald-400" />
                <span>SocialFi Protocol</span>
              </div>

              {/* Central Glowing 3D Logo Orb */}
              <div className="relative z-10 flex flex-col items-center text-center p-8 rounded-full bg-gradient-to-b from-slate-900/90 via-[#0a1226]/95 to-[#050811] border border-cyan-400/40 shadow-2xl shadow-cyan-500/30">
                <CogniLogo size={84} showText={false} />
                <div className="mt-3">
                  <div className="text-xl font-black font-display tracking-tight text-white">
                    Cogni<span className="text-cyan-400">Grid</span>
                  </div>
                  <div className="text-[10px] text-cyan-300 font-mono-tech uppercase tracking-widest mt-0.5">
                    AI Intelligent Core
                  </div>
                </div>
                <div className="mt-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono-tech border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Autonomous V1.0</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metric Stat Cards */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 rounded-2xl border border-slate-800/80 bg-slate-900/40">
            <div className="text-xs text-slate-400 font-mono-tech uppercase tracking-wider">{t.liveStats.aumLabel}</div>
            <div className="text-xl sm:text-2xl font-extrabold font-display text-white mt-1 text-gradient-cyan">
              {t.liveStats.aum}
            </div>
            <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <span>●</span> {isEn ? '100% Reserved & Active' : '100% 储备金在管'}
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800/80 bg-slate-900/40">
            <div className="text-xs text-slate-400 font-mono-tech uppercase tracking-wider">{t.liveStats.ecosystemsLabel}</div>
            <div className="text-xl sm:text-2xl font-extrabold font-display text-white mt-1">
              {t.liveStats.ecosystems}
            </div>
            <div className="text-[11px] text-cyan-400 mt-1 flex items-center gap-1">
              <span>●</span> {isEn ? 'Cross-Scenario Cluster' : '跨场景协同集群'}
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800/80 bg-slate-900/40">
            <div className="text-xs text-slate-400 font-mono-tech uppercase tracking-wider">{t.liveStats.executionSpeedLabel}</div>
            <div className="text-xl sm:text-2xl font-extrabold font-display text-white mt-1 text-cyan-400 font-mono-tech">
              {t.liveStats.executionSpeed}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
              <span>●</span> {isEn ? 'Sub-second Arbitrage' : '毫秒级高频套利'}
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-800/80 bg-slate-900/40">
            <div className="text-xs text-slate-400 font-mono-tech uppercase tracking-wider">{t.liveStats.governanceLabel}</div>
            <div className="text-xl sm:text-2xl font-extrabold font-display text-white mt-1">
              {t.liveStats.governance}
            </div>
            <div className="text-[11px] text-indigo-300 mt-1 flex items-center gap-1">
              <span>●</span> {isEn ? 'LLC Legal Filing' : '法定注册实体备案'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
