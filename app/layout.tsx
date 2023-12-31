import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl md:pt-16 px-2 md:px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 text-xs md:text-sm">
              <div className="text-default-600 px-4">
                Stormgate Build Orders is a fan-made website and not affiliated
                with{' '}
                <Link
                  isExternal
                  className="text-current text-xs md:text-sm"
                  href="http://playstormgate.com"
                  title="Stormgate Build Orders is a fan-made website">
                  <span>Stormgate</span>
                </Link>{' '}
                or{' '}
                <Link
                  isExternal
                  className="text-current text-xs md:text-sm"
                  href="https://frostgiant.com/"
                  title="Stormgate Build Orders is a fan-made website">
                  Frost Giant Studios.
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
