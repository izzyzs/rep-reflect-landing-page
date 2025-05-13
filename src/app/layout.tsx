import './globals.css'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'

import Header from '@/components/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'RepReflect – The Mindful Fitness Journal',
  description: 'Track workouts and reflections in one clean, fast app.',
  // themeColor: '#0f172a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${poppins.variable} font-sans`}>
      <body className="bg-darkbg text-white scroll-smooth">
        <Header />        
        {children}
      </body>
    </html>
  )
}
