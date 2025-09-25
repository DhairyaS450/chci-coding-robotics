import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CHCI Coding x Robotics | Cameron Heights CI',
  description: 'Join Cameron Heights Collegiate Institute\'s premier coding and robotics club. Learn programming, build robots, compete in challenges, and turn your ideas into reality.',
  keywords: 'CHCI, Cameron Heights, coding, robotics, programming, VEX, CCC, computer science, STEM, high school club',
  authors: [{ name: 'CHCI Coding x Robotics Club' }],
  creator: 'CHCI Coding x Robotics Club',
  openGraph: {
    title: 'CHCI Coding x Robotics Club',
    description: 'Cameron Heights\' premier coding and robotics club where ideas become reality.',
    url: 'https://chci-robotics.com',
    siteName: 'CHCI Coding x Robotics',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHCI Coding x Robotics Club',
    description: 'Cameron Heights\' premier coding and robotics club where ideas become reality.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
