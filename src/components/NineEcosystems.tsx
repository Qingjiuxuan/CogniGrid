import React, { useState } from 'react';
import { 
  Cpu, Users, Coins, CreditCard, Layers, TrendingUp, Sparkles, Gamepad2, Building2, 
  ArrowUpRight, CheckCircle2, Clock, ShieldCheck, Filter 
} from 'lucide-react';
import { Language, EcosystemItem } from '../types';
import { ecosystemsData, translations } from '../data/translations';

interface NineEcosystemsProps {
  lang: Language;
  onSelectEcosystem?: (ecosystem: EcosystemItem) => void;
}

export const NineEcosystems: React.FC<NineEcosystemsProps> = ({
  lang,
  onSelectEcosystem
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const t = translations[lang].ecosystemSection;
  const isEn = lang === 'en';

  const categoryFilters = [
    { id: 'all', label: t.filterAll },
    { id: 'core', label: t.filterCore },
    { id: 'defi', label: t.filterDefi },
    { id: 'trading', label: t.filterTrading },
    { id: 'infrastructure', label: t.filterInfra }
  ];

  const filteredEcosystems = selectedCategory === 'all'
    ? ecosystemsData
    : ecosystemsData.filter(e => e.category === selectedCategory || (selectedCategory === 'defi' && e.category === 'metaverse'));

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'Users': return Users;
      case 'Coins': return Coins;
      case 'CreditCard': return CreditCard;
      case 'Layers': return Layers;
      case 'TrendingUp': return TrendingUp;
      case 'Sparkles': return Sparkles;
      case 'Gamepad2': return Gamepad2;
      case 'Building2': return Building2;
      default: return Cpu;
    }
  };

  return (
    <section id="ecosystems" className="py-20 bg-[#050811] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono-tech">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-12">
          {categoryFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedCategory(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === filter.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Ecosystems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEcosystems.map((eco, idx) => {
            const Icon = getIcon(eco.icon);
            const isExpanded = expandedId === eco.id;

            return (
              <div
                key={eco.id}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-[#070b16] flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all" />

                <div>
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono-tech bg-slate-800/80 border border-slate-700 text-slate-300">
                        {isEn ? eco.launchDate : eco.launchDateZh}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-3">
                    <div className="text-[11px] font-mono-tech text-cyan-400 uppercase tracking-wider">
                      Ecosystem 0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {isEn ? eco.title : eco.titleZh}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium line-clamp-1">
                      {isEn ? eco.subtitle : eco.subtitleZh}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {isEn ? eco.description : eco.descriptionZh}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider">
                      {isEn ? 'Core Highlights' : '核心特性'}
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {(isEn ? eco.features : eco.featuresZh).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono-tech text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>CogniQuant Verified</span>
                  </span>

                  <span className="text-cyan-400 text-xs font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>{isEn ? 'Learn More' : '了解详情'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
