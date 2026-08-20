import React, { useState } from 'react';
import { Cpu, Globe2, Shield, Key, Network, BarChart3, Database, Workflow, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutEcosystemProps {
  lang: Language;
}

export const AboutEcosystem: React.FC<AboutEcosystemProps> = ({ lang }) => {
  const t = translations[lang].about;
  const isEn = lang === 'en';

  const [activeTab, setActiveTab] = useState<'pipeline' | 'pillars' | 'labs'>('pillars');

  const pillars = [
    {
      icon: Cpu,
      title: t.pillar1.title,
      role: t.pillar1.role,
      desc: t.pillar1.desc,
      color: 'from-cyan-500/20 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      badgeColor: 'text-cyan-300 bg-cyan-950/60 border-cyan-500/40'
    },
    {
      icon: Globe2,
      title: t.pillar2.title,
      role: t.pillar2.role,
      desc: t.pillar2.desc,
      color: 'from-blue-500/20 to-indigo-500/10',
      borderColor: 'border-blue-500/30',
      badgeColor: 'text-blue-300 bg-blue-950/60 border-blue-500/40'
    },
    {
      icon: Shield,
      title: t.pillar3.title,
      role: t.pillar3.role,
      desc: t.pillar3.desc,
      color: 'from-purple-500/20 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      badgeColor: 'text-purple-300 bg-purple-950/60 border-purple-500/40'
    },
    {
      icon: Key,
      title: t.pillar4.title,
      role: t.pillar4.role,
      desc: t.pillar4.desc,
      color: 'from-amber-500/20 to-yellow-500/10',
      borderColor: 'border-amber-500/30',
      badgeColor: 'text-amber-300 bg-amber-950/60 border-amber-500/40'
    }
  ];

  const pipelineSteps = [
    {
      step: '01',
      title: isEn ? 'Global Market Data Ingestion' : '全球多维行情高速接入',
      desc: isEn 
        ? 'Real-time WebSocket and FIX streams across 40+ crypto exchanges, gold bullion vaults, FX brokers, and on-chain DEX liquidity.'
        : '通过高并发 WebSocket 与 FIX 协议无缝接入全球 40+ 顶级加密交易所、实物黄金金库、外汇经纪商与链上 DEX 流动性。',
      tech: '100k+ msg/sec • Sub-millisecond latency'
    },
    {
      step: '02',
      title: isEn ? 'CogniQuant Neural Strategy Engine' : 'CogniQuant 深度神经网络策略模型',
      desc: isEn 
        ? 'Multi-factor prediction models, deep reinforcement learning, and sentiment indicators identifying risk-adjusted alpha spreads.'
        : '多因子量化数学模型结合深度强化学习，实时扫描跨市场价格偏离，捕捉低风险统计套利与趋势 Alpha 机会。',
      tech: 'Transformer AI • Dynamic Factor Matrix'
    },
    {
      step: '03',
      title: isEn ? 'Smart Automated Execution' : '智能自动化撮合执行',
      desc: isEn 
        ? 'Automated algorithmic routing, smart order slicing, and flash execution minimizing slippage and gas overhead.'
        : '算法化智能订单拆分路由，毫秒级跨链撮合，实现最优深度成交并最大限度压缩滑点与 Gas 成本。',
      tech: 'Smart Routing • Anti-MEV Protection'
    },
    {
      step: '04',
      title: isEn ? 'Intelligent Risk Control & Audit' : '全天候智能风控与链上审计',
      desc: isEn 
        ? 'Autonomous margin telemetry, stop-loss guards, multi-sig vaults, and verifiable on-chain proof of execution.'
        : '全天候杠杆保证金遥测、自动熔断保护、多签冷热隔离金库以及基于区块链的可验证执行记录。',
      tech: 'Autonomous Circuit Breakers • Formally Verified'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#070b16] relative overflow-hidden border-t border-slate-800/80">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono-tech">
            <Network className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center mt-8 mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('pillars')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'pillars'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? '4 Core Pillars' : '四大核心支柱'}
            </button>

            <button
              onClick={() => setActiveTab('labs')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'labs'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'CogniQuant AI Labs' : 'CogniQuant AI 实验室'}
            </button>

            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? 'AI Quant Pipeline' : '量化执行管线'}
            </button>
          </div>
        </div>

        {/* TAB 1: 4 CORE PILLARS */}
        {activeTab === 'pillars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`glass-card p-6 rounded-2xl border ${pillar.borderColor} bg-gradient-to-b ${pillar.color} relative group overflow-hidden flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-700/60 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech border ${pillar.badgeColor}`}>
                        {pillar.role}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono-tech">
                    <span>Pillar {idx + 1} of 4</span>
                    <span className="text-cyan-400">CogniGrid Native</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: COGNIQUANT AI LABS */}
        {activeTab === 'labs' && (
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-[#0a1226]/90 to-[#060a14] animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono-tech border border-cyan-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.labsBadge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {t.labsTitle}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {t.labsDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{isEn ? 'Multi-Strategy Quantification' : '多策略量化分析'}</span>
                    </div>
                    <p className="text-slate-400">{isEn ? 'Statistical arbitrage, trend, grid, & market making' : '统计套利、趋势追踪、网格量化与智能做市'}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{isEn ? 'Automated Trade Execution' : '全自动交易执行'}</span>
                    </div>
                    <p className="text-slate-400">{isEn ? 'Sub-second order routing across 40+ exchanges' : '覆盖40+主流交易所的亚秒级撮合路由'}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{isEn ? 'Intelligent Risk Telemetry' : '全维度智能风控'}</span>
                    </div>
                    <p className="text-slate-400">{isEn ? 'Autonomous margin monitoring and volatility stops' : '动态保证金监控与全自动熔断止损机制'}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{isEn ? 'Web3 & Asset Interfaces' : 'Web3 数据与资产接口'}</span>
                    </div>
                    <p className="text-slate-400">{isEn ? 'Cross-chain oracles, smart contracts & CGT bridges' : '去中心化预言机、智能合约及 CGT 资产桥'}</p>
                  </div>
                </div>
              </div>

              {/* Visual Terminal */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950 border border-cyan-500/20 font-mono-tech text-xs space-y-3 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-cyan-300 font-bold">CogniQuant_Labs_V1.log</span>
                  </div>
                  <span className="text-emerald-400">SYS_ONLINE</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-300">
                  <div className="text-cyan-400">&gt; INITIALIZING COGNIQUANT MULTI-STRATEGY ENGINE...</div>
                  <div className="text-slate-400">&gt; Ingesting live order books: BTC, ETH, XAU/USD, EUR/USD</div>
                  <div className="text-slate-400">&gt; Calibrating neural weights: Loss = 0.0014 [Optimal]</div>
                  <div className="text-emerald-400">&gt; Multi-account risk margin: 100% HEALTHY</div>
                  <div className="text-amber-300">&gt; Arb spread detected: XAU-USDT spread 0.42% -&gt; AUTO-HEDGE</div>
                  <div className="text-cyan-300">&gt; CGT settlement gas: 0 Gwei (Subsidized Layer)</div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Engine: PyTorch-Accelerated C++</span>
                  <span className="text-cyan-400">Latency: 4.8ms</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PIPELINE */}
        {activeTab === 'pipeline' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {pipelineSteps.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800 bg-slate-900/60 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-display text-cyan-400">{item.step}</span>
                    <Workflow className="w-5 h-5 text-slate-500" />
                  </div>
                  <h3 className="text-base font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-800 text-[10px] font-mono-tech text-cyan-300 bg-slate-950/40 px-2.5 py-1.5 rounded-lg">
                  {item.tech}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
