// src/types.ts

export enum AppRoute {
  ONBOARDING = '/',
  FEED = '/feed',
  DECISION_DETAIL = '/decision/:id',
  VISUALIZATIONS = '/visualizations',
  COMMUNITY = '/community',
  SETTINGS = '/settings',
}

export interface CivicDataItem {
  id: string;
  category: CivicCategory;
  title: string;
  summary: string;
  fullText: string;
  impact: string;
  date: string;
  location: string;
  imageUrl?: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  relatedIssues?: string[];
}

export enum CivicCategory {
  HOUSING = 'Housing',
  TRANSPORT = 'Transport',
  TAXES = 'Taxes',
  SCHOOLS = 'Schools',
  ENVIRONMENT = 'Environment',
  BUDGET = 'Budget',
  VOTING = 'Voting',
  ZONING = 'Zoning',
  POLICY = 'Policy',
  MEETINGS = 'Meetings',
}

export interface BudgetData {
  category: string;
  amount: number;
  percentage: number;
}

export interface VotingData {
  issue: string;
  for: number;
  against: number;
  abstain: number;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: CivicCategory;
}
