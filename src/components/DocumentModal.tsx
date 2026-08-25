import React from 'react';
import {
  X,
  ShieldCheck,
  Building2,
  ExternalLink,
  CheckCircle,
  FileText,
  Printer,
  Download,
  Search,
} from 'lucide-react';
import { Language, DocumentInfo } from '../types';

interface DocumentModalProps {
  doc: DocumentInfo;
  lang: Language;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  doc,
  lang,
  onClose,
}) => {
  return (
    <div
      id="document-inspection-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  {doc.category}
                </span>
                <span className="text-xs text-slate-500 font-mono-code">{doc.issueDate}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-1">
                {lang === 'zh' ? doc.titleZh : doc.titleEn}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              title="Print document transcript"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Certificate & Metadata */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Metadata Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block">{lang === 'zh' ? '颁发机构' : 'Issuing Authority'}</span>
              <span className="font-bold text-slate-900">
                {lang === 'zh' ? doc.issuingAuthorityZh : doc.issuingAuthorityEn}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">{lang === 'zh' ? '官方核验证编号' : 'Reg / File ID'}</span>
              <span className="font-mono-code font-bold text-blue-600">{doc.registrationNumber}</span>
            </div>
            <div>
              <span className="text-slate-500 block">{lang === 'zh' ? '官方归档文件' : 'Filing Transcript'}</span>
              <span className="font-semibold text-slate-800 line-clamp-1">{doc.certificatePdfName}</span>
            </div>
            <div>
              <span className="text-slate-500 block">{lang === 'zh' ? '法定存续状态' : 'Legal Status'}</span>
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{lang === 'zh' ? doc.statusZh : doc.statusEn}</span>
              </span>
            </div>
          </div>

          {/* Detailed key-value table */}
          {doc.details && doc.details.length > 0 && (
            <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
              <div className="bg-slate-100 px-4 py-2 font-bold text-slate-700 uppercase tracking-wider text-[10px]">
                {lang === 'zh' ? '官方备案详细条目' : 'Statutory Registry Fields'}
              </div>
              <div className="divide-y divide-slate-100">
                {doc.details.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2.5 bg-white">
                    <span className="text-slate-500 font-medium sm:w-1/3">
                      {lang === 'zh' ? item.labelZh : item.labelEn}
                    </span>
                    <span className="font-mono-code font-semibold text-slate-900 sm:w-2/3 sm:text-right mt-0.5 sm:mt-0">
                      {lang === 'zh' ? item.valueZh : item.valueEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* High-Fidelity Official Transcript Sheet */}
          <div className="bg-[#fffdf9] border-2 border-slate-300 rounded-xl p-6 sm:p-8 shadow-inner relative overflow-hidden font-serif text-slate-800">
            {/* Document Header Seal */}
            <div className="text-center pb-6 border-b border-slate-300 relative z-10">
              <div className="text-xs font-mono-code font-bold uppercase tracking-widest text-slate-600 mb-1">
                UNITED STATES OF AMERICA &bull; OFFICIAL STATUTORY RECORD
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif tracking-tight">
                {doc.titleEn}
              </h2>
              <div className="text-xs text-slate-600 font-mono-code mt-1">
                Registry Identification: {doc.registrationNumber}
              </div>
            </div>

            {/* Document Content Transcript */}
            <div className="py-6 space-y-4 text-xs sm:text-sm font-sans leading-relaxed text-slate-700 relative z-10">
              <p>
                <strong>ENTITY IN RECORD:</strong> COGNIQUANT FOUNDATION
              </p>
              <p>
                <strong>PRINCIPAL REGISTERED ADDRESS:</strong> 1312 17th St, Ste 2955, Denver, CO 80202, United States of America
              </p>
              <div className="p-4 bg-slate-100/70 border-l-4 border-blue-600 rounded-r-lg font-mono-code text-xs text-slate-800">
                {lang === 'zh' ? doc.summaryZh : doc.summaryEn}
              </div>
              <p className="text-xs text-slate-600 italic">
                {lang === 'zh'
                  ? '本备查档案由美国相关政府主管部门依法颁发并备案生效。公众及金融机构可凭上述档案编号前往官方政府门户核验真伪。'
                  : 'This official transcript is duly certified under relevant United States statutory authorities. Authenticity can be verified at any time on public government registers.'}
              </p>
            </div>

            {/* Official Signature and Stamp Box */}
            <div className="pt-6 border-t border-slate-300 flex flex-wrap items-end justify-between gap-4 relative z-10 font-sans text-xs">
              <div>
                <div className="font-mono-code font-bold text-slate-900">
                  SEAL OF STATUTORY AUTHENTICITY
                </div>
                <div className="text-[11px] text-slate-600">
                  Verification Code: #18857281-CQF-MSB
                </div>
              </div>

              <div className="text-right">
                <div className="font-serif-luxury font-bold text-base text-slate-900 border-b border-slate-400 pb-1">
                  CogniQuant Fiduciary Secretariat
                </div>
                <div className="text-[11px] text-slate-500 font-mono-code mt-0.5">
                  Denver, Colorado &bull; Recorded Date: {doc.issueDate}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
          {doc.officialSearchUrl ? (
            <a
              href={doc.officialSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>{lang === 'zh' ? '在政府官方数据库中核验' : 'Verify on Government Public Portal'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs text-slate-500 font-mono-code">Official Statutory Record</span>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            {lang === 'zh' ? '关闭预览' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
