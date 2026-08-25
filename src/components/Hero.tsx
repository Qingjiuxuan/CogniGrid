import React from 'react';
import {
  ShieldCheck,
  ArrowRight,
  FileText,
  CheckCircle,
  Building2,
  Cpu,
  Activity,
  Layers,
  Sparkles,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { Language } from '../types';
import brandLogo from '../assets/images/cognigrid_brand_logo_1787616403683.jpg';

interface HeroProps {
  lang: Language;
  onOpenDocModal: (docId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenDocModal }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 overflow-hidden bg-slate-50 border-b border-slate-200/60"
    >
      {/* Background Grid Pattern & Clean Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-slate-200/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Top Status & Accreditation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs text-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-800">
              {lang === 'zh'
                ? '美国财政部 FinCEN 注册全美 MSB'
                : 'FinCEN Registered Money Services Business'}
            </span>
            <span className="font-mono-code text-blue-600 font-bold">#31000337267999</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs text-slate-600">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>{lang === 'zh' ? '科罗拉多州官方注册实体' : 'Colorado Entity ID'}</span>
            <span className="font-mono-code text-slate-800 font-semibold">#20261949922</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'zh' ? '良好存续证明 (Good Standing)' : 'Good Standing Certified'}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo Spotlight Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white border border-slate-200 rounded-full mb-6 shadow-xs">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-950 p-0.5 border border-blue-500/40">
              <img
                src={brandLogo}
                alt="CogniGrid Icon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
              {lang === 'zh' ? 'CogniGrid 全球智能金融生态网络' : 'CogniGrid Global Intelligent Financial Ecosystem'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            {lang === 'zh' ? (
              <>
                全球 AI 驱动智能金融生态网络 <br />
                <span className="text-blue-600">CogniGrid 构筑全域互联底座</span>
              </>
            ) : (
              <>
                Global AI-Driven Intelligent Financial Ecosystem <br />
                <span className="text-blue-600">CogniGrid Infrastructure Network</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-10 max-w-3xl mx-auto">
            {lang === 'zh' ? (
              <>
                CogniGrid 是在 <strong>Cogni Quant Foundation</strong> 推动下发起的全球 AI 驱动智能金融生态网络。依托核心研发机构 <strong>CogniQuant AI Labs</strong>，以 AI 量化技术为智能引擎、全球多市场能力为金融连接层、Web3.0 为数字身份与资产协同底座，以 <strong>CGT</strong> 为生态应用与价值连接载体，通过<strong>九大生态</strong>构筑跨市场、跨区域、跨场景的全球协同网络。
              </>
            ) : (
              <>
                CogniGrid is a global AI-driven intelligent financial ecosystem network developed under the promotion of <strong>Cogni Quant Foundation</strong>. Powered by <strong>CogniQuant AI Labs</strong>, with AI quantitative technology as its engine, multi-market capabilities as its financial connection layer, Web3.0 as its digital foundation, and <strong>CGT</strong> as the carrier, forming a global collaborative network across <strong>nine major ecosystems</strong>.
              </>
            )}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              id="hero-explore-ecosystem-cta"
              href="#ecosystem"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>{lang === 'zh' ? '探索九大核心生态' : 'Explore 9 Major Ecosystems'}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <a
              id="hero-roadmap-cta"
              href="#roadmap"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>{lang === 'zh' ? '2026–2027 战略路线图' : '2026–2027 Strategic Roadmap'}</span>
            </a>

            <a
              id="hero-verify-docs-cta"
              href="#compliance"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-slate-500" />
              <span>{lang === 'zh' ? '查验全美 MSB 执照' : 'Inspect FinCEN MSB'}</span>
            </a>
          </div>
        </div>

        {/* Live Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Foundation AUM */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-medium">{lang === 'zh' ? '基金会管理规模' : 'Foundation AUM'}</span>
              <DollarSign className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 font-mono-code">
              20,000,000 <span className="text-xs text-slate-500">USDT</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              {lang === 'zh' ? 'Cogni Quant Foundation' : 'Managed Liquid Assets'}
            </div>
          </div>

          {/* 9 Ecosystems */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-medium">{lang === 'zh' ? '全域协同生态' : 'Ecosystem Matrix'}</span>
              <Activity className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono-code">9 Major</div>
            <div className="text-[11px] text-slate-500 mt-1">
              {lang === 'zh' ? 'SocialFi/AI量化/黄金/支付等' : 'SocialFi/Quant/Gold/Pay/CEX'}
            </div>
          </div>

          {/* R&D Labs */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-medium">{lang === 'zh' ? '核心技术研发' : 'Core R&D'}</span>
              <Cpu className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-purple-600 font-mono-code">AI Labs</div>
            <div className="text-[11px] text-slate-500 mt-1">
              {lang === 'zh' ? 'CogniQuant 核心实验室' : 'CogniQuant AI Labs'}
            </div>
          </div>

          {/* FinCEN MSB */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-medium">{lang === 'zh' ? '法定合规牌照' : 'Federal MSB'}</span>
              <ShieldCheck className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-blue-600 font-mono-code">50 States</div>
            <div className="text-[11px] text-slate-500 mt-1">
              {lang === 'zh' ? '全美 50 州与海外属地' : 'All 50 US Territories'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
