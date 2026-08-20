import React, { useState } from 'react';
import { Send, Twitter, MessageSquare, Copy, Check, ExternalLink, ShieldCheck, QrCode, Sparkles } from 'lucide-react';
import { Language, CommunityChannel } from '../types';
import { communityChannelsData, translations } from '../data/translations';

interface CommunitySectionProps {
  lang: Language;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ lang }) => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [qrModalChannel, setQrModalChannel] = useState<CommunityChannel | null>(null);

  const t = translations[lang].communitySection;
  const isEn = lang === 'en';

  const handleCopy = (url: string, index: number) => {
    navigator.clipboard.writeText(url);
    setCopiedIdx(index);
    setTimeout(() => setCopiedIdx(null), 2500);
  };

  const getChannelIcon = (iconName: string) => {
    switch (iconName) {
      case 'Send': return Send;
      case 'Twitter': return Twitter;
      case 'MessageSquare': return MessageSquare;
      default: return Send;
    }
  };

  return (
    <section id="community" className="py-20 bg-[#070b16] relative overflow-hidden border-t border-slate-800">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-cyan-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono-tech">
            <Send className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Channels Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityChannelsData.map((channel, idx) => {
            const Icon = getChannelIcon(channel.icon);
            const isCopied = copiedIdx === idx;

            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/50 bg-gradient-to-b from-slate-900/80 via-[#0a1329]/60 to-[#060a14] flex flex-col justify-between group transition-all duration-300 relative overflow-hidden shadow-xl"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div 
                      className="p-3.5 rounded-2xl border text-white shadow-lg transition-transform group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${channel.color}20`,
                        borderColor: `${channel.color}50` 
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: channel.color }} />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono-tech bg-slate-800/80 border border-slate-700 text-cyan-300">
                      {isEn ? channel.badge : channel.badgeZh}
                    </span>
                  </div>

                  {/* Title & Handle */}
                  <div className="space-y-1 mb-3">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {isEn ? channel.name : channel.nameZh}
                    </h3>
                    <div className="text-xs font-mono-tech text-cyan-400 font-medium">
                      {channel.handle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {isEn ? channel.description : channel.descriptionZh}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 space-y-2">
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20"
                  >
                    <span>{t.joinNow}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => handleCopy(channel.url, idx)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">{t.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>{t.copyLink}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Anti-Scam Verification Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-400">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>
            {isEn
              ? 'Official channels are verified by Cogni Quant Foundation. Administrators will NEVER DM you asking for private keys or funds.'
              : '以上为 Cogni Quant 基金会唯一官方认证渠道。请警惕任何私聊要求转账或索要私钥的虚假账号。'}
          </span>
        </div>

      </div>
    </section>
  );
};
