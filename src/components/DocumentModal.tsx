import React, { useState } from 'react';
import { X, ShieldCheck, Download, ZoomIn, ZoomOut, RotateCcw, CheckCircle2, FileText, Award, Globe, ExternalLink, Printer } from 'lucide-react';
import { Language } from '../types';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialDoc?: 'authorization-letter' | 'membership-certificate';
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialDoc = 'authorization-letter'
}) => {
  const [activeDoc, setActiveDoc] = useState<'authorization-letter' | 'membership-certificate'>(initialDoc);
  const [authPage, setAuthPage] = useState<1 | 2>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 15, 150));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 15, 75));
  const handleResetZoom = () => setZoomLevel(100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#090e1c] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 flex flex-col max-h-[94vh] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold font-display text-white">
                  {lang === 'en' ? 'Official Legal Document & Mandate Verification' : '官方公函任命书与法定所有权证书验证'}
                </h3>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {lang === 'en' ? 'Legally Authenticated' : '已官方认证'}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono-tech">
                CogniQuant Foundation LLC • State of Colorado, USA • Reg No. CQF-2026
              </p>
            </div>
          </div>

          {/* Controls & Close */}
          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button 
                onClick={handleZoomOut} 
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono-tech text-cyan-300">{zoomLevel}%</span>
              <button 
                onClick={handleZoomIn} 
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button 
                onClick={handleResetZoom} 
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors ml-1"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Selector Tabs */}
        <div className="flex border-b border-slate-800 bg-[#060a14] px-4 sm:px-6 pt-3 gap-2 overflow-x-auto">
          <button
            onClick={() => { setActiveDoc('authorization-letter'); setAuthPage(1); }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-medium border-t border-x transition-all shrink-0 ${
              activeDoc === 'authorization-letter'
                ? 'bg-[#0b132b] text-cyan-300 border-cyan-500/40 border-b-transparent shadow-lg'
                : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/50'
            }`}
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>{lang === 'en' ? 'Official Authorization Letter (2 Pages)' : '官方授权任命函 (共2页)'}</span>
            <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono-tech">CEO Mandate</span>
          </button>

          <button
            onClick={() => setActiveDoc('membership-certificate')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-medium border-t border-x transition-all shrink-0 ${
              activeDoc === 'membership-certificate'
                ? 'bg-[#0b132b] text-amber-300 border-amber-500/40 border-b-transparent shadow-lg'
                : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-900/50'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>{lang === 'en' ? 'Membership Certificate 001 (100% Interest)' : '成员所有权证书 001 (100% 权益)'}</span>
            <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono-tech">Colorado</span>
          </button>
        </div>

        {/* Document Content Canvas Area */}
        <div className="flex-1 p-3 sm:p-6 overflow-y-auto bg-[#070b16] flex flex-col items-center">
          <div 
            className="w-full max-w-3xl transition-transform duration-200 origin-top"
            style={{ transform: `scale(${zoomLevel / 100})` }}
          >
            {/* DOCUMENT 1: OFFICIAL AUTHORIZATION LETTER */}
            {activeDoc === 'authorization-letter' && (
              <div className="bg-[#fcfdfe] text-slate-900 rounded-xl shadow-2xl p-6 sm:p-10 border border-slate-300 font-sans relative overflow-hidden select-text min-h-[850px] flex flex-col justify-between">
                
                {/* Official Letterhead Header */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b-2 border-slate-800 mb-6">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src="/logo.jpg" 
                        alt="CogniGrid Logo" 
                        className="w-7 h-7 rounded-full object-contain border border-cyan-600/40 shadow-sm"
                      />
                      <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-800 font-display">
                        COGNI QUANT FOUNDATION
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200 font-mono-tech">
                        OFFICIAL AUTHORIZATION
                      </span>
                    </div>
                  </div>

                  {/* Document Title */}
                  <div className="text-center my-4">
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950 uppercase font-display">
                      OFFICIAL AUTHORIZATION LETTER
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 font-mono-tech">Document No: CQF-AUTH-2026-001</p>
                  </div>

                  {/* Summary Table */}
                  <div className="my-5 border border-slate-300 rounded-lg overflow-hidden text-xs sm:text-sm">
                    <div className="grid grid-cols-3 border-b border-slate-300 bg-slate-100">
                      <div className="p-2.5 font-bold text-slate-700 border-r border-slate-300">Authorizer</div>
                      <div className="p-2.5 col-span-2 text-slate-900 font-semibold">Cogni Quant Foundation</div>
                    </div>
                    <div className="grid grid-cols-3 border-b border-slate-300">
                      <div className="p-2.5 font-bold text-slate-700 border-r border-slate-300">Authorized Person</div>
                      <div className="p-2.5 col-span-2 text-slate-900 font-semibold text-cyan-800">Mr. Ethan (Global CEO)</div>
                    </div>
                    <div className="grid grid-cols-3 bg-slate-50">
                      <div className="p-2.5 font-bold text-slate-700 border-r border-slate-300">Project Name</div>
                      <div className="p-2.5 col-span-2 text-slate-900 font-bold">CogniGrid</div>
                    </div>
                  </div>

                  {/* PAGE 1 CONTENT */}
                  {authPage === 1 && (
                    <div className="space-y-6 text-slate-800 text-xs sm:text-sm leading-relaxed">
                      <div>
                        <h4 className="font-bold text-slate-950 uppercase tracking-wide mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                          1. AUTHORIZATION STATEMENT
                        </h4>
                        <p className="text-slate-700 text-justify">
                          Cogni Quant Foundation is the exclusive top-level incubation, supervision and endorsement institution of the CogniGrid global intelligent computing ecosystem.
                        </p>
                        <p className="text-slate-700 text-justify mt-2">
                          To promote the global strategic layout, ecological construction and full commercial implementation of CogniGrid, the Foundation officially appoints <strong className="text-slate-950 font-bold">Mr. Ethan as the Founder & Global Chief Executive Officer (CEO) of CogniGrid</strong>. He is confirmed as the highest decision-maker and overall person in charge of the entire project.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-950 uppercase tracking-wide mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                          2. SCOPE OF FULL AUTHORIZATION
                        </h4>
                        <p className="text-slate-700 mb-2">
                          The Foundation grants Mr. Ethan permanent, exclusive, highest global authority, including but not limited to:
                        </p>
                        <ul className="space-y-2 pl-4 text-slate-700 border-l-2 border-cyan-500">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-600 font-bold">•</span>
                            <span><strong>Formulate</strong> the overall project strategy, development roadmap, global layout and business model iteration.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-600 font-bold">•</span>
                            <span><strong>Fully manage</strong> technical research and development, product iteration, smart contract audit, team construction and personnel management.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-600 font-bold">•</span>
                            <span><strong>Take full charge</strong> of global market expansion, super node construction, international business cooperation and global brand promotion.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-600 font-bold">•</span>
                            <span><strong>Lead</strong> global community development, ecological incentive system formulation and decentralized governance implementation.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-600 font-bold">•</span>
                            <span><strong>Act as the sole official spokesperson</strong> for all global announcements, external negotiations, strategic partnerships and media releases.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-600 font-bold">•</span>
                            <span><strong>Possess the final review and highest decision-making authority</strong> for all affairs of the CogniGrid ecosystem.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* PAGE 2 CONTENT */}
                  {authPage === 2 && (
                    <div className="space-y-6 text-slate-800 text-xs sm:text-sm leading-relaxed">
                      <div>
                        <h4 className="font-bold text-slate-950 uppercase tracking-wide mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                          3. AUTHORIZATION NATURE
                        </h4>
                        <div className="space-y-3 pl-3">
                          <div className="p-3 bg-slate-50 rounded border border-slate-200">
                            <strong className="text-slate-950 block mb-1">Sole Highest Authorization</strong>
                            <p className="text-slate-700">Mr. Ethan is the only officially recognized global highest leader (CEO) of CogniGrid authorized by the Foundation.</p>
                          </div>
                          <div className="p-3 bg-slate-50 rounded border border-slate-200">
                            <strong className="text-slate-950 block mb-1">Permanent Exclusive Authorization</strong>
                            <p className="text-slate-700">This authorization is long-term effective and cannot be revoked or modified without official public announcement by the Foundation.</p>
                          </div>
                          <div className="p-3 bg-slate-50 rounded border border-slate-200">
                            <strong className="text-slate-950 block mb-1">Full Official Endorsement</strong>
                            <p className="text-slate-700">All compliant decisions and operations made by Mr. Ethan are fully recognized, supervised and officially endorsed by Cogni Quant Foundation.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-950 uppercase tracking-wide mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                          4. OFFICIAL DECLARATION
                        </h4>
                        <p className="text-slate-700 text-justify">
                          This document is the official authoritative public file of CogniGrid. It is valid for official websites, global communities, business cooperation, media promotion, institutional docking and all official ecological scenarios.
                        </p>
                      </div>

                      {/* Signatures & Seal Area */}
                      <div className="mt-8 pt-6 border-t border-slate-300 grid grid-cols-2 gap-4 items-center">
                        <div className="text-xs space-y-1">
                          <div className="text-slate-500">Authorized Institution:</div>
                          <div className="font-bold text-slate-950 text-sm">Cogni Quant Foundation</div>
                          <div className="text-slate-500 mt-2">Effective Date:</div>
                          <div className="font-mono-tech font-bold text-cyan-800">August 14, 2026</div>
                        </div>

                        {/* Official Colorado Seal Graphics */}
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-28 h-28 rounded-full border-4 border-double border-cyan-800 p-1 flex items-center justify-center text-center relative bg-cyan-50/40">
                            <div className="w-full h-full rounded-full border border-dashed border-cyan-700 flex flex-col items-center justify-center p-1">
                              <span className="text-[7px] uppercase font-bold tracking-widest text-cyan-900 font-mono-tech">COGNI QUANT FOUNDATION</span>
                              <span className="text-[9px] font-black text-cyan-950 my-0.5 tracking-wider">COMMON SEAL</span>
                              <span className="text-[7px] uppercase font-bold text-cyan-900 font-mono-tech">COLORADO</span>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-500 mt-1 font-mono-tech font-medium">Official Seal (Colorado Registered)</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Document Footer & Pagination */}
                <div className="mt-10 pt-4 border-t border-slate-300 flex items-center justify-between text-[11px] text-slate-500 font-mono-tech">
                  <span>CogniGrid - Official Authorization Letter</span>
                  
                  {/* Page Navigator */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAuthPage(1)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold ${
                        authPage === 1 ? 'bg-cyan-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                      }`}
                    >
                      Page 1
                    </button>
                    <button
                      onClick={() => setAuthPage(2)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold ${
                        authPage === 2 ? 'bg-cyan-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                      }`}
                    >
                      Page 2
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* DOCUMENT 2: MEMBERSHIP CERTIFICATE (COLORADO 100%) */}
            {activeDoc === 'membership-certificate' && (
              <div className="bg-[#f7faff] text-slate-900 rounded-xl shadow-2xl p-6 sm:p-10 border-8 border-double border-blue-900 font-serif relative overflow-hidden select-text min-h-[750px] flex flex-col justify-between">
                
                {/* Guilloche Ornamental Border Simulation */}
                <div className="absolute inset-2 border-2 border-blue-600/40 pointer-events-none rounded" />
                <div className="absolute inset-3 border border-blue-400/30 pointer-events-none rounded" />

                {/* Certificate Content */}
                <div className="relative z-10">
                  {/* Top Bar: Number and Percentage */}
                  <div className="flex items-center justify-between px-2 pt-1 font-mono text-sm font-bold text-blue-950">
                    <div className="px-3 py-1 bg-blue-100 rounded border border-blue-300">
                      NUMBER: <span className="text-blue-700 font-extrabold">001</span>
                    </div>
                    {/* Eagle Emblem Illustration */}
                    <div className="flex flex-col items-center">
                      <div className="text-2xl text-blue-900 tracking-widest font-serif font-black">★ ★ ★</div>
                    </div>
                    <div className="px-3 py-1 bg-blue-100 rounded border border-blue-300">
                      INTEREST: <span className="text-blue-700 font-extrabold">100%</span>
                    </div>
                  </div>

                  {/* Header Title */}
                  <div className="text-center my-6">
                    <h3 className="text-xs tracking-[0.25em] font-sans font-bold uppercase text-blue-900 mb-1">
                      MEMBERSHIP CERTIFICATE
                    </h3>
                    <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-blue-950 tracking-tight my-2">
                      CogniQuant Foundation
                    </h1>
                    <p className="text-[11px] sm:text-xs tracking-widest font-sans font-semibold text-blue-800 uppercase">
                      ORGANIZED UNDER THE LAWS OF THE STATE OF COLORADO
                    </p>
                  </div>

                  {/* Body Certification Statement */}
                  <div className="my-8 px-4 sm:px-8 text-center text-slate-800 text-xs sm:text-sm leading-relaxed space-y-4 font-serif">
                    <p className="text-base sm:text-lg italic text-slate-900">
                      This is to Certify that <strong className="text-blue-950 font-bold border-b-2 border-blue-900 px-3 pb-0.5 not-italic font-sans text-lg sm:text-xl">Mr. Ethan</strong> is the owner of
                    </p>
                    <p className="text-base sm:text-lg font-bold text-blue-900">
                      **100%** Percentage of Interests
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-normal text-justify max-w-xl mx-auto font-serif">
                      of the above Limited Liability Company transferable only on the books of the Limited Liability Company by the holder hereof in person or by duly authorized attorney upon surrender of this Certificate properly endorsed, and is entitled to the full benefits and privileges of such membership subject to the duties and obligations, as more fully set forth in the Company&apos;s Certificate of Formation or Operating Agreement for this Limited Liability Company.
                    </p>
                  </div>

                  {/* Signatures & Seal */}
                  <div className="mt-8 pt-6 border-t border-blue-200 grid grid-cols-2 gap-6 items-end px-4 sm:px-8">
                    <div className="text-xs text-slate-700 italic space-y-2">
                      <p className="leading-snug">
                        In Witness Whereof, the said Limited Liability Company has caused this Certificate to be signed by its duly authorized officers and Company Seal to be hereunto affixed this 14th day of August, A.D. 2026.
                      </p>
                      <div className="pt-4 font-sans text-slate-900 font-bold not-italic">
                        Executive Director & Authorized Secretary
                      </div>
                    </div>

                    {/* Official Colorado Common Seal Graphic */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-4 border-double border-blue-900 p-1 flex items-center justify-center text-center bg-blue-50/50 shadow-inner">
                        <div className="w-full h-full rounded-full border border-dashed border-blue-800 flex flex-col items-center justify-center p-1">
                          <span className="text-[7.5px] uppercase font-bold tracking-wider text-blue-900 font-mono">COGNI QUANT FOUNDATION</span>
                          <span className="text-[10px] font-black text-blue-950 my-0.5 tracking-widest font-serif">COMMON SEAL</span>
                          <span className="text-[7.5px] uppercase font-bold text-blue-900 font-mono">COLORADO</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-blue-900 font-sans font-bold mt-1 uppercase">State of Colorado Seal</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-2 text-center text-[10px] font-sans text-slate-500 font-mono">
                  Certificate 001 • Recorded in State Registry of Colorado LLC • Legal Entity Verified
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="px-4 sm:px-6 py-3 border-t border-slate-800 bg-[#060a14] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              {lang === 'en' 
                ? 'Official Public Record — Validated by Cogni Quant Foundation Board'
                : '官方公开法定公函 — 由 Cogni Quant 基金会理事会核准并备案'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Print / Export' : '打印 / 导出'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors shadow-lg shadow-cyan-500/20"
            >
              {lang === 'en' ? 'Close Viewer' : '关闭窗口'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
