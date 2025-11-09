import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Intelliwave ? Agence d\'automatisation AI n8n & chatbots sur mesure',
  description: "Intelliwave con?oit des chatbots personnalis?s et des automatisations n8n pour booster votre efficacit?.",
  openGraph: {
    title: 'Intelliwave ? AI Automation & Chatbots',
    description: "Chatbots sur mesure et automatisations n8n.",
    url: 'https://agentic-a3dc993f.vercel.app',
    siteName: 'Intelliwave',
    images: [
      { url: '/og-intelliwave.svg', width: 1200, height: 630 }
    ],
    locale: 'fr_FR',
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
