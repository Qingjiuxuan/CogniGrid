import { LeadershipMember, EcosystemItem, RoadmapMilestone, Announcement, CommunityChannel, LegalDocument } from '../types';

export const leadershipData: LeadershipMember[] = [
  {
    id: 'ethan',
    name: 'Ethan',
    nameZh: 'Ethan (伊森)',
    role: 'CEO & Founder',
    roleZh: '首席执行官 (CEO) & 创始人',
    department: 'Executive Board',
    departmentZh: '执行董事会',
    bio: 'Sole highest authorized global leader of CogniGrid appointed by Cogni Quant Foundation. 100% equity holder of CogniQuant Foundation LLC (Colorado). Possesses supreme decision-making authority for global strategy, technical deployment, and ecosystem governance.',
    bioZh: 'Cogni Quant 基金会唯一官方授权的 CogniGrid 全球最高领导人与创始人，持有美国科罗拉多州 CogniQuant Foundation LLC 100% 权益，统筹全球战略、技术研发、生态部署与最高决策。',
    experience: [
      'Appointed Global CEO by Cogni Quant Foundation with permanent exclusive mandate',
      'Sole Official Spokesperson & Highest Decision-Maker for CogniGrid ecosystem',
      'Architect of 9 Major Financial Ecosystems & Cross-Market AI Quantitative Matrix'
    ],
    experienceZh: [
      '经 Cogni Quant 基金会正式任命为全球 CEO 并获永久排他性全权委托',
      'CogniGrid 生态唯一官方发言人及全事务最高决策人',
      '9大金融生态矩阵与跨市场 AI 量化协同网络总架构师'
    ],
    isCEO: true
  },
  {
    id: 'lucas-hale',
    name: 'Lucas Hale',
    nameZh: 'Lucas Hale (卢卡斯·霍尔)',
    role: 'Chief Operating Officer (COO)',
    roleZh: '首席运营官 (COO)',
    department: 'Global Operations & Nodes',
    departmentZh: '全球运营与超级节点',
    bio: 'Directs global operations, supernode federation networks, cross-regional compliance, and ecosystem resource synchronization across 30+ regional hubs.',
    bioZh: '负责全球日常运营、超级节点联盟网络、跨区域合规推进以及覆盖全球30多个区域枢纽的生态资源同步调度。',
    experience: [
      'Global Supernode Network Deployment Architecture',
      'Multi-regional Operational Framework & Compliance Infrastructure',
      'Enterprise Partner Resource Allocation & Governance'
    ],
    experienceZh: [
      '全球超级节点网络部署与联盟治理架构',
      '多区域运营体系与合规性基础设施建设',
      '企业级合作伙伴资源调配与治理推进'
    ]
  },
  {
    id: 'julian-bennett',
    name: 'Julian Bennett',
    nameZh: 'Julian Bennett (朱利安·贝内特)',
    role: 'Chief Technology Officer (CTO)',
    roleZh: '首席技术官 (CTO)',
    department: 'CogniQuant AI Labs',
    departmentZh: 'CogniQuant AI 实验室',
    bio: 'Leads CogniQuant AI Labs engineering, overseeing distributed quantitative algorithms, high-frequency execution engines, smart contract security, and Web3 data bridges.',
    bioZh: '主管 CogniQuant AI 实验室核心研发团队，统筹分布式量化算法、高频撮合执行引擎、智能合约安全审计及 Web3 数据桥接架构。',
    experience: [
      'Deep Learning & High-Frequency Multi-Strategy Quantitative Modeling',
      'Smart Contract Security Audits & Formally Verified Ledgers',
      'Decentralized Cross-Chain Data & Oracle Pipelines'
    ],
    experienceZh: [
      '深度学习与高频多策略量化数学模型构建',
      '智能合约安全审计与形式化验证账本设计',
      '去中心化跨链数据与预言机管线系统'
    ]
  },
  {
    id: 'arthur-grant',
    name: 'Arthur Grant',
    nameZh: 'Arthur Grant (亚瑟·格兰特)',
    role: 'Chief Financial Officer (CFO)',
    roleZh: '首席财务官 (CFO)',
    department: 'Treasury & Risk Management',
    departmentZh: '财务与风险控制',
    bio: 'Oversees treasury management for the 20,000,000 USDT Foundation reserve fund, capital modeling, liquidity provisioning, and institutional audit compliance.',
    bioZh: '统筹基金会 20,000,000 USDT 生态储备金的财政治理、资本流动性规划、资产配比模型及国际机构审计合规。',
    experience: [
      '20M USDT Foundation Reserve Portfolio & Treasury Governance',
      'Quantitative Liquidity Depth & Market-Making Strategies',
      'Multi-Currency Financial Engineering & Asset Risk Telemetry'
    ],
    experienceZh: [
      '2,000万 USDT 基金会储备金库管理与资产配置',
      '量化流动性深度控制与做市商策略协同',
      '多币种金融工程与资产风险全维度遥测'
    ]
  },
  {
    id: 'stella-campbell',
    name: 'Stella Campbell',
    nameZh: 'Stella Campbell (斯特拉·坎贝尔)',
    role: 'Chief Marketing Officer (CMO)',
    roleZh: '首席营销官 (CMO)',
    department: 'Global Branding & Media',
    departmentZh: '全球品牌与媒体传播',
    bio: 'Spearheads global brand promotion, international media relations, community growth campaigns, and multi-language marketing initiatives across tier-1 crypto markets.',
    bioZh: '主管 CogniGrid 全球品牌形象树立、国际主流媒体合作、社区裂变传播以及覆盖全球顶尖加密市场的多语言营销矩阵。',
    experience: [
      'International FinTech & Web3 Brand Strategy Architecture',
      'Tier-1 Global Media Syndication & Press Relations',
      'Multilingual Community Viral Growth Frameworks'
    ],
    experienceZh: [
      '国际金融科技与 Web3 品牌战略顶层规划',
      '全球一线财经与科技媒体发布网络统筹',
      '多语言全球社群病毒式裂变增长体系'
    ]
  },
  {
    id: 'miles-foster',
    name: 'Miles Foster',
    nameZh: 'Miles Foster (迈尔斯·福斯特)',
    role: 'Chief Growth Officer (CGO)',
    roleZh: '首席增长官 (CGO)',
    department: 'User Acquisition & SocialFi',
    departmentZh: '用户增长与社交金融',
    bio: 'Drives user adoption, Social-Finance mechanism design, viral incentive mechanics, and ecosystem utility expansion for the CGT token carrier.',
    bioZh: '主导用户规模化增长体系、SocialFi 社交金融激励机制设计、裂变增长模型及 CGT 代币生态价值载体场景拓展。',
    experience: [
      'Social-Finance Incentive Topologies & Growth Loops',
      'CGT Token Ecological Utility & Velocity Optimization',
      'Decentralized Referral & Guild Federation Architectures'
    ],
    experienceZh: [
      'SocialFi 社交金融拓扑激励与增长飞轮构建',
      'CGT 代币生态应用场景与流通效能优化',
      '去中心化裂变推荐与公会联盟体系设计'
    ]
  },
  {
    id: 'iris-sullivan',
    name: 'Iris Sullivan',
    nameZh: 'Iris Sullivan (艾里斯·沙利文)',
    role: 'Chief Business Development Officer (CBDO)',
    roleZh: '首席商务官 (CBDO)',
    department: 'Strategic Partnerships & Institutions',
    departmentZh: '战略合作与机构拓展',
    bio: 'Establishes institutional alliances, global market integration agreements, gold/commodity trading broker relationships, and global payment gateway partnerships.',
    bioZh: '拓展全球机构级战略合作伙伴、跨市场综合经纪商通道、黄金现货与衍生品交易生态对接以及跨国支付清算网关合作。',
    experience: [
      'Global Institutional Liquidity Provider Alliances',
      'Cross-Border Payment Rail & Banking Gateway Integration',
      'Physical & Synthetic Gold Trading Brokerage Syndication'
    ],
    experienceZh: [
      '全球机构级流动性提供商联盟战略拓展',
      '跨境支付轨道与合规银行清算网关集成',
      '现货与合成黄金大宗商品经纪网络联通'
    ]
  }
];

export const ecosystemsData: EcosystemItem[] = [
  {
    id: 'ai-quant-minting',
    title: 'AI Quantitative & Minting System',
    titleZh: 'AI量化与铸造系统',
    subtitle: 'Intelligent Algorithmic Engine & Digital Asset Minting Matrix',
    subtitleZh: '智能算法引擎与数字资产铸造矩阵',
    description: 'CogniQuant AI Labs proprietary deep neural network multi-strategy quantitative engine, featuring millisecond latency arbitrage, automated grid trading, and dynamic asset minting protocols with decentralized audit trails.',
    descriptionZh: '由 CogniQuant AI 实验室自主研发的深度神经网络多策略量化系统，具备毫秒级跨市场套利、智能网格量化及动态资产铸造协议，全链上可查，安全透明。',
    launchDate: 'October 2026',
    launchDateZh: '2026年10月',
    category: 'core',
    icon: 'Cpu',
    features: [
      'Deep learning multi-factor predictive models',
      'High-frequency cross-exchange arbitrage',
      'Smart collateralized token minting protocols',
      'Real-time automated risk mitigation telemetry'
    ],
    featuresZh: [
      '深度学习多因子趋势预测模型',
      '高频跨交易所毫秒级套利引擎',
      '智能抵押数字资产铸造与销毁协议',
      '全天候实时自动化风险对冲遥测'
    ],
    status: 'in-development'
  },
  {
    id: 'social-fi',
    title: 'Social-Finance System (SocialFi)',
    titleZh: 'Social-Finance 社交金融系统',
    subtitle: 'Decentralized Social Graphs & Collaborative Wealth Network',
    subtitleZh: '去中心化社交图谱与协同财富网络',
    description: 'Connecting global traders, quant analysts, and community members into a trustless Social-Finance ecosystem. Features strategy copy-trading, community decentralized syndicates, and incentive staking.',
    descriptionZh: '将全球交易者、量化分析师及社群成员无缝连接，构建去中心化社交金融矩阵。提供一键跟单、公会社交战队、分润智能合约及社群裂变激励。',
    launchDate: 'September 2026',
    launchDateZh: '2026年9月',
    category: 'defi',
    icon: 'Users',
    features: [
      'One-click algorithmic copy-trading with zero custody risk',
      'Decentralized guild syndicate revenue sharing',
      'On-chain social reputation scores & verification',
      'CGT-powered social tip and incentive mechanisms'
    ],
    featuresZh: [
      '零托管风险的一键式算法跟单体系',
      '去中心化公会社群智能分润机制',
      '链上交易声誉评分与透明业绩验证',
      '基于 CGT 的社交打赏与共识激励系统'
    ],
    status: 'in-development'
  },
  {
    id: 'gold-trading',
    title: 'Gold-Trading Ecosystem',
    titleZh: '黄金交易生态',
    subtitle: 'Physical & Synthetic Gold Asset RWA Tokenization Matrix',
    subtitleZh: '现货与合成黄金 RWA 真实世界资产代币化矩阵',
    description: 'Bridges traditional gold bullion markets with on-chain liquidity. Real-world asset (RWA) gold vault backing paired with AI algorithmic spot arbitrage and perpetual derivatives.',
    descriptionZh: '打通传统实物黄金金库储备与链上流动性网络，实现真实世界资产 (RWA) 黄金代币化、AI 智能现货对冲套利及全天候黄金永续衍生品交易。',
    launchDate: 'December 2026',
    launchDateZh: '2026年12月',
    category: 'trading',
    icon: 'Coins',
    features: [
      '100% audited LBMA physical gold reserve custody',
      'AI-hedged gold spread arbitrage and yield minting',
      'Sub-second settlement on global gold synthetic pairs',
      'Fractional ownership with physical redemption options'
    ],
    featuresZh: [
      '100% 审计的 LBMA 实物黄金金库储备托管',
      'AI 算法对冲黄金价差套利与稳定收益生成',
      '全球合成黄金交易对亚秒级即时清算',
      '碎片化黄金持有与实物提割兑换通道'
    ],
    status: 'planned'
  },
  {
    id: 'global-payment',
    title: 'Global Payment & Settlement',
    titleZh: '全球支付结算体系',
    subtitle: 'Next-Gen Cross-Border Multi-Currency Payment Rail',
    subtitleZh: '下一代跨国多币种智能支付结算清算网络',
    description: 'Enables high-throughput, instant cross-border payments with multi-currency fiat on/off ramps, merchant POS integrations, virtual crypto debit cards, and automated FX conversion powered by CGT.',
    descriptionZh: '支持高吞吐量、毫秒级跨境支付清算，提供全球多币种法币出入金通道、商户 POS 系统集成、加密虚拟卡及基于 CGT 的智能外汇即时对冲结算。',
    launchDate: 'February 2027',
    launchDateZh: '2027年2月',
    category: 'infrastructure',
    icon: 'CreditCard',
    features: [
      'Instant multi-currency crypto-fiat settlement',
      'Global virtual & physical crypto credit card issuance',
      'Zero gas fee payment channels for CGT transactions',
      'Enterprise merchant APIs and POS terminal SDKs'
    ],
    featuresZh: [
      '多币种加密资产与主流法币即时清算',
      '全球虚拟与实体加密借记卡发行',
      '针对 CGT 交易的零 Gas 极速微支付通道',
      '企业级商户支付 API 与收银终端 SDK'
    ],
    status: 'planned'
  },
  {
    id: 'decentralized-lending',
    title: 'Decentralized Lending Protocol',
    titleZh: '去中心化借贷生态',
    subtitle: 'Overcollateralized & AI Risk-Managed Liquidity Pools',
    subtitleZh: '超额抵押与 AI 智能风控流动性借贷资金池',
    description: 'Autonomous DeFi money market protocol featuring algorithmic interest rates, dynamic LTV adjusted by AI risk models, flash loans, and multi-asset collateral pools.',
    descriptionZh: '基于智能合约的自主 DeFi 货币市场协议，具备算法动态利率、AI 风控模型实时调控的质押率 (LTV)、闪电贷以及多资产抵押流动性资金池。',
    launchDate: 'April 2027',
    launchDateZh: '2027年4月',
    category: 'defi',
    icon: 'Layers',
    features: [
      'AI dynamic liquidation protection mechanisms',
      'Multi-chain collateral support including RWAs and CGT',
      'Isolated risk pools for specialized synthetic assets',
      'Automated high-yield staking vaults for liquidity providers'
    ],
    featuresZh: [
      'AI 实时清算预警与动态滑点保护机制',
      '支持包括 RWA 资产与 CGT 在内的多链抵押品',
      '针对特殊合成资产的隔离风险借贷池',
      '为流动性提供者打造的自动化高收益生息金库'
    ],
    status: 'planned'
  },
  {
    id: 'prediction-market',
    title: 'Prediction-Market Ecosystem',
    titleZh: '预测市场生态',
    subtitle: 'Decentralized Event Forecasting & Oracle Consensus Hub',
    subtitleZh: '去中心化事件预测与预言机共识聚合枢纽',
    description: 'Decentralized information prediction exchange covering macroeconomic indicators, financial asset trends, crypto indices, and global events with decentralized oracle resolution.',
    descriptionZh: '基于去中心化预言机共识的全球信息预测交易平台，涵盖宏观经济指标、大宗商品走势、加密指数及全球热点事件的概率预测与结算。',
    launchDate: 'June 2027',
    launchDateZh: '2027年6月',
    category: 'trading',
    icon: 'TrendingUp',
    features: [
      'Automated market maker (AMM) for binary & categorical outcomes',
      'Decentralized oracle arbitration powered by CogniQuant consensus',
      'Hedging instruments for macro market volatility',
      'Community-created prediction markets with CGT liquidity rewards'
    ],
    featuresZh: [
      '针对二元及多元结果的自动做市商 (AMM) 算法',
      '基于 CogniQuant 共识机制的去中心化预言机仲裁',
      '针对宏观市场剧烈波动的对冲工具',
      '允许社区自主发起预测市场并赚取 CGT 流动性奖励'
    ],
    status: 'planned'
  },
  {
    id: 'ai-research-strategy',
    title: 'AI Investment-Research & Strategy Subscription',
    titleZh: 'AI投研与策略订阅',
    subtitle: 'Institutional-Grade Market Intelligence & Quantitative Alpha',
    subtitleZh: '机构级市场情报与量化超额收益 Alpha 策略库',
    description: 'Empowers institutional and retail investors with CogniQuant AI Labs deep intelligence, including algorithmic signals, on-chain whale telemetry, sentiment analysis, and backtested strategy subscriptions.',
    descriptionZh: '将 CogniQuant AI 实验室机构级情报赋能全球用户，包含智能量化信号、巨鲸链上追踪、全网情绪异动分析以及经过严苛回测的策略模型订阅。',
    launchDate: 'August 2027',
    launchDateZh: '2027年8月',
    category: 'core',
    icon: 'Sparkles',
    features: [
      'Real-time multi-timeframe quantitative signal feeds',
      'Cross-chain smart money & liquidity flow tracking',
      'Automated backtesting engine with 10+ years of historical data',
      'Tiered strategy subscriptions paid directly via CGT'
    ],
    featuresZh: [
      '全天候多周期智能量化交易信号推送',
      '跨链聪明钱与大额流动性异动追踪',
      '包含10年以上历史数据的自动化多策略回测引擎',
      '支持 CGT 一键订阅的高收益量化策略组合'
    ],
    status: 'planned'
  },
  {
    id: 'cg-game-cluster',
    title: 'CG Game Cluster & Metaverse',
    titleZh: 'CG游戏矩阵与元宇宙生态',
    subtitle: 'Immersive Web3 Gaming, NFT Economy & Virtual Financial Arena',
    subtitleZh: '沉浸式 Web3 链游、NFT 资产经济与虚拟金融竞技场',
    description: 'A cutting-edge Web3 gaming matrix incorporating GameFi, trading simulators, strategy conquest arenas, and digital asset interoperability, driving high-velocity CGT circulation.',
    descriptionZh: '融合 GameFi、金融模拟交易对战、策略领地争夺及跨游戏数字资产互通的尖端 Web3 游戏矩阵，全面激活 CGT 核心经济循环。',
    launchDate: 'October 2027',
    launchDateZh: '2027年10月',
    category: 'metaverse',
    icon: 'Gamepad2',
    features: [
      'Play-to-Earn financial simulation & strategy tournaments',
      'Interoperable gaming NFT assets with secondary market',
      'Decentralized guild leaderboards with prize pools',
      'In-game CGT micro-economy & item crafting'
    ],
    featuresZh: [
      'P2E 边玩边赚金融模拟竞技与策略锦标赛',
      '可跨游戏通用的高价值 NFT 装备与二次流转市场',
      '去中心化公会争霸战与丰厚赛季奖金池',
      '游戏内 CGT 微经济循环与稀有资产锻造体系'
    ],
    status: 'planned'
  },
  {
    id: 'cex-platform',
    title: 'Next-Gen Centralized Exchange (CEX)',
    titleZh: '下一代聚合中心化交易所 (CEX)',
    subtitle: 'Institutional-Grade Liquidity, Matching Engine & Derivatives Hub',
    subtitleZh: '机构级流动性、超高速撮合引擎与全品类衍生品枢纽',
    description: 'The pinnacle of the CogniGrid trading ecosystem. High-performance matching engine processing 1,000,000 TPS, multi-tier cold wallet security, and unified liquidity across crypto, gold, and synthetic commodities.',
    descriptionZh: 'CogniGrid 交易生态的终极集大成者。具备每秒百万级 (1M TPS) 撮合吞吐量、多重冷签名离线金库，聚合加密货币、黄金与合成大宗商品的全球流动性。',
    launchDate: 'December 2027',
    launchDateZh: '2027年12月',
    category: 'trading',
    icon: 'Building2',
    features: [
      'Ultra-low 10-microsecond order execution engine',
      '100% Proof-of-Reserves with real-time Merkle tree verification',
      'Comprehensive spot, futures, options, and structured products',
      'CGT VIP tier trading fee discounts and staking dividends'
    ],
    featuresZh: [
      '10微秒级超低延迟撮合执行引擎',
      '100% 默克尔树实时储备金透明证明 (Proof of Reserves)',
      '全品类现货、永续合约、期权及结构化理财产品',
      'CGT 专属 VIP 手续费阶梯减免与平台分红权益'
    ],
    status: 'planned'
  }
];

export const roadmapData: RoadmapMilestone[] = [
  {
    id: 'm-2026-08',
    period: 'August 2026',
    periodZh: '2026年8月',
    title: 'Global Partner Recruitment',
    titleZh: '全球合伙人招募',
    description: 'Launch of the worldwide alliance program for regional supernodes, quantitative trading teams, and strategic institutional partners.',
    descriptionZh: '正式启动全球合伙人招募计划，面向全球区域超级节点、专业量化机构与战略合作方开放首期入驻通道。',
    items: [
      'Global Supernode Genesis Recruitment & Staking Framework',
      'Cogni Quant Foundation 20M USDT Ecosystem Fund Allocation',
      'Official Authorization & Governance Mandate Ratification',
      'Launch of Official Community Hubs (TG, X, Goldhouse)'
    ],
    itemsZh: [
      '全球超级节点创世招募与质押激励方案发布',
      'Cogni Quant 基金会 2000万 USDT 生态基金启动拨付',
      '基金会全权授权书与全球组织架构正式确立',
      '官方社群矩阵全面上线 (TG、X、Goldhouse)'
    ],
    status: 'current',
    quarter: '2026',
    highlight: true
  },
  {
    id: 'm-2026-09',
    period: 'September 2026',
    periodZh: '2026年9月',
    title: 'Social-Finance System Launch',
    titleZh: 'Social-Finance 系统上线',
    subtitle: 'Decentralized SocialFi',
    description: 'Deployment of the trustless social trading infrastructure, copy-trading smart contracts, and guild syndicate systems.',
    descriptionZh: '部署去中心化社交金融基础设施，上线一键跟单智能合约、公会社区矩阵与社交激励网络。',
    items: [
      'Launch of SocialFi DApp & Strategy Leaderboards',
      'Automated Copy-Trading Protocol with Zero-Risk Custody',
      'Guild Revenue Sharing Smart Contract Audits',
      'Global Community Alpha Genesis Testing'
    ],
    itemsZh: [
      'SocialFi 去中心化应用与交易排行榜上线',
      '零托管风险的自动化跟单协议部署',
      '公会社群分润智能合约完成权威审计',
      '全球核心社区首批先锋体验与内测'
    ],
    status: 'upcoming',
    quarter: '2026'
  },
  {
    id: 'm-2026-10',
    period: 'October 2026',
    periodZh: '2026年10月',
    title: 'AI Quantitative & Minting System Launch',
    titleZh: 'AI量化与铸造系统上线',
    description: 'Rollout of CogniQuant AI Labs core quantitative execution engine, neural network arbitrage matrices, and CGT minting protocols.',
    descriptionZh: 'CogniQuant AI 实验室核心量化执行引擎全网部署，启动多策略套利矩阵与 CGT 资产铸造协议。',
    items: [
      'CogniQuant AI Deep Neural Multi-Strategy Engine v1.0',
      'Decentralized Collateral Asset Minting System',
      'Real-Time Cross-Market High-Frequency Arbitrage',
      'Institutional Smart Risk Control & Telemetry Dashboard'
    ],
    itemsZh: [
      'CogniQuant AI 深度神经多策略量化引擎 v1.0 上线',
      '去中心化抵押资产铸造与销毁系统发布',
      '实时跨市场高频套利与做市流动性网络',
      '机构级智能风控与全链路遥测数据面板'
    ],
    status: 'upcoming',
    quarter: '2026'
  },
  {
    id: 'm-2026-12',
    period: 'December 2026',
    periodZh: '2026年12月',
    title: 'Gold-Trading Ecosystem Launch',
    titleZh: '黄金交易生态上线',
    description: 'Integration of LBMA physical gold custody, synthetic tokenized gold (RWA), and AI-hedged commodity arbitrage.',
    descriptionZh: '对接 LBMA 实体黄金金库，推出合成黄金 RWA 代币化资产，并启动 AI 智能对冲黄金大宗交易生态。',
    items: [
      'LBMA Physical Gold Vault Custody & Real-Time Auditing',
      'Gold RWA Tokenization & Fractional Trading Pairs',
      'AI-Powered Gold Price Spread Arbitrage Pools',
      'Global Commodity Brokerage Network Connectivity'
    ],
    itemsZh: [
      'LBMA 实物黄金金库托管与链上实时审计',
      '黄金 RWA 真实资产代币化与碎片化交易对',
      'AI 驱动的黄金价差智能套利流动性池',
      '全球大宗商品合规经纪网络全面联通'
    ],
    status: 'upcoming',
    quarter: '2026'
  },
  {
    id: 'm-2027-02',
    period: 'February 2027',
    periodZh: '2027年2月',
    title: 'Payment System Integration',
    titleZh: '支付系统集成',
    description: 'Launch of high-speed cross-border crypto-fiat settlement rails, virtual credit card issuance, and merchant API gateway.',
    descriptionZh: '上线高并发跨境加密与法币清算通道，发行全球虚拟借记卡，并开放企业级商户支付 API 网关。',
    items: [
      'Cross-Border Instant Settlement Infrastructure',
      'CogniGrid Global Virtual & Physical Crypto Card Release',
      'Merchant POS Integration SDK & E-Commerce Plugins',
      'Zero-Gas Micro-Payment Channels with CGT'
    ],
    itemsZh: [
      '跨境即时清算与多币种法币出入金通道',
      'CogniGrid 全球虚拟与实体加密卡正式发布',
      '商户 POS 收银集成 SDK 与电商插件上线',
      '基于 CGT 的零 Gas 极速微支付通道支持'
    ],
    status: 'upcoming',
    quarter: '2027'
  },
  {
    id: 'm-2027-04',
    period: 'April 2027',
    periodZh: '2027年4月',
    title: 'Decentralized Lending Ecosystem Launch',
    titleZh: '去中心化借贷生态上线',
    description: 'Launch of algorithmic multi-asset money markets, AI dynamic risk control, and overcollateralized lending protocols.',
    descriptionZh: '上线算法化多资产去中心化借贷货币市场，搭载 AI 动态风控与超额抵押借贷协议。',
    items: [
      'Algorithmic Variable & Stable Interest Rate Models',
      'AI Risk Telemetry & Dynamic Collateral Ratio Optimization',
      'Multi-Chain RWA & CGT Asset Collateral Pools',
      'Decentralized Liquidity Vaults & Yield Strategies'
    ],
    itemsZh: [
      '算法浮动与固定利率借贷模型全面启用',
      'AI 风险遥测与动态抵押率 (LTV) 智能优化',
      '支持多链 RWA 真实资产与 CGT 抵押品借贷',
      '去中心化流动性金库与自动化高收益策略'
    ],
    status: 'upcoming',
    quarter: '2027'
  },
  {
    id: 'm-2027-06',
    period: 'June 2027',
    periodZh: '2027年6月',
    title: 'Prediction-Market Ecosystem Launch',
    titleZh: '预测市场生态上线',
    description: 'Decentralized forecasting exchange with oracle consensus for macroeconomic events, crypto indices, and commodities.',
    descriptionZh: '上线去中心化事件预测交易平台，基于预言机共识机制覆盖全球宏观经济、加密指数与大宗商品趋势。',
    items: [
      'Decentralized Oracle Consensus Resolution Protocol',
      'AMM Dynamic Liquidity for Binary & Multi-Outcome Markets',
      'Macroeconomic Volatility Hedging Tools',
      'Community Prediction Creation & Staking Incentives'
    ],
    itemsZh: [
      '去中心化预言机共识数据仲裁协议',
      '面向二元与多元预测事件的 AMM 流动性引擎',
      '宏观经济波动与突发事件对冲工具',
      '社区自主发起预测市场与质押收益奖励'
    ],
    status: 'upcoming',
    quarter: '2027'
  },
  {
    id: 'm-2027-08',
    period: 'August 2027',
    periodZh: '2027年8月',
    title: 'AI Investment-Research & Strategy Subscription',
    titleZh: 'AI投研与策略订阅',
    description: 'Institutional-grade quantitative alpha analytics, on-chain whale tracking, and premium strategy marketplace.',
    descriptionZh: '开放机构级量化 Alpha 投研智库、链上巨鲸异动追踪系统及高端量化策略订阅中心。',
    items: [
      'Institutional Market Intelligence & Quantitative Alpha Feeds',
      'On-Chain Smart Money & Liquidity Velocity Analytics',
      'Automated Multi-Strategy Backtesting Cloud Suite',
      'Tiered Strategy Subscriptions with CGT Discounts'
    ],
    itemsZh: [
      '机构级市场深度情报与量化 Alpha 交易信号流',
      '链上聪明钱与巨鲸流动性实时雷达监测',
      '支持10年+历史回测的云端策略工坊',
      '阶梯式高收益策略订阅与 CGT 折扣生态'
    ],
    status: 'upcoming',
    quarter: '2027'
  },
  {
    id: 'm-2027-10',
    period: 'October 2027',
    periodZh: '2027年10月',
    title: 'CG Game Cluster Launch',
    titleZh: 'CG游戏矩阵上线',
    description: 'Deployment of Web3 immersive gaming ecosystem, NFT secondary trading, and dynamic CGT in-game economic cycles.',
    descriptionZh: '推出沉浸式 Web3 游戏矩阵、NFT 跨游戏二级流转市场以及由 CGT 赋能的闭环游戏经济系统。',
    items: [
      'Flagship Financial Simulator & Conquest Metaverse Titles',
      'Cross-Game Interoperable NFT Asset Marketplace',
      'Global Guild Esports Tournaments & Prize Pools',
      'In-Game CGT Minting & Deflationary Burn Mechanism'
    ],
    itemsZh: [
      '首批旗舰级金融模拟与星际征战元宇宙游戏上线',
      '支持跨游戏通用的高价值 NFT 资产交易市场',
      '全球公会电竞锦标赛与百万美金奖池争霸',
      '游戏内 CGT 铸造与通缩销毁闭环机制'
    ],
    status: 'upcoming',
    quarter: '2027'
  },
  {
    id: 'm-2027-12',
    period: 'December 2027',
    periodZh: '2027年12月',
    title: 'Centralized Exchange (CEX) Launch',
    titleZh: '中心化交易所 (CEX) 上线',
    description: 'Grand opening of the high-throughput, institutional-grade CogniGrid CEX platform with deep unified multi-market liquidity.',
    descriptionZh: 'CogniGrid 聚合中心化交易所 (CEX) 盛大启航，提供百万级 TPS 超高速撮合与全品类统一流动性。',
    items: [
      '1M TPS High-Performance Matching Engine Deployment',
      'Unified Liquidity Across Crypto, Gold & Synthetics',
      '100% Real-Time Merkle Tree Proof of Reserves',
      'Global CEX License Acquisition & Institutional Custody'
    ],
    itemsZh: [
      '每秒百万笔 (1M TPS) 超高性能撮合引擎正式启用',
      '聚合加密货币、黄金与合成大宗商品的统一度量池',
      '100% 默克尔树链上实时储备金证明透明公示',
      '全球合规牌照布局与顶级机构离线冷资产托管'
    ],
    status: 'upcoming',
    quarter: '2027'
  }
];

export const legalDocumentsData: LegalDocument[] = [
  {
    id: 'authorization-letter',
    title: 'Official Authorization Letter & Letter of Appointment',
    titleZh: '官方授权书与全权任命公函 (Letter of Appointment)',
    docNumber: 'CQF-AUTH-2026-001',
    issuer: 'Cogni Quant Foundation',
    issuerZh: 'Cogni Quant 基金会 (Cogni Quant Foundation)',
    authorizedPerson: 'Mr. Ethan (Global CEO & Founder)',
    effectiveDate: 'August 14, 2026',
    jurisdiction: 'State of Colorado, USA',
    jurisdictionZh: '美国科罗拉多州 (State of Colorado, USA)',
    status: 'Permanently Effective & Verified',
    statusZh: '永久生效且官方验证 (Permanently Effective)',
    pages: 2,
    summary: 'The Foundation grants Mr. Ethan permanent, exclusive, highest global authority to lead CogniGrid as CEO, including project strategy, technical R&D, supernode federation, global marketing, and sole official spokesperson.',
    summaryZh: '基金会授予 Ethan 先生永久、排他性的全球最高管理与决策权，正式任命其为 CogniGrid 全球 CEO 兼创始人，统辖战略、技术、市场、超级节点及生态最高决策，并为唯一官方发言人。'
  },
  {
    id: 'membership-certificate',
    title: 'Membership Certificate (100% Interest)',
    titleZh: '成员所有权证书 (Membership Certificate - 100% 权益)',
    docNumber: 'CERT-001',
    issuer: 'CogniQuant Foundation LLC',
    issuerZh: 'CogniQuant Foundation LLC (美国科罗拉多州注册)',
    authorizedPerson: 'Mr. Ethan',
    effectiveDate: 'August 14, 2026',
    jurisdiction: 'Organized under the Laws of the State of Colorado',
    jurisdictionZh: '依据美国科罗拉多州法律正式组建成立',
    status: 'Officially Sealed & Recorded',
    statusZh: '官方盖印与法定备案 (Officially Sealed & Recorded)',
    pages: 1,
    summary: 'Certifies that Mr. Ethan is the 100% owner of interests in CogniQuant Foundation LLC, with full rights and authorities under the state laws.',
    summaryZh: '证明 Ethan 先生合法持有 CogniQuant Foundation LLC 100% 全部成员权益，享有公司章程及法律赋予之全部权利与管辖权。'
  }
];

export const communityChannelsData: CommunityChannel[] = [
  {
    name: 'Telegram Global Community',
    nameZh: 'Telegram 官方全球社群',
    handle: '@CogniGrid',
    url: 'https://s.share11.top/CogniGrid',
    icon: 'Send',
    description: 'Official global communication hub for real-time announcements, partner discussions, and 24/7 multilingual support.',
    descriptionZh: '官方全球核心交流群，实时发布平台动态、技术进展、节点招募与24小时多语言互动支持。',
    badge: 'Official Community',
    badgeZh: '官方核心大群',
    color: '#0088cc'
  },
  {
    name: 'X (Twitter) Official',
    nameZh: 'X (Twitter) 官方推特',
    handle: '@CogniGrid',
    url: 'https://x.com/CogniGrid',
    icon: 'Twitter',
    description: 'Follow our official broadcast channel for executive dispatches, ecosystem alpha, AMA announcements, and major milestones.',
    descriptionZh: '官方权威发布阵地，关注获取最新公告、高管动态、生态 Alpha 资讯及全球活动直播。',
    badge: 'Official X / Twitter',
    badgeZh: '官方推特',
    color: '#1da1f2'
  },
  {
    name: 'Goldhouse Official Group',
    nameZh: 'Goldhouse 官方交流群',
    handle: 'CogniGrid Official Group',
    url: 'https://imweb.goldhouse.cc/group?gid=TGS%232MZHM5N5CY&inviter=8B4UVNYuNh&groupname=%F0%9F%8C%8DCogniGrid%E5%AE%98%E6%96%B9%E4%BA%A4%E6%B5%81%E7%BE%A4',
    icon: 'MessageSquare',
    description: 'Exclusive institutional and VIP community group on Goldhouse IM for private discussions, syndicate networking, and partner inquiries.',
    descriptionZh: 'Goldhouse 专属官方交流大群，面向机构、战略合伙人及核心持币者的深度探讨与业务对接空间。',
    badge: 'Verified Group',
    badgeZh: '官方认证群',
    color: '#eab308'
  }
];

export const announcementsData: Announcement[] = [
  {
    id: 'ann-001',
    title: 'Official Declaration: Appointment of Mr. Ethan as Global CEO & Power of Attorney Mandate',
    titleZh: '官方公告：Cogni Quant 基金会正式任命 Mr. Ethan 为全球 CEO 兼全权最高负责人',
    date: '2026-08-14',
    category: 'foundation',
    categoryZh: '基金会任命',
    isPinned: true,
    author: 'Cogni Quant Foundation Board of Governance',
    summary: 'Cogni Quant Foundation officially announces the appointment of Mr. Ethan as the Founder & Global CEO of CogniGrid, granting exclusive, permanent highest authority.',
    summaryZh: 'Cogni Quant 基金会正式发布公函，正式任命 Mr. Ethan 为 CogniGrid 创始人兼全球最高领导人 (CEO)，授予其永久排他性全权决策权与唯一官方发言人资格。',
    content: `Cogni Quant Foundation, as the exclusive top-level incubation, supervision, and endorsement institution of the CogniGrid global intelligent computing ecosystem, proudly declares:

1. Mr. Ethan is officially appointed as the Founder & Global Chief Executive Officer (CEO) of CogniGrid, confirmed as the highest decision-maker and overall person in charge.
2. The Foundation grants Mr. Ethan permanent, exclusive, highest global authority to formulate strategy, manage technical R&D, deploy supernodes, lead governance, and act as the sole official spokesperson.
3. This decision has been formally sealed in the State of Colorado under Certificate No. 001 and Authorization Document CQF-AUTH-2026-001.`,
    contentZh: `Cogni Quant 基金会作为 CogniGrid 全球智能算力与金融生态的独家顶级孵化、监管与背书机构，特此郑重公告：

一、为全面推进 CogniGrid 全球战略布局、生态建设及商业落地，基金会正式任命 Mr. Ethan 为 CogniGrid 创始人兼全球首席执行官 (CEO)，确立其为整个项目的最高决策者和全面负责人。
二、基金会赋予 Mr. Ethan 永久性、排他性最高全球职权，全面统揽项目总体战略、研发迭代、超级节点建设、全球品牌推广、治理体系落地及唯一官方发言人职能。
三、本决定经美国科罗拉多州法定公证与印鉴备案，对应证书编号 CERT-001 与正式授权函 CQF-AUTH-2026-001。`,
    referenceDoc: 'authorization-letter'
  },
  {
    id: 'ann-002',
    title: '20,000,000 USDT Ecosystem Reserve & R&D Development Fund Allocation by Cogni Quant Foundation',
    titleZh: 'Cogni Quant 基金会拨付 20,000,000 USDT 生态发展储备金与研发专项基金',
    date: '2026-08-18',
    category: 'foundation',
    categoryZh: '资金储备',
    isPinned: true,
    author: 'Cogni Quant Foundation Treasury',
    summary: 'Cogni Quant Foundation confirms current assets under management of 20,000,000 USDT deployed to safeguard infrastructure scaling and liquidity depth.',
    summaryZh: 'Cogni Quant 基金会公布当前管理的 20,000,000 USDT 专属资产储备，全额注入生态金库，为9大生态系统研发、流动性做市与全球超级节点提供坚实资本支撑。',
    content: `To lay an unbreakable financial and technical foundation for CogniGrid:

- Assets Under Management (AUM): 20,000,000 USDT
- Fund Allocation Breakdown:
  • 40% (8,000,000 USDT): CogniQuant AI Labs Research & Distributed Quantitative Engine
  • 30% (6,000,000 USDT): Liquidity Depth & Market-Making Stability Reserve
  • 20% (4,000,000 USDT): Global Partner & Supernode Incentive Pool
  • 10% (2,000,000 USDT): Global Compliance, Legal Infrastructure & Security Audits`,
    contentZh: `为奠定 CogniGrid 坚不可摧的资金与技术底座，Cogni Quant 基金会专项储备资金已正式划拨：

- 基金会当前实际在管资产规模 (AUM)：20,000,000 USDT
- 资金配置方案：
  • 40% (800万 USDT)：专项用于 CogniQuant AI 实验室深度算法研发与分布式量化引擎
  • 30% (600万 USDT)：跨市场流动性做市与系统性风险对冲储备金
  • 20% (400万 USDT)：全球超级节点创世招募与战略合伙人生态扶持
  • 10% (200万 USDT)：国际合规架构、法律合规与权威代码安全审计`,
    referenceDoc: 'membership-certificate'
  },
  {
    id: 'ann-003',
    title: 'Genesis Launch: Global Partner & Supernode Recruitment Phase 1 Initiated',
    titleZh: '创世启航：CogniGrid 全球合伙人与超级节点第一期招募正式启动',
    date: '2026-08-20',
    category: 'community',
    categoryZh: '社区与节点',
    isPinned: false,
    author: 'CogniGrid Global Operations',
    summary: 'August 2026 milestone achieved. Opening application portals for top global quantitative institutions, Web3 communities, and regional leaders.',
    summaryZh: '2026年8月里程碑如期达成，面向全球顶尖量化机构、Web3 社群领袖及区域生态伙伴正式开通创世超级节点申请通道。',
    content: `In accordance with the 2026-2027 Ecosystem Roadmap:

Phase 1 Global Partner Recruitment is now live. Selected supernode partners will enjoy:
1. Priority participation in SocialFi and AI Quantitative System Alpha testing.
2. Direct revenue share dividends from network transactions and minting fees.
3. Dedicated node management dashboard and institutional R&D support from CogniQuant AI Labs.`,
    contentZh: `依照 CogniGrid 2026-2027 生态路线图规划：

第一期全球合伙人招募通道现已全面开启。成功入选的超级节点将享有：
1. 优先参与9月 SocialFi 及10月 AI 量化与铸造系统内测特权；
2. 享受全网交易手续费分润、铸造分红及节点专属质押激励；
3. 获得专属节点管理后台及 CogniQuant AI 实验室全天候技术策略支持。`
  },
  {
    id: 'ann-004',
    title: 'CogniQuant AI Labs Publishes Multi-Strategy Quantitative Architecture Whitepaper',
    titleZh: 'CogniQuant AI 实验室发布多策略量化架构技术白皮书',
    date: '2026-08-16',
    category: 'technical',
    categoryZh: '技术与研发',
    isPinned: false,
    author: 'CogniQuant AI Labs',
    summary: 'Comprehensive breakdown of our deep learning multi-factor prediction models, sub-millisecond execution matrix, and multi-market connection bridges.',
    summaryZh: '全面揭秘深度学习多因子趋势预测模型、微秒级跨市场撮合套利架构及 Web3.0 去中心化数据资产交互接口。',
    content: `CogniQuant AI Labs has released its foundational architecture paper, outlining:
- Multi-market high-frequency data ingestion pipelines.
- Distributed neural network quantitative models backtested over 10-year multi-asset cycles.
- Decentralized asset verification and autonomous risk hedging engines.`,
    contentZh: `CogniQuant AI 实验室技术团队正式公布核心系统架构：
- 覆盖全球主流数字资产与黄金外汇市场的高并发毫秒级数据管线；
- 经过10年以上跨资产周期回测的分布式深度神经网络量化预测模型；
- 全链上智能风控与全自动跨币种套利结算协议。`
  }
];

export const translations = {
  en: {
    nav: {
      about: 'About CogniGrid',
      foundation: 'Foundation',
      ecosystem: '9 Ecosystems',
      leadership: 'Leadership & Mandate',
      roadmap: 'Roadmap',
      announcements: 'Announcements',
      community: 'Community',
      applyPartner: 'Partner Portal',
      whitepaper: 'Ecosystem Deck',
      language: 'Language'
    },
    hero: {
      badge: 'Cogni Quant Foundation • AI Financial Infrastructure',
      titleLine1: 'Global AI-Driven',
      titleLine2: 'Intelligent Financial Ecosystem',
      description: 'CogniGrid is a comprehensive global financial network developed under Cogni Quant Foundation, interconnecting market data, AI quantitative strategies, Web3.0 digital identity, and global payment scenarios via the CGT value carrier.',
      exploreBtn: 'Explore 9 Ecosystems',
      verifyDocBtn: 'View Official Mandate & Seal',
      partnerBtn: 'Global Partner Recruitment',
      liveStats: {
        aum: '20,000,000 USDT',
        aumLabel: 'Foundation Reserve AUM',
        ecosystems: '9 Major',
        ecosystemsLabel: 'Interconnected Ecosystems',
        executionSpeed: '< 10 ms',
        executionSpeedLabel: 'AI Quant Execution Latency',
        governance: 'Colorado, USA',
        governanceLabel: 'Legal Jurisdiction Entity'
      }
    },
    about: {
      badge: 'Core Architecture',
      title: 'Connecting Capital, Technology, and Global Markets',
      subtitle: 'CogniGrid is neither a single trading product nor limited to any single market or asset. It is an AI-native global intelligent financial infrastructure.',
      pillarsTitle: 'The 4 Intelligent Pillars of CogniGrid',
      pillar1: {
        title: 'AI Quantitative Technology',
        role: 'Intelligent Engine',
        desc: 'Deep neural network models, multi-strategy algorithms, and millisecond automated execution developed by CogniQuant AI Labs.'
      },
      pillar2: {
        title: 'Global Multi-Market Capabilities',
        role: 'Financial Connection Layer',
        desc: 'Unifying global crypto, gold, foreign exchange, synthetic commodities, and cross-border payment corridors.'
      },
      pillar3: {
        title: 'Web3.0 Infrastructure',
        role: 'Digital Identity & Collaboration',
        desc: 'Decentralized identity, trustless smart contracts, on-chain verifiable audit trails, and multi-account asset ledgers.'
      },
      pillar4: {
        title: 'CGT Token Carrier',
        role: 'Ecological Application & Value Core',
        desc: 'The universal value carrier powering gas micro-settlement, staking incentives, fee discounts, and ecosystem governance.'
      },
      labsBadge: 'R&D Institution',
      labsTitle: 'CogniQuant AI Labs',
      labsDesc: 'The core research and development institution established by Cogni Quant Foundation. Conducting continuous R&D covering global market data, AI analytics, multi-strategy quantification, automated trade execution, multi-account management, intelligent risk control, and Web3.0 data/asset interfaces.'
    },
    foundation: {
      badge: 'Governing Body',
      title: 'Cogni Quant Foundation',
      subtitle: 'Governing body responsible for global strategy, resource allocation, and governance promotion of the CogniGrid ecosystem.',
      missionTitle: 'Foundation Mission',
      missionDesc: 'To gather global capital, technology, and industrial resources to build a secure, transparent, verifiable, and scalable AI-powered intelligent financial ecosystem network.',
      aumCard: {
        title: 'Current Assets Under Management (AUM)',
        amount: '20,000,000 USDT',
        desc: 'With long-term capital investment, technological R&D support, international resource linkage, and organizational governance, the Foundation lays an unbreakable foundation for CogniGrid.'
      },
      allocations: [
        { label: 'AI Labs & Quant R&D', pct: '40%', amount: '8,000,000 USDT' },
        { label: 'Market Liquidity & Risk Reserve', pct: '30%', amount: '6,000,000 USDT' },
        { label: 'Global Supernodes & Ecosystem Incentives', pct: '20%', amount: '4,000,000 USDT' },
        { label: 'Global Compliance, Audits & Legal', pct: '10%', amount: '2,000,000 USDT' }
      ]
    },
    leadership: {
      badge: 'Governance & Structure',
      title: 'Organizational Leadership & Official Authority',
      subtitle: 'Official Letter of Appointment and Power of Attorney issued by Cogni Quant Foundation to Mr. Ethan as Global CEO.',
      ceoMandate: {
        badge: 'Official CEO Mandate',
        title: 'Founder & Global Chief Executive Officer',
        name: 'Mr. Ethan',
        mandateTitle: 'Sole Highest Authorization & Legal Mandate',
        mandateDesc: 'By official resolution of Cogni Quant Foundation (State of Colorado, USA), Mr. Ethan holds 100% membership interest of CogniQuant Foundation LLC and is granted permanent, exclusive, highest global authority to govern the CogniGrid ecosystem.',
        viewDocsBtn: 'Inspect Official Documents & Seal'
      },
      teamTitle: 'Executive Leadership Team',
      teamSubtitle: 'World-class professionals driving global operations, AI research, treasury, marketing, and business alliances.'
    },
    ecosystemSection: {
      badge: 'Synergistic Network',
      title: 'Nine Major Ecosystems',
      subtitle: 'A cross-market, cross-regional, and cross-scenario global collaborative network building a world-class Web3.0 financial ecosystem cluster.',
      filterAll: 'All 9 Ecosystems',
      filterCore: 'Core AI & Quant',
      filterDefi: 'DeFi & SocialFi',
      filterTrading: 'Trading & RWA',
      filterInfra: 'Payments & Infrastructure'
    },
    roadmapSection: {
      badge: 'Milestone Execution',
      title: 'Ecosystem Development Roadmap',
      subtitle: 'Build a unique world-class Web3.0 financial ecosystem cluster (2026 - 2027).',
      activeBadge: 'Current Active Milestone: August 2026',
      allTab: 'Full Roadmap',
      q2026: 'Phase 1: 2026 Genesis',
      q2027: 'Phase 2: 2027 Expansion'
    },
    announcementsSection: {
      badge: 'Press Releases & Notices',
      title: 'Latest Platform Announcements',
      subtitle: 'Official disclosures from Cogni Quant Foundation and CogniGrid executive leadership.',
      readFull: 'Read Full Declaration',
      pinned: 'Pinned Announcement'
    },
    communitySection: {
      badge: 'Connect With Us',
      title: 'Official Community Channels',
      subtitle: 'Join our verified global channels for real-time discussions, technical alpha, and partnership inquiries.',
      joinNow: 'Join Channel',
      copyLink: 'Copy Link',
      copied: 'Copied!'
    },
    docModal: {
      title: 'Official Legal Document & Authorization Viewer',
      verifiedSeal: 'Cogni Quant Foundation Common Seal (Colorado)',
      authStatement: 'Sole Highest Authorization • Permanent Exclusive Authorization • Full Official Endorsement',
      close: 'Close Viewer',
      downloadPdf: 'Official Document Summary'
    },
    footer: {
      desc: 'CogniGrid is a global AI-driven intelligent financial ecosystem network developed under Cogni Quant Foundation. Connecting capital, technology, global markets, and ecological applications.',
      foundationNote: 'CogniQuant Foundation LLC is organized under the laws of the State of Colorado, USA. Managed Reserve: 20,000,000 USDT.',
      rights: 'All Rights Reserved. CogniGrid & Cogni Quant Foundation.',
      disclaimer: 'Disclaimer: This website provides official information for CogniGrid ecosystem initiatives. Cryptographic asset operations carry market risks. Always participate responsibly through verified official channels.'
    }
  },
  zh: {
    nav: {
      about: '关于 CogniGrid',
      foundation: '基金会介绍',
      ecosystem: '九大生态',
      leadership: '组织架构与授权',
      roadmap: '发展路线图',
      announcements: '最新官方公告',
      community: '官方社群',
      applyPartner: '合伙人门户',
      whitepaper: '生态白皮书',
      language: '语言 (Language)'
    },
    hero: {
      badge: 'Cogni Quant 基金会 • AI 智能金融基础设施',
      titleLine1: '全球 AI 驱动的',
      titleLine2: '智能金融生态网络',
      description: 'CogniGrid 是由 Cogni Quant 基金会推动并开发建设的全球 AI 驱动智能金融生态网络，以 AI 量化技术为智能引擎、全球多市场能力为金融连接层、Web3.0 为数字身份与资产协作底座、CGT 为生态应用与价值载体，通过九大生态构建跨市场、跨地域、跨场景的全球协同网络。',
      exploreBtn: '探索九大生态',
      verifyDocBtn: '查阅基金会全权授权书',
      partnerBtn: '全球合伙人招募',
      liveStats: {
        aum: '20,000,000 USDT',
        aumLabel: '基金会专属资产管理规模 (AUM)',
        ecosystems: '9 大核心',
        ecosystemsLabel: '全景协同金融生态矩阵',
        executionSpeed: '< 10 毫秒',
        executionSpeedLabel: 'AI 量化执行响应延迟',
        governance: '美国科罗拉多州',
        governanceLabel: '法定注册实体与管辖地'
      }
    },
    about: {
      badge: '核心定位与架构',
      title: '连接资本、技术、全球市场与生态应用',
      subtitle: 'CogniGrid 既不是单一交易产品，也不局限于单一市场或资产，而是致力于构建连接全球用户、市场数据、量化策略、交易账户、数字资产、生态应用和全球支付场景的综合基础设施。',
      pillarsTitle: 'CogniGrid 四大核心智能支柱',
      pillar1: {
        title: 'AI 量化技术',
        role: '智能引擎',
        desc: '由 CogniQuant AI 实验室自主研发的深度神经网络模型、多策略算法与毫秒级自动化交易执行引擎。'
      },
      pillar2: {
        title: '全球多市场能力',
        role: '金融连接层',
        desc: '打通全球数字资产、黄金大宗商品、外汇外汇及跨国支付清算通道，实现统一流动性调度。'
      },
      pillar3: {
        title: 'Web3.0 基础设施',
        role: '数字身份与资产协作',
        desc: '去中心化身份体系、无需信任的智能合约、链上可查验证明与多账户资产协同账本。'
      },
      pillar4: {
        title: 'CGT 价值载体',
        role: '生态应用与价值核心',
        desc: '贯穿整个生态的通用价值流转载体，支撑微支付 Gas 结算、质押分润、手续费减免与去中心化治理。'
      },
      labsBadge: '核心研发机构',
      labsTitle: 'CogniQuant AI Labs (AI 实验室)',
      labsDesc: 'CogniQuant AI Labs 是由基金会发起设立的核心研发机构，持续开展涵盖全球市场数据、人工智能分析、多策略量化、自动化交易执行、多账户管理、智能风控以及 Web3.0 数据与资产接口的全链条研发。'
    },
    foundation: {
      badge: '治理机构',
      title: 'Cogni Quant 基金会',
      subtitle: 'Cogni Quant Foundation 作为治理主体，承担 CogniGrid 生态全球战略、资源调配与治理推进职能。',
      missionTitle: '基金会使命',
      missionDesc: '凝聚全球资本、技术与产业资源，打造安全、透明、可验证、可拓展的 AI 智能金融生态网络。',
      aumCard: {
        title: 'Cogni Quant 基金会当前资产管理规模 (AUM)',
        amount: '20,000,000 USDT',
        desc: '通过长期资本投入、技术研发支持、国际资源联动与组织治理，基金会将为 CogniGrid 的发展奠定坚实稳定的基石。'
      },
      allocations: [
        { label: 'AI 实验室与核心量化算法研发', pct: '40%', amount: '8,000,000 USDT' },
        { label: '市场流动性深度与系统风险对冲储备', pct: '30%', amount: '6,000,000 USDT' },
        { label: '全球超级节点创世扶持与生态激励', pct: '20%', amount: '4,000,000 USDT' },
        { label: '国际合规牌照、法律架构与权威安全审计', pct: '10%', amount: '2,000,000 USDT' }
      ]
    },
    leadership: {
      badge: '组织架构与授权',
      title: '核心管理团队与法定授权',
      subtitle: '展示 Cogni Quant 基金会向 Mr. Ethan 颁发的任命书与全权委托书 (Letter of Appointment and Power of Attorney)。',
      ceoMandate: {
        badge: '基金会全权任命',
        title: '创始人兼全球首席执行官 (CEO)',
        name: 'Mr. Ethan (伊森)',
        mandateTitle: '唯一最高授权与法定公函',
        mandateDesc: '根据 Cogni Quant 基金会（美国科罗拉多州注册）正式决议，Mr. Ethan 依法持有 CogniQuant Foundation LLC 100% 成员权益，获授永久排他性全球最高职权，统辖 CogniGrid 生态总体战略、研发迭代、全球市场及最高决策。',
        viewDocsBtn: '查看官方授权公函与科罗拉多州钢印'
      },
      teamTitle: '全球高管领导团队',
      teamSubtitle: '汇聚来自全球运营、AI算法、财政治理、品牌营销及商务拓展领域的资深领军专家。'
    },
    ecosystemSection: {
      badge: '协同金融网络',
      title: '九大核心生态系统',
      subtitle: '打造独一无二的世界级 Web3.0 金融生态集群，构建跨市场、跨地域、跨场景的全球协同网络。',
      filterAll: '全部九大生态',
      filterCore: '核心 AI 与量化',
      filterDefi: 'DeFi 与社交金融',
      filterTrading: '交易与黄金 RWA',
      filterInfra: '支付与基础设施'
    },
    roadmapSection: {
      badge: '里程碑推进',
      title: '生态发展路线图',
      subtitle: '构建独一无二的世界级 Web3.0 金融生态集群 (2026 - 2027)。',
      activeBadge: '当前正在推进阶段：2026年8月',
      allTab: '完整路线图',
      q2026: '第一阶段：2026 创世启航',
      q2027: '第二阶段：2027 全球扩张'
    },
    announcementsSection: {
      badge: '官方通告与公告',
      title: '平台最新公告',
      subtitle: 'Cogni Quant 基金会与 CogniGrid 管理层发布的权威公示与重要进展。',
      readFull: '阅读公告全文',
      pinned: '置顶重点公告'
    },
    communitySection: {
      badge: '全球官方社群',
      title: '官方交流与资讯通道',
      subtitle: '即刻加入 CogniGrid 官方认证交流群，获取一线资讯、技术进展并与全球节点伙伴实时互动。',
      joinNow: '立即进入频道',
      copyLink: '复制链接',
      copied: '已复制链接！'
    },
    docModal: {
      title: '官方法定公函与授权证书检视器',
      verifiedSeal: 'Cogni Quant 基金会官方钢印 (Common Seal - Colorado)',
      authStatement: '唯一最高授权 • 永久排他性授权 • 基金会全面背书',
      close: '关闭窗口',
      downloadPdf: '官方公函摘要'
    },
    footer: {
      desc: 'CogniGrid 是由 Cogni Quant 基金会推动并开发建设的全球 AI 驱动智能金融生态网络。连接资本、技术、全球市场与生态应用，打造 AI 原生全球智能金融基础设施。',
      foundationNote: 'CogniQuant Foundation LLC 依据美国科罗拉多州法律正式组建。当前专属资产管理规模：20,000,000 USDT。',
      rights: '版权所有 © 2026 CogniGrid & Cogni Quant Foundation。保留所有权利。',
      disclaimer: '免责声明：本网站所呈现内容为 CogniGrid 生态官方公示信息。加密资产与金融市场具有波动风险，请务必通过官方验证渠道理性参与。'
    }
  }
};
