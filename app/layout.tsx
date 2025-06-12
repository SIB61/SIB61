import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import CustomCursor from '@/components/custom-cursor';

export const metadata: Metadata = {
  title: 'Md. Sabit Islam Bhuiya | Software Engineer',
  description:
    'Professional Software Engineer specializing in modern web and backend development. Explore projects, blogs, and contact details.',
  keywords: [
    'Md. Sabit Islam Bhuiya',
    'Software Engineer',
    'Web Developer',
    'Backend Developer',
    'Fullstack Developer',
    'Developer portfolio',
    'Portfolio',
    'Next.js',
    'JavaScript',
    'Node.js',
    'React',
  ],
  openGraph: {
    title: 'Md. Sabit Islam Bhuiya | Software Engineer',
    description:
      'Explore the portfolio of Md. Sabit Islam Bhuiya, a professional software engineer experienced in full-stack development.',
    siteName: 'Sabit Islam Bhuiya',
    locale: 'en_US',
    type: 'website',
    url: 'https://sib61.vercel.app',
    images: [
      {
        url: 'https://sib61.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sabit Islam Bhuiya',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
        <CustomCursor />
      </body>
    </html>
  );
}
