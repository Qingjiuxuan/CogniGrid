import { EcosystemItem, PlatformAnnouncement, CommunityChannel } from '../types';

export const NINE_ECOSYSTEMS: EcosystemItem[] = [
  {
    id: 'eco-socialfi',
    index: '01',
    titleEn: 'Social-Finance (SocialFi)',
    titleZh: 'Social-Finance 社交金融系统',
    taglineEn: 'Decentralized social graph connecting traders, strategies, and investors globally.',
    taglineZh: '链接全球交易者、量化策略与投资者的去中心化社交金融价值网络。',
    descriptionEn:
      'Connects global users and trading accounts with decentralized identity, verifiable on-chain track records, peer-to-peer strategy copy-trading, and collaborative profit sharing.',
    descriptionZh:
      '深度链接全球用户与交易账户，依托去中心化链上真实战绩与声誉系统，实现零信任点对点跟单分润与交易社区协同。',
    iconName: 'Users',
    tag: 'SocialFi',
    launchDate: 'Sep 2026',
    featuresEn: [
      'Decentralized identity & reputation ranking',
      'Non-custodial smart contract copy-trading',
      'Social revenue sharing matrix'
    ],
    featuresZh: ['去中心化链上声誉评级', '非托管智能合约跟单执行', '社交收益自动分润矩阵']
  },
  {
    id: 'eco-ai-quant',
    index: '02',
    titleEn: 'AI Quantitative & Minting System',
    titleZh: 'AI 量化与智能铸造体系',
    taglineEn: 'High-frequency algorithmic execution and computing-power minting engine.',
    taglineZh: '高频多策略智能量化内核与去中心化算力铸造协议。',
    descriptionEn:
      'Powered by CogniQuant AI Labs, utilizing multi-model time-series neural networks and reinforcement learning to execute automated arbitrage and distribute minting rewards.',
    descriptionZh:
      '由 CogniQuant AI Labs 提供技术驱动，采用时序深度学习模型与强化学习算法，全天候自动化执行跨市套利与算力铸造分配。',
    iconName: 'Bot',
    tag: 'AI Quant',
    launchDate: 'Oct 2026',
    featuresEn: [
      'Multi-strategy high-frequency quantification',
      'Automated trade execution & risk guardrails',
      'Computing-power minting rewards'
    ],
    featuresZh: ['多策略毫秒级高频量化矩阵', '全自动执行与硬核风控屏障', '算力质押智能铸造与奖励分配']
  },
  {
    id: 'eco-gold',
    index: '03',
    titleEn: 'Gold-Trading Ecosystem',
    titleZh: '黄金现货与衍生品交易生态',
    taglineEn: 'Institutional-grade precious metals macro hedging and synthetic gold liquidity.',
    taglineZh: '覆盖国际现货黄金、期现套利与数字化黄金衍生品的全周期生态。',
    descriptionEn:
      'Integrates LBMA/CME spot and futures gold markets with macroeconomic quantitative models, physical delivery vaults, and on-chain tokenized gold assets.',
    descriptionZh:
      '深度打通国际现货与期货黄金交易通道，融合宏观利率周期模型、实物交割金库背书与数字化黄金衍生代币。',
    iconName: 'Coins',
    tag: 'Precious Metals',
    launchDate: 'Dec 2026',
    featuresEn: [
      'LBMA physical gold institutional liquidity',
      'Macro interest rate cycle arbitrage',
      'Tokenized synthetic precious metals'
    ],
    featuresZh: ['LBMA 机构级实物黄金流动性', '美联储利率周期宏观套利模型', '数字黄金与实物资产自由兑换']
  },
  {
    id: 'eco-payment',
    index: '04',
    titleEn: 'Global Payment System',
    titleZh: '全球支付与清算结算集成',
    taglineEn: 'FinCEN MSB compliant cross-border payment gateway and fiat settlement.',
    taglineZh: '依托全美 MSB 资质的跨国合规支付网关与法币极速清算通道。',
    descriptionEn:
      'Provides seamless fiat on/off-ramps, global POS terminal interfaces, virtual debit cards, and multi-currency instant settlement across all 50 US states and global territories.',
    descriptionZh:
      '提供合规法币出入金通道、全球 POS 刷卡终端对接、虚拟加密借记卡及全球多币种秒级跨国清算网络。',
    iconName: 'CreditCard',
    tag: 'Payment Rails',
    launchDate: 'Feb 2027',
    featuresEn: [
      'FinCEN MSB regulated fiat-crypto rails',
      'Global virtual and physical card issuance',
      'Sub-second cross-border merchant settlement'
    ],
    featuresZh: ['全美 50 州合规法币出入金管道', '全球虚拟与实体卡即开即用', '秒级跨境商户结算与费率优化']
  },
  {
    id: 'eco-lending',
    index: '05',
    titleEn: 'Decentralized Lending Ecosystem',
    titleZh: '去中心化借贷与流动性池',
    taglineEn: 'Algorithmic interest rate markets, multi-asset collateral, and flash loans.',
    taglineZh: '自适应算法利率金库、多抵押品借贷与机构级流动性协议。',
    descriptionEn:
      'Enables users and institutions to deposit assets to earn dynamic yields or borrow against crypto, gold tokens, and equities with algorithmic risk-isolated vaults.',
    descriptionZh:
      '支持用户与机构存入数字资产与黄金代币赚取动态年化收益，依托风险隔离金库与算法清算机制获得极具竞争力的借贷杠杆。',
    iconName: 'Landmark',
    tag: 'DeFi Lending',
    launchDate: 'Apr 2027',
    featuresEn: [
      'Multi-collateral risk-isolated vaults',
      'Dynamic utilization-based interest curve',
      'Zero-slippage flash loans for arbitrage'
    ],
    featuresZh: ['多资产超额抵押与风险隔离仓', '基于资金利用率的动态自适应利率', '支持零滑点闪电贷高效套利']
  },
  {
    id: 'eco-prediction',
    index: '06',
    titleEn: 'Prediction-Market Ecosystem',
    titleZh: '预测市场与衍生品生态',
    taglineEn: 'Decentralized oracle-based financial and macroeconomic event trading.',
    taglineZh: '基于去中心化预言机的宏观经济、大宗商品与重大事件预测交易。',
    descriptionEn:
      'Empowers global participants to express market views and hedge risk on macro data releases (CPI, interest rates), commodity prices, and financial index benchmarks.',
    descriptionZh:
      '允许全球参与者就美联储议息、CPI 通胀指数、大宗商品走势及金融大事件进行去中心化预测对冲与概率资产定价。',
    iconName: 'PieChart',
    tag: 'Prediction',
    launchDate: 'Jun 2027',
    featuresEn: [
      'Decentralized oracle consensus settlement',
      'Macroeconomic event hedge markets',
      'Automated Market Maker liquidity pools'
    ],
    featuresZh: ['去中心化预言机共识极速结算', '宏观经济指标事件避险对冲池', 'AMM 自动化做市商深度池']
  },
  {
    id: 'eco-research',
    index: '07',
    titleEn: 'AI Research & Strategy Subscription',
    titleZh: 'AI 投研与策略订阅生态',
    taglineEn: 'Institutional-grade alpha signal feeds, multi-agent reports, and bot APIs.',
    taglineZh: '机构级 Alpha 策略信号流、多智能体深度投研研报与自动量化 API。',
    descriptionEn:
      'Delivers real-time alpha signals generated by CogniQuant AI Labs, autonomous strategy backtesting pipelines, and plug-and-play algorithmic trading bots.',
    descriptionZh:
      '向订阅用户实时推送 CogniQuant AI Labs 研发的高胜率 Alpha 策略信号、自动化回测数据报告与开箱即用的量化交易机器人 API。',
    iconName: 'FileSearch',
    tag: 'AI Research',
    launchDate: 'Aug 2027',
    featuresEn: [
      'Multi-agent financial NLP analysis',
      'Real-time webhook and API signal dispatch',
      'Institutional backtesting sandbox'
    ],
    featuresZh: ['多智能体金融 NLP 实时情绪研判', '毫秒级 Webhook / API 信号分发', '机构级策略历史撮合回测沙盒']
  },
  {
    id: 'eco-game',
    index: '08',
    titleEn: 'CG Game Cluster',
    titleZh: 'CG 游戏生态集群',
    taglineEn: 'Interactive gaming experiences powered by CGT token utility and computing power.',
    taglineZh: '融合娱乐竞技与金融属性的 CG 游戏集群，全面赋能 CGT 核心代币。',
    descriptionEn:
      'Integrates financial mechanics with immersive gameplay, computing power tournaments, NFT asset interoperability, and daily reward distributions.',
    descriptionZh:
      '将智能算力、量化策略竞技与沉浸式游戏体验深度结合，实现游戏内资产跨场景流通与 CGT 代币全生命周期价值捕获。',
    iconName: 'Gamepad2',
    tag: 'GameFi',
    launchDate: 'Oct 2027',
    featuresEn: [
      'Skill-based computing power tournaments',
      'Interoperable digital asset economy',
      'Native CGT token staking & utility'
    ],
    featuresZh: ['算力竞技与策略锦标赛模式', '跨游戏全生态数字道具互通', 'CGT 原生代币全场景通缩消耗']
  },
  {
    id: 'eco-cex',
    index: '09',
    titleEn: 'Centralized Exchange (CEX)',
    titleZh: '顶级中心化撮合交易所 (CEX)',
    taglineEn: 'High-speed institutional matching engine, fiat rails, and deep liquidity books.',
    taglineZh: '微秒级高性能撮合引擎、法币全通道与全球顶级深度订单薄。',
    descriptionEn:
      'A premier centralized cryptocurrency and derivatives exchange featuring sub-microsecond latency, cold-storage custody, and complete regulatory compliance.',
    descriptionZh:
      '打造具备微秒级撮合延迟、冷热隔离多签托管、全美 MSB 合规牌照支撑与深度全球做市商流动性的旗舰级中心化交易所。',
    iconName: 'ShieldAlert',
    tag: 'Exchange (CEX)',
    launchDate: 'Dec 2027',
    featuresEn: [
      'Sub-microsecond deterministic matching engine',
      'Multi-sig MPC institutional custody',
      'Deep order books across global trading pairs'
    ],
    featuresZh: ['微秒级确定性高并发撮合内核', 'MPC 多方计算机构级冷热隔离托管', '全币种全球顶级做市商订单薄']
  }
];

export const OFFICIAL_COMMUNITY_CHANNELS: CommunityChannel[] = [
  {
    name: 'Telegram Global',
    platform: 'tg',
    handle: '@CogniGrid',
    url: 'https://s.share11.top/CogniGrid',
    descEn: 'Official global Telegram community channel for news, updates & support.',
    descZh: '官方全球 Telegram 官方社区频道，获取最新公告与全球技术支持。',
    badge: 'Official TG'
  },
  {
    name: 'X (Twitter)',
    platform: 'x',
    handle: '@CogniGrid',
    url: 'https://x.com/CogniGrid',
    descEn: 'Real-time announcements, ecosystem milestones, and executive insights.',
    descZh: '实时官方推文、生态里程碑进展与核心团队一手研判观点。',
    badge: 'Official X'
  },
  {
    name: 'Goldhouse Official Group',
    platform: 'goldhouse',
    handle: 'CogniGrid 官方交流群',
    url: 'https://imweb.goldhouse.cc/group?gid=TGS%232MZHM5N5CY&inviter=8B4UVNYuNh&groupname=%F0%9F%8C%8DCogniGrid%E5%AE%98%E6%96%B9%E4%BA%A4%E6%B5%81%E7%BE%A4',
    descEn: 'Exclusive Goldhouse community group for deep discussion and networking.',
    descZh: 'Goldhouse 官方核心交流社群，深度探讨生态共建与战略合作。',
    badge: 'Goldhouse VIP'
  }
];

export const PLATFORM_ANNOUNCEMENTS: PlatformAnnouncement[] = [
  {
    id: 'ann-1',
    date: '2026-08-20',
    titleEn: 'CogniGrid Ecosystem & 20,000,000 USDT AUM Allocation Official Notice',
    titleZh: 'CogniGrid 全球生态正式发布与 20,000,000 USDT 资产管理规模公告',
    categoryEn: 'Ecosystem Launch',
    categoryZh: '生态战略发布',
    isPinned: true,
    summaryEn:
      'Cogni Quant Foundation announces the official launch of CogniGrid ecosystem network, with an initial managed asset pool of 20,000,000 USDT.',
    summaryZh:
      'Cogni Quant Foundation 正式宣布启动 CogniGrid 全球智能金融生态网络，基金会当前管理资产规模达到 20,000,000 USDT。',
    contentEn:
      'Cogni Quant Foundation, as the governing body responsible for global strategy and resource allocation of the CogniGrid ecosystem, officially announces the deployment of its four-tier architecture. Backed by 20,000,000 USDT in managed capital and FinCEN MSB regulatory standing (#31000337267999), CogniGrid will roll out nine major ecosystems starting August 2026.',
    contentZh:
      'Cogni Quant Foundation 作为 CogniGrid 生态的管理与治理机构，正式宣布全面启动四大核心技术架构与九大生态版图建设。依托基金会当前 20,000,000 USDT 资产管理规模与美国财政部 FinCEN MSB 合规牌照（#31000337267999），为全球用户提供顶级 AI 量化与 Web3 金融基础设施。'
  },
  {
    id: 'ann-2',
    date: '2026-08-15',
    titleEn: 'Global Partner Recruitment Program Phase I Officially Initiated',
    titleZh: 'CogniGrid 全球合伙人计划（第一期）正式启动招募',
    categoryEn: 'Partnership',
    categoryZh: '全球合伙人',
    isPinned: true,
    summaryEn:
      'CogniGrid launches global partner recruitment across North America, Europe, Asia-Pacific, offering dedicated node incentive quotas.',
    summaryZh:
      'CogniGrid 正式面向北美、欧洲、亚太及中东地区招募首批生态合伙人节点，开放专属算力激励额度与治理权益。',
    contentEn:
      'To accelerate the adoption of CogniGrid AI-driven financial network, the Foundation is onboarding global institutional partners, community leaders, and quantitative teams. Selected partners will receive prioritized node rewards, early access to CogniQuant AI Labs alpha signal feeds, and direct ecosystem grant allocations.',
    contentZh:
      '为加速推动 CogniGrid 智能金融网络的全球化布局，基金会现面向全球招募战略机构合伙人、社区领袖及量化先锋团队。入选合伙人将享有专属节点激励、CogniQuant AI Labs 独家策略信号优先接入权及生态发展专项扶持基金。'
  },
  {
    id: 'ann-3',
    date: '2026-08-01',
    titleEn: 'CogniQuant AI Labs Quantitative & Minting System Milestone Preview',
    titleZh: 'CogniQuant AI Labs 量化与智能铸造系统研发进展公示',
    categoryEn: 'R&D Update',
    categoryZh: '技术研发进展',
    summaryEn:
      'CogniQuant AI Labs completes alpha testing for multi-strategy execution and automated minting smart contracts ahead of October 2026 launch.',
    summaryZh:
      'CogniQuant AI Labs 顺利完成多策略高频量化内核与智能铸造合约的 Alpha 测试，各项指标均已达到上线标准。',
    contentEn:
      'CogniQuant AI Labs has finalized the core architecture for the AI Quantitative & Minting System, scheduled for full production release in October 2026. The system achieves sub-millisecond execution latency and dynamic risk parity across crypto, equities, and precious metals markets.',
    contentZh:
      'CogniQuant AI Labs 已全面完成 AI 量化与智能铸造系统的底层架构验证，计划于 2026 年 10 月正式投入生产运行。系统实测微秒级确定性撮合与毫秒级时序风控，全天候覆盖数字资产、美股与贵金属市场。'
  }
];
