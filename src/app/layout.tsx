import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import SiteNav from '@/components/site-nav';
import SiteFooter from '@/components/site-footer';
import { StructuredData } from '@/components/StructuredData';
import WhatsAppButton from '@/components/whatsapp-button';

/* Self-hosted variable fonts — zero third-party requests, no layout shift */
const fraunces = localFont({
  src: [
    {
      path: '../fonts/fraunces-latin-opsz-normal.woff2',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../fonts/fraunces-latin-opsz-italic.woff2',
      style: 'italic',
      weight: '100 900',
    },
  ],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = localFont({
  src: '../fonts/inter-latin-wght-normal.woff2',
  style: 'normal',
  weight: '100 900',
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = localFont({
  src: '../fonts/jetbrains-mono-latin-wght-normal.woff2',
  style: 'normal',
  weight: '100 800',
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammadabdullahportfolio-khaki.vercel.app'),
  title: {
    default: 'Muhammad Abdullah — Full-Stack Engineer',
    template: '%s — Muhammad Abdullah',
  },
  description:
    'Full-stack engineer building production web & mobile systems with React, Next.js, Node.js, and Spring Boot — with a security-first mindset. Based in Lahore, Pakistan.',
  keywords: [
    'Full Stack Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Spring Boot',
    'MongoDB',
    'Ethical Hacking',
    'Cybersecurity',
    'Software Engineer',
    'Portfolio',
    'Pakistan',
  ],
  authors: [{ name: 'Muhammad Abdullah' }],
  creator: 'Muhammad Abdullah',
  publisher: 'Muhammad Abdullah',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://muhammadabdullahportfolio-khaki.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammadabdullahportfolio-khaki.vercel.app',
    title: 'Muhammad Abdullah — Full-Stack Engineer',
    description:
      'Full-stack engineer building production web & mobile systems — with a security-first mindset.',
    siteName: 'Muhammad Abdullah Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Abdullah — Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Abdullah — Full-Stack Engineer',
    description:
      'Full-stack engineer building production systems with a security-first mindset.',
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  themeColor: '#110e08',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <SiteNav />
        <div className="content-frame">
          <main role="main">{children}</main>
          <SiteFooter />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
