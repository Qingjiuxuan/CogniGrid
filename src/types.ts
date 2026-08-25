export type Language = 'zh' | 'en';

export interface DocumentPage {
  pageNumber: number;
  totalPages?: number;
  pageTitleEn?: string;
  pageTitleZh?: string;
  sections: {
    headingEn?: string;
    headingZh?: string;
    contentEn?: string;
    contentZh?: string;
    isCallout?: boolean;
    isKeyGrid?: boolean;
    gridItems?: { labelEn: string; labelZh: string; valueEn: string; valueZh: string }[];
    isList?: boolean;
    listItemsEn?: string[];
    listItemsZh?: string[];
  }[];
  footerTextEn?: string;
  footerTextZh?: string;
}

export interface DocumentInfo {
  id: string;
  category: 'fincen' | 'state' | 'irs' | 'corporate' | 'authorization';
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  registrationNumber: string;
  issueDate: string;
  issuingAuthorityEn: string;
  issuingAuthorityZh: string;
  statusEn: string;
  statusZh: string;
  badgeType: 'verified' | 'active' | 'good-standing';
  summaryEn: string;
  summaryZh: string;
  details: {
    labelEn: string;
    labelZh: string;
    valueEn: string;
    valueZh: string;
  }[];
  officialSearchUrl?: string;
  searchInstructionEn?: string;
  searchInstructionZh?: string;
  certificatePdfName: string;
  pageCount?: number;
  pages?: DocumentPage[];
  documentType?: 'certificate' | 'transcript' | 'notice' | 'letter' | 'bylaws' | 'card';
  sealType?: 'colorado-state' | 'fincen-treasury' | 'irs' | 'foundation-common-seal' | 'registered-agent';
}

export interface BusinessPillar {
  id: string;
  code: string;
  titleEn: string;
  titleZh: string;
  taglineEn: string;
  taglineZh: string;
  descriptionEn: string;
  descriptionZh: string;
  iconName: string;
  accentColor: string;
  metrics: {
    labelEn: string;
    labelZh: string;
    value: string;
    change?: string;
  }[];
  keyCapabilitiesEn: string[];
  keyCapabilitiesZh: string[];
  scopeExtractEn: string;
  scopeExtractZh: string;
}

export interface MarketAsset {
  symbol: string;
  nameEn: string;
  nameZh: string;
  category: 'metals' | 'equities' | 'crypto' | 'index';
  price: string;
  change24h: string;
  isPositive: boolean;
  volatility: string;
  sharpe: string;
  sparkline: number[];
}

export interface ExecutiveLeader {
  id: string;
  name: string;
  roleEn: string;
  roleZh: string;
  shortTitleEn: string;
  shortTitleZh: string;
  photoUrl: string;
  bioEn: string;
  bioZh: string;
  credentials: string[];
  focusAreasEn: string[];
  focusAreasZh: string[];
}

export interface RoadmapMilestone {
  id: string;
  dateEn: string;
  dateZh: string;
  titleEn: string;
  titleZh: string;
  category: 'launch' | 'integration' | 'expansion' | 'governance';
  status: 'completed' | 'current' | 'upcoming';
  descriptionEn: string;
  descriptionZh: string;
  highlightsEn: string[];
  highlightsZh: string[];
}

export interface EcosystemItem {
  id: string;
  index: string;
  titleEn: string;
  titleZh: string;
  taglineEn: string;
  taglineZh: string;
  descriptionEn: string;
  descriptionZh: string;
  iconName: string;
  tag: string;
  launchDate: string;
  featuresEn: string[];
  featuresZh: string[];
}

export interface PlatformAnnouncement {
  id: string;
  date: string;
  titleEn: string;
  titleZh: string;
  categoryEn: string;
  categoryZh: string;
  summaryEn: string;
  summaryZh: string;
  contentEn: string;
  contentZh: string;
  isPinned?: boolean;
}

export interface CommunityChannel {
  name: string;
  platform: 'tg' | 'x' | 'goldhouse' | 'email';
  handle: string;
  url: string;
  descEn: string;
  descZh: string;
  badge: string;
}
