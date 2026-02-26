// src/data/mockCivicData.ts

import { CivicCategory, CivicDataItem, BudgetData, VotingData, TimelineEvent } from '../types';

export const MOCK_CIVIC_DATA: CivicDataItem[] = [
  {
    id: '1',
    category: CivicCategory.HOUSING,
    title: 'New Affordable Housing Initiative Approved',
    summary: 'The city council has approved a new initiative to build 500 affordable housing units in the downtown area over the next two years. This aims to address the growing housing crisis and provide more accessible living options for low-income families.',
    fullText: 'During the latest city council meeting on February 20, 2026, a landmark decision was made to allocate $75 million towards the construction of new affordable housing. The plan includes incentives for developers to include a minimum of 30% affordable units in new projects and a streamlined permitting process. Public consultations will begin in April.',
    impact: 'This means more families will have access to affordable homes, potentially reducing homelessness and improving community stability. Property values in the surrounding areas might see moderate changes as new infrastructure develops.',
    date: '2026-02-20',
    location: 'Downtown District',
    imageUrl: 'https://picsum.photos/seed/housing1/800/600?blur=1',
    sentiment: 'positive',
    relatedIssues: ['housing-crisis', 'urban-development'],
  },
  {
    id: '2',
    category: CivicCategory.TRANSPORT,
    title: 'Public Transit Expansion Project Underway',
    summary: 'Construction has begun on the new light rail extension, connecting the east and west sides of the city. This multi-year project is expected to significantly reduce commute times and traffic congestion.',
    fullText: 'The groundbreaking ceremony for the $200 million light rail extension took place on February 15, 2026. The project will add 10 new stations and is slated for completion by late 2028. Funding comes from a combination of state grants and local bonds. Disruptions to bus routes are expected during phase one of construction.',
    impact: 'Commuters will experience faster and more reliable public transport. Local businesses near new stations may see increased foot traffic. Temporary traffic detours will be in place during construction phases.',
    date: '2026-02-15',
    location: 'City-wide',
    imageUrl: 'https://picsum.photos/seed/transport1/800/600?blur=1',
    sentiment: 'positive',
    relatedIssues: ['traffic-congestion', 'infrastructure'],
  },
  {
    id: '3',
    category: CivicCategory.ENVIRONMENT,
    title: 'New Recycling Program Pilot Launched',
    summary: 'A pilot program for curbside composting and expanded recycling options has been launched in the Northwood neighborhood. Residents will receive new bins and collection schedules.',
    fullText: 'Starting March 1, 2026, Northwood residents will participate in a six-month pilot program for advanced waste management. The program aims to divert 30% more waste from landfills. Educational workshops will be held throughout March to inform residents about proper sorting techniques. Data collected will inform a potential city-wide rollout.',
    impact: 'Residents in Northwood will need to adjust to new waste sorting habits. If successful, the program could lead to a cleaner city and reduced environmental footprint across all neighborhoods.',
    date: '2026-03-01',
    location: 'Northwood Neighborhood',
    imageUrl: 'https://picsum.photos/seed/environment1/800/600?blur=1',
    sentiment: 'neutral',
    relatedIssues: ['waste-management', 'sustainability'],
  },
  {
    id: '4',
    category: CivicCategory.TAXES,
    title: 'Property Tax Assessment Review Scheduled',
    summary: 'The annual property tax assessment review will begin next month, potentially impacting property values and tax bills across several districts. Public hearings are scheduled.',
    fullText: 'The city assessor\'s office announced that the annual property tax assessment review will commence on March 10, 2026. Homeowners in Districts 3, 5, and 7 are particularly encouraged to review their property assessments. Information sessions will be held virtually, and property owners can appeal their assessments within 30 days of receiving their new notices.',
    impact: 'Your property taxes could increase or decrease based on the new assessments. It\'s crucial for homeowners to review their notices and attend public hearings if they have concerns.',
    date: '2026-03-10',
    location: 'Districts 3, 5, 7',
    imageUrl: 'https://picsum.photos/seed/taxes1/800/600?blur=1',
    sentiment: 'negative',
    relatedIssues: ['property-values', 'local-economy'],
  },
  {
    id: '5',
    category: CivicCategory.ZONING,
    title: 'Mixed-Use Development Proposal for Old Industrial Site',
    summary: 'A proposal for a new mixed-use development, including residential and commercial spaces, has been submitted for the old industrial site on Elm Street. Public comments are now open.',
    fullText: 'Developer \"Urban Visionaries\" has submitted plans for a 10-story mixed-use building at 123 Elm Street. The proposal includes 150 residential units, ground-floor retail, and green spaces. The current zoning is light industrial, requiring a variance. A public meeting to discuss the proposal is scheduled for March 25, 2026, at City Hall.',
    impact: 'This development could bring new businesses and residents to the area, increasing local amenities but also potentially increasing traffic and demand for public services. Residents in the vicinity should review the plans and provide feedback.',
    date: '2026-03-25',
    location: 'Elm Street Industrial Site',
    imageUrl: 'https://picsum.photos/seed/zoning1/800/600?blur=1',
    sentiment: 'neutral',
    relatedIssues: ['urban-planning', 'community-feedback'],
  },
];

export const MOCK_BUDGET_DATA: BudgetData[] = [
  { category: 'Public Safety', amount: 120000000, percentage: 30 },
  { category: 'Education', amount: 100000000, percentage: 25 },
  { category: 'Infrastructure', amount: 80000000, percentage: 20 },
  { category: 'Health & Human Services', amount: 60000000, percentage: 15 },
  { category: 'Parks & Recreation', amount: 40000000, percentage: 10 },
];

export const MOCK_VOTING_DATA: VotingData[] = [
  { issue: 'Affordable Housing Initiative', for: 7, against: 2, abstain: 1 },
  { issue: 'Public Transit Expansion', for: 9, against: 1, abstain: 0 },
  { issue: 'Downtown Revitalization', for: 6, against: 3, abstain: 1 },
  { issue: 'Environmental Protection Act', for: 8, against: 2, abstain: 0 },
];

export const MOCK_TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 't1',
    date: '2026-03-01',
    title: 'Recycling Program Pilot Launch',
    description: 'Curbside composting begins in Northwood.',
    category: CivicCategory.ENVIRONMENT,
  },
  {
    id: 't2',
    date: '2026-03-10',
    title: 'Property Tax Assessment Review',
    description: 'Annual review commences for Districts 3, 5, and 7.',
    category: CivicCategory.TAXES,
  },
  {
    id: 't3',
    date: '2026-03-25',
    title: 'Zoning Proposal Public Meeting',
    description: 'Public discussion on Elm Street mixed-use development.',
    category: CivicCategory.ZONING,
  },
  {
    id: 't4',
    date: '2026-04-15',
    title: 'Affordable Housing Public Consultations',
    description: 'First round of community feedback for new housing units.',
    category: CivicCategory.HOUSING,
  },
];
