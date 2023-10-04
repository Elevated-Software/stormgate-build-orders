export type SiteConfig = typeof siteConfig;

const buildOrders = {
  label: 'Build Orders',
  href: '/build-orders',
};

const newBuildOrder = {
  label: 'New Build Order',
  href: '/build-orders/new',
};

export const siteConfig = {
  name: 'Next.js + NextUI',
  description: 'Make beautiful websites regardless of your design experience.',
  buildOrders,
  newBuildOrder,
  navItems: [buildOrders],
  links: {
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
