import React, { useState } from 'react';
import {
  Users,
  Bot,
  Coins,
  CreditCard,
  Landmark,
  PieChart,
  FileSearch,
  Gamepad2,
  ShieldAlert,
  Layers,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Globe2,
  Coins as TokenIcon
} from 'lucide-react';
import { Language } from '../types';
import { NINE_ECOSYSTEMS } from '../data';

interface EcosystemsSectionProps {
  lang: Language;
}

export const EcosystemsSection: React.FC<EcosystemsSectionProps> = ({ lang }) => {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [activeEcoId, setActiveEcoId] = useState<string>(NINE_ECOSYSTEMS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      case 'Coins':
        return <Coins className="w-5 h-5" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'PieChart':
        return <PieChart className="w-5 h-5" />;
      case 'FileSearch':
        return <FileSearch className="w-5 h-5" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const activeEco = NINE_ECOSYSTEMS.find((e) => e.id === activeEcoId) || NINE_ECOSYSTEMS[0];

  const fourLayers = [
    {
      layer: '01',
      titleEn: 'AI Quantitative Engine',
      titleZh: 'AI 量化策略智能引擎',
      subtitleEn: 'CogniQuant AI Labs Core R&D',
      subtitleZh: 'CogniQuant AI Labs 核心研发底座',
      descEn:
        'Continuous research covering global market data, AI analysis, multi-strategy quantification, automated trade execution, multi-account management, and intelligent risk control.',
      descZh:
        '覆盖全球市场数据、人工智能分析、多策略量化、交易自动化执行、多账户管理与智能风控全链路闭环。',
      icon: <Cpu className="w-5 h-5 text-blue-600" />
    },
    {
      layer: '02',
      titleEn: 'Financial Connection Layer',
      titleZh: '全球多市场金融连接层',
      subtitleEn: 'Cross-Market Liquidity Aggregation',
      subtitleZh: '全域跨市场流动性撮合与路由',
      descEn:
        'Seamless interconnection across international precious metals, U.S. equities, benchmark indices, forex, and digital asset markets.',
      descZh:
        '深度链接国际贵金属、美股指数、外汇及全球数字资产市场，构建高确定性微秒级撮合通道。',
      icon: <Globe2 className="w-5 h-5 text-emerald-600" />
    },
    {
      layer: '03',
      titleEn: 'Web3.0 Collaboration Base',
      titleZh: 'Web3.0 数字身份与资产协同底座',
      subtitleEn: 'Decentralized Trust & Smart Contracts',
      subtitleZh: '去中心化信任与非托管智能合约',
      descEn:
        'Decentralized identity, cryptographic verifiable track records, non-custodial asset management, and cross-chain execution security.',
      descZh:
        '提供去中心化身份凭证、链上战绩可验证性、非托管资产管理与跨链互操作安全底座。',
      icon: <Layers className="w-5 h-5 text-purple-600" />
    },
    {
      layer: '04',
      titleEn: 'CGT Value Carrier Layer',
      titleZh: 'CGT 生态应用与价值互联载体',
      subtitleEn: 'Native Token Economic Utility',
      subtitleZh: '原生代币全场景生态赋能与价值捕获',
      descEn:
        'CGT serves as the unified value connection medium across all nine ecosystems, facilitating fee discounts, minting, governance, and revenue distribution.',
      descZh:
        'CGT 作为九大生态的统一价值载体与结算媒介，赋能手续费抵扣、算力铸造、社区治理与收益分润。',
      icon: <TokenIcon className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{lang === 'zh' ? 'CogniGrid 核心生态版图' : 'CogniGrid 9 Major Ecosystems'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'zh'
              ? '跨市场、跨区域、跨场景的九大全球协同生态'
              : 'Cross-Market, Cross-Regional & Cross-Scenario Ecosystem Matrix'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'zh'
              ? 'CogniGrid 并非单一交易产品，而是由 Cogni Quant Foundation 推动发起的全球 AI 驱动智能金融生态网络，致力于构建连接全球用户、行情数据、量化策略、交易账户、数字资产、生态应用与全球支付场景的综合基础设施。'
              : 'CogniGrid is a comprehensive infrastructure developed under the promotion of Cogni Quant Foundation, connecting global users, market data, quantitative strategies, trading accounts, digital assets, ecological applications and global payment scenarios.'}
          </p>
        </div>

        {/* 4 Core Architectural Layers Showcase */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-16 shadow-xs">
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-mono-code font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                ARCHITECTURE LAYERS
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                {lang === 'zh' ? '四大核心技术与价值驱动架构' : 'Four Core Engine & Value Transmission Layers'}
              </h3>
            </div>
            <div className="text-xs font-mono-code text-slate-500 hidden sm:block">
              CogniQuant AI Labs Powered
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourLayers.map((layer, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                      {layer.icon}
                    </div>
                    <span className="text-xs font-mono-code font-bold text-slate-400">
                      LAYER {layer.layer}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    {lang === 'zh' ? layer.titleZh : layer.titleEn}
                  </h4>
                  <div className="text-[11px] font-semibold text-blue-600 mb-2">
                    {lang === 'zh' ? layer.subtitleZh : layer.subtitleEn}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === 'zh' ? layer.descZh : layer.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 9 Major Ecosystems Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 9-box Ecosystem Cards Navigation */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {NINE_ECOSYSTEMS.map((eco) => {
              const isActive = eco.id === activeEcoId;
              return (
                <button
                  key={eco.id}
                  onClick={() => setActiveEcoId(eco.id)}
                  className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-[1.02]'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-blue-400 hover:bg-slate-50 shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isActive
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-100 text-blue-600 border border-slate-200'
                        }`}
                      >
                        {getIcon(eco.iconName)}
                      </span>
                      <span
                        className={`text-[10px] font-mono-code font-bold px-1.5 py-0.5 rounded ${
                          isActive
                            ? 'bg-blue-700 text-blue-100'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {eco.index}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold line-clamp-1 mb-1">
                      {lang === 'zh' ? eco.titleZh : eco.titleEn}
                    </h4>

                    <p
                      className={`text-[11px] line-clamp-2 ${
                        isActive ? 'text-blue-100' : 'text-slate-500'
                      }`}
                    >
                      {lang === 'zh' ? eco.taglineZh : eco.taglineEn}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100/20 flex items-center justify-between text-[10px] font-mono-code">
                    <span className={isActive ? 'text-blue-200' : 'text-blue-600 font-semibold'}>
                      {eco.tag}
                    </span>
                    <span className={isActive ? 'text-white font-bold' : 'text-slate-400'}>
                      {eco.launchDate}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Ecosystem Focus Panel */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono-code font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded">
                ECOSYSTEM #{activeEco.index} • {activeEco.tag}
              </span>
              <span className="text-xs font-mono-code font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                Launch: {activeEco.launchDate}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                {getIcon(activeEco.iconName)}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {lang === 'zh' ? activeEco.titleZh : activeEco.titleEn}
                </h3>
                <p className="text-xs text-blue-600 font-semibold">
                  {lang === 'zh' ? activeEco.taglineZh : activeEco.taglineEn}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              {lang === 'zh' ? activeEco.descriptionZh : activeEco.descriptionEn}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                {lang === 'zh' ? '核心功能与落地特性' : 'Key Ecological Capabilities'}
              </h4>
              <div className="space-y-2.5">
                {(lang === 'zh' ? activeEco.featuresZh : activeEco.featuresEn).map(
                  (feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* CGT Token & Value Connection Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 border border-blue-200/80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono-code font-bold text-blue-800 flex items-center gap-1.5">
                  <TokenIcon className="w-3.5 h-3.5 text-amber-600" />
                  CGT Value Connection Carrier
                </span>
                <span className="text-[10px] font-mono-code text-slate-500">
                  Ecosystem Asset
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'zh'
                  ? 'CGT 作为全生态应用与价值流转的核心载体，在此模块中深度提供结算、抵扣、流动性激励及分布式治理赋能。'
                  : 'CGT serves as the primary asset for value realization, settlement rebates, liquidity incentive distributions, and decentralized governance.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
