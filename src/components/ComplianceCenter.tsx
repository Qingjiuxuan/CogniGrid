import React from 'react';
import {
  ShieldCheck,
  Building2,
  FileCheck,
  CheckCircle,
  ExternalLink,
  Lock,
  Search,
  Eye,
  Award,
} from 'lucide-react';
import { Language } from '../types';
import { OFFICIAL_DOCUMENTS } from '../data/documents';

interface ComplianceCenterProps {
  lang: Language;
  onOpenDocModal: (docId: string) => void;
}

export const ComplianceCenter: React.FC<ComplianceCenterProps> = ({
  lang,
  onOpenDocModal,
}) => {
  return (
    <section id="compliance" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded mb-3 tracking-wider uppercase">
            {lang === 'zh' ? '法定资质与权威公示' : 'Government Registry & Official Licenses'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'zh' ? '全美双重法律合规与权威监管矩阵' : 'Dual Tier US Regulatory Accreditation'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'zh'
              ? 'CogniQuant Foundation 秉持最高标准的透明度与监管合规性，完整具备美国联邦财政部 FinCEN 注册牌照与科罗拉多州务卿官方存续认证。'
              : 'Maintaining the highest fiduciary and statutory standards, CogniQuant operates with full transparency under Federal FinCEN MSB registration and State of Colorado certificates.'}
          </p>
        </div>

        {/* Dual Primary Regulatory Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: FinCEN MSB */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      FEDERAL MSB LICENSE
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                      {lang === 'zh'
                        ? '美国财政部金融犯罪执法局 FinCEN 牌照'
                        : 'US Department of the Treasury FinCEN MSB'}
                    </h3>
                  </div>
                </div>
                <Award className="w-5 h-5 text-blue-600 shrink-0 hidden sm:block" />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {lang === 'zh'
                  ? 'MSB 注册编号为 31000337267999，业务许可涵盖全美 50 个州及所有海外属地，获准从事汇兑结算、经销商经纪与自营金融科技算法服务。'
                  : 'Authorized under MSB Registration #31000337267999 across all 50 US States and Territories for money transmission, dealer/broker activities, and financial technology services.'}
              </p>

              {/* Data table specs */}
              <div className="space-y-2.5 mb-6 text-xs font-mono-code">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">{lang === 'zh' ? '注册法团全称' : 'Legal Entity Name'}</span>
                  <span className="text-slate-900 font-semibold">COGNIQUANT FOUNDATION</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">{lang === 'zh' ? 'MSB 注册号' : 'MSB Reg Number'}</span>
                  <span className="text-blue-600 font-bold">31000337267999</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">{lang === 'zh' ? '官方注册地址' : 'Official Registered Address'}</span>
                  <span className="text-slate-800 text-right">
                    1001 17th Street, Denver, CO 80202
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">{lang === 'zh' ? '全美各州效力' : 'Jurisdiction'}</span>
                  <span className="text-emerald-700 font-semibold">All 50 US States & Territories</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => onOpenDocModal('fincen-msb')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>{lang === 'zh' ? '调阅 FinCEN 官方备案证书' : 'Inspect FinCEN Transcript'}</span>
              </button>

              <a
                href="https://www.fincen.gov/msb-state-selector"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 transition-colors"
              >
                <span>{lang === 'zh' ? '前往 FinCEN 官网核验' : 'FinCEN.gov Public Search'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Card 2: Colorado Good Standing */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center shadow-xs">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      STATE REGISTRATION & GOOD STANDING
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                      {lang === 'zh'
                        ? '美国科罗拉多州务卿官方存续认证'
                        : 'Colorado Secretary of State Good Standing'}
                    </h3>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 hidden sm:block" />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {lang === 'zh'
                  ? '依据《科罗拉多州修订法规》(C.R.S.) Title 7 规范成立，实体编号 #20261949922，经州务卿官方核验证实依法合法合规运营、财务报告正常。'
                  : 'Incorporated under Colorado Revised Statutes (C.R.S.) Title 7, Entity ID #20261949922, officially certified in Good Standing by the Secretary of State.'}
              </p>

              {/* Data table specs */}
              <div className="space-y-2.5 mb-6 text-xs font-mono-code">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">{lang === 'zh' ? '州务卿实体编号' : 'Colorado Entity ID'}</span>
                  <span className="text-slate-900 font-bold">20261949922</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">{lang === 'zh' ? '官方核验确认码' : 'Verification ID'}</span>
                  <span className="text-emerald-700 font-bold">#18857281</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">{lang === 'zh' ? '法人组织形式' : 'Entity Form'}</span>
                  <span className="text-slate-800">Nonprofit Corporation / Foundation</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">{lang === 'zh' ? '法定存续状态' : 'Statutory Status'}</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    Good Standing (良好存续)
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => onOpenDocModal('colorado-good-standing')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm transition-all"
              >
                <FileCheck className="w-4 h-4" />
                <span>{lang === 'zh' ? '调阅州务卿存续证明原件' : 'Inspect Certificate of Fact'}</span>
              </button>

              <a
                href="https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do?resetTransTyp=Y"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-emerald-700 transition-colors"
              >
                <span>{lang === 'zh' ? '前往科罗拉多州官网核验' : 'Colorado SOS Registry'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Institutional Document Vault */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {lang === 'zh' ? '官方合规档案与备案公示清单' : 'Institutional Compliance & Audit Vault'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'zh'
                  ? '点击任意项目即可调阅受官方印鉴签署的法定文件及核验序列号'
                  : 'Click any document below to inspect full statutory transcripts and verification identifiers.'}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-xs text-slate-500 font-mono-code bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              <span>{OFFICIAL_DOCUMENTS.length} Certified Transcripts</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {OFFICIAL_DOCUMENTS.map((doc) => (
              <div
                key={doc.id}
                onClick={() => onOpenDocModal(doc.id)}
                className="group cursor-pointer bg-white border border-slate-200 hover:border-blue-500 rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {doc.category}
                    </span>
                    <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                    {lang === 'zh' ? doc.titleZh : doc.titleEn}
                  </h4>

                  <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                    {lang === 'zh' ? doc.summaryZh : doc.summaryEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                  <span>{doc.issueDate}</span>
                  <span className="font-semibold text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    {lang === 'zh' ? '查阅' : 'View'} &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
