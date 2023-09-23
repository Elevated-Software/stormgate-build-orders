export type SiteConfig = typeof siteConfig;

const buildOrders = {
  label: 'Build Orders',
  href: '/build-orders',
};

export const siteConfig = {
  name: 'Next.js + NextUI',
  description: 'Make beautiful websites regardless of your design experience.',
  buildOrders,
  navItems: [buildOrders],
  links: {
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
