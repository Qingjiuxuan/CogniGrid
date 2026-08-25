import { MarketAsset } from '../types';

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
