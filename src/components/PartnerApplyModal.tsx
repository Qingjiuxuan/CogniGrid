import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, ShieldAlert, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';

interface PartnerApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const PartnerApplyModal: React.FC<PartnerApplyModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    telegram: '',
    partnerType: 'supernode',
    region: 'Global / Multi-regional',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const isEn = lang === 'en';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#090e1c] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/60 flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white">
                {isEn ? 'Global Partner Recruitment Application' : '全球合伙人与创世超级节点入驻申请'}
              </h3>
              <p className="text-[11px] text-cyan-400 font-mono-tech">
                {isEn ? 'Phase 1 • August 2026 Active Window' : '第一阶段 • 2026年8月创世招募通道'}
              </p>
            </div>
          </div>
          <button
            onClick={() => { setIsSubmitted(false); onClose(); }}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                {isEn ? 'Application Received Successfully!' : '申请已成功提交！'}
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {isEn 
                  ? 'Thank you for applying to the CogniGrid Global Partner Network. Our Institutional Operations team and Cogni Quant Foundation representatives will review your dossier and reach out via Telegram / Email within 48 hours.'
                  : '感谢您申请加入 CogniGrid 全球合伙人生态。Cogni Quant 基金会机构运营团队将在48小时内通过 Telegram 或邮件与您取得联系并推进节点资格审核。'}
              </p>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-left text-xs space-y-1.5 text-slate-400 font-mono-tech max-w-sm mx-auto">
                <div><span className="text-cyan-400">Org:</span> {formData.organizationName || 'N/A'}</div>
                <div><span className="text-cyan-400">Contact:</span> {formData.contactPerson}</div>
                <div><span className="text-cyan-400">Type:</span> {formData.partnerType.toUpperCase()}</div>
                <div><span className="text-emerald-400">Status:</span> Under Review (Queue #CQF-2026)</div>
              </div>
              <button
                onClick={() => { setIsSubmitted(false); onClose(); }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors"
              >
                {isEn ? 'Done' : '完成'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 flex items-start gap-2">
                <Building2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  {isEn 
                    ? 'Qualified partners receive priority access to the 20,000,000 USDT Foundation ecosystem grant, AI Quant Alpha API, and SocialFi syndicate staking.'
                    : '入选超级节点与合伙人将优先获得 2000万 USDT 基金会生态扶持金、AI量化 Alpha 接口与 SocialFi 公会分润权益。'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    {isEn ? 'Organization / Team Name' : '机构 / 战队 / 社群名称'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isEn ? 'e.g. Apex Quant Labs / Alpha Node' : '例如：某量化基金 / 创世社区'}
                    value={formData.organizationName}
                    onChange={e => setFormData({ ...formData, organizationName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    {isEn ? 'Contact Person Name' : '联系人姓名 / 称呼'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isEn ? 'Your full name' : '联系人全名'}
                    value={formData.contactPerson}
                    onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    {isEn ? 'Email Address' : '电子邮箱'} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@cognigrid.org"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    {isEn ? 'Telegram Handle / Group' : 'Telegram 账号 / 社群'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@telegram_handle"
                    value={formData.telegram}
                    onChange={e => setFormData({ ...formData, telegram: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    {isEn ? 'Partner Category' : '合伙人类型'}
                  </label>
                  <select
                    value={formData.partnerType}
                    onChange={e => setFormData({ ...formData, partnerType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                  >
                    <option value="supernode">{isEn ? 'Regional Supernode (全球超级节点)' : '全球超级节点 (Supernode)'}</option>
                    <option value="quant">{isEn ? 'Quantitative Trading Firm (专业量化机构)' : '专业量化机构 (Quant Team)'}</option>
                    <option value="community">{isEn ? 'Web3 Community & Syndicate (社群联盟)' : 'Web3 社群联盟 (Community Syndicate)'}</option>
                    <option value="institutional">{isEn ? 'Institutional Capital / Broker (机构资本/经纪商)' : '机构资本 / 合规经纪商'}</option>
                    <option value="payment">{isEn ? 'Payment Rail / Merchant (支付清算/商户)' : '支付网关 / 商户合作'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    {isEn ? 'Target Region' : '目标区域'}
                  </label>
                  <input
                    type="text"
                    placeholder={isEn ? 'e.g. North America / APAC / Europe' : '例如：亚太 / 北美 / 欧洲 / 全球'}
                    value={formData.region}
                    onChange={e => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  {isEn ? 'Brief Proposal / Experience (Optional)' : '简要合作诉求与背景介绍 (选填)'}
                </label>
                <textarea
                  rows={3}
                  placeholder={isEn ? 'Tell us about your team background, quantitative volume, or community reach...' : '简述您的团队背景、日均量化交易量或社群规模...'}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{isEn ? 'Submit Partner Application' : '提交全球合伙人申请'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
