import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  pgEnum,
  uuid,
  smallint,
  serial,
} from 'drizzle-orm/pg-core';
import { AdapterAccount } from 'next-auth/adapters';
import { RACES, TAGS, VERSIONS } from './enums';

export const users = pgTable('user', {
  id: text('id').notNull().primaryKey(),
  name: text('name'),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
});

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').notNull().primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);

const tags = Object.keys(TAGS) as unknown as readonly [string, ...string[]];
export const tagEnum = pgEnum('tag', tags);

const versions = Object.keys(VERSIONS) as unknown as readonly [
  string,
  ...string[]
];
export const versionEnum = pgEnum('version', versions);

const races = Object.keys(RACES) as unknown as readonly [string, ...string[]];
export const raceEnum = pgEnum('race', races);

export const buildOrders = pgTable('buildOrder', {
  id: uuid('id').primaryKey().notNull(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  tags: tagEnum('tags').array(),
  race: raceEnum('race'),
  youtube: text('youtube'),
  version: versionEnum('version'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
});

export const buildOrderSteps = pgTable('buildOrderStep', {
  id: uuid('id').primaryKey().notNull(),
  buildOrderId: uuid('buildOrderId')
    .notNull()
    .references(() => buildOrders.id, { onDelete: 'cascade' }),
  gameTime: text('gameTime'),
  food: smallint('food'),
  description: text('description').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
});
