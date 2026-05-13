import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anamul Gani Kanon | DevOps Engineer & Kubernetes Expert',
  description: 'DevOps Engineer with 5+ years experience. CKA, RHCE, MCSA certified. Specializing in Kubernetes, CI/CD automation, and cloud infrastructure.',
  keywords: [
    'DevOps',
    'Kubernetes',
    'CKA',
    'RHCE',
    'CI/CD',
    'Docker',
    'Infrastructure',
    'Cloud',
    'Terraform',
    'Anamul Gani Kanon',
  ],
  authors: [{ name: 'Anamul Gani Kanon' }],
  creator: 'Anamul Gani Kanon',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anamul.dev',
    title: 'Anamul Gani Kanon | DevOps Engineer & Kubernetes Expert',
    description: 'DevOps Engineer with 5+ years experience. CKA, RHCE, MCSA certified. Specializing in Kubernetes, CI/CD automation, and cloud infrastructure.',
    images: [
      {
        url: 'https://anamul.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anamul Gani Kanon - DevOps Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anamul Gani Kanon | DevOps Engineer & Kubernetes Expert',
    description: 'DevOps Engineer with 5+ years experience. CKA, RHCE, MCSA certified.',
    images: ['https://anamul.dev/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
