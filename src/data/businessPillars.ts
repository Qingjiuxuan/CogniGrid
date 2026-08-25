import { BusinessPillar } from '../types';

export const BUSINESS_PILLARS: BusinessPillar[] = [
  {
    id: 'precious-metals',
    code: '01 / PRECIOUS METALS',
    titleEn: 'Precious Metals Quantitative Trading',
    titleZh: '贵金属宏观量化交易与对冲',
    taglineEn: 'Global gold & silver macro cycle modeling and systematic quantitative alpha.',
    taglineZh: '覆盖国际现货与期货黄金 (XAU)、白银 (XAG) 的宏观多周期量化对冲与趋势捕捉。',
    descriptionEn: 'Covering international precious metals markets such as gold and silver, utilizing a comprehensive institutional framework for macroeconomic analysis, real-time geopolitical risk pricing, and automated quantitative strategy execution.',
    descriptionZh: '深入国际贵金属市场（黄金、白银等），依托宏观经济周期多因子指标、全球流动性动态、地缘避险定价模型及套利量化策略，实现大类资产的避险增值与全天候对冲收益。',
    iconName: 'Coins',
    accentColor: 'from-amber-500/20 via-amber-500/5 to-transparent border-amber-500/30 text-amber-400',
    metrics: [
      { labelEn: 'Average Spread Capture', labelZh: '高频套利滑点控制', value: '< 0.12 bps' },
      { labelEn: 'Macro Factor Models', labelZh: '宏观因子跟踪数量', value: '140+ Multi-factors' },
      { labelEn: 'Historical Alpha Ratio', labelZh: '超额收益夏普比率', value: '2.84 SR' }
    ],
    keyCapabilitiesEn: [
      'Real-time physical vs. paper gold spread arbitrage',
      'Fed rate cycle & US Dollar real yield regression modeling',
      'High-frequency microstructure liquidity extraction on CME/LBMA',
      'Dynamic tail-risk hedging for sovereign volatility spikes'
    ],
    keyCapabilitiesZh: [
      '国际期现货基差与跨市跨期套利算法',
      '美联储利率周期与美债实际收益率多因子回归模型',
      'CME/LBMA 高频微观市场流动性嗅探与订单薄冲击优化',
      '地缘政治重大事件尾部风险动态对冲系统'
    ],
    scopeExtractEn: 'Precious Metals Trading: Covering international precious metals markets such as gold and silver, with a comprehensive framework for macroeconomic analysis, market trend assessment, and quantitative trading strategies.',
    scopeExtractZh: '法定经营范围：Precious Metals Trading - 覆盖国际黄金、白银等贵金属市场，具备完整的宏观经济分析、市场趋势研判与量化交易策略体系。'
  },
  {
    id: 'us-equities',
    code: '02 / GLOBAL SECURITIES',
    titleEn: 'U.S. Equities & Global Securities',
    titleZh: '美股与全球证券多因子量化配置',
    taglineEn: 'Algorithmic equity portfolios, index arbitrage, and institutional volatility management.',
    taglineZh: '标普500、纳斯达克100多因子选股、ETF 套利与统计套利系统。',
    descriptionEn: 'Focusing on premier U.S. equities, benchmark indices (S&P 500, Nasdaq 100), sector ETFs, and liquid global assets. Employing fundamental factor mining, statistical arbitrage, and dynamic risk parity.',
    descriptionZh: '聚焦美股核心标的、标普500/纳斯达克100指数成分股及全球高流动性ETF，通过基本面多因子量化挖掘、统计套利、波动率曲面定价与动态风险平价，构建稳健的全球多头与中性策略。',
    iconName: 'TrendingUp',
    accentColor: 'from-blue-500/20 via-blue-500/5 to-transparent border-blue-500/30 text-blue-400',
    metrics: [
      { labelEn: 'Tracked Securities', labelZh: '覆盖美股与全球ETF标的', value: '4,500+ Assets' },
      { labelEn: 'Factor Rebalance Latency', labelZh: '因子动态重平衡频次', value: 'Real-time Tick' },
      { labelEn: 'Beta Neutrality', labelZh: '市场中性贝塔暴露', value: '|β| < 0.04' }
    ],
    keyCapabilitiesEn: [
      'Statistical arbitrage across correlated equity clusters',
      'Alternative data NLP sentiment parsing from earnings calls & 10-K filings',
      'Options volatility surface dispersion and delta-gamma neutral hedging',
      'Smart Order Routing (SOR) minimizing market impact on NYSE/NASDAQ'
    ],
    keyCapabilitiesZh: [
      '行业关联股票集群的统计套利与协整均值回归策略',
      '财报电话会与 SEC 10-K 文件的 AI 替代数据 NLP 情绪评分',
      '期权波动率曲面色散与 Delta-Gamma 动态中性对冲',
      '纽交所/纳斯达克智能订单路由 (SOR)，有效抑制大单市场冲击'
    ],
    scopeExtractEn: 'U.S. Equities and Global Securities: Focusing on U.S. stocks, market indices, ETFs, and other high-quality global assets, while conducting market research, strategic asset allocation, and risk management.',
    scopeExtractZh: '法定经营范围：U.S. Equities and Global Securities - 专注于美股、市场基准指数、ETF及全球高品质资产，开展深度市场研判、战略资产配置与全流程风险管理。'
  },
  {
    id: 'digital-assets',
    code: '03 / DIGITAL ASSETS',
    titleEn: 'Digital Asset Trading & Web3 Infrastructure',
    titleZh: '数字资产与 Web3 金融生态',
    taglineEn: 'Institutional digital asset liquidity, on-chain analytics, and decentralized finance engineering.',
    taglineZh: '主流数字资产、链上流动性做市与 Web3 机构级资产管理能力。',
    descriptionEn: 'Expanding into premier digital assets, layer-1/layer-2 liquidity pools, and Web3 financial infrastructure to engineer institutional-grade digital market making, automated custody, and cross-chain execution.',
    descriptionZh: '布局全球主流数字资产（BTC、ETH 等）、链上流动性池及 Web3 金融基础设施，打造高安全、合规透明的机构级数字资产做市、跨链流动性聚合与链上智能合约风控体系。',
    iconName: 'Cpu',
    accentColor: 'from-emerald-500/20 via-emerald-500/5 to-transparent border-emerald-500/30 text-emerald-400',
    metrics: [
      { labelEn: '24/7 Liquidity Provision', labelZh: '全天候流动性吞吐', value: '$1.2B+ Vol' },
      { labelEn: 'On-chain Node Latency', labelZh: '自建专线节点延迟', value: '4.2 ms' },
      { labelEn: 'MPC Cold-Storage Security', labelZh: '多方计算密钥安全等级', value: 'FIPS 140-3' }
    ],
    keyCapabilitiesEn: [
      'Multi-exchange high-speed triangular & spatial arbitrage',
      'On-chain mempool analysis & MEV-resistant execution algorithms',
      'Institutional collateral optimization and staking yield enhancement',
      'Full integration with compliant fiat on/off-ramp rails under FinCEN MSB'
    ],
    keyCapabilitiesZh: [
      '跨交易所高频三角套利与跨期价差对冲引擎',
      '链上内存池（Mempool）深度解析与抗 MEV 保护性算法执行',
      '机构级抵押品优化配置与去中心化流动性增益',
      '依托美国 FinCEN MSB 牌照合规贯通法币与数字资产清算通道'
    ],
    scopeExtractEn: 'Digital Asset Trading: Expanding into major digital assets, on-chain assets, and Web3 financial markets to build professional digital trading and asset management capabilities.',
    scopeExtractZh: '法定经营范围：Digital Asset Trading - 拓展主流数字资产、链上原生资产及 Web3 金融市场，构筑专业化数字资产交易与机构级资产管理核心能力。'
  },
  {
    id: 'ai-quant',
    code: '04 / AI QUANT ENGINE',
    titleEn: 'AI-Powered Quantitative Strategy Engine',
    titleZh: 'AI 驱动高频与多因子智能量化体系',
    taglineEn: 'Transformer time-series forecasting, deep reinforcement learning, and autonomous risk parity.',
    taglineZh: '深度学习模型、时序 Transformer 与强化学习自适应策略矩阵。',
    descriptionEn: 'Leveraging cutting-edge artificial intelligence, big data analytics, deep neural networks, and automated strategy models to enhance market regime identification, predictive alpha generation, and automated execution efficiency.',
    descriptionZh: '融合时序 Transformer、图神经网络（GNN）与深度强化学习（DRL），在毫秒级微观时序中精准识别市场微结构状态跃迁，实现自适应策略权重分配与自动化智能风控。',
    iconName: 'Bot',
    accentColor: 'from-cyan-500/20 via-cyan-500/5 to-transparent border-cyan-500/30 text-cyan-400',
    metrics: [
      { labelEn: 'Daily Data Processed', labelZh: '日均处理高频行情数据', value: '18.5 TB/day' },
      { labelEn: 'Neural Parameter Count', labelZh: '预测模型神经网络参数', value: '2.4 Billion' },
      { labelEn: 'Inference Latency', labelZh: 'FPGA加速推理耗时', value: '12.8 μs' }
    ],
    keyCapabilitiesEn: [
      'Deep reinforcement learning for optimal order execution trajectory',
      'Transformer-based multi-horizon volatility forecasting',
      'Graph neural networks modeling global cross-asset correlations',
      'Automated genetic strategy generation & continuous backtesting validation'
    ],
    keyCapabilitiesZh: [
      '基于深度强化学习（DRL）的最优订单执行路径规划（TWAP/VWAP 优化）',
      '基于多尺度 Transformer 的非线性波动率与跳变概率预测',
      '跨市场全球资产联动图神经网络（GNN）关联建模',
      '遗传算法（Genetic Algorithm）自动化策略迭代与多因子特征工厂'
    ],
    scopeExtractEn: 'AI-Powered Quantitative Trading: Leveraging artificial intelligence, big data analytics, machine learning, and automated strategy models to enhance market identification, strategy execution, and risk control efficiency.',
    scopeExtractZh: '法定经营范围：AI-Powered Quantitative Trading - 深度应用人工智能、大数据分析、机器学习与自动化策略模型，显著提升市场信号识别、策略执行与风控闭环效率。'
  },
  {
    id: 'fintech-rd',
    code: '05 / FINTECH R&D',
    titleEn: 'FinTech Infrastructure & Quantitative R&D',
    titleZh: '金融科技与量化基础设施研发',
    taglineEn: 'Ultra-low latency trading engines, kernel-bypass networking, and institutional risk matrix.',
    taglineZh: '微秒级低延迟交易内核、FPGA 硬件加速与毫秒级全链路实时风控系统。',
    descriptionEn: 'Continuously investing in the development of proprietary ultra-low-latency quantitative trading engines, intelligent risk control systems, institutional data analytics, strategy backtesting pipelines, and colocation infrastructure.',
    descriptionZh: '持续投入自研超低延迟量化交易底层架构，包括微秒级订单匹配内核、FPGA 硬件加速网卡、基于 DPDK 的内核旁路传输技术、高保真历史撮合回测沙盒与机构级实时全息风控中台。',
    iconName: 'Server',
    accentColor: 'from-violet-500/20 via-violet-500/5 to-transparent border-violet-500/30 text-violet-400',
    metrics: [
      { labelEn: 'Order Gateway Latency', labelZh: '核心撮合网关延迟', value: '< 850 ns' },
      { labelEn: 'Engine Reliability SLA', labelZh: '系统高可用性 SLA', value: '99.999%' },
      { labelEn: 'Global Colocation Sites', labelZh: '全球顶级交易所同构机房', value: 'Secaucus / Aurora / LD4' }
    ],
    keyCapabilitiesEn: [
      'DPDK / Kernel-bypass network stack for deterministic microsecond packet handling',
      'Real-time Pre-trade & Post-trade risk verification with zero latency penalty',
      'Petabyte-scale distributed L3 order-book tick replay engine',
      'Fault-tolerant active-active multi-datacenter consensus protocol'
    ],
    keyCapabilitiesZh: [
      '基于 DPDK / Solarflare 内核旁路技术的微秒级确定性网络传输栈',
      '事前与事后全自动化零延迟阻断风控逻辑引擎',
      'PB 级分布式全息 L3 逐笔订单薄回放与压力测试沙盒',
      '跨全球机房双活热备容灾与毫秒级状态同步协议'
    ],
    scopeExtractEn: 'FinTech Research and Development: Continuously investing in the development of quantitative trading engines, intelligent risk control systems, data analytics, strategy backtesting, and automated trading systems.',
    scopeExtractZh: '法定经营范围：FinTech Research and Development - 持续投资研发量化交易引擎、智能风控系统、数据分析平台、高保真策略回测框架与全自动交易基础设施。'
  }
];
