import React, { useState } from 'react';
import {
  Coins,
  TrendingUp,
  Cpu,
  Bot,
  Server,
  Layers,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';
import { Language, BusinessPillar } from '../types';
import { BUSINESS_PILLARS } from '../data';

interface BusinessScopeProps {
  lang: Language;
}

export const BusinessScope: React.FC<BusinessScopeProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<string>(BUSINESS_PILLARS[0].id);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coins':
        return <Coins className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const currentPillar: BusinessPillar =
    BUSINESS_PILLARS.find((p) => p.id === activeTab) || BUSINESS_PILLARS[0];

  return (
    <section id="scope" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded mb-3 tracking-wider uppercase">
            {lang === 'zh' ? '法定核心业务版图' : 'Institutional Business Architecture'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'zh' ? '五大多元量化与金融科技支柱' : 'Five Diversified Institutional Pillars'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'zh'
              ? 'CogniQuant Foundation 严格在科罗拉多州注册法团章程及美国 FinCEN MSB 监管框架下开展全方位金融科技与量化策略运作。'
              : 'Operating under stringent Colorado statutory bylaws and Federal FinCEN MSB oversight, CogniQuant deploys unified algorithmic strategies across global assets.'}
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {BUSINESS_PILLARS.map((pillar) => {
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-blue-600'}>
                  {getPillarIcon(pillar.iconName)}
                </span>
                <span>{lang === 'zh' ? pillar.titleZh : pillar.titleEn}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Showcase Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shadow-xs">
                    {getPillarIcon(currentPillar.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-code font-bold uppercase text-blue-600 tracking-wider">
                      {currentPillar.code}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {lang === 'zh' ? currentPillar.titleZh : currentPillar.titleEn}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {lang === 'zh' ? currentPillar.descriptionZh : currentPillar.descriptionEn}
                </p>

                {/* Key Capabilities List */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {lang === 'zh' ? '核心技术与策略特征' : 'Core Technological & Strategic Features'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(lang === 'zh' ? currentPillar.keyCapabilitiesZh : currentPillar.keyCapabilitiesEn).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Statutory Articles Extract */}
              <div className="pt-4 border-t border-slate-200">
                <div className="p-3 bg-blue-50/70 rounded-lg border border-blue-200/70 text-xs text-blue-900 flex items-start gap-2">
                  <FileCheck2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[11px] uppercase tracking-wider text-blue-800">
                      {lang === 'zh' ? '章程备案法定经营范围' : 'Statutory Charter Filing Extract'}
                    </div>
                    <div className="text-[11px] text-blue-950 mt-0.5 leading-relaxed">
                      {lang === 'zh' ? currentPillar.scopeExtractZh : currentPillar.scopeExtractEn}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Metric & Architecture Spec Box */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <span className="text-xs font-bold uppercase text-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  {lang === 'zh' ? '量化性能指标' : 'Quantitative Metrics'}
                </span>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                  PRODUCTION READY
                </span>
              </div>

              <div className="space-y-4">
                {currentPillar.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {lang === 'zh' ? m.labelZh : m.labelEn}
                      </div>
                      <div className="text-base sm:text-lg font-extrabold text-slate-900 font-mono-code">
                        {m.value}
                      </div>
                    </div>
                    <span className="text-[10px] text-blue-600 font-semibold uppercase bg-blue-50 px-2 py-1 rounded border border-blue-100">
                      OPTIMAL
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-3 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-800">
                <div className="font-bold flex items-center gap-1.5 mb-1 text-slate-900">
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                  {lang === 'zh' ? '全域多协议直连路由' : 'Global Direct Execution'}
                </div>
                <div className="text-[11px] text-slate-600 leading-relaxed">
                  {lang === 'zh'
                    ? '原生支持 FIX 4.4/5.0 协议、WebSocket L3 逐笔订单薄行情与微秒级 DMA 交易通道。'
                    : 'Native support for FIX 4.4/5.0 protocols, WebSocket L3 feeds, and ultra-low latency Direct Market Access (DMA).'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Column Grid Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {BUSINESS_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`cursor-pointer p-4 rounded-xl border transition-all ${
                pillar.id === activeTab
                  ? 'bg-blue-50/70 border-blue-500 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs ${
                    pillar.id === activeTab
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {idx + 1}
                </div>
                <span className="text-[10px] font-mono-code text-slate-600 font-semibold">
                  {pillar.metrics[0].value}
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-900 mb-1 line-clamp-1">
                {lang === 'zh' ? pillar.titleZh : pillar.titleEn}
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                {lang === 'zh' ? pillar.descriptionZh : pillar.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
