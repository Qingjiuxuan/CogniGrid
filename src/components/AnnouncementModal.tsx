import React from 'react';
import { X, Calendar, User, FileCheck, Share2, ArrowRight } from 'lucide-react';
import { Announcement, Language } from '../types';

interface AnnouncementModalProps {
  announcement: Announcement | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onOpenDoc?: (docId: 'authorization-letter' | 'membership-certificate') => void;
}

export const AnnouncementModal: React.FC<AnnouncementModalProps> = ({
  announcement,
  isOpen,
  onClose,
  lang,
  onOpenDoc
}) => {
  if (!isOpen || !announcement) return null;

  const isEn = lang === 'en';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#090e1c] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/60 flex flex-col overflow-hidden max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono-tech">
              {isEn ? announcement.category.toUpperCase() : announcement.categoryZh}
            </span>
            {announcement.isPinned && (
              <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {isEn ? 'PINNED NOTICE' : '置顶重要通告'}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white leading-snug">
            {isEn ? announcement.title : announcement.titleZh}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-slate-800/80 pb-4 font-mono-tech">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{announcement.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <span>{announcement.author}</span>
            </div>
          </div>

          <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line bg-slate-900/40 p-4 rounded-xl border border-slate-800">
            {isEn ? announcement.content : announcement.contentZh}
          </div>

          {/* Reference document button if available */}
          {announcement.referenceDoc && onOpenDoc && (
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenDoc(announcement.referenceDoc as 'authorization-letter' | 'membership-certificate');
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 flex items-center justify-between text-xs sm:text-sm font-semibold transition-all group"
              >
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-cyan-400" />
                  <span>{isEn ? 'Inspect Associated Legal Authorization Document' : '查阅本公告关联之官方授权公函与证书'}</span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            {isEn ? 'Close' : '关闭'}
          </button>
        </div>
      </div>
    </div>
  );
};
