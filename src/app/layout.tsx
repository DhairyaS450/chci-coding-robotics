import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RoleDisplay from '@/components/RoleDisplay'
import Header from '@/components/Header'
import { createClient } from '@/lib/supabase/server'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import AnimatedBackground from '@/components/AnimatedBackground'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CustomCursor />
        <AnimatedBackground />
        <Header user={user} />
        {children}
        <Footer />
        <RoleDisplay />
      </body>
    </html>
  )
}
