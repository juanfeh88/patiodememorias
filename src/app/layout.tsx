import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'
import { Cormorant_Garamond } from 'next/font/google'
import { Quicksand } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: '700' })
const quicksand = Quicksand({ subsets: ['latin'], weight: ['300'] })

export const metadata = {
  title: 'Patio de Memorias',
  description: 'Patio de memorias',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={quicksand.className}>
      <body>
        <Header />
        <SpeedInsights />
        <Analytics />
        <main style={{ paddingTop: '50px' }}>{children}</main>
      </body>
    </html>
  )
}
