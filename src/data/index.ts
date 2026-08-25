// Centralized dataset for CogniGrid ecosystem
import {
  DocumentInfo,
  BusinessPillar,
  MarketAsset,
  RoadmapMilestone,
  EcosystemItem,
  PlatformAnnouncement,
  CommunityChannel,
  ExecutiveLeader
} from '../types';
import { ExecutiveImages } from '../assets';

export const OFFICIAL_DOCUMENTS: DocumentInfo[] = [
  {
    id: 'fincen-msb',
    category: 'fincen',
    titleEn: 'FinCEN MSB Federal Registration',
    titleZh: '美国财政部 FinCEN MSB 联邦金融牌照',
    subtitleEn: 'Financial Crimes Enforcement Network - Department of the Treasury',
    subtitleZh: '美国财政部金融犯罪执法网络 (FinCEN) 官方备案登记',
    registrationNumber: '31000337267999',
    issueDate: '2026-08-11',
    issuingAuthorityEn: 'U.S. Department of the Treasury (FinCEN)',
    issuingAuthorityZh: '美国财政部金融犯罪执法局 (FinCEN)',
    statusEn: 'Active Registered MSB',
    statusZh: '已生效注册 MSB 机构',
    badgeType: 'verified',
    pageCount: 1,
    documentType: 'transcript',
    sealType: 'fincen-treasury',
    summaryEn: 'CogniQuant Foundation is officially registered as a Money Services Business (MSB) under Bank Secrecy Act (BSA) regulations at 31 CFR 1022.380(a)-(f), authorized across all 50 U.S. states and territories.',
    summaryZh: 'CogniQuant Foundation 已依照《银行保密法》(BSA) 31 CFR 1022.380(a)-(f) 条例向美国财政部 FinCEN 完成联邦级 MSB 牌照合规注册，授权全美50个州及所有海外属地展业。',
    details: [
      { labelEn: 'MSB Registration No.', labelZh: 'MSB 登记编号', valueEn: '31000337267999', valueZh: '31000337267999' },
      { labelEn: 'Legal Entity Name', labelZh: '法定实体名称', valueEn: 'CogniQuant Foundation', valueZh: 'CogniQuant Foundation' },
      { labelEn: 'Registration Type', labelZh: '注册类型', valueEn: 'Initial Registration', valueZh: '初始注册 (Initial Registration)' },
      { labelEn: 'Street Address', labelZh: '注册实体地址', valueEn: '1001 17th Street, Denver, COLORADO 80202', valueZh: '1001 17th Street, Denver, COLORADO 80202' },
      { labelEn: 'Authorized MSB Scope', labelZh: '获准业务范围', valueEn: 'Money transmitter, Dealer in foreign exchange, Check casher, Seller of prepaid access & money orders', valueZh: '资金传送 (Money Transmitter)、外汇交易商、支票兑现、预付凭证及汇票业务' },
      { labelEn: 'Jurisdiction Coverage', labelZh: '准入区域范围', valueEn: 'All 50 States, DC, Guam, Puerto Rico, US Virgin Islands & Territories', valueZh: '全美所有50个州、哥伦比亚特区、关岛、波多黎各及所有海外领地' },
      { labelEn: 'Authorized Signature Date', labelZh: '授权签署日期', valueEn: '08/04/2026', valueZh: '2026年08月04日' },
      { labelEn: 'Received Date', labelZh: '官方受理日期', valueEn: '08/03/2026', valueZh: '2026年08月03日' }
    ],
    officialSearchUrl: 'https://www.fincen.gov/msb-state-selector',
    searchInstructionEn: 'Visit FinCEN official MSB Registrant Search, select Colorado or enter MSB Registration Number "31000337267999" or Legal Name "CogniQuant Foundation" to verify live status.',
    searchInstructionZh: '访问美国财政部 FinCEN 官方查询页面，输入 MSB 编号 "31000337267999" 或机构名称 "CogniQuant Foundation" 即可直接调取联邦官方登记档案。',
    certificatePdfName: 'FinCEN MSB Registration Status Information.pdf',
    pages: [
      {
        pageNumber: 1,
        totalPages: 1,
        pageTitleEn: 'Financial Crimes Enforcement Network - MSB Registration Status Information',
        pageTitleZh: '美国财政部金融犯罪执法局 - MSB 注册状态信息表',
        sections: [
          {
            headingEn: 'REGISTRANT IDENTIFICATION',
            headingZh: '备案主体基本信息',
            isKeyGrid: true,
            gridItems: [
              { labelEn: 'MSB Registration Number', labelZh: 'MSB 注册编号', valueEn: '31000337267999', valueZh: '31000337267999' },
              { labelEn: 'Registration Type', labelZh: '注册类型', valueEn: 'Initial Registration', valueZh: '初始注册' },
              { labelEn: 'Legal Name', labelZh: '法定实体名称', valueEn: 'CogniQuant Foundation', valueZh: 'CogniQuant Foundation' },
              { labelEn: 'Street Address', labelZh: '法定地址', valueEn: '1001 17th Street, Denver, COLORADO 80202', valueZh: '1001 17th Street, Denver, COLORADO 80202' },
              { labelEn: 'Received Date', labelZh: '受理日期', valueEn: '08/03/2026', valueZh: '2026-08-03' },
              { labelEn: 'Authorized Signature Date', labelZh: '授权签署日期', valueEn: '08/04/2026', valueZh: '2026-08-04' }
            ],
            contentEn: 'The MSB Registrant Search Web page, which is updated on a weekly basis, contains entities that have registered as Money Services Businesses (MSBs) pursuant to the Bank Secrecy Act (BSA) regulations at 31 CFR 1022.380(a)-(f), administered by the Financial Crimes Enforcement Network (FinCEN).',
            contentZh: 'MSB 注册人公示数据库每周更新，包含依据《银行保密法》(BSA) 31 CFR 1022.380(a)-(f) 条例在金融犯罪执法网络 (FinCEN) 注册登记的货币服务机构 (MSB)。'
          },
          {
            headingEn: 'MSB ACTIVITIES AUTHORIZED',
            headingZh: '获准开展的货币服务业务类别',
            isList: true,
            listItemsEn: [
              'Money transmitter (资金传送与清结算)',
              "Dealer in foreign exchange (外汇兑换与交易经纪)",
              "Check casher (Including traveler's and money orders) (支票及汇票兑现)",
              "Issuer of money orders & traveler's checks (汇票及旅行支票发行)",
              'Seller of money orders & traveler\'s checks (汇票及旅行支票销售)',
              'Seller of prepaid access (预付凭证及充值凭证销售)'
            ],
            listItemsZh: [
              '资金传送 (Money Transmitter)',
              '外汇交易 (Dealer in foreign exchange)',
              '支票兑现 (Check casher)',
              '汇票及旅行支票发行与销售 (Issuer & Seller of money orders)',
              '预付凭证销售 (Seller of prepaid access)'
            ]
          },
          {
            headingEn: 'STATES & TERRITORIES OF MSB ACTIVITIES',
            headingZh: '准入业务州及地区',
            isCallout: true,
            contentEn: 'All States & Territories: Alabama, Alaska, American Samoa, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, District Of Columbia, Federated States Of Micronesia, Florida, Georgia, Guam, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Marshall Islands, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Northern Mariana Islands, Ohio, Oklahoma, Oregon, Palau, Pennsylvania, Puerto Rico, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Virgin Islands US, Washington, West Virginia, Wisconsin, Wyoming.',
            contentZh: '全美所有 50 个州、华盛顿哥伦比亚特区、关岛、波多黎各、美属维尔京群岛及全部海外属地全域合法展业。'
          }
        ],
        footerTextEn: 'Department of the Treasury - Financial Crimes Enforcement Network (FinCEN) • Date: 08/11/2026',
        footerTextZh: '美国财政部金融犯罪执法局 (FinCEN) • 归档日期：2026年08月11日'
      }
    ]
  },
  {
    id: 'colorado-good-standing',
    category: 'state',
    titleEn: 'Certificate of Fact of Good Standing',
    titleZh: '科罗拉多州政府良好存续证明书 (Good Standing)',
    subtitleEn: 'Office of the Secretary of State of Colorado',
    subtitleZh: '美国科罗拉多州州务卿官方认证文件',
    registrationNumber: '20261949922',
    issueDate: '2026-08-03',
    issuingAuthorityEn: 'Colorado Secretary of State (Jena Griswold)',
    issuingAuthorityZh: '科罗拉多州州务卿办公室 (Jena Griswold)',
    statusEn: 'Complied & In Good Standing',
    statusZh: '完全合规且处于良好存续状态',
    badgeType: 'good-standing',
    pageCount: 1,
    documentType: 'certificate',
    sealType: 'colorado-state',
    summaryEn: 'Official government certificate issued under the Great Seal of the State of Colorado certifying that CogniQuant Foundation is duly formed and in Good Standing.',
    summaryZh: '科罗拉多州州务卿盖印官方证明，确认 CogniQuant Foundation 依科罗拉多州法律合法成立，已履行全部法定义务，处于良好存续状态 (Good Standing)。',
    details: [
      { labelEn: 'Entity ID Number', labelZh: '公司官方实体编号', valueEn: '20261949922', valueZh: '20261949922' },
      { labelEn: 'Entity Legal Status', labelZh: '法定实体性质', valueEn: 'Colorado Nonprofit Corporation', valueZh: '科罗拉多州非营利法团 (Nonprofit Corporation)' },
      { labelEn: 'Confirmation Number', labelZh: '官方验证确认码', valueEn: '18857281', valueZh: '18857281' },
      { labelEn: 'Formation Date', labelZh: '注册成立时间', valueEn: '08/03/2026 @ 03:33:15', valueZh: '2026年08月03日 03:33:15' },
      { labelEn: 'Secretary of State', labelZh: '签署州务卿', valueEn: 'Jena Griswold', valueZh: 'Jena Griswold' },
      { labelEn: 'Great Seal Location', labelZh: '官方盖印地点', valueEn: 'Denver, Colorado, USA', valueZh: '美国科罗拉多州丹佛市' }
    ],
    officialSearchUrl: 'https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do?resetTransTyp=Y',
    searchInstructionEn: 'Enter Entity Name "CogniQuant Foundation" or ID "20261949922" or Confirmation Number "18857281" in Colorado SOS business search to verify official Good Standing records.',
    searchInstructionZh: '进入科罗拉多州州务卿官网数据库，输入 "CogniQuant Foundation" 或编号 "20261949922" 或确认码 "18857281"，点击搜索进入详情页查看官方备案。',
    certificatePdfName: 'Colorado SOS Certificate of Good Standing #18857281.pdf',
    pages: [
      {
        pageNumber: 1,
        totalPages: 1,
        pageTitleEn: 'Office of the Secretary of State of the State of Colorado - Certificate of Fact of Good Standing',
        pageTitleZh: '科罗拉多州州务卿办公室 - 事实存续证明书 (Certificate of Fact of Good Standing)',
        sections: [
          {
            headingEn: 'CERTIFICATE OF FACT OF GOOD STANDING',
            headingZh: '事实存续法定证明声明',
            contentEn: 'I, Jena Griswold, as the Secretary of State of the State of Colorado, hereby certify that, according to the records of this office, CogniQuant Foundation is a Nonprofit Corporation formed or registered on 08/03/2026 under the law of Colorado, has complied with all applicable requirements of this office, and is in good standing with this office. This entity has been assigned entity identification number 20261949922.',
            contentZh: '我，科罗拉多州州务卿 Jena Griswold，特此证明：根据本办公室官方记录，CogniQuant Foundation 系依据科罗拉多州法律于 2026 年 08 月 03 日依法设立或登记之非营利法人，已完全履行本办公室适用的所有法定申报要求，并处于良好存续状态 (Good Standing)。该实体已被分配官方实体识别号 20261949922。'
          },
          {
            headingEn: 'FILING AND ISSUANCE SPECIFICATIONS',
            headingZh: '备案与签发技术参数',
            isKeyGrid: true,
            gridItems: [
              { labelEn: 'Entity Name', labelZh: '法人实体名称', valueEn: 'CogniQuant Foundation', valueZh: 'CogniQuant Foundation' },
              { labelEn: 'Entity Form', labelZh: '法团类型', valueEn: 'Nonprofit Corporation', valueZh: '非营利法人' },
              { labelEn: 'Entity ID', labelZh: '实体编号', valueEn: '20261949922', valueZh: '20261949922' },
              { labelEn: 'Confirmation #', labelZh: '确认号', valueEn: '18857281', valueZh: '18857281' },
              { labelEn: 'Delivery Timestamp', labelZh: '电子送达时间', valueEn: '08/03/2026 @ 03:33:15', valueZh: '2026-08-03 03:33:15' },
              { labelEn: 'Issuing Officer', labelZh: '签发官员', valueEn: 'Jena Griswold, Secretary of State', valueZh: 'Jena Griswold，科罗拉多州州务卿' }
            ]
          },
          {
            headingEn: 'STATUTORY NOTICE & ONLINE VERIFICATION',
            headingZh: '法定须知与线上验证',
            isCallout: true,
            contentEn: 'Notice: A certificate issued electronically from the Colorado Secretary of State’s website is fully and immediately valid and effective. The issuance and validity of a certificate obtained electronically may be established by visiting the Validate a Certificate page of the Secretary of State’s website (https://www.coloradosos.gov/biz/CertificateSearchCriteria.do) entering the certificate’s confirmation number 18857281 displayed on the certificate.',
            contentZh: '提示：从科罗拉多州州务卿网站电子签发的证明具有完全、即时的法定效力。任何机构或公众均可通过访问州务卿官网验证页面，输入确认编号 18857281 验证证书真实性。'
          }
        ],
        footerTextEn: 'Great Seal of the State of Colorado Affixed • Denver, Colorado • Confirmation Number: 18857281',
        footerTextZh: '科罗拉多州大印盖印 • 美国科罗拉多州丹佛市 • 官方核验码：18857281'
      }
    ]
  },
  {
    id: 'articles-incorporation',
    category: 'corporate',
    titleEn: 'Articles of Incorporation & 5 Core Scopes',
    titleZh: '法定组织章程与五大核心战略经营范围',
    subtitleEn: 'Colorado Revised Statutes (C.R.S. § 7-122-101 & 7-122-102)',
    subtitleZh: '科罗拉多州州务卿官方核准备案章程 (Document #20261949922)',
    registrationNumber: '20261949922',
    issueDate: '2026-08-03',
    issuingAuthorityEn: 'Colorado Secretary of State (Jena Griswold)',
    issuingAuthorityZh: '科罗拉多州州务卿办公室',
    statusEn: 'Charter Approved & Filed',
    statusZh: '章程与业务范围已核准入档',
    badgeType: 'verified',
    pageCount: 3,
    documentType: 'transcript',
    sealType: 'colorado-state',
    summaryEn: 'Certified 3-page statutory Articles of Incorporation filed with document #20261949922, officially codifying the 5 core operational domains: Precious Metals, U.S. Equities & Global Securities, Digital Asset Trading, AI-Powered Quantitative Trading, and FinTech R&D.',
    summaryZh: '经科罗拉多州州务卿正式存档备案的 3 页组织章程（档案号 #20261949922，确认号 #18857282），以法定形式明确界定了基金会的五大核心业务范围：贵金属宏观量化、美股与全球证券配置、数字资产与Web3金融、AI智能量化交易、金融科技研发。',
    details: [
      { labelEn: 'Document Filing #', labelZh: '档案文件编号', valueEn: '20261949922', valueZh: '20261949922' },
      { labelEn: 'Confirmation Number', labelZh: '官方核验确认码', valueEn: '18857282', valueZh: '18857282' },
      { labelEn: 'Filing Timestamp', labelZh: '官方入档时间', valueEn: '08/03/2026 @ 03:33:06 AM', valueZh: '2026年08月03日 03:33:06' },
      { labelEn: 'Statutory Authority', labelZh: '依据法定法案', valueEn: 'Colorado Revised Statutes § 7-122-101 & § 7-122-102', valueZh: '科罗拉多州修正法规 § 7-122-101 及 § 7-122-102' },
      { labelEn: 'Incorporator', labelZh: '章程发起创办人', valueEn: 'DAVID HUITINK (1001 17th Street, Denver CO 80202)', valueZh: 'DAVID HUITINK (1001 17th Street, Denver CO 80202)' },
      { labelEn: 'Registered Agent', labelZh: '法定注册代理人', valueEn: 'Quicker Business Solutions Inc. (1521 Blake St Ste 47008, Denver CO 80202)', valueZh: 'Quicker Business Solutions Inc.' }
    ],
    officialSearchUrl: 'https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do?resetTransTyp=Y',
    certificatePdfName: 'Articles of Incorporation Document #20261949922.pdf',
    pages: [
      {
        pageNumber: 1,
        totalPages: 3,
        pageTitleEn: 'Office of the Secretary of State of Colorado - Certificate of Document Filed',
        pageTitleZh: '科罗拉多州州务卿办公室 - 文件已归档证明书 (Page 1/3)',
        sections: [
          {
            headingEn: 'CERTIFICATE OF DOCUMENT FILED',
            headingZh: '文件归档法定证明声明',
            contentEn: 'I, Jena Griswold, as the Secretary of State of the State of Colorado, hereby certify that, according to the records of this office, the attached document is a true and complete copy of the Articles of Incorporation with Document # 20261949922 of CogniQuant Foundation (Entity ID # 20261949922), Colorado Nonprofit Corporation, consisting of 2 pages plus this certificate.',
            contentZh: '我，科罗拉多州州务卿 Jena Griswold，特此证明：根据本办公室官方记录，附随文件系 CogniQuant Foundation（实体编号 #20261949922，科罗拉多州非营利法团）之组织章程 (Articles of Incorporation) 之真实完整副本，档案编号 20261949922。'
          },
          {
            headingEn: 'OFFICIAL RECORD CONFIRMATION',
            headingZh: '官方备案确认信息',
            isKeyGrid: true,
            gridItems: [
              { labelEn: 'Entity Name', labelZh: '法人名称', valueEn: 'CogniQuant Foundation', valueZh: 'CogniQuant Foundation' },
              { labelEn: 'Document #', labelZh: '文件编号', valueEn: '20261949922', valueZh: '20261949922' },
              { labelEn: 'Confirmation #', labelZh: '确认编号', valueEn: '18857282', valueZh: '18857282' },
              { labelEn: 'Filing Date', labelZh: '归档日期', valueEn: '08/03/2026 @ 03:33:22', valueZh: '2026-08-03 03:33:22' }
            ]
          }
        ],
        footerTextEn: 'Colorado Secretary of State • Document # 20261949922 • Confirmation Number 18857282',
        footerTextZh: '科罗拉多州州务卿 • 档案号：20261949922 • 确认号：18857282'
      },
      {
        pageNumber: 2,
        totalPages: 3,
        pageTitleEn: 'Articles of Incorporation for a Nonprofit Corporation (Statutory Filing)',
        pageTitleZh: '非营利法团组织章程正文 (Page 2/3)',
        sections: [
          {
            headingEn: 'DOMESTIC ENTITY AND ADDRESSES',
            headingZh: '实体名称与注册地址',
            isKeyGrid: true,
            gridItems: [
              { labelEn: 'Domestic Entity Name', labelZh: '本土实体名称', valueEn: 'CogniQuant Foundation', valueZh: 'CogniQuant Foundation' },
              { labelEn: 'Principal Office Address', labelZh: '主要办事处地址', valueEn: '1001 17th Street, Denver, CO 80202, US', valueZh: '1001 17th Street, Denver, CO 80202, US' },
              { labelEn: 'Registered Agent Name', labelZh: '法定注册代理人', valueEn: 'Quicker Business Solutions Inc.', valueZh: 'Quicker Business Solutions Inc.' },
              { labelEn: 'Agent Street Address', labelZh: '代理人地址', valueEn: '1521 Blake St Ste 47008, Denver, CO 80202, US', valueZh: '1521 Blake St Ste 47008, Denver, CO 80202, US' },
              { labelEn: 'Incorporator', labelZh: '发起创办人', valueEn: 'DAVID HUITINK (1001 17th Street, Denver CO 80202)', valueZh: 'DAVID HUITINK' },
              { labelEn: 'Voting Members', labelZh: '表决权成员', valueEn: 'There are voting members for the nonprofit corporation.', valueZh: '本非营利法人设有表决权成员。' }
            ]
          },
          {
            headingEn: 'DISTRIBUTION OF ASSETS UPON DISSOLUTION',
            headingZh: '清算时资产分配条款',
            isCallout: true,
            contentEn: 'Upon the dissolution of this corporation, assets shall be distributed for one or more exempt purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code, or corresponding section of any future federal tax code, or shall be distributed to the federal government, or to a state or local government, for a public purpose.',
            contentZh: '本法团解散时，资产应分配用于符合《国内税收法典》第 501(c)(3) 条含义的一项或多项免税目的，或分配给联邦政府、州或地方政府用于公共目的。'
          }
        ],
        footerTextEn: 'Filed pursuant to § 7-122-101 and § 7-122-102 of the Colorado Revised Statutes (C.R.S.)',
        footerTextZh: '依据《科罗拉多州修订法规》(C.R.S.) § 7-122-101 与 § 7-122-102 正式归档'
      },
      {
        pageNumber: 3,
        totalPages: 3,
        pageTitleEn: 'Statutory Business Scope of CogniQuant Foundation (5 Core Pillars)',
        pageTitleZh: 'CogniQuant Foundation 法定经营范围（五大支柱）(Page 3/3)',
        sections: [
          {
            headingEn: 'ADDITIONAL INFORMATION: 5 OFFICIAL BUSINESS PILLARS',
            headingZh: '附加法定条款：五大核心法定经营范围',
            isList: true,
            listItemsEn: [
              'Precious Metals Trading: Covering international precious metals markets such as gold and silver, with a comprehensive framework for macroeconomic analysis, market trend assessment, and quantitative trading strategies.',
              'U.S. Equities and Global Securities: Focusing on U.S. stocks, market indices, ETFs, and other high-quality global assets, while conducting market research, strategic asset allocation, and risk management.',
              'Digital Asset Trading: Expanding into major digital assets, on-chain assets, and Web3 financial markets to build professional digital trading and asset management capabilities.',
              'AI-Powered Quantitative Trading: Leveraging artificial intelligence, big data analytics, machine learning, and automated strategy models to enhance market identification, strategy execution, and risk control efficiency.',
              'FinTech Research and Development: Continuously investing in the development of quantitative trading engines, intelligent risk control systems, data analytics, strategy backtesting, and automated trading systems.'
            ],
            listItemsZh: [
              '贵金属交易 (Precious Metals Trading)：覆盖黄金、白银等国际贵金属市场，具备宏观经济分析、市场趋势研判与量化交易策略体系。',
              '美股与全球证券 (U.S. Equities and Global Securities)：专注于美股、市场指数、ETF及全球高品质资产，开展市场研究、战略资产配置与风险管理。',
              '数字资产交易 (Digital Asset Trading)：拓展主流数字资产、链上原生资产与 Web3 金融市场，打造专业数字交易与资产管理核心能力。',
              'AI智能量化交易 (AI-Powered Quantitative Trading)：依托人工智能、大数据分析、机器学习与自动化策略模型，提升市场识别、策略执行与风控效率。',
              '金融科技研发 (FinTech Research and Development)：持续投入量化交易引擎、智能风控系统、数据分析、策略回测与自动化交易系统研发。'
            ]
          },
          {
            headingEn: 'PERJURY NOTICE & SUBMISSION SIGNATURE',
            headingZh: '伪证罪法定告知与创办人确认签署',
            contentEn: 'Causing this document to be delivered to the Secretary of State for filing shall constitute the affirmation or acknowledgment of each individual causing such delivery, under penalties of perjury, that the document is the individual\'s act and deed. Delivered by: DAVID HUITINK, 1001 17th Street, Denver CO 80202, US.',
            contentZh: '根据科罗拉多州法律及伪证罪处罚条例，本文件的递交构成递交人的法定确认与签署行为。递交创办人：DAVID HUITINK，地址：1001 17th Street, Denver CO 80202, US。'
          }
        ],
        footerTextEn: 'Colorado Secretary of State Certified Official Transcript • Document # 20261949922',
        footerTextZh: '科罗拉多州州务卿认证官方归档副本 • 档案编号：20261949922'
      }
    ]
  },
  {
    id: 'official-authorization',
    category: 'authorization',
    titleEn: 'Official Authorization Letter to CEO Ethan',
    titleZh: '基金会对全球CEO Ethan官方独家全权授权书',
    subtitleEn: 'Cogni Quant Foundation - Official Board Appointment & Mandate',
    subtitleZh: 'Cogni Quant Foundation 最高全权委任与官方公章背书',
    registrationNumber: 'CQF-AUTH-2026-0814',
    issueDate: '2026-08-14',
    issuingAuthorityEn: 'Cogni Quant Foundation (Board of Trustees)',
    issuingAuthorityZh: 'Cogni Quant Foundation 基金会理事会',
    statusEn: 'Permanent & Fully Endorsed',
    statusZh: '永久独家有效且全权背书生效',
    badgeType: 'verified',
    pageCount: 2,
    documentType: 'letter',
    sealType: 'foundation-common-seal',
    summaryEn: 'Official 2-page Authorization Letter from Cogni Quant Foundation appointing Mr. Ethan as the Founder & Global Chief Executive Officer (CEO) of CogniGrid, granting permanent, exclusive, and highest global decision-making authority.',
    summaryZh: 'Cogni Quant Foundation 官方出具的 2 页正式授权函，正式任命 Mr. Ethan 为 CogniGrid 创始人兼全球首席执行官 (CEO)，授予其在战略、技术研发、全球市场、社区治理及生态决策方面的永久独家最高决策权，并加盖基金会官方公章。',
    details: [
      { labelEn: 'Authorizer Institution', labelZh: '授权机构', valueEn: 'Cogni Quant Foundation', valueZh: 'Cogni Quant Foundation' },
      { labelEn: 'Authorized Person', labelZh: '被授权人', valueEn: 'Mr. Ethan (Founder & Global CEO)', valueZh: 'Mr. Ethan (创始人兼全球首席执行官)' },
      { labelEn: 'Project / Ecosystem', labelZh: '授权项目', valueEn: 'CogniGrid Global Intelligent Computing Ecosystem', valueZh: 'CogniGrid 全球智能算力生态' },
      { labelEn: 'Effective Date', labelZh: '生效日期', valueEn: 'August 14, 2026', valueZh: '2026年08月14日' },
      { labelEn: 'Authorization Nature', labelZh: '授权性质', valueEn: 'Permanent, Exclusive & Highest Global Authority', valueZh: '永久、独家且拥有全球最高统筹决策权' },
      { labelEn: 'Official Seal', labelZh: '官方印鉴', valueEn: 'Cogni Quant Foundation Common Seal (Colorado)', valueZh: 'Cogni Quant Foundation 官方公章 (Colorado Common Seal)' }
    ],
    certificatePdfName: 'CogniQuant Foundation - Official Authorization Letter (Mr. Ethan).pdf',
    pages: [
      {
        pageNumber: 1,
        totalPages: 2,
        pageTitleEn: 'Official Authorization Letter - Page 1: Appointment & Scope of Full Authorization',
        pageTitleZh: '官方授权书 - 第一页：委任声明与全权授权范围',
        sections: [
          {
            headingEn: '1. AUTHORIZATION STATEMENT',
            headingZh: '一、授权声明',
            isCallout: true,
            contentEn: 'Cogni Quant Foundation is the exclusive top-level incubation, supervision and endorsement institution of the CogniGrid global intelligent computing ecosystem. To promote the global strategic layout, ecological construction and full commercial implementation of CogniGrid, the Foundation officially appoints Mr. Ethan as the Founder & Global Chief Executive Officer (CEO) of CogniGrid. He is confirmed as the highest decision-maker and overall person in charge of the entire project.',
            contentZh: 'Cogni Quant Foundation 作为 CogniGrid 全球智能算力生态的独家顶层孵化、监管与官方背书机构。为全面推进 CogniGrid 全球战略布局、生态建设及商业化落地，基金会正式任命 Mr. Ethan 为 CogniGrid 创始人兼全球首席执行官 (CEO)，确认其为整个项目的最高决策者与全面负责人。'
          },
          {
            headingEn: '2. SCOPE OF FULL AUTHORIZATION',
            headingZh: '二、全权授权范围',
            isList: true,
            listItemsEn: [
              'Formulate the overall project strategy, development roadmap, global layout and business model iteration.',
              'Fully manage technical research and development, product iteration, smart contract audit, team construction and personnel management.',
              'Take full charge of global market expansion, super node construction, international business cooperation and global brand promotion.',
              'Lead global community development, ecological incentive system formulation and decentralized governance implementation.',
              'Act as the sole official spokesperson for all global announcements, external negotiations, strategic partnerships and media releases.',
              'Possess the final review and highest decision-making authority for all affairs of the CogniGrid ecosystem.'
            ],
            listItemsZh: [
              '统筹制定项目全局战略、技术发展路线图、全球化商业版图与业务模式迭代。',
              '全面掌管技术研发、产品架构演进、智能合约安全审计、团队建设与核心人事任免。',
              '全权负责全球市场拓展、超级节点部署、国际机构商务合作与全球品牌推广。',
              '主导全球社区生态建设、激励机制设计与去中心化治理方案落地。',
              '作为官方唯一对外最高发言人，代表 CogniGrid 处理对外谈判、战略合作签署及媒体发布。',
              '享有 CogniGrid 生态所有重大事项的最终审议与最高决策裁定权。'
            ]
          }
        ],
        footerTextEn: 'Cogni Quant Foundation • Official Authorization • Page 1',
        footerTextZh: 'Cogni Quant Foundation • 官方授权函 • 第 1 页'
      },
      {
        pageNumber: 2,
        totalPages: 2,
        pageTitleEn: 'Official Authorization Letter - Page 2: Authorization Nature & Official Declaration',
        pageTitleZh: '官方授权书 - 第二页：授权性质、官方公章与生效声明',
        sections: [
          {
            headingEn: '3. AUTHORIZATION NATURE',
            headingZh: '三、授权性质',
            isList: true,
            listItemsEn: [
              'Sole Highest Authorization: Mr. Ethan is the only officially recognized global highest leader (CEO) of CogniGrid authorized by the Foundation.',
              'Permanent Exclusive Authorization: This authorization is long-term effective and cannot be revoked or modified without official public announcement by the Foundation.',
              'Full Official Endorsement: All compliant decisions and operations made by Mr. Ethan are fully recognized, supervised and officially endorsed by Cogni Quant Foundation.'
            ],
            listItemsZh: [
              '唯一最高授权：Mr. Ethan 为基金会官方唯一认可并全权授权的 CogniGrid 全球最高领导者 (CEO)。',
              '永久独家有效：本授权长期有效，未经基金会官方公开声明，任何个人或组织不得撤销或篡改。',
              '全面官方背书：Mr. Ethan 依法依规作出的所有合规决策与运营行为，均受 Cogni Quant Foundation 全面认可、监督与官方背书。'
            ]
          },
          {
            headingEn: '4. OFFICIAL DECLARATION & SEAL',
            headingZh: '四、官方生效声明与加盖公章',
            isCallout: true,
            contentEn: 'This document is the official authoritative public file of CogniGrid. It is valid for official websites, global communities, business cooperation, media promotion, institutional docking and all official ecological scenarios. Authorized Institution: Cogni Quant Foundation. Effective Date: August 14, 2026. Official Seal Affixed: Cogni Quant Foundation Common Seal Colorado.',
            contentZh: '本文件为 CogniGrid 官方权威公开效力文件，适用于官方网站、全球社区、商务合作、媒体宣传、机构对接等所有官方场景。授权机构：Cogni Quant Foundation。生效日期：2026年08月14日。加盖印鉴：Cogni Quant Foundation 科罗拉多官方公章。'
          }
        ],
        footerTextEn: 'Cogni Quant Foundation • Official Authorization Letter • Page 2 • Effective: August 14, 2026',
        footerTextZh: 'Cogni Quant Foundation • 官方授权函 • 第 2 页 • 生效日期：2026年08月14日'
      }
    ]
  },
  {
    id: 'bylaws',
    category: 'corporate',
    titleEn: 'By-Laws of CogniQuant Foundation (11 Pages)',
    titleZh: '基金会法定组织章程大纲 (By-Laws 全文 11 页)',
    subtitleEn: 'Complete Statutory By-Laws of a Colorado Nonprofit Corporation (Articles I - VIII)',
    subtitleZh: '科罗拉多州非营利法团完整法定管理章程 (共八大章节 / 11页)',
    registrationNumber: 'CQF-BYLAWS-2026',
    issueDate: '2026-08-03',
    issuingAuthorityEn: 'CogniQuant Foundation Board of Directors',
    issuingAuthorityZh: 'CogniQuant Foundation 董事会与法务秘书处',
    statusEn: 'Fully Adopted & In Effect',
    statusZh: '经董事会决议通过并正式生效施行',
    badgeType: 'active',
    pageCount: 11,
    documentType: 'bylaws',
    sealType: 'foundation-common-seal',
    summaryEn: 'Complete 11-page statutory By-Laws governing CogniQuant Foundation, encompassing Article I Offices, Article II Stockholder Meetings, Article III Directors, Article IV Notices, Article V Officers, Article VI Stock/Membership Certificates, Article VII General Provisions (Dividends & Checks), and Article VIII Amendments.',
    summaryZh: 'CogniQuant Foundation 完整的 11 页法定组织章程大纲 (By-Laws)，涵盖办事处设立、股东与成员大会、董事会职权与任免、法定通知送达、高管职务设置、成员权益凭证与转让登记、财务分配与支票签署、章程修订程序共八大条款。',
    details: [
      { labelEn: 'Corporation Name', labelZh: '法团法定名称', valueEn: 'CogniQuant Foundation', valueZh: 'CogniQuant Foundation' },
      { labelEn: 'Statutory Form', labelZh: '组织法律形式', valueEn: 'A Colorado Nonprofit Corporation', valueZh: '科罗拉多州非营利法团' },
      { labelEn: 'Total Articles', labelZh: '章程条款章节', valueEn: 'Articles I through VIII (11 Total Pages)', valueZh: '第一条至第八条（共 11 页）' },
      { labelEn: 'Registered Office', labelZh: '法定办事处', valueEn: 'City of Denver, State of Colorado', valueZh: '美国科罗拉多州丹佛市' },
      { labelEn: 'Annual Meeting Date', labelZh: '年度成员大会', valueEn: 'First of August in each year (commencing 2026)', valueZh: '每年八月一日（自2026年起施行）' },
      { labelEn: 'Initial Board Size', labelZh: '首任董事会人数', valueEn: 'One (1) Director', valueZh: '一名 (1) 董事' }
    ],
    certificatePdfName: 'By-Laws of CogniQuant Foundation (11 Pages).pdf',
    pages: [
      {
        pageNumber: 1,
        totalPages: 11,
        pageTitleEn: 'By-Laws of CogniQuant Foundation - Article I & Article II (Page 1/11)',
        pageTitleZh: '组织章程 - 第一条 办事处 & 第二条 成员大会 (第 1/11 页)',
        sections: [
          {
            headingEn: 'ARTICLE I – OFFICES',
            headingZh: '第一条 办事处',
            contentEn: 'Section 1. The registered office shall be in the City of Denver, State of Colorado.\nSection 2. The Nonprofit Corporation may also have offices at such other places both within and without the State of Colorado as the Board of Directors may from time to time determine.',
            contentZh: '第1款：法定注册办事处应设于科罗拉多州丹佛市。\n第2款：非营利法团亦可在董事会认为必要时，在科罗拉多州境内或境外设立其他办事机构。'
          },
          {
            headingEn: 'ARTICLE II – MEETINGS OF STOCKHOLDERS (Sections 1-4)',
            headingZh: '第二条 股东与成员大会 (第1-4款)',
            contentEn: 'Section 1. All meetings of stockholders for election of directors shall be held in City of Denver, State of Colorado.\nSection 2. Annual meetings commencing with the year 2026 shall be held on the first of August in each year to elect Directors by plurality vote.\nSection 3. Written notice of annual meeting stating place, date and hour shall be given not less than 10 nor more than 50 days prior.\nSection 4. Stock ledger officer shall prepare complete alphabetical list of stockholders at least 10 days before meeting.',
            contentZh: '第1款：选举董事的股东/成员会议应在科罗拉多州丹佛市举行。\n第2款：自2026年起，年度大会于每年八月一日召开，以多数票选举产生董事会。\n第3款：年会书面通知应于会议召开前10至50天内发出。\n第4款：高管应在会前至少10天编制完成完整的成员名册以供查阅。'
          }
        ]
      },
      {
        pageNumber: 2,
        totalPages: 11,
        pageTitleEn: 'Article II – Meetings of Stockholders (Sections 5-9) (Page 2/11)',
        pageTitleZh: '第二条 成员大会：特别会议、法定人数与表决机制 (第 2/11 页)',
        sections: [
          {
            headingEn: 'SPECIAL MEETINGS & QUORUM REQUIREMENTS',
            headingZh: '特别会议与法定出席人数',
            contentEn: 'Section 5. Special meetings may be called by the President or upon written request of a majority of Board of Directors or majority stockholders.\nSection 6. Written notice of special meeting shall state place, date, hour and purposes.\nSection 7. Business transacted shall be limited to purposes stated in notice.\nSection 8. The holders of a majority of stock issued and outstanding and entitled to vote shall constitute a quorum.\nSection 9. When quorum is present, majority vote decides any question.',
            contentZh: '第5款：特别会议可由总裁或过半数董事或过半数表决权股东书面召集。\n第6-7款：特别会议仅审议通知中载明的具体议程。\n第8款：已发行且具有表决权的过半数股份构成法定人数。\n第9款：法定人数出席时，以简单多数表决决定事项。'
          }
        ]
      },
      {
        pageNumber: 3,
        totalPages: 11,
        pageTitleEn: 'Article II & Article III – Directors (Page 3/11)',
        pageTitleZh: '第三条 董事会设置与增补规程 (第 3/11 页)',
        sections: [
          {
            headingEn: 'ARTICLE III – DIRECTORS (Sections 1-2)',
            headingZh: '第三条 董事会组成与任期',
            isCallout: true,
            contentEn: 'Section 1. The number of directors which shall constitute the whole board shall be One (1). A director shall be elected at the annual meeting and hold office until his successor is elected and qualified. A director need not be a stockholder.\nSection 2. Vacancies and newly created directorships may be filled by a majority of directors then in office, or by a sole remaining director.',
            contentZh: '第1款：组成完整董事会的董事人数为一（1）名。董事于年度大会选举产生并履职至继任者产生。董事无需必须为持股人。\n第2款：董事会空缺可由在任过半数董事或唯一留任董事增补任命。'
          }
        ]
      },
      {
        pageNumber: 4,
        totalPages: 11,
        pageTitleEn: 'Article III – Directors Powers & Meetings (Page 4/11)',
        pageTitleZh: '第三条 董事会管理职权、会议通知与辞职程序 (第 4/11 页)',
        sections: [
          {
            headingEn: 'BOARD POWERS & MEETINGS (Sections 3-9)',
            headingZh: '董事会管理权能与会议制度',
            contentEn: 'Section 3. The business of the Nonprofit Corporation shall be managed by its Board of Directors which may exercise all such powers.\nSection 4. A director may resign at any time upon notice.\nSection 5. Directors may be removed with or without cause by majority stockholders.\nSection 6-9. Regular meetings held without notice; Special meetings called on three days notice.',
            contentZh: '第3款：法团所有业务由董事会统筹管理并依法行使全部职权。\n第4-5款：董事可主动辞职，亦可由多数股东以有因或无因方式罢免。\n第6-9款：定期董事会无需事先通知，特别董事会提前 3 天通知。'
          }
        ]
      },
      {
        pageNumber: 5,
        totalPages: 11,
        pageTitleEn: 'Article III – Committees & Compensation (Page 5/11)',
        pageTitleZh: '第三条 专门委员会与董事津贴 (第 5/11 页)',
        sections: [
          {
            headingEn: 'BOARD COMMITTEES & COMPENSATION (Sections 10-14)',
            headingZh: '董事会专门委员会与薪酬制度',
            contentEn: 'Section 10. Majority of directors constitute quorum.\nSection 11. Action without meeting permitted by unanimous written consent.\nSection 12-13. Board may designate one or more committees to exercise Board powers, with regular minutes kept.\nSection 14. Directors may be paid expenses of attendance and a fixed sum for attendance.',
            contentZh: '第10-11款：董事会多数构成法定人数，支持全体一致书面决议生效。\n第12-13款：董事会可设立一个或多个专门委员会行使相应职能。\n第14款：董事依法报销履职费用并享有董事会审定的履职津贴。'
          }
        ]
      },
      {
        pageNumber: 6,
        totalPages: 11,
        pageTitleEn: 'Article IV & Article V – Officers of Corporation (Page 6/11)',
        pageTitleZh: '第四条 通知 & 第五条 法团高管职务设置 (第 6/11 页)',
        sections: [
          {
            headingEn: 'ARTICLE V – OFFICERS (Sections 1-5)',
            headingZh: '第五条 法团高管职位与选举',
            contentEn: 'Section 1. The officers shall consist of a President, a Secretary and a Treasurer. Vice presidents and assistant officers may also be chosen. Any number of offices may be held by the same person.\nSection 2. Chosen at first Board meeting after annual meeting.\nSection 3-4. Board appoints other officers/agents and fixes salaries.\nSection 5. Officers hold office until successors qualify.',
            contentZh: '第1款：法团高管设总裁 (President)、秘书长 (Secretary) 与财务主管 (Treasurer)。可兼任多个高管职务。\n第2-4款：董事会任命各项高管职务并审定薪酬。\n第5款：高管任职至继任者就任或由董事会适时免职。'
          }
        ]
      },
      {
        pageNumber: 7,
        totalPages: 11,
        pageTitleEn: 'Article V – Powers of President, Vice President & Secretary (Page 7/11)',
        pageTitleZh: '第五条 总裁、副总裁与秘书长职权职责 (第 7/11 页)',
        sections: [
          {
            headingEn: 'OFFICER POWERS (Sections 6-10)',
            headingZh: '主要高管法定义务与签署权',
            contentEn: 'Section 6. The President shall be Chief Executive Officer, preside at all meetings, and manage business actively.\nSection 7. President executes bonds, mortgages, and contracts.\nSection 8. Vice Presidents perform duties in absence of President.\nSection 9-10. Secretary records proceedings, gives notice of meetings, and maintains corporate books.',
            contentZh: '第6-7款：总裁为首席执行官，主持所有会议，全面主持法团日常业务，代表法团签署债券、抵押及法律合同。\n第8款：副总裁在总裁缺位时代理履职。\n第9-10款：秘书长负责记录所有会议纪要并保管法团法定档案。'
          }
        ]
      },
      {
        pageNumber: 8,
        totalPages: 11,
        pageTitleEn: 'Article V – Treasurer & Article VI Certificates of Stock (Page 8/11)',
        pageTitleZh: '第五条 财务主管 & 第六条 股权凭证签发 (第 8/11 页)',
        sections: [
          {
            headingEn: 'TREASURER & STOCK CERTIFICATES',
            headingZh: '财务主管职权与股票/成员凭证',
            contentEn: 'Section 11-14. Treasurer has custody of corporate funds and securities, keeps accounts, and disburses funds upon Board order.\nARTICLE VI, Section 1. Every holder of stock shall be entitled to a certificate signed by Chairman/President and Treasurer/Secretary certifying shares owned.',
            contentZh: '第11-14款：财务主管掌管法团全部资金与证券资产，依照董事会决议调度资金。\n第六条第1款：每位股东/成员均有权获得由总裁与财务官签署并加盖印章的权益凭证。'
          }
        ]
      },
      {
        pageNumber: 9,
        totalPages: 11,
        pageTitleEn: 'Article VI – Lost Certificates & Transfer Agent (Page 9/11)',
        pageTitleZh: '第六条 凭证遗失补发、股份转让与过户登记 (第 9/11 页)',
        sections: [
          {
            headingEn: 'CERTIFICATE TRANSFERS & REGISTRAR',
            headingZh: '转让登记代理人与遗失补发',
            contentEn: 'Section 3. Board may direct new certificates issued in place of lost/destroyed certificates upon affidavit.\nSection 4. Stock transferred upon surrender of endorsed certificate on books of corporation.\nSection 5. Corporation may maintain transfer offices and registrars.',
            contentZh: '第3款：凭证遗失时，凭宣誓证明及担保补发新证。\n第4-5款：依据背书凭证在法团股东名册登记过户，支持设立专门过户代理处。'
          }
        ]
      },
      {
        pageNumber: 10,
        totalPages: 11,
        pageTitleEn: 'Article VI – Record Date & Article VII General Provisions (Page 10/11)',
        pageTitleZh: '第六条 股权登记日 & 第七条 股息与一般条款 (第 10/11 页)',
        sections: [
          {
            headingEn: 'RECORD DATES & DIVIDENDS',
            headingZh: '权益基准日与资产收益分配',
            contentEn: 'Section 6. Board may fix record date not more than 60 days prior to action.\nSection 7. Corporation recognizes registered holder as exclusive owner.\nARTICLE VII, Section 1-2. Dividends declared subject to Certificate of Incorporation; Board may establish reserve funds.',
            contentZh: '第6-7款：董事会设定不超过60天之基准登记日，名册登记人为唯一合法享有者。\n第七条第1-2款：依照法团章程合法审议分配，并得设立应急储备金。'
          }
        ]
      },
      {
        pageNumber: 11,
        totalPages: 11,
        pageTitleEn: 'Article VII & Article VIII – Amendments (Page 11/11)',
        pageTitleZh: '第七条 财务报告 & 第八条 章程修订程序 (第 11/11 页)',
        sections: [
          {
            headingEn: 'ANNUAL STATEMENTS, CHECKS & AMENDMENTS',
            headingZh: '年度财务报告、支票出票与章程修订',
            isCallout: true,
            contentEn: 'ARTICLE VII, Section 3. Board presents full clear statement of business and condition at annual meetings.\nSection 4. Checks and demands for money signed by authorized officers.\nSection 5. Fiscal year fixed by resolution.\nARTICLE VIII, Section 1. These by-laws may be altered, amended or repealed by stockholders or Board of Directors pursuant to Certificate of Incorporation.',
            contentZh: '第七条第3款：董事会于年会提交完整的法团运营与财务状况陈述。\n第4款：所有支票及付款凭单由授权高管签署。\n第5款：会计财年由董事会决议确定。\n第八条第1款：本章程可由股东大会或董事会依照组织证书授权进行修订或增补。'
          }
        ],
        footerTextEn: 'CogniQuant Foundation • By-Laws of a Colorado Nonprofit Corporation • 11 Pages Complete',
        footerTextZh: 'CogniQuant Foundation • 科罗拉多州非营利法团法定组织章程 • 11页全集'
      }
    ]
  },
  {
    id: 'incumbency',
    category: 'corporate',
    titleEn: 'Certificate of Incumbency',
    titleZh: '董事高管在职证明书 (Certificate of Incumbency)',
    subtitleEn: 'Quicker Business Solutions Inc. (Colorado Registered Agent)',
    subtitleZh: '科罗拉多州法定注册代理人认证签发',
    registrationNumber: '20261949922',
    issueDate: '2026-08-03',
    issuingAuthorityEn: 'Quicker Business Solutions Inc. (Registered Agent)',
    issuingAuthorityZh: '法定注册代理人 Quicker Business Solutions Inc.',
    statusEn: 'Certified & Active in Office',
    statusZh: '经法定代理人认证在任且存续良好',
    badgeType: 'active',
    pageCount: 1,
    documentType: 'certificate',
    sealType: 'registered-agent',
    summaryEn: 'Certified Certificate of Incumbency issued by the Registered Agent certifying that DAVID HUITINK serves as President, Treasurer, Secretary, and Director of CogniQuant Foundation, holding 100% Membership interest (#001).',
    summaryZh: '法定注册代理人 Quicker Business Solutions Inc. 出具的权威在职证明：确认 DAVID HUITINK 担任 CogniQuant Foundation 之总裁、财务主管、秘书长及唯一董事，并持有 100% 成员权益凭证（证书 #001）。',
    details: [
      { labelEn: 'Corporation Name', labelZh: '法人名称', valueEn: 'CogniQuant Foundation', valueZh: 'CogniQuant Foundation' },
      { labelEn: 'Entity ID Number', labelZh: '官方实体编号', valueEn: '20261949922', valueZh: '20261949922' },
      { labelEn: 'Incorporation Date', labelZh: '注册成立日期', valueEn: '08/03/2026', valueZh: '2026年08月03日' },
      { labelEn: 'Registered Agent', labelZh: '注册代理机构', valueEn: 'Quicker Business Solutions Inc.', valueZh: 'Quicker Business Solutions Inc.' },
      { labelEn: 'Registered Office', labelZh: '注册办事处', valueEn: '1001 17th Street, Denver, CO 80202 of America', valueZh: '1001 17th Street, Denver, CO 80202 of America' },
      { labelEn: 'Appointed Officers', labelZh: '主要出任高管', valueEn: 'President: DAVID HUITINK; Treasurer: DAVID HUITINK; Secretary: DAVID HUITINK; Director: DAVID HUITINK', valueZh: '总裁/财务主管/秘书长/董事：DAVID HUITINK' },
      { labelEn: 'Corporate Liability Status', labelZh: '涉诉与资产抵押状况', valueEn: 'No actions pending or threatened; No charges created over its assets', valueZh: '无任何诉讼风险，公司资产无任何担保抵押与质押负担' }
    ],
    certificatePdfName: 'Certificate of Incumbency - CogniQuant Foundation.pdf',
    pages: [
      {
        pageNumber: 1,
        totalPages: 1,
        pageTitleEn: 'Certificate of Incumbency - CogniQuant Foundation',
        pageTitleZh: '董事高管在职证明书 (Certificate of Incumbency)',
        sections: [
          {
            headingEn: 'CERTIFICATE OF INCUMBENCY RECITALS',
            headingZh: '在职证明书主要法定陈述',
            contentEn: 'WE, Quicker Business Solutions Inc. in my capacity as Registered Agent of CogniQuant Foundation, a Colorado Nonprofit Corporation (the "Corporation"), do hereby certify the following: 1. The name of the Corporation is CogniQuant Foundation, ID Number: 20261949922. 2. The above Corporation was duly incorporated under the GENERAL CORPORATION LAW of Colorado on the 08/03/2026. 3. The first Registered Agent of the Corporation is Quicker Business Solutions Inc. 4. The first Registered Office is 1001 17th Street Denver, CO 80202 of America. 5. The Corporation is in existence and in Good Standing. 6. There are no actions pending or threatened, and no action has been taken to wind-up or appoint a receiver.',
            contentZh: '我们，Quicker Business Solutions Inc.，作为科罗拉多州非营利法团 CogniQuant Foundation 之法定注册代理人，特此证明：1. 公司名称：CogniQuant Foundation，ID: 20261949922。2. 依据科罗拉多州通用公司法于 2026 年 08 月 03 日依法设立。3. 首任注册代理人为 Quicker Business Solutions Inc.。4. 首任注册办事处设于 1001 17th Street Denver, CO 80202。5. 公司合法存续且处于良好状态。6. 无任何未决或潜在法律诉讼，亦无任何破产清算程序。'
          },
          {
            headingEn: 'APPOINTED OFFICERS & BOARD DIRECTORS',
            headingZh: '正式出任高管及董事名册',
            isKeyGrid: true,
            gridItems: [
              { labelEn: 'President', labelZh: '总裁 (President)', valueEn: 'DAVID HUITINK', valueZh: 'DAVID HUITINK' },
              { labelEn: 'Treasurer', labelZh: '财务主管 (Treasurer)', valueEn: 'DAVID HUITINK', valueZh: 'DAVID HUITINK' },
              { labelEn: 'Secretary', labelZh: '秘书长 (Secretary)', valueEn: 'DAVID HUITINK', valueZh: 'DAVID HUITINK' },
              { labelEn: 'Director', labelZh: '董事 (Director)', valueEn: 'DAVID HUITINK', valueZh: 'DAVID HUITINK' },
              { labelEn: 'Appointment Date', labelZh: '任命生效日期', valueEn: '08/03/2026', valueZh: '2026年08月03日' },
              { labelEn: 'Member Interest', labelZh: '成员凭证编号', valueEn: 'DAVID HUITINK (Certificate #001 100%)', valueZh: 'DAVID HUITINK (证书 #001 100%)' }
            ]
          }
        ],
        footerTextEn: 'Quicker Business Solutions Inc. Registered Agent • Date: 3rd day of August 2026',
        footerTextZh: '法定注册代理人 Quicker Business Solutions Inc. • 日期：2026年08月03日'
      }
    ]
  },
  {
    id: 'membership-certificate',
    category: 'corporate',
    titleEn: '100% Membership Ownership Certificate #001',
    titleZh: '100% 成员权益与股权凭证 (Certificate #001)',
    subtitleEn: 'CogniQuant Foundation - Organized under the Laws of Colorado',
    subtitleZh: '科罗拉多州法定成员权益凭证（编号 001 / 100%）',
    registrationNumber: '001-100%',
    issueDate: '2026-08-03',
    issuingAuthorityEn: 'CogniQuant Foundation (Under Seal of Corporation)',
    issuingAuthorityZh: 'CogniQuant Foundation 董事会与法定秘书处',
    statusEn: 'Registered & Issued',
    statusZh: '正式登记签发并记入名册',
    badgeType: 'active',
    pageCount: 1,
    documentType: 'certificate',
    sealType: 'foundation-common-seal',
    summaryEn: 'High-security guilloche-bordered Certificate #001 certifying that DAVID HUITINK is the 100% owner of Membership Interests of CogniQuant Foundation.',
    summaryZh: '具有经典防伪饰边与钢印徽标的官方第 001 号成员权益证书，权威证明 DAVID HUITINK 享有 CogniQuant Foundation 100% 成员权益。',
    details: [
      { labelEn: 'Certificate Number', labelZh: '证书编号', valueEn: '001', valueZh: '001' },
      { labelEn: 'Ownership Percentage', labelZh: '持有权益比例', valueEn: '100% Full Interest', valueZh: '100% 完整成员权益' },
      { labelEn: 'Certificate Owner', labelZh: '权益持有人', valueEn: 'DAVID HUITINK', valueZh: 'DAVID HUITINK' },
      { labelEn: 'Company Name', labelZh: '所属机构', valueEn: 'CogniQuant Foundation', valueZh: 'CogniQuant Foundation' },
      { labelEn: 'Jurisdiction Law', labelZh: '管辖法律', valueEn: 'Organized under the Laws of the State of Colorado', valueZh: '依据科罗拉多州法律设立' }
    ],
    certificatePdfName: 'Membership Certificate #001 - 100% David Huitink.pdf',
    pages: [
      {
        pageNumber: 1,
        totalPages: 1,
        pageTitleEn: 'Membership Certificate - CogniQuant Foundation (Certificate #001)',
        pageTitleZh: '成员所有权凭证 - CogniQuant Foundation (证书 #001)',
        sections: [
          {
            headingEn: 'MEMBERSHIP CERTIFICATE DECLARATION',
            headingZh: '成员所有权证书正文',
            isCallout: true,
            contentEn: 'This is to Certify that **DAVID HUITINK** is the owner of **100%** Percentage of Interests of the above Company transferable only on the books of the Company by the holder hereof in person or by duly authorized attorney upon surrender of this Certificate properly endorsed.',
            contentZh: '特此证明：**DAVID HUITINK** 为上述公司 **100%** 权益之合法持有人。本凭证仅限持有人本人或授权代表在公司股东名册上背书办理转让。'
          },
          {
            headingEn: 'CERTIFICATE SPECIFICATIONS',
            headingZh: '凭证核心登记参数',
            isKeyGrid: true,
            gridItems: [
              { labelEn: 'Certificate #', labelZh: '证书序列号', valueEn: '001', valueZh: '001' },
              { labelEn: 'Percentage Interest', labelZh: '权益占比', valueEn: '100%', valueZh: '100%' },
              { labelEn: 'Registered Holder', labelZh: '登记所有人', valueEn: 'DAVID HUITINK', valueZh: 'DAVID HUITINK' },
              { labelEn: 'Jurisdiction', labelZh: '管辖州', valueEn: 'State of Colorado', valueZh: '科罗拉多州' }
            ]
          }
        ],
        footerTextEn: 'In Witness Whereof, the said Company has caused this Certificate to be signed by its authorized officers and Company Seal affixed.',
        footerTextZh: '以此为证，本公司已安排授权高管签署本凭证并加盖公司公章。'
      }
    ]
  },
  {
    id: 'secretary-card',
    category: 'state',
    titleEn: 'Colorado Corporate Secretary Card',
    titleZh: '美国公司秘书卡与官方年检公示',
    subtitleEn: 'CogniQuant Foundation Corporate Registration & Audit Profile',
    subtitleZh: '科罗拉多州公司注册信息卡与周年年审指南',
    registrationNumber: '20261949922',
    issueDate: '2026-08-03',
    issuingAuthorityEn: 'Colorado Department of State',
    issuingAuthorityZh: '科罗拉多州政府与法定秘书服务处',
    statusEn: 'Active Registered',
    statusZh: '注册在案且年审正常',
    badgeType: 'verified',
    pageCount: 1,
    documentType: 'card',
    summaryEn: 'Official Secretary Card detailing registration info: ID #20261949922, Address at 1001 17th St Denver, CO 80202, and anniversary annual report requirements with Colorado SOS.',
    summaryZh: '官方公司秘书卡载明：公司编号 #20261949922，设立日期 2026年08月03日，地址 1001 17th Street Denver, CO 80202，年检实行周年年审制度。',
    details: [
      { labelEn: 'Company Name', labelZh: '公司名称', valueEn: 'CogniQuant Foundation', valueZh: 'CogniQuant Foundation' },
      { labelEn: 'Company ID', labelZh: '公司编号', valueEn: '20261949922', valueZh: '20261949922' },
      { labelEn: 'Establishment Date', labelZh: '成立日期', valueEn: '2026-08-03', valueZh: '2026年08月03日' },
      { labelEn: 'Registered Address', labelZh: '注册地址', valueEn: '1001 17th Street, Denver, CO 80202', valueZh: '1001 17th Street, Denver, CO 80202' },
      { labelEn: 'Annual Audit Cycle', labelZh: '年检周期', valueEn: 'Anniversary Annual Audit (科罗拉多州非盈利公司周年年审)', valueZh: '科罗拉多州非盈利公司为周年年审' },
      { labelEn: 'Official Query Portal', labelZh: '查询网址', valueEn: 'https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do', valueZh: 'https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do' }
    ],
    officialSearchUrl: 'https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do',
    certificatePdfName: '美国公司秘书卡 - CogniQuant Foundation.pdf',
    pages: [
      {
        pageNumber: 1,
        totalPages: 1,
        pageTitleEn: 'Colorado Corporate Secretary Card - CogniQuant Foundation',
        pageTitleZh: '美国公司秘书卡 - CogniQuant Foundation',
        sections: [
          {
            headingEn: 'CORPORATE SECRETARY INFORMATION CARD',
            headingZh: '公司官方注册信息卡',
            isKeyGrid: true,
            gridItems: [
              { labelEn: 'Company Name (公司名称)', labelZh: '公司名称', valueEn: 'CogniQuant Foundation', valueZh: 'CogniQuant Foundation' },
              { labelEn: 'Company ID (公司编号)', labelZh: '公司编号', valueEn: '20261949922', valueZh: '20261949922' },
              { labelEn: 'Establishment Date (成立日期)', labelZh: '成立日期', valueEn: '2026 年 08 月 03 日', valueZh: '2026 年 08 月 03 日' },
              { labelEn: 'Registered Address (注册地址)', labelZh: '注册地址', valueEn: '1001 17th Street Denver, CO 80202', valueZh: '1001 17th Street Denver, CO 80202' },
              { labelEn: 'Annual Audit (年检及查询)', labelZh: '年检及查询', valueEn: '科罗拉多州非盈利公司为周年年审', valueZh: '科罗拉多州非盈利公司为周年年审' },
              { labelEn: 'Official Search URL (查询网址)', labelZh: '查询网址', valueEn: 'https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do', valueZh: 'https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do' }
            ]
          }
        ],
        footerTextEn: 'Colorado Department of State • Official Secretariat Profile',
        footerTextZh: '科罗拉多州政府 • 官方秘书档案备案'
      }
    ]
  },
  {
    id: 'irs-ein',
    category: 'irs',
    titleEn: 'IRS Federal Employer Identification (EIN Notice CP575E)',
    titleZh: '美国国税局 (IRS) 联邦税号核发通知 (CP575E)',
    subtitleEn: 'Department of the Treasury - Internal Revenue Service (Philadelphia, PA)',
    subtitleZh: '美国联邦国内收入署官方核发统一实体税号 (EIN: 42-4235277)',
    registrationNumber: '42-4235277',
    issueDate: '2026-08-03',
    issuingAuthorityEn: 'Internal Revenue Service (Department of the Treasury)',
    issuingAuthorityZh: '美国财政部国内收入署 (IRS)',
    statusEn: 'Official Tax ID Assigned',
    statusZh: '联邦统一实体税号已核准生效',
    badgeType: 'verified',
    pageCount: 2,
    documentType: 'notice',
    sealType: 'irs',
    summaryEn: 'Official 2-page IRS Notice CP575E assigning Employer Identification Number (EIN) 42-4235277 to COGNIQUANT FOUNDATION with name control COGN.',
    summaryZh: '美国财政部国税局 (IRS) 正式出具的 2 页 CP575E 联邦税号通知书，向 COGNIQUANT FOUNDATION 正式核发联邦统一税号 EIN: 42-4235277，税控代码 COGN。',
    details: [
      { labelEn: 'Assigned EIN', labelZh: '联邦税号 EIN', valueEn: '42-4235277', valueZh: '42-4235277' },
      { labelEn: 'Name Control Code', labelZh: '税控标识代码', valueEn: 'COGN', valueZh: 'COGN' },
      { labelEn: 'IRS Notice Code', labelZh: 'IRS 通知书编码', valueEn: 'IRS Notice CP575E', valueZh: 'IRS Notice CP575E' },
      { labelEn: 'Entity Name', labelZh: '核发单位全称', valueEn: 'COGNIQUANT FOUNDATION', valueZh: 'COGNIQUANT FOUNDATION' },
      { labelEn: 'Principal Address', labelZh: '税务登记地址', valueEn: '1001 17TH STREET, DENVER, CO 80202', valueZh: '1001 17TH STREET, DENVER, CO 80202' },
      { labelEn: 'Issuance Date', labelZh: '核准签发日期', valueEn: 'August 03, 2026', valueZh: '2026年08月03日' }
    ],
    officialSearchUrl: 'https://www.irs.gov/charities',
    certificatePdfName: 'IRS Notice CP575E EIN 42-4235277.pdf',
    pages: [
      {
        pageNumber: 1,
        totalPages: 2,
        pageTitleEn: 'Department of the Treasury Internal Revenue Service - Notice CP575E (Page 1/2)',
        pageTitleZh: '美国财政部国内收入署 - CP575E 税号核发通知 (第 1/2 页)',
        sections: [
          {
            headingEn: 'WE ASSIGNED YOU AN EMPLOYER IDENTIFICATION NUMBER (EIN)',
            headingZh: '联邦雇主与实体税务识别号核发确认',
            isCallout: true,
            contentEn: 'Your EIN is 42-4235277. The name control associated with this EIN is COGN. Entity: COGNIQUANT FOUNDATION, 1001 17TH STREET, DENVER, CO 80202. Date: August 03, 2026.',
            contentZh: '已向您分配联邦税号 (EIN)：42-4235277。与该 EIN 关联的税控名称代码为：COGN。登记主体：COGNIQUANT FOUNDATION，地址：1001 17TH STREET, DENVER, CO 80202。核发日期：2026年08月03日。'
          },
          {
            headingEn: 'WHAT YOU NEED TO KNOW & STATUTORY REQUIREMENTS',
            headingZh: '重要税务合规要求与免税申报指南',
            contentEn: 'When you applied for an EIN, you said your organization is a non-profit. Getting an EIN doesn\'t mean you\'re automatically tax-exempt. You must apply specifically for tax-exempt status (Form 1023 / Form 1024). Most organizations must file a Form 990 series annual information return beginning with the year they legally form.',
            contentZh: '申请 EIN 时登记为非营利机构。获得 EIN 需按照《国内税收法典》第 501 条款进行免税身份申请（Form 1023/1024）。机构自成立当年起需定期提交 Form 990 系列年度信息申报表。'
          }
        ],
        footerTextEn: 'Department of the Treasury • Internal Revenue Service • Philadelphia, PA 19255-0023 • Notice CP575E',
        footerTextZh: '美国财政部 • 国内收入署 • 费城税务中心 • 官方通知书 CP575E'
      },
      {
        pageNumber: 2,
        totalPages: 2,
        pageTitleEn: 'Notice CP575E Page 2/2 - Contact and Assistance',
        pageTitleZh: 'CP575E 通知书 第 2/2 页 - 官方联络与核验支持',
        sections: [
          {
            headingEn: 'IRS OFFICIAL SUPPORT & VERIFICATION',
            headingZh: '国税局官方支持与协助渠道',
            contentEn: 'Call us at 800-829-4933 if you can\'t find what you need online (IRS.gov/Charities). If you prefer, you can write to the address at the top of this notice: Department Of the Treasury, Internal Revenue Service, Philadelphia, PA 19255-0023.',
            contentZh: '如需协助可致电 800-829-4933 或访问 IRS.gov/Charities。书面函件请寄送至：美国财政部国内收入署（费城办公室，PA 19255-0023）。'
          }
        ],
        footerTextEn: 'Notice CP575E • Employer ID Number 42-4235277 • Page 2/2',
        footerTextZh: '通知书 CP575E • 联邦税号 42-4235277 • 第 2/2 页'
      }
    ]
  }
];

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

export const INITIAL_MARKET_ASSETS: MarketAsset[] = [
  {
    symbol: 'XAU/USD',
    nameEn: 'Spot Gold / US Dollar',
    nameZh: '国际现货黄金',
    category: 'metals',
    price: '$2,488.60',
    change24h: '+0.84%',
    isPositive: true,
    volatility: '11.2%',
    sharpe: '3.12',
    sparkline: [2460, 2465, 2472, 2468, 2478, 2482, 2488.6]
  },
  {
    symbol: 'XAG/USD',
    nameEn: 'Spot Silver / US Dollar',
    nameZh: '国际现货白银',
    category: 'metals',
    price: '$31.42',
    change24h: '+1.62%',
    isPositive: true,
    volatility: '18.4%',
    sharpe: '2.45',
    sparkline: [30.5, 30.7, 30.9, 30.6, 31.1, 31.25, 31.42]
  },
  {
    symbol: 'SPX',
    nameEn: 'S&P 500 Index Quant Alpha',
    nameZh: '标普500量化增强指数',
    category: 'equities',
    price: '5,632.40',
    change24h: '+0.48%',
    isPositive: true,
    volatility: '12.8%',
    sharpe: '2.78',
    sparkline: [5580, 5595, 5610, 5605, 5620, 5625, 5632.4]
  },
  {
    symbol: 'NDX',
    nameEn: 'Nasdaq 100 Multi-Factor',
    nameZh: '纳斯达克100多因子中性',
    category: 'equities',
    price: '19,845.20',
    change24h: '+1.15%',
    isPositive: true,
    volatility: '15.6%',
    sharpe: '3.04',
    sparkline: [19500, 19620, 19580, 19700, 19750, 19810, 19845.2]
  },
  {
    symbol: 'BTC/USD',
    nameEn: 'Bitcoin Institutional Liquidity',
    nameZh: '比特币机构流动性做市',
    category: 'crypto',
    price: '$64,820.00',
    change24h: '+2.94%',
    isPositive: true,
    volatility: '38.2%',
    sharpe: '2.65',
    sparkline: [62400, 63100, 62800, 63900, 64200, 64500, 64820]
  },
  {
    symbol: 'ETH/USD',
    nameEn: 'Ethereum On-Chain Arbitrage',
    nameZh: '以太坊链上套利模型',
    category: 'crypto',
    price: '$3,485.50',
    change24h: '+2.18%',
    isPositive: true,
    volatility: '42.1%',
    sharpe: '2.52',
    sparkline: [3380, 3410, 3390, 3440, 3460, 3470, 3485.5]
  },
  {
    symbol: 'CQ-ALPHA',
    nameEn: 'CogniQuant AI Macro Multi-Asset',
    nameZh: 'CogniQuant 全球宏观多资产AI策略',
    category: 'index',
    price: '1,482.90',
    change24h: '+0.42%',
    isPositive: true,
    volatility: '6.4%',
    sharpe: '3.86',
    sparkline: [1450, 1458, 1465, 1470, 1474, 1479, 1482.9]
  }
];

export const QUANT_SYSTEM_STATS = {
  activeModels: 84,
  dailyVolume: '$1.42B+',
  executionSpeed: '< 850 ns',
  uptime: '99.999%',
  coveredMarkets: '50+ Global Venues',
  fincenJurisdiction: 'All 50 US States & Territories'
};

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    id: 'm1',
    dateEn: 'August 2026',
    dateZh: '2026 年 8 月',
    titleEn: 'Global Partner Recruitment',
    titleZh: '全球合伙人计划全面招募',
    category: 'expansion',
    status: 'current',
    descriptionEn:
      'Initiation of the global community partner nodes program, incentive matrix deployment, and regional node onboarding across North America, Europe, and Asia-Pacific.',
    descriptionZh:
      '正式启动全球合伙人节点招募与入驻计划，部署合伙人激励矩阵，覆盖北美、欧洲、亚太及中东核心区域节点网络。',
    highlightsEn: [
      'Incentive mechanism activation',
      'Global institutional nodes vetting',
      'Community governance rollout'
    ],
    highlightsZh: ['生态激励机制激活', '全球机构级节点准入审查', '社区分布式治理框架落地']
  },
  {
    id: 'm2',
    dateEn: 'September 2026',
    dateZh: '2026 年 9 月',
    titleEn: 'Social-Finance System Launch',
    titleZh: 'Social-Finance 社交金融系统正式上线',
    category: 'launch',
    status: 'upcoming',
    descriptionEn:
      'Deployment of the decentralized social finance interaction layer, copy-trading reputation network, and decentralized social graph connection.',
    descriptionZh:
      '上线去中心化社交金融互动层，推出链上跟单信誉网络与社交图谱，实现策略共享与社区价值协同。',
    highlightsEn: [
      'Social copy-trading network',
      'Decentralized identity reputation score',
      'Peer-to-peer strategy interaction'
    ],
    highlightsZh: ['社交跟单与交易信誉体系', '去中心化身份信用评级', '点对点策略互动与分润协议']
  },
  {
    id: 'm3',
    dateEn: 'October 2026',
    dateZh: '2026 年 10 月',
    titleEn: 'AI Quantitative & Minting System Launch',
    titleZh: 'AI 量化策略与智能铸造系统上线',
    category: 'launch',
    status: 'upcoming',
    descriptionEn:
      'Official release of CogniQuant AI Labs core multi-strategy quantification engine, automated minting protocols, and computing-power reward distribution.',
    descriptionZh:
      'CogniQuant AI Labs 核心多策略量化引擎与智能铸造系统正式投入运行，支持智能算力质押铸造与全天候策略运行。',
    highlightsEn: [
      'Multi-strategy quantitative engine',
      'Smart contract minting protocol',
      'Computing-power reward distribution'
    ],
    highlightsZh: ['多策略高频量化执行引擎', '智能合约铸造分配机制', '智能算力节点激励结算']
  },
  {
    id: 'm4',
    dateEn: 'December 2026',
    dateZh: '2026 年 12 月',
    titleEn: 'Gold-Trading Ecosystem Launch',
    titleZh: '黄金现货与衍生品交易生态上线',
    category: 'launch',
    status: 'upcoming',
    descriptionEn:
      'Integration of institutional precious metals liquidity (XAU/XAG), macro arbitrage algorithms, physical delivery options, and synthetic gold tokens.',
    descriptionZh:
      '对接国际贵金属（黄金 XAU、白银 XAG）顶级做市流动性，上线宏观套利算法模型与黄金数字化衍生交易生态。',
    highlightsEn: [
      'Institutional spot gold liquidity',
      'Macro cycle spread arbitrage',
      'Gold-backed tokenized assets'
    ],
    highlightsZh: ['机构级现货黄金流动性池', '宏观跨市期现套利模型', '黄金实物与数字化代币互换']
  },
  {
    id: 'm5',
    dateEn: 'February 2027',
    dateZh: '2027 年 2 月',
    titleEn: 'Payment System Integration',
    titleZh: '全球支付与清算结算体系集成',
    category: 'integration',
    status: 'upcoming',
    descriptionEn:
      'Cross-border payment gateway rollout utilizing FinCEN MSB compliance rails, fiat on/off-ramps, POS interfaces, and virtual card issuance.',
    descriptionZh:
      '依托美国 FinCEN MSB 合规清算通道，全面集成跨国支付网关、法币出入金通道、全球 POS 刷卡及虚拟借记卡。',
    highlightsEn: [
      'Global multi-currency settlement',
      'FinCEN-compliant fiat rails',
      'Virtual & physical crypto cards'
    ],
    highlightsZh: ['多币种极速跨国清算网络', '合规法币出入金底层管道', '虚拟及实体消费卡深度集成']
  },
  {
    id: 'm6',
    dateEn: 'April 2027',
    dateZh: '2027 年 4 月',
    titleEn: 'Decentralized Lending Ecosystem Launch',
    titleZh: '去中心化借贷与流动性生态上线',
    category: 'launch',
    status: 'upcoming',
    descriptionEn:
      'Automated multi-collateral lending pools, dynamic interest rate curves, institutional flash loans, and algorithmic risk buffers.',
    descriptionZh:
      '推出多抵押品去中心化借贷池、动态自适应利率模型、机构级闪电贷与链上清算安全冗余缓冲池。',
    highlightsEn: [
      'Over-collateralized lending pools',
      'Dynamic algorithmic interest rates',
      'Multi-asset collateral vaults'
    ],
    highlightsZh: ['超额抵押与隔离风险金库', '动态算法自适应利率曲线', '多资产多链流动性互通']
  },
  {
    id: 'm7',
    dateEn: 'June 2027',
    dateZh: '2027 年 6 月',
    titleEn: 'Prediction-Market Ecosystem Launch',
    titleZh: '预测市场与衍生品生态上线',
    category: 'launch',
    status: 'upcoming',
    descriptionEn:
      'Decentralized oracle-powered prediction markets covering macroeconomic events, commodity indices, sports, and financial indicators.',
    descriptionZh:
      '基于去中心化预言机的全球预测市场上线，覆盖宏观经济决议、大宗商品走势、金融指数与重大事件定价。',
    highlightsEn: [
      'Decentralized oracle settlement',
      'Macro & financial event markets',
      'AMM-driven conditional tokens'
    ],
    highlightsZh: ['去中心化预言机极速裁决', '宏观与金融指标预测池', 'AMM 条件代币流动性模型']
  },
  {
    id: 'm8',
    dateEn: 'August 2027',
    dateZh: '2027 年 8 月',
    titleEn: 'AI Investment-Research & Strategy Subscription',
    titleZh: 'AI 投研中心与量化策略订阅生态',
    category: 'launch',
    status: 'upcoming',
    descriptionEn:
      'Subscription access to CogniQuant AI Labs proprietary alpha signals, multi-agent market reports, automated execution bots, and backtest APIs.',
    descriptionZh:
      '开放 CogniQuant AI Labs 独家 Alpha 信号订阅、多智能体深度投研研报系统、自动执行交易机器人与历史回测 API。',
    highlightsEn: [
      'Multi-agent financial analytics',
      'Real-time alpha signal feeds',
      'API trading bot integration'
    ],
    highlightsZh: ['多智能体宏观深度研报', '毫秒级高频 Alpha 信号流', '一键式自动跟单机器人 API']
  },
  {
    id: 'm9',
    dateEn: 'October 2027',
    dateZh: '2027 年 10 月',
    titleEn: 'CG Game Cluster Launch',
    titleZh: 'CG 游戏生态集群上线',
    category: 'launch',
    status: 'upcoming',
    descriptionEn:
      'Gamified economic loops, GameFi computing power competitions, in-game asset tokenization powered by CGT token utility.',
    descriptionZh:
      '上线融合娱乐与金融属性的 CG 游戏生态集群，推出算力竞技机制与虚拟道具代币化流通体系，全面赋能 CGT 价值。',
    highlightsEn: [
      'GameFi economic models',
      'CGT utility integration',
      'Cross-game asset interoperability'
    ],
    highlightsZh: ['GameFi 闭环经济模型', 'CGT 核心代币全场景消耗', '跨游戏资产互通互认']
  },
  {
    id: 'm10',
    dateEn: 'December 2027',
    dateZh: '2027 年 12 月',
    titleEn: 'Centralized Exchange (CEX) Launch',
    titleZh: '顶级中心化撮合交易所 (CEX) 正式上线',
    category: 'launch',
    status: 'upcoming',
    descriptionEn:
      'Proprietary institutional-grade centralized trading platform with sub-millisecond matching engine, global fiat gateways, and high liquidity order books.',
    descriptionZh:
      '推出自研机构级中心化撮合交易所 (CEX)，配备微秒级撮合内核、全美 MSB 法币通道与深度全球订单薄。',
    highlightsEn: [
      'Sub-microsecond matching engine',
      'Global institutional liquidity books',
      'Full regulatory compliance & custody'
    ],
    highlightsZh: ['微秒级高性能撮合引擎', '全球机构级深度流动性池', '全流程法定合规与冷热隔离托管']
  }
];

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

export const EXECUTIVE_TEAM: ExecutiveLeader[] = [
  {
    id: 'ethan',
    name: 'Ethan',
    roleEn: 'CEO (Chief Executive Officer)',
    roleZh: 'CEO 首席执行官 / 创始人',
    shortTitleEn: 'Founder & Chief Executive Officer',
    shortTitleZh: 'CogniGrid 创始人兼首席执行官',
    photoUrl: ExecutiveImages.ethan,
    bioEn:
      'As the Founder and CEO of CogniGrid, Ethan is appointed by Cogni Quant Foundation as the highest-level decision-maker for the entire ecosystem. He possesses rich experience in global tech strategy, distributed infrastructure and international business layout. He is in charge of formulating the top-level development strategy of CogniGrid, driving global ecological construction and cross-border commercial implementation, and leading the team to advance the long-term vision of the intelligent computing-power ecosystem.',
    bioZh:
      '作为 CogniGrid 创始人兼首席执行官，Ethan 经 Cogni Quant Foundation 理事会任命，担任整个生态系统的最高决策者。他拥有深厚的全球科技战略、分布式基础设施与跨国商业布局经验，统筹制定 CogniGrid 顶层战略规划，推进全球生态建设与跨境商业落地，带领团队实现智能算力金融生态的长期愿景。',
    credentials: ['Top-level Decision Maker', 'Global Tech Strategy', 'Distributed Infra'],
    focusAreasEn: ['Ecosystem Vision', 'Global Commercialization', 'Strategic Governance'],
    focusAreasZh: ['生态战略规划', '全球商业落地', '顶层治理架构']
  },
  {
    id: 'lucas-hale',
    name: 'Lucas Hale',
    roleEn: 'COO (Chief Operating Officer)',
    roleZh: 'COO 首席运营官',
    shortTitleEn: 'Chief Operating Officer',
    shortTitleZh: '全球运营总监 / 首席运营官',
    photoUrl: ExecutiveImages.lucas,
    bioEn:
      "Lucas brings over 18 years of global enterprise operation experience. He is responsible for CogniGrid's daily global operation, internal process management and partner system construction. He focuses on optimizing operational efficiency and ensuring the steady implementation of the ecological landing strategy.",
    bioZh:
      'Lucas 拥有超过 18 年的全球企业运营管理经验。全面负责 CogniGrid 的全球日常运营、内部流程精细化管理与全球合作伙伴体系建设，致力于持续优化全流程运营效率，保障生态落地战略的稳健执行。',
    credentials: ['18+ Yrs Global Operations', 'Process Optimization', 'Global Partners'],
    focusAreasEn: ['Daily Global Operations', 'Partner Ecosystem', 'Execution Efficiency'],
    focusAreasZh: ['全球日常运营', '合作伙伴生态', '落地执行效率']
  },
  {
    id: 'julian-bennett',
    name: 'Julian Bennett',
    roleEn: 'CTO (Chief Technology Officer)',
    roleZh: 'CTO 首席技术官',
    shortTitleEn: 'Chief Technology Officer',
    shortTitleZh: '底层架构师 / 首席技术官',
    photoUrl: ExecutiveImages.julian,
    bioEn:
      'Julian is a senior distributed-system architect with rich experience in blockchain and computing infrastructure. He leads the technical research-and-development team, oversees smart-contract audit, product iteration and technical security construction for the CogniGrid underlying ecosystem.',
    bioZh:
      'Julian 是一名资深分布式系统架构师，在区块链与高性能计算基础设施领域拥有丰富经验。他统领技术研发团队，主导智能合约安全审计、产品迭代及 CogniGrid 底层生态的技术安全防线建设。',
    credentials: ['Distributed System Architect', 'Smart Contract Auditing', 'Crypto Infra'],
    focusAreasEn: ['Computing Infrastructure', 'Smart Contract Security', 'Product Iteration'],
    focusAreasZh: ['分布式计算底座', '智能合约安全审计', '底层产品迭代']
  },
  {
    id: 'arthur-grant',
    name: 'Arthur Grant',
    roleEn: 'CFO (Chief Financial Officer)',
    roleZh: 'CFO 首席财务官',
    shortTitleEn: 'Chief Financial Officer',
    shortTitleZh: '财务合规总监 / 首席财务官',
    photoUrl: ExecutiveImages.arthur,
    bioEn:
      'Arthur has long been engaged in global digital-economy asset management and financial compliance work. He takes charge of the platform fund scheduling, financial compliance management and ecological-fund budget arrangement, and provides stable financial support for global ecological expansion.',
    bioZh:
      'Arthur 长期深耕全球数字经济资产管理与金融合规领域。统筹负责平台资金调度、财务合规风控与生态发展基金的预算配置，为 CogniGrid 全球生态扩张提供坚实稳固的财务与资金支持。',
    credentials: ['Digital Asset Management', 'Financial Compliance', 'Fund Allocation'],
    focusAreasEn: ['Fund Scheduling', 'Financial Compliance', 'Budget Allocation'],
    focusAreasZh: ['平台资金调度', '财务合规风控', '生态基金预算管理']
  },
  {
    id: 'stella-campbell',
    name: 'Stella Campbell',
    roleEn: 'CMO (Chief Marketing Officer)',
    roleZh: 'CMO 首席营销官',
    shortTitleEn: 'Chief Marketing Officer',
    shortTitleZh: '全球品牌总监 / 首席营销官',
    photoUrl: ExecutiveImages.stella,
    bioEn:
      'Stella specializes in global brand building and cross-regional market communication. She leads the brand promotion, community operation and event marketing of CogniGrid, shapes the global brand image of the ecosystem and connects users and partners around the world.',
    bioZh:
      'Stella 专注于全球品牌塑造与跨区域市场传播。全面主导 CogniGrid 的品牌全球推广、社区生态运营与国际大型会展营销，塑造卓越的全球品牌形象，深度链接世界各地的用户与生态合作伙伴。',
    credentials: ['Global Brand Strategy', 'Community Growth', 'Cross-Regional Marketing'],
    focusAreasEn: ['Brand Building', 'Community Operations', 'Global Marketing'],
    focusAreasZh: ['全球品牌建设', '社群生态运营', '跨区域市场营销']
  },
  {
    id: 'miles-foster',
    name: 'Miles Foster',
    roleEn: 'CGO (Chief Growth Officer)',
    roleZh: 'CGO 首席增长官',
    shortTitleEn: 'Chief Growth Officer',
    shortTitleZh: '用户增长总监 / 首席增长官',
    photoUrl: ExecutiveImages.miles,
    bioEn:
      'Miles focuses on user growth, community expansion and incentive-mechanism design. He is in charge of global user acquisition, partner activation and ecological incentive system iteration, helping CogniGrid continuously expand its global user base.',
    bioZh:
      'Miles 专注于规模化用户增长、社区裂变拓展与激励机制模型设计。全面负责全球用户获取、合作伙伴激活与生态激励体系的持续迭代，强力驱动 CogniGrid 全球用户基数与网络效应的持续扩大。',
    credentials: ['Incentive Engineering', 'Growth Hacking', 'User Acquisition'],
    focusAreasEn: ['User Growth', 'Incentive Mechanisms', 'Partner Activation'],
    focusAreasZh: ['规模化用户增长', '激励机制设计', '合伙人生态激活']
  },
  {
    id: 'iris-sullivan',
    name: 'Iris Sullivan',
    roleEn: 'CBDO (Chief Business Development Officer)',
    roleZh: 'CBDO 首席商务官',
    shortTitleEn: 'Chief Business Development Officer',
    shortTitleZh: '商务拓展总监 / 首席商务官',
    photoUrl: ExecutiveImages.iris,
    bioEn:
      'Iris possesses abundant global cross-border business resources. She is responsible for overseas institutional cooperation, strategic-partner docking and offline-activity layout, and promotes multi-dimensional business cooperation for the CogniGrid ecosystem worldwide.',
    bioZh:
      'Iris 拥有广泛且雄厚的全球跨境商业资源。负责海外机构级合作拓展、全球战略伙伴对接与全球线下战略峰会布局，全方位推进 CogniGrid 生态在全球范围内的多维度商业化合作。',
    credentials: ['Institutional Partnerships', 'Cross-Border Deals', 'Global BD'],
    focusAreasEn: ['Institutional Cooperation', 'Strategic Docking', 'Offline Summits'],
    focusAreasZh: ['海外机构合作', '全球战略对接', '国际线下拓展']
  }
];

export const FOUNDATION_GOVERNANCE_OVERVIEW = {
  name: 'Cogni Quant Foundation',
  governingBody: 'Ecosystem Governing Body',
  aum: '20,000,000 USDT',
  aumNumeric: 20000000,
  registrationNo: '31000337267999',
  entityId: '20261949922',
  jurisdiction: 'Colorado, USA / Federal FinCEN MSB',
  missionEn:
    'To gather global capital, technology and industrial resources to build a secure, transparent, verifiable and scalable AI-powered intelligent financial ecosystem network.',
  missionZh:
    '汇聚全球资本、顶尖技术与产业资源，打造安全、透明、可验证且具备无限拓展能力的 AI 驱动智能金融生态网络。',
  roleDescriptionEn:
    'Cogni Quant Foundation serves as the governing body responsible for global strategy, resource allocation and governance promotion of the CogniGrid ecosystem. Through strategic planning, fund management, technology investment, industrial resource integration, international cooperation and risk governance, the Foundation promotes long-term collaboration among different technical systems, market capabilities and ecological applications.',
  roleDescriptionZh:
    'Cogni Quant Foundation 作为整个 CogniGrid 生态的管理与治理机构，全面负责全球战略布局、资源统筹调配与治理推进。通过长期的战略规划、基金管理、技术投资、产业资源联动、国际合作与风控治理，为 CogniGrid 的可持续发展奠定稳固基石。'
};

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
