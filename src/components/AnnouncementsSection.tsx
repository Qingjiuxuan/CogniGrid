import React, { useState } from 'react';
import { Bell, Calendar, User, ArrowRight, FileCheck, ShieldAlert, Pin, Search } from 'lucide-react';
import { Language, Announcement } from '../types';
import { announcementsData, translations } from '../data/translations';

interface AnnouncementsSectionProps {
  lang: Language;
  onSelectAnnouncement: (announcement: Announcement) => void;
  onOpenDocModal: () => void;
}

export const AnnouncementsSection: React.FC<AnnouncementsSectionProps> = ({
  lang,
  onSelectAnnouncement,
  onOpenDocModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const t = translations[lang].announcementsSection;
  const isEn = lang === 'en';

  const filteredAnnouncements = announcementsData.filter(ann => {
    const matchesCategory = activeCategory === 'all' || ann.category === activeCategory;
    const titleToSearch = isEn ? ann.title.toLowerCase() : ann.titleZh.toLowerCase();
    const matchesSearch = titleToSearch.includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="announcements" className="py-20 bg-[#050811] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono-tech">
            <Bell className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-10 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {isEn ? 'All Notices' : '全部公告'}
            </button>
            <button
              onClick={() => setActiveCategory('foundation')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'foundation'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {isEn ? 'Foundation & Governance' : '基金会与治理'}
            </button>
            <button
              onClick={() => setActiveCategory('technical')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'technical'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {isEn ? 'Technical & AI Labs' : '技术与 AI 实验室'}
            </button>
            <button
              onClick={() => setActiveCategory('community')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'community'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {isEn ? 'Recruitment & Nodes' : '合伙人与节点'}
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={isEn ? 'Search announcements...' : '搜索公告标题...'}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono-tech"
            />
          </div>
        </div>

        {/* Announcements List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAnnouncements.map((ann) => (
            <div
              key={ann.id}
              onClick={() => onSelectAnnouncement(ann)}
              className={`glass-card p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                ann.isPinned
                  ? 'border-cyan-500/40 bg-gradient-to-br from-slate-900/90 via-[#0a1329]/80 to-[#060a14]'
                  : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech bg-cyan-950 text-cyan-300 border border-cyan-500/30 uppercase">
                      {isEn ? ann.category : ann.categoryZh}
                    </span>

                    {ann.isPinned && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                        <Pin className="w-2.5 h-2.5" />
                        <span>{t.pinned}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono-tech">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{ann.date}</span>
                  </div>
                </div>

                {/* Title & Summary */}
                <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {isEn ? ann.title : ann.titleZh}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed line-clamp-3">
                  {isEn ? ann.summary : ann.summaryZh}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-mono-tech flex items-center gap-1">
                  <User className="w-3 h-3 text-cyan-400" />
                  <span className="truncate max-w-[180px]">{ann.author}</span>
                </span>

                <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{t.readFull}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
