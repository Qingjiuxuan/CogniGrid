export type Language = 'en' | 'zh';

export interface LeadershipMember {
  id: string;
  name: string;
  nameZh?: string;
  role: string;
  roleZh: string;
  department: string;
  departmentZh: string;
  bio: string;
  bioZh: string;
  experience: string[];
  experienceZh: string[];
  isCEO?: boolean;
  avatar?: string;
}

export interface EcosystemItem {
  id: string;
  title: string;
  titleZh: string;
  subtitle: string;
  subtitleZh: string;
  description: string;
  descriptionZh: string;
  launchDate: string;
  launchDateZh: string;
  category: 'core' | 'defi' | 'trading' | 'metaverse' | 'infrastructure';
  icon: string;
  features: string[];
  featuresZh: string[];
  status: 'active' | 'in-development' | 'planned';
}

export interface RoadmapMilestone {
  id: string;
  period: string;
  periodZh: string;
  title: string;
  titleZh: string;
  subtitle?: string;
  subtitleZh?: string;
  description: string;
  descriptionZh: string;
  items: string[];
  itemsZh: string[];
  status: 'current' | 'upcoming' | 'completed';
  quarter: '2026' | '2027';
  highlight?: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  titleZh: string;
  date: string;
  category: 'foundation' | 'technical' | 'community' | 'roadmap';
  categoryZh: string;
  summary: string;
  summaryZh: string;
  content: string;
  contentZh: string;
  author: string;
  isPinned?: boolean;
  referenceDoc?: string;
}

export interface CommunityChannel {
  name: string;
  nameZh: string;
  handle: string;
  url: string;
  icon: string;
  description: string;
  descriptionZh: string;
  badge: string;
  badgeZh: string;
  color: string;
}

export interface LegalDocument {
  id: 'authorization-letter' | 'membership-certificate';
  title: string;
  titleZh: string;
  docNumber?: string;
  issuer: string;
  issuerZh: string;
  authorizedPerson: string;
  effectiveDate: string;
  jurisdiction: string;
  jurisdictionZh: string;
  status: string;
  statusZh: string;
  pages: number;
  summary: string;
  summaryZh: string;
}
