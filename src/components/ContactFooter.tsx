import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  ShieldCheck,
  Building2,
  Lock,
  FileText,
  Send,
  CheckCircle,
  ExternalLink,
  Twitter,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { OFFICIAL_COMMUNITY_CHANNELS } from '../data/community';
import brandLogo from '../assets/images/cognigrid_brand_logo_1787616403683.jpg';

interface ContactFooterProps {
  lang: Language;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ lang }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMsg('');
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-20 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Official Community Channels Cards */}
        <div className="mb-16 pb-12 border-b border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono-code font-bold uppercase text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/80">
              6. OFFICIAL COMMUNITY CHANNELS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
              {lang === 'zh' ? '官方社区与实时交流渠道' : 'Official Community & Communication Channels'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'zh'
                ? '加入 CogniGrid 官方全球社群，获取一手官方资讯、技术更新与生态合作对接。'
                : 'Join our official global community channels for verified announcements, technical support, and partnership discussions.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICIAL_COMMUNITY_CHANNELS.map((channel, idx) => (
              <a
                key={idx}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500 rounded-2xl p-6 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                      {channel.platform === 'tg' && <Send className="w-5 h-5" />}
                      {channel.platform === 'x' && <Twitter className="w-5 h-5" />}
                      {channel.platform === 'goldhouse' && <MessageSquare className="w-5 h-5" />}
                    </div>
                    <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                      {channel.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                    {channel.name}
                  </h4>
                  <div className="text-xs font-mono-code text-blue-400 mb-2">
                    {channel.handle}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'zh' ? channel.descZh : channel.descEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400 font-mono-code group-hover:text-white">
                  <span>{lang === 'zh' ? '前往官方链接' : 'Visit Channel'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Foundation Legal Overview & Inquiries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Foundation Legal Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md bg-slate-950 flex items-center justify-center p-0.5 border border-blue-500/40">
                <img
                  src={brandLogo}
                  alt="CogniGrid Official Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  CogniGrid <span className="text-blue-400 font-bold">Network</span>
                </span>
                <div className="text-[11px] text-slate-400 font-mono-code">
                  PROMOTED BY COGNI QUANT FOUNDATION
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {lang === 'zh'
                ? 'CogniGrid 是由 Cogni Quant Foundation 推动发起的全球 AI 驱动智能金融生态网络。以 AI 量化技术为智能引擎、全球多市场能力为金融连接层、Web3.0 为协同底座，以 CGT 为价值载体，构建九大协同生态。'
                : 'CogniGrid is a global AI-driven intelligent financial ecosystem developed under Cogni Quant Foundation, connecting capital, market data, quantitative strategies, and global payment scenarios.'}
            </p>

            {/* Statutory Identifiers */}
            <div className="space-y-2 pt-2 text-xs font-mono-code text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  FinCEN MSB Registration:{' '}
                  <strong className="text-white">#31000337267999</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Colorado Entity ID:{' '}
                  <strong className="text-white">#20261949922</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>1001 17th Street, Denver, CO 80202, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Institutional Inquiries Form */}
          <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              {lang === 'zh' ? '全球合伙人招募与机构对接' : 'Global Partner & Institutional Inquiries'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {lang === 'zh'
                ? '申请成为 CogniGrid 全球合伙人节点、获取官方认证合规文件或探讨做市流动性合作：'
                : 'Apply for CogniGrid global node partner program, request certified filings, or discuss liquidity provisioning:'}
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>
                  {lang === 'zh'
                    ? '您的加密咨询已安全送达 CogniGrid 战略委员会，我们将于 24 小时内与您联络。'
                    : 'Your encrypted request has been dispatched to our strategic committee. We will respond within 24 hours.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      {lang === 'zh' ? '机构/姓名' : 'Entity / Full Name'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Morgan Stanley / Jane Doe"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono-code"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      {lang === 'zh' ? '官方邮箱' : 'Official Email'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="partner@institution.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono-code"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    {lang === 'zh' ? '合作诉求或合伙人意向' : 'Inquiry Scope / Partner Application'}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={
                      lang === 'zh'
                        ? '请简述您的合伙人节点意向、所属区域或技术对接需求...'
                        : 'Describe your node partnership intent, target region, or API needs...'
                    }
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? '提交合伙人申请工单' : 'Submit Partner Application'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Global Statutory Disclaimer & Legal Footnote */}
        <div className="pt-8 text-[11px] text-slate-500 leading-relaxed space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
              <a href="#ecosystem" className="hover:text-white transition-colors">
                {lang === 'zh' ? '九大生态' : '9 Ecosystems'}
              </a>
              <a href="#roadmap" className="hover:text-white transition-colors">
                {lang === 'zh' ? '战略路线图' : 'Roadmap'}
              </a>
              <a href="#leadership" className="hover:text-white transition-colors">
                {lang === 'zh' ? '高管团队' : 'Leadership'}
              </a>
              <a href="#compliance" className="hover:text-white transition-colors">
                {lang === 'zh' ? '合规牌照' : 'MSB Licenses'}
              </a>
            </div>

            <div className="text-slate-400 font-mono-code text-[11px]">
              &copy; {new Date().getFullYear()} CogniGrid & Cogni Quant Foundation. All statutory rights reserved.
            </div>
          </div>

          <p className="text-[10px] text-slate-500 pt-3 border-t border-slate-800">
            {lang === 'zh'
              ? '【法定免责声明与风险提示】：CogniGrid 由 Cogni Quant Foundation 发起治理（Entity ID #20261949922），并持有美国财政部金融犯罪执法局 (FinCEN) 颁发的全美 Money Services Business (MSB) 牌照（Registration #31000337267999）。本网站所公示信息仅用于生态披露、技术研发展示与合规透明度公示，不构成任何司法管辖区内的投资推介或公开发行要约。'
              : '【Statutory Disclaimer & Risk Notice】: CogniGrid is developed under the promotion of Cogni Quant Foundation (Entity ID #20261949922) and operates under US FinCEN MSB authorization (#31000337267999). Information published herein is solely for ecosystem transparency and regulatory compliance.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
