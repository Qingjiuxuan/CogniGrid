import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import { Language, MarketAsset } from '../types';
import { INITIAL_MARKET_ASSETS, QUANT_SYSTEM_STATS } from '../data';

interface MarketTickerProps {
  lang: Language;
}

export const MarketTicker: React.FC<MarketTickerProps> = ({ lang }) => {
  const [assets, setAssets] = useState<MarketAsset[]>(INITIAL_MARKET_ASSETS);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setAssets((prev) =>
        prev.map((item) => {
          const delta = (Math.random() - 0.48) * 0.15;
          const isPos = item.change24h.startsWith('+');
          const currentVal = parseFloat(item.change24h.replace(/[^0-9.-]/g, ''));
          const nextVal = (currentVal + delta).toFixed(2);
          const formattedChange = (nextVal.startsWith('-') ? '' : '+') + nextVal + '%';
          return {
            ...item,
            change24h: formattedChange,
            isPositive: !formattedChange.startsWith('-'),
          };
        })
      );
      setLastUpdated(new Date());
      setTimeout(() => setIsUpdating(false), 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="market-ticker-bar" className="w-full bg-slate-100/90 border-y border-slate-200/80 py-3 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Header pill */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 shrink-0">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>
              {lang === 'zh' ? '全域资产量化监控矩阵' : 'Quant Asset Surveillance Feed'}
            </span>
            <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono-code ml-2 bg-white px-2 py-0.5 rounded border border-slate-200">
              <RefreshCw className={`w-2.5 h-2.5 ${isUpdating ? 'animate-spin text-blue-600' : 'text-slate-400'}`} />
              <span>{lastUpdated.toLocaleTimeString()} UTC</span>
            </div>
          </div>

          {/* Asset Ticker Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 w-full md:w-auto">
            {assets.map((asset) => {
              const isPositive = asset.isPositive;
              return (
                <div
                  key={asset.symbol}
                  className="flex flex-col bg-white border border-slate-200 px-2.5 py-1.5 rounded-lg text-xs shadow-xs hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-800 font-mono-code">{asset.symbol}</span>
                    <span className="text-[9px] uppercase font-semibold px-1 py-0.2 rounded text-slate-600 bg-slate-100">
                      {asset.category}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="font-semibold text-slate-900 font-mono-code text-[11px]">
                      {asset.price}
                    </span>
                    <span
                      className={`flex items-center text-[10px] font-bold font-mono-code ${
                        isPositive ? 'text-emerald-700' : 'text-rose-700'
                      }`}
                    >
                      {isPositive ? (
                        <TrendingUp className="w-2.5 h-2.5 mr-0.5 inline text-emerald-600" />
                      ) : (
                        <TrendingDown className="w-2.5 h-2.5 mr-0.5 inline text-rose-600" />
                      )}
                      {asset.change24h}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
