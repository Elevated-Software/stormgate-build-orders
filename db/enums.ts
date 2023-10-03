export const TAGS = {
  rush: 'Rush',
  cheese: 'Cheese',
  'all-in': 'All-In',
} as const;

export type Tag = keyof typeof TAGS;

export const VERSIONS = {
  'closed-alpha-1': 'Closed-Alpha-1',
  'closed-alpha-2': 'Closed-Alpha-2',
} as const;

export type Version = keyof typeof VERSIONS;

export const RACES = {
  'human-resistance': 'Human Resistance',
  'infernal-host': 'Infernal Host',
} as const;

export type Race = keyof typeof RACES;
