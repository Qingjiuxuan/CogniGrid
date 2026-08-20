import React, { useState, useEffect } from 'react';
import { Cpu, Activity, TrendingUp, Zap, Shield, RefreshCw, BarChart2 } from 'lucide-react';
import { Language } from '../types';

interface AIEngineSimulatorProps {
  lang: Language;
}

export const AIEngineSimulator: React.FC<AIEngineSimulatorProps> = ({ lang }) => {
  const isEn = lang === 'en';

  const [tickerPrice, setTickerPrice] = useState(64250.8);
  const [goldPrice, setGoldPrice] = useState(2512.4);
  const [latency, setLatency] = useState(4.2);
  const [arbProfit, setArbProfit] = useState(14820);
  const [activeSignals, setActiveSignals] = useState([
    { pair: 'BTC / USDT', venue: 'Binance ↔ OKX', spread: '+0.38%', type: 'Neural Grid Arbitrage', status: 'EXECUTED', time: '1s ago' },
    { pair: 'XAU / USD', venue: 'LBMA Vault ↔ Uniswap v3', spread: '+0.52%', type: 'RWA Gold Synthetic', status: 'EXECUTED', time: '4s ago' },
    { pair: 'ETH / USDT', venue: 'Bybit ↔ Bitget', spread: '+0.29%', type: 'Flash Liquidity Routing', status: 'ROUTING', time: 'Just now' },
    { pair: 'CGT / USDT', venue: 'CogniGrid DApp Staking', spread: 'APY 24.8%', type: 'Protocol Fee Minting', status: 'ACTIVE', time: 'Live' }
  ]);

  // Live simulation tick
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerPrice(prev => +(prev + (Math.random() - 0.49) * 15).toFixed(2));
      setGoldPrice(prev => +(prev + (Math.random() - 0.48) * 0.8).toFixed(2));
      setLatency(prev => +(3.8 + Math.random() * 1.5).toFixed(1));
      setArbProfit(prev => +(prev + Math.floor(Math.random() * 12)).toFixed(0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#060913] relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono-tech mb-2">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{isEn ? 'Live Quant Engine Telemetry' : '实时 AI 量化引擎遥测'}</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              {isEn ? 'CogniQuant Multi-Market Execution Stream' : 'CogniQuant 跨市场实时多策略执行数据流'}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{isEn ? 'System Engine: Operational (40+ Venues)' : '系统引擎：全天候运行 (40+ 交易所)'}</span>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 font-mono-tech text-xs">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">{isEn ? 'Execution Latency' : '撮合执行响应延迟'}</span>
            <div className="text-xl font-bold text-cyan-400 mt-1 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>{latency} ms</span>
            </div>
            <span className="text-[10px] text-emerald-400 mt-0.5 block">Sub-millisecond peak</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">{isEn ? 'BTC Index Feed' : 'BTC 聚合指数行情'}</span>
            <div className="text-xl font-bold text-white mt-1">
              ${tickerPrice.toLocaleString()}
            </div>
            <span className="text-[10px] text-emerald-400 mt-0.5 block">+1.84% (24h)</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">{isEn ? 'Gold (XAU/USD) RWA' : '现货黄金 RWA 储备价格'}</span>
            <div className="text-xl font-bold text-amber-300 mt-1">
              ${goldPrice.toLocaleString()} / oz
            </div>
            <span className="text-[10px] text-amber-400 mt-0.5 block">100% LBMA Custody</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400">{isEn ? '24h Arbitrage Volume' : '24h 自动化套利撮合'}</span>
            <div className="text-xl font-bold text-emerald-400 mt-1">
              ${(arbProfit * 100).toLocaleString()}
            </div>
            <span className="text-[10px] text-cyan-400 mt-0.5 block">AI Neutral Hedge</span>
          </div>
        </div>

        {/* Live Order Book / Signals Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden text-xs">
          <div className="px-5 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-slate-400 font-mono-tech">
            <span>{isEn ? 'LIVE AI QUANTITATIVE SIGNALS' : '实时 AI 量化策略信号与执行记录'}</span>
            <span className="text-cyan-400 flex items-center gap-1">
              <RefreshCw className="w-3 h-3 animate-spin" />
              <span>Auto-refreshing</span>
            </span>
          </div>

          <div className="divide-y divide-slate-800/80 font-mono-tech">
            {activeSignals.map((sig, idx) => (
              <div key={idx} className="px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 hover:bg-slate-800/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="font-bold text-white text-sm">{sig.pair}</div>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                    {sig.venue}
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-slate-300">
                    <span className="text-slate-500 mr-2">{isEn ? 'Strategy:' : '策略:'}</span>
                    <span className="text-cyan-300 font-semibold">{sig.type}</span>
                  </div>

                  <div className="text-emerald-400 font-bold">
                    {sig.spread}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {sig.status}
                    </span>
                    <span className="text-[11px] text-slate-500">{sig.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
