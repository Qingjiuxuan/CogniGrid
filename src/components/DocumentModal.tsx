import React, { useState } from 'react';
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
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Copy,
  Check,
  Award,
  BookOpen,
  Maximize2,
  FileSpreadsheet,
  Layers,
  Sparkles,
  Landmark,
  BadgeCheck,
  Scroll,
} from 'lucide-react';
import { Language, DocumentInfo } from '../types';
import { OFFICIAL_DOCUMENTS } from '../data';

interface DocumentModalProps {
  doc: DocumentInfo;
  lang: Language;
  onClose: () => void;
  onSelectDoc?: (docId: string) => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  doc,
  lang,
  onClose,
  onSelectDoc,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [activeTab, setActiveTab] = useState<'official' | 'fields' | 'verify'>('official');
  const [copiedId, setCopiedId] = useState<boolean>(false);

  const totalPages = doc.pages?.length || doc.pageCount || 1;
  const currentPageData = doc.pages?.find((p) => p.pageNumber === currentPage) || doc.pages?.[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 15, 140));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 15, 80));
  const handleResetZoom = () => setZoomLevel(100);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'fincen':
        return { label: 'FEDERAL MSB LICENSE', bg: 'bg-blue-50 text-blue-700 border-blue-200' };
      case 'state':
        return { label: 'COLORADO STATE REGISTRATION', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'irs':
        return { label: 'IRS FEDERAL TAX ID', bg: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
      case 'authorization':
        return { label: 'OFFICIAL FOUNDATION APPOINTMENT', bg: 'bg-amber-50 text-amber-800 border-amber-200' };
      default:
        return { label: 'CORPORATE STATUTORY CHARTER', bg: 'bg-purple-50 text-purple-700 border-purple-200' };
    }
  };

  const badge = getCategoryBadge(doc.category);

  return (
    <div
      id="document-inspection-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[94vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex flex-col border-b border-slate-200 bg-slate-50">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
                {doc.category === 'fincen' && <ShieldCheck className="w-5 h-5" />}
                {doc.category === 'state' && <Building2 className="w-5 h-5" />}
                {doc.category === 'irs' && <Landmark className="w-5 h-5" />}
                {doc.category === 'authorization' && <Award className="w-5 h-5" />}
                {doc.category === 'corporate' && <Scroll className="w-5 h-5" />}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${badge.bg}`}>
                    {badge.label}
                  </span>
                  <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                    {doc.registrationNumber}
                  </span>
                  {totalPages > 1 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 font-mono">
                      {lang === 'zh' ? `共 ${totalPages} 页` : `${totalPages} Pages`}
                    </span>
                  )}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900 truncate">
                  {lang === 'zh' ? doc.titleZh : doc.titleEn}
                </h3>
              </div>
            </div>

            {/* Quick Action Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => handleCopy(doc.registrationNumber)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors shadow-2xs"
                title="Copy Registration Number"
              >
                {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId ? (lang === 'zh' ? '已复制' : 'Copied') : (lang === 'zh' ? '复制编号' : 'Copy ID')}</span>
              </button>

              <button
                onClick={() => window.print()}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-200/80 transition-colors"
                title={lang === 'zh' ? '打印 / 导出 PDF' : 'Print / Export PDF'}
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-950 hover:bg-slate-200/80 transition-colors ml-1"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sub Navigation Bar: View Tabs & Document Quick Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-2 bg-slate-100/80 border-t border-slate-200 text-xs">
            {/* View Mode Tabs */}
            <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200 shadow-2xs">
              <button
                onClick={() => setActiveTab('official')}
                className={`px-3 py-1.5 rounded-md font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'official'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '官方原件视图' : 'Official Document'}</span>
              </button>
              <button
                onClick={() => setActiveTab('fields')}
                className={`px-3 py-1.5 rounded-md font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'fields'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '法定登记字段' : 'Statutory Fields'}</span>
              </button>
              <button
                onClick={() => setActiveTab('verify')}
                className={`px-3 py-1.5 rounded-md font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'verify'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? '官方核查通道' : 'Verify Portal'}</span>
              </button>
            </div>

            {/* Document Switcher or Zoom Controls */}
            <div className="flex items-center gap-2">
              {activeTab === 'official' && (
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-slate-200 text-slate-600 shadow-2xs">
                  <button
                    onClick={handleZoomOut}
                    className="p-1 hover:text-slate-900 hover:bg-slate-100 rounded"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono font-semibold px-1 min-w-10 text-center">
                    {zoomLevel}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="p-1 hover:text-slate-900 hover:bg-slate-100 rounded"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  {zoomLevel !== 100 && (
                    <button
                      onClick={handleResetZoom}
                      className="text-[10px] text-blue-600 font-semibold hover:underline ml-1"
                    >
                      Reset
                    </button>
                  )}
                </div>
              )}

              {/* Multi-page controller */}
              {totalPages > 1 && (
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-slate-200 shadow-2xs">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-1 text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:hover:text-slate-600 rounded"
                    title="Previous Page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono font-bold text-slate-800 px-1">
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-1 text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:hover:text-slate-600 rounded"
                    title="Next Page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100/60 space-y-6">
          {/* TAB 1: High Fidelity Official Document Rendering */}
          {activeTab === 'official' && (
            <div className="flex flex-col items-center">
              {/* Multi-page Thumbnails / Page Pills for Fast Navigation */}
              {totalPages > 1 && (
                <div className="w-full max-w-3xl flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 scrollbar-thin">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pgNum) => {
                    const pageObj = doc.pages?.find((p) => p.pageNumber === pgNum);
                    return (
                      <button
                        key={pgNum}
                        onClick={() => setCurrentPage(pgNum)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                          currentPage === pgNum
                            ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-400/30'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <span>Page {pgNum}</span>
                        {pageObj?.pageTitleZh && (
                          <span className="text-[10px] opacity-80 max-w-[120px] truncate hidden md:inline">
                            {lang === 'zh' ? pageObj.pageTitleZh : pageObj.pageTitleEn}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Realistic Document Paper Sheet */}
              <div
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                className="w-full max-w-3xl bg-[#fffefb] border-2 border-slate-300 rounded-xl p-6 sm:p-10 shadow-lg relative overflow-hidden text-slate-900 transition-transform duration-150"
              >
                {/* Security Guilloche Pattern Border Decor */}
                <div className="absolute inset-2 border-2 border-slate-200 pointer-events-none rounded-lg" />
                <div className="absolute inset-3 border border-dashed border-slate-300 pointer-events-none rounded" />

                {/* State / Federal Official Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-8 border-slate-300/20 flex items-center justify-center pointer-events-none select-none opacity-40">
                  <div className="text-center font-serif text-slate-300 font-bold uppercase tracking-widest text-lg">
                    OFFICIAL RECORD
                    <div className="text-xs font-mono mt-1">{doc.registrationNumber}</div>
                  </div>
                </div>

                {/* Official Document Header */}
                <div className="relative z-10 text-center pb-6 border-b-2 border-slate-300">
                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 mb-1">
                    <Landmark className="w-4 h-4 text-blue-700" />
                    <span>{doc.issuingAuthorityEn}</span>
                  </div>
                  <h1 className="text-lg sm:text-2xl font-extrabold font-serif tracking-tight text-slate-950 mt-1">
                    {currentPageData?.pageTitleEn || doc.titleEn}
                  </h1>
                  {currentPageData?.pageTitleZh && (
                    <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                      {currentPageData.pageTitleZh}
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-3 text-xs text-slate-500 font-mono mt-2">
                    <span>Registry ID: <strong className="text-slate-900">{doc.registrationNumber}</strong></span>
                    <span>&bull;</span>
                    <span>Date: <strong className="text-slate-900">{doc.issueDate}</strong></span>
                    {totalPages > 1 && (
                      <>
                        <span>&bull;</span>
                        <span>Page {currentPage} of {totalPages}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Page Content Sections */}
                <div className="relative z-10 py-6 space-y-6 text-xs sm:text-sm leading-relaxed text-slate-800">
                  {currentPageData?.sections?.map((sec, idx) => (
                    <div key={idx} className="space-y-3">
                      {sec.headingEn && (
                        <div className="font-serif font-bold text-sm sm:text-base text-slate-950 uppercase tracking-wide border-b border-slate-200 pb-1 flex items-center justify-between">
                          <span>{sec.headingEn}</span>
                          {sec.headingZh && (
                            <span className="text-xs font-sans text-slate-500 font-normal">
                              {sec.headingZh}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Key-Value Grid inside page */}
                      {sec.isKeyGrid && sec.gridItems && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-50/90 p-4 rounded-lg border border-slate-200 text-xs font-mono">
                          {sec.gridItems.map((item, gIdx) => (
                            <div key={gIdx} className="space-y-0.5">
                              <span className="text-slate-500 block text-[11px]">
                                {lang === 'zh' ? item.labelZh : item.labelEn}
                              </span>
                              <span className="font-bold text-slate-900 block break-words">
                                {lang === 'zh' ? item.valueZh : item.valueEn}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Callout Box */}
                      {sec.isCallout && sec.contentEn && (
                        <div className="p-4 bg-amber-50/70 border-l-4 border-amber-600 rounded-r-lg text-slate-900 text-xs sm:text-sm leading-relaxed font-serif">
                          <p className="font-semibold">{sec.contentEn}</p>
                          {sec.contentZh && (
                            <p className="mt-2 text-slate-700 font-sans text-xs border-t border-amber-200/60 pt-2">
                              {sec.contentZh}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Standard Paragraph */}
                      {!sec.isCallout && !sec.isList && sec.contentEn && (
                        <div className="space-y-2">
                          <p className="font-serif leading-relaxed text-slate-900">
                            {sec.contentEn}
                          </p>
                          {sec.contentZh && (
                            <p className="text-slate-600 font-sans text-xs leading-relaxed">
                              {sec.contentZh}
                            </p>
                          )}
                        </div>
                      )}

                      {/* List Items */}
                      {sec.isList && sec.listItemsEn && (
                        <div className="space-y-2 pl-2">
                          <ul className="space-y-2 list-none">
                            {sec.listItemsEn.map((item, lIdx) => (
                              <li key={lIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                <div>
                                  <span className="font-semibold text-slate-900">{item}</span>
                                  {sec.listItemsZh?.[lIdx] && (
                                    <span className="block text-slate-600 text-xs mt-0.5">
                                      {sec.listItemsZh[lIdx]}
                                    </span>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Fallback if page has no sections */}
                  {(!currentPageData?.sections || currentPageData.sections.length === 0) && (
                    <div className="space-y-4">
                      <p className="font-serif">
                        <strong>ENTITY IN RECORD:</strong> COGNIQUANT FOUNDATION
                      </p>
                      <p className="font-serif">
                        <strong>PRINCIPAL REGISTERED ADDRESS:</strong> 1001 17th Street, Denver, CO 80202, United States of America
                      </p>
                      <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-lg font-mono text-xs text-slate-800">
                        {lang === 'zh' ? doc.summaryZh : doc.summaryEn}
                      </div>
                    </div>
                  )}
                </div>

                {/* Official Seal and Certification Stamp Footer */}
                <div className="relative z-10 pt-6 border-t-2 border-slate-300 mt-8 flex flex-wrap items-end justify-between gap-4 font-sans text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full border-2 border-slate-400 bg-slate-50 flex items-center justify-center text-slate-600 text-center p-1 font-serif shadow-xs">
                      <div className="text-[8px] font-bold uppercase leading-tight">
                        STATE SEAL<br />OF RECORD
                      </div>
                    </div>
                    <div>
                      <div className="font-mono font-bold text-slate-900">
                        OFFICIAL STATUTORY RECORD
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {currentPageData?.footerTextEn || doc.certificatePdfName}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-serif font-bold text-sm text-slate-900 border-b border-slate-400 pb-0.5">
                      CogniQuant Fiduciary Authority
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      Denver, Colorado &bull; Filed: {doc.issueDate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Detailed Statutory Fields */}
          {activeTab === 'fields' && (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Highlights 4-card banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-slate-500 block text-xs">{lang === 'zh' ? '颁发机构' : 'Authority'}</span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5 block">
                    {lang === 'zh' ? doc.issuingAuthorityZh : doc.issuingAuthorityEn}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-slate-500 block text-xs">{lang === 'zh' ? '官方核验编号' : 'Reg / File ID'}</span>
                  <span className="font-mono font-bold text-blue-600 text-xs sm:text-sm mt-0.5 block truncate">
                    {doc.registrationNumber}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-slate-500 block text-xs">{lang === 'zh' ? '法定存续状态' : 'Legal Status'}</span>
                  <span className="font-semibold text-emerald-700 text-xs sm:text-sm mt-0.5 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{lang === 'zh' ? doc.statusZh : doc.statusEn}</span>
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-slate-500 block text-xs">{lang === 'zh' ? '生效归档日期' : 'Effective Date'}</span>
                  <span className="font-mono font-bold text-slate-800 text-xs sm:text-sm mt-0.5 block">
                    {doc.issueDate}
                  </span>
                </div>
              </div>

              {/* Comprehensive Key-Value Table */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center justify-between">
                  <span>{lang === 'zh' ? '法定备案全量明细' : 'All Statutory Registered Attributes'}</span>
                  <span className="text-[11px] font-mono text-slate-500 font-normal">
                    {doc.details.length} Registered Attributes
                  </span>
                </div>
                <div className="divide-y divide-slate-100 text-xs">
                  {doc.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3 hover:bg-slate-50/60 transition-colors"
                    >
                      <span className="text-slate-500 font-medium sm:w-1/3">
                        {lang === 'zh' ? item.labelZh : item.labelEn}
                      </span>
                      <span className="font-mono font-bold text-slate-900 sm:w-2/3 sm:text-right mt-1 sm:mt-0 break-words">
                        {lang === 'zh' ? item.valueZh : item.valueEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary description card */}
              <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-5 text-xs text-blue-900 leading-relaxed">
                <div className="font-bold uppercase tracking-wider text-[11px] text-blue-700 mb-1 flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-blue-600" />
                  <span>{lang === 'zh' ? '官方合规权威声明' : 'Official Legal Declaration'}</span>
                </div>
                <p className="mt-1">{lang === 'zh' ? doc.summaryZh : doc.summaryEn}</p>
              </div>
            </div>
          )}

          {/* TAB 3: Official Verification Guide */}
          {activeTab === 'verify' && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {lang === 'zh' ? '政府官方数据库实时核验指南' : 'Live Government Verification Portal'}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {lang === 'zh'
                        ? '支持全球公众与金融机构直连美国政府官方系统核实真实性'
                        : 'Direct access to official United States governmental registries for real-time verification.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-3 font-mono">
                  <div className="flex justify-between items-center py-1 border-b border-slate-200">
                    <span className="text-slate-500">{lang === 'zh' ? '法定实体名称' : 'Entity Name'}</span>
                    <span className="font-bold text-slate-900">CogniQuant Foundation</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200">
                    <span className="text-slate-500">{lang === 'zh' ? '官方登记编号' : 'Registration ID'}</span>
                    <span className="font-bold text-blue-600 flex items-center gap-2">
                      <span>{doc.registrationNumber}</span>
                      <button
                        onClick={() => handleCopy(doc.registrationNumber)}
                        className="text-slate-400 hover:text-blue-600"
                        title="Copy"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">{lang === 'zh' ? '档案文件全名' : 'Official File Name'}</span>
                    <span className="font-semibold text-slate-800 truncate max-w-xs">{doc.certificatePdfName}</span>
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 leading-relaxed space-y-2">
                  <div className="font-bold flex items-center gap-1.5 text-amber-800">
                    <Sparkles className="w-4 h-4" />
                    <span>{lang === 'zh' ? '核验步骤' : 'Verification Steps'}</span>
                  </div>
                  <p>
                    {lang === 'zh'
                      ? (doc.searchInstructionZh || '点击下方按钮前往政府官方查询网站，在检索框中输入公司名称 "CogniQuant Foundation" 或登记编号，即可调阅第一手官方归档记录与存续状态。')
                      : (doc.searchInstructionEn || 'Click the button below to visit the official portal. Enter "CogniQuant Foundation" or the registration number to inspect live records.')}
                  </p>
                </div>

                {/* Official Link Button */}
                {doc.officialSearchUrl ? (
                  <a
                    href={doc.officialSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                  >
                    <span>{lang === 'zh' ? '立即前往美国政府官方门户核验' : 'Open Government Official Search Portal'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="text-center py-2 text-xs text-slate-500 font-mono">
                    {lang === 'zh' ? '官方内部权威授权公函' : 'Official Internal Statutory Authorization Letter'}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer: Document Quick Switcher Grid */}
        <div className="px-4 sm:px-6 py-3 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-2">
          {/* Document list carousel/chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-2xl py-1 scrollbar-thin">
            <span className="text-[11px] font-bold text-slate-500 shrink-0 mr-1 hidden md:inline">
              {lang === 'zh' ? '切换档案:' : 'All Docs:'}
            </span>
            {OFFICIAL_DOCUMENTS.map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  if (onSelectDoc) onSelectDoc(d.id);
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                  d.id === doc.id
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {lang === 'zh' ? d.titleZh.slice(0, 8) + '...' : d.titleEn.slice(0, 12) + '...'}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors shadow-2xs shrink-0"
          >
            {lang === 'zh' ? '关闭预览' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
