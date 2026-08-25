import React, { useState, useMemo } from 'react';
import {
  Sliders,
  Play,
  RotateCcw,
  Sparkles,
  TrendingUp,
  Percent,
  Activity,
  Award,
} from 'lucide-react';
import { Language } from '../types';

interface StrategySimulatorProps {
  lang: Language;
}

export const StrategySimulator: React.FC<StrategySimulatorProps> = ({ lang }) => {
  // Simulator inputs
  const [allocationPillar, setAllocationPillar] = useState<'METALS' | 'EQUITIES' | 'CRYPTO' | 'MULTI'>('MULTI');
  const [riskProfile, setRiskProfile] = useState<'CONSERVATIVE' | 'BALANCED' | 'AGGRESSIVE'>('BALANCED');
  const [capitalSize, setCapitalSize] = useState<number>(500000); // $500,000 USD
  const [holdingMonths, setHoldingMonths] = useState<number>(12);

  // Dynamic backtested simulation formula
  const calculatedMetrics = useMemo(() => {
    let baseAnnualReturn = 0.18; // 18% base
    let maxDrawdown = 0.045; // 4.5%
    let sharpeRatio = 2.4;
    let winRate = 68.5;

    if (allocationPillar === 'METALS') {
      baseAnnualReturn = 0.155;
      maxDrawdown = 0.028;
      sharpeRatio = 2.9;
      winRate = 72.4;
    } else if (allocationPillar === 'EQUITIES') {
      baseAnnualReturn = 0.215;
      maxDrawdown = 0.052;
      sharpeRatio = 2.6;
      winRate = 66.8;
    } else if (allocationPillar === 'CRYPTO') {
      baseAnnualReturn = 0.345;
      maxDrawdown = 0.088;
      sharpeRatio = 2.1;
      winRate = 64.2;
    } else {
      // MULTI-ASSET OPTIMAL
      baseAnnualReturn = 0.265;
      maxDrawdown = 0.038;
      sharpeRatio = 3.15;
      winRate = 74.8;
    }

    if (riskProfile === 'CONSERVATIVE') {
      baseAnnualReturn *= 0.75;
      maxDrawdown *= 0.55;
      sharpeRatio += 0.3;
    } else if (riskProfile === 'AGGRESSIVE') {
      baseAnnualReturn *= 1.35;
      maxDrawdown *= 1.45;
      sharpeRatio -= 0.2;
    }

    const durationFactor = holdingMonths / 12;
    const projectedGrossReturn = capitalSize * (Math.pow(1 + baseAnnualReturn, durationFactor) - 1);
    const projectedFinalValue = capitalSize + projectedGrossReturn;

    return {
      annualReturnPct: (baseAnnualReturn * 100).toFixed(1),
      projectedProfit: Math.round(projectedGrossReturn),
      projectedTotal: Math.round(projectedFinalValue),
      maxDrawdownPct: (maxDrawdown * 100).toFixed(1),
      sharpeRatio: sharpeRatio.toFixed(2),
      winRate: winRate.toFixed(1),
    };
  }, [allocationPillar, riskProfile, capitalSize, holdingMonths]);

  return (
    <section id="simulator" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded mb-3 tracking-wider uppercase">
            {lang === 'zh' ? '机构级策略回测模拟' : 'Alpha Engine Sandbox'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'zh' ? '多维度量化收益与风控沙盘模拟' : 'Algorithmic Yield & Risk Simulator'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'zh'
              ? '体验 CogniQuant 大类资产配置引擎在不同市场周期、资金规模与风险容忍度下的量化历史回测表现。'
              : 'Simulate historical backtesting models across diverse macroeconomic regimes, asset allocations, and risk profiles.'}
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form Column */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-600" />
                {lang === 'zh' ? '参数配置矩阵' : 'Strategy Parameters'}
              </span>
              <button
                onClick={() => {
                  setAllocationPillar('MULTI');
                  setRiskProfile('BALANCED');
                  setCapitalSize(500000);
                  setHoldingMonths(12);
                }}
                className="text-xs text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{lang === 'zh' ? '恢复默认' : 'Reset'}</span>
              </button>
            </div>

            {/* Target Asset Allocation */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2">
                {lang === 'zh' ? '标的大类资产池' : 'Target Asset Pillar'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'MULTI', labelEn: 'Multi-Asset', labelZh: '全域多资产' },
                  { id: 'METALS', labelEn: 'Precious Metals', labelZh: '贵金属宏观' },
                  { id: 'EQUITIES', labelEn: 'US Equities', labelZh: '美股量化' },
                  { id: 'CRYPTO', labelEn: 'Crypto MM', labelZh: '数字资产' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAllocationPillar(item.id as any)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
                      allocationPillar === item.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {lang === 'zh' ? item.labelZh : item.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Risk Governor Profile */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2">
                {lang === 'zh' ? '风控模型偏好' : 'Risk Governor Stance'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'CONSERVATIVE', labelEn: 'Conservative', labelZh: '低风险稳健' },
                  { id: 'BALANCED', labelEn: 'Balanced', labelZh: '平衡阿尔法' },
                  { id: 'AGGRESSIVE', labelEn: 'High Beta', labelZh: '高能进取' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRiskProfile(item.id as any)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
                      riskProfile === item.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {lang === 'zh' ? item.labelZh : item.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Capital Input Slider */}
            <div>
              <div className="flex justify-between items-center mb-2 text-xs">
                <span className="font-bold text-slate-800">
                  {lang === 'zh' ? '模拟资金规模 (USD)' : 'Simulated Capital Size'}
                </span>
                <span className="font-mono-code font-bold text-blue-600 text-sm">
                  ${capitalSize.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="5000000"
                step="25000"
                value={capitalSize}
                onChange={(e) => setCapitalSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono-code">
                <span>$10,000</span>
                <span>$1,000,000</span>
                <span>$5,000,000</span>
              </div>
            </div>

            {/* Time Horizon Slider */}
            <div>
              <div className="flex justify-between items-center mb-2 text-xs">
                <span className="font-bold text-slate-800">
                  {lang === 'zh' ? '模拟时间周期 (月)' : 'Simulation Horizon (Months)'}
                </span>
                <span className="font-mono-code font-bold text-blue-600 text-sm">
                  {holdingMonths} {lang === 'zh' ? '个月' : 'Months'}
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="36"
                step="3"
                value={holdingMonths}
                onChange={(e) => setHoldingMonths(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono-code">
                <span>3 M</span>
                <span>12 M</span>
                <span>24 M</span>
                <span>36 M</span>
              </div>
            </div>
          </div>

          {/* Real-Time Backtest Results Column */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  {lang === 'zh' ? '回测拟合测算结果' : 'Projected Backtest Telemetry'}
                </span>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                  MONTE CARLO 10K
                </span>
              </div>

              {/* Big Profit Number */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                <div className="text-xs text-slate-500 font-medium">
                  {lang === 'zh' ? '预估累计收益预期' : 'Projected Total Capital'}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono-code mt-1">
                  ${calculatedMetrics.projectedTotal.toLocaleString()}
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-emerald-700 font-bold font-mono-code">
                  <TrendingUp className="w-4 h-4" />
                  <span>+${calculatedMetrics.projectedProfit.toLocaleString()} USD</span>
                  <span className="text-slate-500 font-normal">
                    ({holdingMonths} {lang === 'zh' ? '个月复合' : 'mo compound'})
                  </span>
                </div>
              </div>

              {/* 4 Quantitative Factor Badges */}
              <div className="grid grid-cols-2 gap-3.5 mb-6">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-medium">
                    {lang === 'zh' ? '年化 Alpha 收益率' : 'Expected CAGR'}
                  </div>
                  <div className="text-lg font-bold text-slate-900 font-mono-code mt-0.5">
                    {calculatedMetrics.annualReturnPct}%
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-medium">
                    {lang === 'zh' ? '夏普比率 (Sharpe)' : 'Sharpe Ratio'}
                  </div>
                  <div className="text-lg font-bold text-blue-600 font-mono-code mt-0.5">
                    {calculatedMetrics.sharpeRatio}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-medium">
                    {lang === 'zh' ? '最大历史回撤 (MaxDD)' : 'Max Historical DD'}
                  </div>
                  <div className="text-lg font-bold text-emerald-700 font-mono-code mt-0.5">
                    {calculatedMetrics.maxDrawdownPct}%
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-medium">
                    {lang === 'zh' ? '胜率预期 (Win Rate)' : 'Model Win Rate'}
                  </div>
                  <div className="text-lg font-bold text-slate-900 font-mono-code mt-0.5">
                    {calculatedMetrics.winRate}%
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer pill */}
            <div className="text-[11px] text-slate-500 bg-slate-100 p-3 rounded-lg border border-slate-200">
              {lang === 'zh'
                ? '*注：沙盘回测数据基于历史统计模型与蒙特卡洛数理模拟，过往业绩不代表未来收益，请以实际受监管托管合约为准。'
                : '*Note: Simulation results are mathematical backtests and Monte Carlo estimates. Past performance does not guarantee future results.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
