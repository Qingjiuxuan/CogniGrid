import React, { useState } from 'react';
import { Milestone, CheckCircle2, Clock, Sparkles, ArrowRight, Calendar, Flag, ShieldCheck } from 'lucide-react';
import { Language, RoadmapMilestone } from '../types';
import { roadmapData, translations } from '../data/translations';

interface RoadmapSectionProps {
  lang: Language;
  onOpenPartnerModal: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  lang,
  onOpenPartnerModal
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | '2026' | '2027'>('all');
  const t = translations[lang].roadmapSection;
  const isEn = lang === 'en';

  const filteredRoadmap = selectedFilter === 'all'
    ? roadmapData
    : roadmapData.filter(m => m.quarter === selectedFilter);

  return (
    <section id="roadmap" className="py-20 bg-[#070b16] relative overflow-hidden border-t border-slate-800">
      {/* Background Accent */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono-tech">
            <Milestone className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.subtitle}
          </p>

          {/* Active Phase Pill */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{t.activeBadge}</span>
            </div>
          </div>
        </div>

        {/* Filter Switcher */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.allTab}
            </button>
            <button
              onClick={() => setSelectedFilter('2026')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === '2026'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.q2026}
            </button>
            <button
              onClick={() => setSelectedFilter('2027')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === '2027'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.q2027}
            </button>
          </div>
        </div>

        {/* Timeline Grid Layout */}
        <div className="relative">
          {/* Vertical Connecting Line on Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-900 -translate-x-1/2 opacity-30" />

          <div className="space-y-8">
            {filteredRoadmap.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isCurrent = item.status === 'current';

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Milestone Card */}
                  <div className="w-full lg:w-1/2 lg:px-8">
                    <div
                      className={`glass-card p-6 rounded-2xl border transition-all duration-300 ${
                        isCurrent
                          ? 'border-cyan-400/80 bg-gradient-to-b from-cyan-950/40 via-slate-900/90 to-[#070b16] shadow-xl shadow-cyan-500/20'
                          : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                      }`}
                    >
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-mono-tech font-bold ${
                              isCurrent
                                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                                : 'bg-slate-800 text-cyan-300 border border-slate-700'
                            }`}
                          >
                            {isEn ? item.period : item.periodZh}
                          </span>

                          {isCurrent && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse">
                              {isEn ? 'ACTIVE NOW' : '进行中'}
                            </span>
                          )}
                        </div>

                        <span className="text-[11px] font-mono-tech text-slate-400">
                          {item.quarter}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
                        {isEn ? item.title : item.titleZh}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {isEn ? item.description : item.descriptionZh}
                      </p>

                      {/* Items Bullet Points */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                        {(isEn ? item.items : item.itemsZh).map((subItem, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                                isCurrent ? 'text-cyan-400' : 'text-slate-500'
                              }`}
                            />
                            <span>{subItem}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA for August 2026 Partner Recruitment */}
                      {isCurrent && (
                        <div className="mt-5 pt-3 border-t border-cyan-500/30">
                          <button
                            onClick={onOpenPartnerModal}
                            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{isEn ? 'Join Global Partner Recruitment' : '立即申请成为全球合伙人'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500 items-center justify-center shadow-lg shadow-cyan-500/30">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isCurrent ? 'bg-cyan-400 animate-ping' : 'bg-blue-600'
                      }`}
                    />
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
