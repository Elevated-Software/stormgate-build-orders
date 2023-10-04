'use client';

import React from 'react';
import NextLink from 'next/link';
import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';

function CreateNewBuildOrderButton() {
  return (
    <Link
      as={NextLink}
      href={siteConfig.newBuildOrder.href}
      className={buttonStyles({
        color: 'success',
        radius: 'md',
        variant: 'shadow',
        className: 'font-semibold',
      })}>
      Create New Build Order
    </Link>
  );
}

export default CreateNewBuildOrderButton;
