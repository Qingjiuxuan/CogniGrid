import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Sparkles, Filter, ArrowRight, Shield } from 'lucide-react';
import { Language } from '../types';
import { ROADMAP_MILESTONES } from '../data';

interface RoadmapTimelineProps {
  lang: Language;
}

export const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({ lang }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredMilestones =
    filterCategory === 'all'
      ? ROADMAP_MILESTONES
      : ROADMAP_MILESTONES.filter((m) => m.category === filterCategory);

  return (
    <section id="roadmap" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-emerald-700" />
            <span>{lang === 'zh' ? '全球发展战略蓝图' : 'Ecosystem Development Roadmap'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'zh'
              ? '打造独一无二的世界级 Web3.0 金融生态集群'
              : 'Build a Unique World-Class Web3.0 Financial Ecosystem Cluster'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'zh'
              ? 'Cogni Quant Foundation 制定清晰严谨的 2026–2027 战略路线图，分阶段推进全球合伙人招募、SocialFi、AI 量化铸造、黄金交易、全球支付、借贷、预测市场、投研订阅、游戏集群及顶级 CEX 交易所落地。'
              : 'Cogni Quant Foundation presents a phased 2026–2027 milestone trajectory spanning partner recruitment, SocialFi, AI quant minting, gold trading, payment gateways, DeFi lending, prediction markets, and proprietary CEX deployment.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: 'all', labelEn: 'All Milestones (10)', labelZh: '全部里程碑 (10)' },
            { key: 'launch', labelEn: 'Product Launches', labelZh: '核心系统上线' },
            { key: 'expansion', labelEn: 'Global Expansion', labelZh: '全球生态扩张' },
            { key: 'integration', labelEn: 'Financial Integration', labelZh: '清算与支付集成' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilterCategory(tab.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filterCategory === tab.key
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {lang === 'zh' ? tab.labelZh : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Milestone Timeline Grid */}
        <div className="relative">
          {/* Vertical Center Line for Large Screens */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {filteredMilestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              const isCurrent = m.status === 'current';

              return (
                <div
                  key={m.id}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge in Center */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-slate-300 items-center justify-center z-10 shadow-xs">
                    {isCurrent ? (
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse" />
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    )}
                  </div>

                  {/* Content Card (Half Width) */}
                  <div className="w-full lg:w-1/2 px-0 lg:px-8">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                        isCurrent
                          ? 'bg-emerald-50/40 border-emerald-300 shadow-sm'
                          : 'bg-slate-50 border-slate-200/90 hover:border-blue-400 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-mono-code font-bold px-2.5 py-1 rounded ${
                              isCurrent
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-200 text-slate-800'
                            }`}
                          >
                            {lang === 'zh' ? m.dateZh : m.dateEn}
                          </span>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                              <Sparkles className="w-3 h-3" />
                              {lang === 'zh' ? '正在推进中' : 'Active Phase'}
                            </span>
                          )}
                        </div>

                        <span className="text-[10px] font-mono-code uppercase font-semibold text-slate-500">
                          {m.category}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                        {lang === 'zh' ? m.titleZh : m.titleEn}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {lang === 'zh' ? m.descriptionZh : m.descriptionEn}
                      </p>

                      {/* Highlights */}
                      <div className="pt-3 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                        {(lang === 'zh' ? m.highlightsZh : m.highlightsEn).map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-[11px] font-mono-code text-slate-700 bg-white border border-slate-200 px-2.5 py-0.5 rounded-md"
                          >
                            • {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer on other side for desktop */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
