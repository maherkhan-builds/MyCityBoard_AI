// src/constants.ts

import { CivicCategory } from './types';

export const APP_NAME = 'MyCityBoard';

export const CIVIC_CATEGORIES: { value: CivicCategory; label: string }[] = [
  { value: CivicCategory.HOUSING, label: 'Housing' },
  { value: CivicCategory.TRANSPORT, label: 'Transport' },
  { value: CivicCategory.TAXES, label: 'Taxes' },
  { value: CivicCategory.SCHOOLS, label: 'Schools' },
  { value: CivicCategory.ENVIRONMENT, label: 'Environment' },
  { value: CivicCategory.BUDGET, label: 'Budget' },
  { value: CivicCategory.VOTING, label: 'Voting' },
  { value: CivicCategory.ZONING, label: 'Zoning' },
  { value: CivicCategory.POLICY, label: 'Policy' },
  { value: CivicCategory.MEETINGS, label: 'Meetings' },
];

export const ILLUSTRATION_CITY_SKYLINE = 'https://picsum.photos/seed/cityboard/1920/400?blur=2';
