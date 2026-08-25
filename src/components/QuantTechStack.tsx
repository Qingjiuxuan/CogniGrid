import React, { useState } from 'react';
import {
  Cpu,
  Database,
  Network,
  Zap,
  Terminal,
  Activity,
  Layers,
  Copy,
  Check,
} from 'lucide-react';
import { Language } from '../types';

interface QuantTechStackProps {
  lang: Language;
}

export const QuantTechStack: React.FC<QuantTechStackProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);

  const samplePythonCode = `# CogniQuant Deep Reinforcement Learning Alpha Model
import torch
import torch.nn as nn
from cogniquant.engine import FPGAOrderGateway, RiskGovernor

class MacroAlphaTransformer(nn.Module):
    def __init__(self, d_model=512, nhead=8, num_layers=6):
        super().__init__()
        self.encoder = nn.TransformerEncoder(
            nn.TransformerEncoderLayer(d_model=d_model, nhead=nhead, dropout=0.05),
            num_layers=num_layers
        )
        self.signal_head = nn.Linear(d_model, 3) # [SHORT, NEUTRAL, LONG]
        self.risk_guard = RiskGovernor(max_var_99=0.015, max_drawdown_limit=0.035)

    def forward(self, orderbook_l3_tensor, macro_vector):
        x = torch.cat([orderbook_l3_tensor, macro_vector], dim=-1)
        latent = self.encoder(x)
        alpha_weights = self.signal_head(latent[:, -1, :])
        return self.risk_guard.sanitize(alpha_weights)

# Initializing Sub-microsecond FPGA Gateway Connection
gateway = FPGAOrderGateway(host="us-east4.cogniquant.org", protocol="FIX-5.0SP2")
print("[SYSTEM] Kernel Bypass Interface: Active (< 850ns p99)")`;

  const copyCode = () => {
    navigator.clipboard.writeText(samplePythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stackLayers = [
    {
      icon: <Network className="w-5 h-5 text-blue-600" />,
      titleEn: 'Data Ingestion & L3 Microstructure',
      titleZh: '全域行情接入与 L3 订单流微观结构',
      descEn:
        'Direct fiber cross-connects to CME, ICE, NASDAQ, LMAX, and leading global crypto matching engines with Nanosecond timestamping.',
      descZh:
        '通过专用光纤直连芝加哥商品交易所 (CME)、洲际交易所 (ICE)、纳斯达克及主要加密流动性网络，纳秒级硬件时间戳校准。',
      techs: ['Solarflare EF_VI', 'DPDK', 'PTP IEEE 1588', 'Kafka Enterprise'],
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      titleEn: 'Deep Learning & Transformer Models',
      titleZh: '深度学习与时序 Transformer 大模型',
      descEn:
        'Custom spatio-temporal neural networks predicting orderbook toxicity, liquidity voids, and macro-trend inflection points.',
      descZh:
        '自研多尺度时空图神经网络，深度挖掘高频订单薄毒性流、宏观资金情绪共振与流动性空洞。',
      techs: ['PyTorch 2.4', 'CUDA C++', 'TensorRT-LLM', 'JAX Quant Engine'],
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      titleEn: 'Sub-Microsecond Execution Core',
      titleZh: '亚微秒级低延迟交易执行内核',
      descEn:
        'Ultra-low latency C++20/Rust execution engine utilizing kernel bypass networking, FPGA hardware decoding, and zero-allocation pipelines.',
      descZh:
        '基于 C++20 与 Rust 开发的极致无锁执行引擎，结合 FPGA 硬件协议解包与无系统调用的零拷贝内存通道。',
      techs: ['Rust 1.80', 'C++20 (Lock-free)', 'Xilinx Alveo U50 FPGA', 'FIX 5.0'],
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      titleEn: 'Multi-Asset Real-time Risk Governor',
      titleZh: '多资产实时风险控制与压力熔断体系',
      descEn:
        'Continuous VaR 99.9% calculation, multi-dimensional exposure limits, algorithmic circuit breakers, and FinCEN transaction compliance rules.',
      descZh:
        '毫秒级 99.9% VaR 在险价值实时监控、跨资产敞口动态对冲、算法级闪崩熔断与 FinCEN 交易合规过滤引擎。',
      techs: ['Real-time VaR', 'Monte Carlo SIMD', 'Zero-Knowledge Audits', 'FinCEN Engine'],
    },
  ];

  return (
    <section id="technology" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded mb-3 tracking-wider uppercase">
            {lang === 'zh' ? '硬核量化交易与技术栈' : 'Institutional AI & Execution Stack'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'zh' ? '全链路亚微秒级算力与深度强化学习' : 'Full-Stack High-Frequency AI Architecture'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'zh'
              ? '构建在现代化分布式计算、异构硬件加速（FPGA/GPU）与前沿深度时序网络之上的新一代量化底座。'
              : 'Architected upon modern distributed computing, FPGA/GPU acceleration, and spatio-temporal deep reinforcement learning algorithms.'}
          </p>
        </div>

        {/* 2-Column: Tech Architecture Pipeline + Live Code Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Tech Layers */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {stackLayers.map((layer, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-xs hover:border-blue-400 transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                    {layer.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900">
                        {lang === 'zh' ? layer.titleZh : layer.titleEn}
                      </h4>
                      <span className="text-[10px] font-mono-code font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                        L{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {lang === 'zh' ? layer.descZh : layer.descEn}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {layer.techs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono-code font-semibold px-2 py-0.5 bg-white text-slate-700 rounded border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Code Terminal */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-5 sm:p-6 text-slate-100 flex flex-col justify-between shadow-lg font-mono-code">
            <div>
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono-code ml-2">
                    alpha_transformer_kernel.py
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                    PYTORCH 2.4.0 (CUDA 12.4)
                  </span>
                  <button
                    onClick={copyCode}
                    className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy code snippet"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Code display */}
              <pre className="text-xs text-slate-300 leading-relaxed overflow-x-auto p-2 bg-slate-950/60 rounded-lg border border-slate-800">
                <code>{samplePythonCode}</code>
              </pre>
            </div>

            {/* Terminal status bar */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-slate-300">Live Execution Cluster: ONLINE</span>
              </div>
              <span>Latency: 842ns (P99)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
