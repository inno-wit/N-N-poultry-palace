import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'N&N Poultry Palace | Premium Fresh Eggs & Poultry Products',
  description: 'Premium fresh table eggs, ex-layer hens & organic poultry manure. Farm-to-table quality delivered across Machakos. Experience the difference.',
  keywords: 'premium eggs Machakos, fresh table eggs Kenya, wholesale eggs, ex-layer hens, poultry manure, N&N Poultry Palace',
  authors: [{ name: 'N&N Poultry Palace' }],
  openGraph: {
    title: 'N&N Poultry Palace | Premium Fresh Eggs & Poultry Products',
    description: 'Premium fresh table eggs, ex-layer hens & organic poultry manure. Farm-to-table quality delivered across Machakos.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N&N Poultry Palace | Premium Fresh Eggs & Poultry Products',
    description: 'Premium fresh table eggs, ex-layer hens & organic poultry manure. Farm-to-table quality delivered across Machakos.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}