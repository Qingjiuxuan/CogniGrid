import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2, ArrowRight, ExternalLink, Users2, Lock, FileCheck } from 'lucide-react';
import { Language, LeadershipMember } from '../types';
import { leadershipData, translations, legalDocumentsData } from '../data/translations';
import { ExecutiveAvatar } from './ExecutiveAvatar';

interface LeadershipAndDocumentsProps {
  lang: Language;
  onOpenDocModal: (docId?: 'authorization-letter' | 'membership-certificate') => void;
}

export const LeadershipAndDocuments: React.FC<LeadershipAndDocumentsProps> = ({
  lang,
  onOpenDocModal
}) => {
  const t = translations[lang].leadership;
  const isEn = lang === 'en';

  const ceo = leadershipData.find(m => m.isCEO);
  const otherExecutives = leadershipData.filter(m => !m.isCEO);

  return (
    <section id="leadership" className="py-20 bg-[#050811] relative overflow-hidden">
      {/* Dynamic Glow */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono-tech">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* CEO SPOTLIGHT & OFFICIAL FOUNDATION MANDATE */}
        {ceo && (
          <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/40 bg-gradient-to-br from-slate-900/95 via-[#0b142c]/95 to-[#060a16] shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* CEO Portrait Avatar */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <ExecutiveAvatar 
                  name={ceo.name}
                  role={ceo.role}
                  size="xl"
                  isCEO={true}
                />
                
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold font-display text-white">
                    {isEn ? ceo.name : ceo.nameZh}
                  </h3>
                  <div className="text-xs font-mono-tech text-cyan-400 mt-0.5">
                    {isEn ? ceo.role : ceo.roleZh}
                  </div>
                  <div className="inline-flex items-center gap-1 mt-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] text-slate-400 font-mono-tech">
                    <span>100% Equity Holder</span>
                    <span>•</span>
                    <span className="text-cyan-300">Colorado LLC</span>
                  </div>
                </div>
              </div>

              {/* CEO Mandate Details */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono-tech border border-cyan-500/30">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.ceoMandate.badge}</span>
                  </div>

                  <span className="text-xs text-emerald-400 font-mono-tech flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Official Letter of Appointment & Seal Verified</span>
                  </span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {t.ceoMandate.mandateTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {isEn ? ceo.bio : ceo.bioZh}
                  </p>
                </div>

                {/* 3 Key Mandates */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  {(isEn ? ceo.experience : ceo.experienceZh).map((exp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>

                {/* Document Access Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenDocModal('authorization-letter')}
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{isEn ? 'Inspect Letter of Appointment' : '查阅全权任命公函 (Letter of Appointment)'}</span>
                  </button>

                  <button
                    onClick={() => onOpenDocModal('membership-certificate')}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 hover:border-amber-400 text-amber-300 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
                  >
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>{isEn ? 'Membership Certificate 001 (100%)' : '成员所有权证书 001 (100% 权益)'}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* OFFICIAL LEGAL DOCUMENTS PREVIEW DUAL-CARD ROW */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {legalDocumentsData.map((doc) => (
            <div
              key={doc.id}
              onClick={() => onOpenDocModal(doc.id)}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 bg-slate-900/60 flex flex-col justify-between group cursor-pointer transition-all hover:shadow-xl hover:shadow-cyan-950/30"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    <FileCheck className="w-6 h-6" />
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {isEn ? doc.status : doc.statusZh}
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-mono-tech text-cyan-400 uppercase tracking-wider">
                    {doc.docNumber || 'CQF OFFICIAL'}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {isEn ? doc.title : doc.titleZh}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {isEn ? doc.summary : doc.summaryZh}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono-tech text-slate-400">
                <span>{isEn ? doc.jurisdiction : doc.jurisdictionZh}</span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{isEn ? 'View & Verify' : '查看并验证'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 6 EXECUTIVE OFFICERS GRID */}
        <div className="mt-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-display text-white">
              {t.teamTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t.teamSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherExecutives.map((exec) => (
              <div
                key={exec.id}
                className="glass-card p-6 rounded-2xl border border-slate-800/90 hover:border-slate-700 bg-slate-900/50 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <ExecutiveAvatar
                      name={exec.name}
                      role={exec.role}
                      size="md"
                    />
                    <div>
                      <h4 className="text-base font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                        {isEn ? exec.name : exec.nameZh}
                      </h4>
                      <div className="text-xs font-mono-tech text-cyan-400 font-medium">
                        {isEn ? exec.role : exec.roleZh}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {isEn ? exec.department : exec.departmentZh}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEn ? exec.bio : exec.bioZh}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <div className="text-[10px] uppercase font-mono-tech text-slate-400">
                      {isEn ? 'Core Responsibilities' : '核心职能'}
                    </div>
                    {(isEn ? exec.experience : exec.experienceZh).map((exp, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                        <span className="text-cyan-400">•</span>
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 font-mono-tech">
                  <span>CogniGrid Executive Board</span>
                  <span className="text-cyan-400">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
