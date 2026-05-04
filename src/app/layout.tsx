import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Woodle Lab — Building tomorrow\'s tools, today.',
  description: 'Woodle Lab est un studio créatif et technologique qui développe des outils intelligents, des ressources digitales et des accompagnements stratégiques.',
  openGraph: {
    title: 'Woodle Lab',
    description: 'Building tomorrow\'s tools, today.',
    url: 'https://woodlelab.com',
    siteName: 'Woodle Lab',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Woodle Lab',
    description: 'Building tomorrow\'s tools, today.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
