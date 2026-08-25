import React, { useState } from 'react';
import { Bell, Calendar, ChevronRight, Pin, ShieldCheck, Sparkles, X } from 'lucide-react';
import { Language, PlatformAnnouncement } from '../types';
import { PLATFORM_ANNOUNCEMENTS } from '../data/community';

interface AnnouncementsSectionProps {
  lang: Language;
}

export const AnnouncementsSection: React.FC<AnnouncementsSectionProps> = ({ lang }) => {
  const [activeAnnouncement, setActiveAnnouncement] = useState<PlatformAnnouncement | null>(null);

  return (
    <section id="announcements" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-2 uppercase tracking-wider">
              <Bell className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'zh' ? '官方公示专栏' : 'Official Platform Notices'}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'zh' ? '平台最新公告与合规披露' : 'Latest Platform Announcements'}
            </h2>
          </div>

          <span className="text-xs font-mono-code text-slate-500">
            {lang === 'zh' ? '实时更新 • 官方防伪' : 'Real-time & Timestamped'}
          </span>
        </div>

        {/* Announcements List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORM_ANNOUNCEMENTS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveAnnouncement(item)}
              className="group cursor-pointer bg-slate-50 hover:bg-blue-50/30 border border-slate-200 hover:border-blue-500 rounded-2xl p-6 transition-all flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono-code font-bold px-2 py-0.5 rounded bg-white text-blue-700 border border-slate-200">
                    {lang === 'zh' ? item.categoryZh : item.categoryEn}
                  </span>
                  {item.isPinned && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                      <Pin className="w-2.5 h-2.5" />
                      PINNED
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  {lang === 'zh' ? item.titleZh : item.titleEn}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {lang === 'zh' ? item.summaryZh : item.summaryEn}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {item.date}
                </span>
                <span className="font-semibold text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  {lang === 'zh' ? '完整公告' : 'Read'} &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Announcement Full View Modal */}
      {activeAnnouncement && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveAnnouncement(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono-code font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded">
                {lang === 'zh' ? activeAnnouncement.categoryZh : activeAnnouncement.categoryEn}
              </span>
              <span className="text-xs font-mono-code text-slate-500">
                {activeAnnouncement.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              {lang === 'zh' ? activeAnnouncement.titleZh : activeAnnouncement.titleEn}
            </h3>

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6 space-y-3 font-normal">
              <p>{lang === 'zh' ? activeAnnouncement.contentZh : activeAnnouncement.contentEn}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-mono-code font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CogniQuant Foundation Official Certified</span>
              </div>

              <button
                onClick={() => setActiveAnnouncement(null)}
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
