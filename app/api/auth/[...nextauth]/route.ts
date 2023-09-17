import { db } from '@/drizzle.config';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { type DefaultSession, type NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import EmailProvider from 'next-auth/providers/email';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession['user'];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: DrizzleAdapter(db),
  providers: [
    EmailProvider({
      server: {
        name: process.env.NEXTAUTH_URL,
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
