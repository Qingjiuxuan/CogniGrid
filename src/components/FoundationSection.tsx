import React from 'react';
import { Landmark, ShieldCheck, PieChart, Coins, Scale, TrendingUp, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FoundationSectionProps {
  lang: Language;
  onOpenDocModal: () => void;
}

export const FoundationSection: React.FC<FoundationSectionProps> = ({
  lang,
  onOpenDocModal
}) => {
  const t = translations[lang].foundation;
  const isEn = lang === 'en';

  const governancePillars = [
    {
      title: isEn ? 'Strategic Planning & Capital Deployment' : '全球战略规划与资本赋能',
      desc: isEn 
        ? 'Allocating long-term institutional capital and orchestrating global roadmap milestones across 9 ecosystem sectors.'
        : '主导长期机构级资本配置，统筹推动九大生态系统全景路线图的跨阶段里程碑落地。'
    },
    {
      title: isEn ? 'CogniQuant AI Labs Technology Investment' : 'CogniQuant AI 实验室科研扶持',
      desc: isEn 
        ? 'Funding core algorithmic R&D, neural network quantitative models, and decentralized Web3 data bridges.'
        : '持续资助核心深度学习算法研发、多策略量化模型构建及去中心化 Web3 数据资产交互接口。'
    },
    {
      title: isEn ? 'Global Industrial Resource Linkage' : '全球产业与顶层资源跨界联动',
      desc: isEn 
        ? 'Forging alliances with gold bullion vaults, tier-1 financial brokers, payment networks, and supernode federations.'
        : '整合全球实物黄金金库、一线金融经纪商、跨国支付清算轨道及全球超级节点联盟资源。'
    },
    {
      title: isEn ? 'Systemic Risk Governance & Formal Auditing' : '系统性风险治理与权威审计',
      desc: isEn 
        ? 'Maintaining the 20,000,000 USDT reserve fund with institutional transparency and state-registered compliance.'
        : '严谨管理 20,000,000 USDT 专属储备金，落实美国科罗拉多州法定备案、全透明链上审计与系统性风控。'
    }
  ];

  return (
    <section id="foundation" className="py-20 bg-[#070b16] relative overflow-hidden border-t border-slate-800">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono-tech">
            <Landmark className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Foundation Mission Banner */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/90 to-blue-950/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="text-xs font-mono-tech text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>{t.missionTitle}</span>
              </div>
              <p className="text-base sm:text-xl font-bold font-display text-white leading-snug">
                &ldquo;{t.missionDesc}&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-300">
                {t.aumCard.desc}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <button
                onClick={onOpenDocModal}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{isEn ? 'Verify Colorado State Seal' : '核验科罗拉多州法定盖印'}</span>
              </button>
              <span className="text-[11px] text-slate-400 font-mono-tech mt-2">
                LLC Entity Reg: Certificate #001
              </span>
            </div>
          </div>
        </div>

        {/* 20,000,000 USDT AUM Distribution Breakdown */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: AUM Mega Card */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-900 via-[#0a142c] to-[#060a14] flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Coins className="w-8 h-8" />
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono-tech bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Audited Reserve</span>
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-mono-tech uppercase tracking-wider">
                  {t.aumCard.title}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-1 text-gradient-cyan">
                  {t.aumCard.amount}
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {isEn
                    ? 'Dedicated institutional liquidity & R&D reserve fund under the direct treasury oversight of Cogni Quant Foundation.'
                    : '由 Cogni Quant 基金会财政治理委员会直接监管的专属机构级流动性与科研生态发展储备金。'}
                </p>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="pt-6 mt-6 border-t border-slate-800 space-y-2 text-xs text-slate-400 font-mono-tech">
              <div className="flex justify-between">
                <span>Jurisdiction:</span>
                <span className="text-slate-200">State of Colorado, USA</span>
              </div>
              <div className="flex justify-between">
                <span>Managing Institution:</span>
                <span className="text-cyan-300">CogniQuant Foundation LLC</span>
              </div>
              <div className="flex justify-between">
                <span>Mandate Status:</span>
                <span className="text-emerald-400">100% Verified Ownership</span>
              </div>
            </div>
          </div>

          {/* Right: Allocation Breakdown */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold font-display text-white">
                    {isEn ? '20M USDT Capital Allocation Strategy' : '2,000万 USDT 储备金战略配置方案'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isEn ? 'Balanced distribution for long-term scalability and security' : '为生态长期稳健发展与安全运营构筑坚实底座'}
                  </p>
                </div>
                <PieChart className="w-6 h-6 text-cyan-400" />
              </div>

              {/* Progress bars */}
              <div className="space-y-4">
                {t.allocations.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs sm:text-sm font-medium">
                      <span className="text-slate-200">{item.label}</span>
                      <span className="text-cyan-400 font-mono-tech font-bold">{item.pct} ({item.amount})</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          idx === 0 ? 'bg-gradient-to-r from-cyan-500 to-blue-500 w-[40%]' :
                          idx === 1 ? 'bg-gradient-to-r from-blue-500 to-indigo-500 w-[30%]' :
                          idx === 2 ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-[20%]' :
                          'bg-gradient-to-r from-amber-500 to-yellow-500 w-[10%]'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance Pillars Grid */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {governancePillars.map((p, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{p.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
