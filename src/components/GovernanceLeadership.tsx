import React, { useState } from 'react';
import {
  ShieldCheck,
  Scale,
  Award,
  Users,
  FileText,
  CheckCircle2,
  Building2,
  Briefcase,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Language, ExecutiveLeader } from '../types';
import { EXECUTIVE_TEAM, FOUNDATION_GOVERNANCE_OVERVIEW } from '../data/team';

interface GovernanceLeadershipProps {
  lang: Language;
}

export const GovernanceLeadership: React.FC<GovernanceLeadershipProps> = ({ lang }) => {
  const [selectedExec, setSelectedExec] = useState<ExecutiveLeader | null>(null);

  const committees = [
    {
      titleEn: 'Independent Risk & Audit Committee',
      titleZh: '独立风险控制与审计委员会',
      descEn:
        'Ensures mathematical risk limits, VaR stress testing, and real-time algorithmic safeguards across all asset pools.',
      descZh: '全天候监督算法极限风控指标、VaR在险价值压力测试及异常市场闪崩熔断机制。'
    },
    {
      titleEn: 'Statutory AML & Regulatory Board',
      titleZh: '法定反洗钱与合规审查委员会',
      descEn:
        'Maintains full alignment with FinCEN Bank Secrecy Act (BSA) rules, OFAC sanctions screening, and state statutory mandates.',
      descZh: '严格践行美国《银行保密法》(BSA)、OFAC 制裁筛查与各州金融局法定准则。'
    },
    {
      titleEn: 'AI Ethics & Algorithmic Governance Council',
      titleZh: 'AI 伦理与量化算法治理委员会',
      descEn:
        'Audits autonomous reinforcement learning models for systemic fairness, liquidity integrity, and non-exploitative trading behaviors.',
      descZh: '定期审计深度时序模型与自主强化学习算法，确保流动性健康与无欺诈稳健运作。'
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>{lang === 'zh' ? '组织架构与核心管理层' : 'Organizational Structure & Executive Team'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'zh' ? 'CogniGrid 核心高管团队' : 'CogniGrid Executive Leadership'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'zh'
              ? '汇聚全球顶尖科技战略专家、分布式架构师、合规高管与跨境商业先锋，全面统筹 CogniGrid 全球生态发展与商业化落地。'
              : 'Bringing together world-class technology strategists, distributed systems architects, compliance officers, and global growth leaders.'}
          </p>
        </div>

        {/* Foundation AUM & Governance Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white mb-16 shadow-md border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] font-mono-code font-bold text-blue-300 bg-blue-900/60 border border-blue-700/60 px-2.5 py-0.5 rounded uppercase">
                  Ecosystem Governing Body
                </span>
                <span className="text-xs text-slate-300 font-mono-code">
                  FinCEN MSB #31000337267999
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Cogni Quant Foundation
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                {lang === 'zh'
                  ? FOUNDATION_GOVERNANCE_OVERVIEW.roleDescriptionZh
                  : FOUNDATION_GOVERNANCE_OVERVIEW.roleDescriptionEn}
              </p>

              <div className="pt-2 text-xs text-blue-200 font-mono-code flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>
                  {lang === 'zh' ? '使命愿景：' : 'Mission: '}
                  {lang === 'zh'
                    ? FOUNDATION_GOVERNANCE_OVERVIEW.missionZh
                    : FOUNDATION_GOVERNANCE_OVERVIEW.missionEn}
                </span>
              </div>
            </div>

            {/* AUM Metric Highlight */}
            <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700 rounded-xl p-6 text-center lg:text-right">
              <span className="text-xs font-mono-code uppercase font-semibold text-slate-400 block mb-1">
                {lang === 'zh' ? '基金会当前资产管理规模' : 'Current Foundation AUM'}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono-code tracking-tight">
                20,000,000 <span className="text-xl text-white">USDT</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-2 font-mono-code">
                {lang === 'zh' ? '全额链上与托管安全冗余备付' : 'Fully Audited & Segregated Reserve Pool'}
              </div>
            </div>
          </div>
        </div>

        {/* 7 Executives Grid with PDF Photos */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {lang === 'zh' ? '执行管理委员会 (C-Level Executives)' : 'Executive Management Team (7 Leaders)'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'zh'
                  ? '点击任意成员卡片可查看其详细履历与分管领域'
                  : 'Click any executive profile to inspect detailed background and focus areas.'}
              </p>
            </div>
            <div className="hidden sm:block text-xs font-mono-code text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
              7 Executive Officers
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXECUTIVE_TEAM.map((exec) => (
              <div
                key={exec.id}
                onClick={() => setSelectedExec(exec)}
                className="group cursor-pointer bg-white border border-slate-200 hover:border-blue-500 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
                    <img
                      src={exec.photoUrl}
                      alt={exec.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono-code uppercase font-bold px-2 py-0.5 rounded bg-blue-600/90 backdrop-blur-xs">
                        {exec.roleEn.split('—')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="p-5">
                    <h4 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {exec.name}
                    </h4>
                    <p className="text-xs font-semibold text-blue-700 mt-0.5 mb-3">
                      {lang === 'zh' ? exec.roleZh : exec.roleEn}
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                      {lang === 'zh' ? exec.bioZh : exec.bioEn}
                    </p>
                  </div>
                </div>

                {/* Footer tags */}
                <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                  <span className="truncate max-w-[140px]">
                    {lang === 'zh' ? exec.focusAreasZh[0] : exec.focusAreasEn[0]}
                  </span>
                  <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    {lang === 'zh' ? '详述' : 'Bio'} &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Standing Governance Committees */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-6">
            <Scale className="w-5 h-5 text-blue-600" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {lang === 'zh' ? '独立审计与常设治理委员会' : 'Standing Governance & Audit Committees'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {committees.map((com, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {lang === 'zh' ? com.titleZh : com.titleEn}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'zh' ? com.descZh : com.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Executive Bio Modal */}
      {selectedExec && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedExec(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold"
            >
              &times;
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              <div className="w-32 h-40 shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                <img
                  src={selectedExec.photoUrl}
                  alt={selectedExec.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <span className="text-xs font-mono-code font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  {selectedExec.roleEn}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {selectedExec.name}
                </h3>
                <p className="text-sm text-blue-600 font-semibold mt-0.5">
                  {lang === 'zh' ? selectedExec.shortTitleZh : selectedExec.shortTitleEn}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {selectedExec.credentials.map((cred, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  {lang === 'zh' ? '个人详细生平履历' : 'Executive Biography'}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  {lang === 'zh' ? selectedExec.bioZh : selectedExec.bioEn}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  {lang === 'zh' ? '核心分管职责' : 'Key Focus Areas'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(lang === 'zh' ? selectedExec.focusAreasZh : selectedExec.focusAreasEn).map(
                    (focus, fIdx) => (
                      <div
                        key={fIdx}
                        className="text-xs text-slate-800 bg-blue-50/50 border border-blue-100 p-2.5 rounded-lg flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{focus}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedExec(null)}
                className="px-5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                {lang === 'zh' ? '关闭' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
