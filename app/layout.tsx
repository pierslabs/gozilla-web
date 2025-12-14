import type React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GoZilla - CLI for Go developers',
  description:
    'Stop wasting hours on boilerplate. Start prototyping in minutes with GoZilla.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/gozilla-logo2.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/gozilla-logo2.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/gozilla-logo2.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/gozilla-logo2.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
