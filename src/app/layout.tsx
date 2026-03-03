import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '食堂 SHOKUDO - Authentic Japanese Cuisine',
  description: 'Experience authentic Japanese cuisine at Shokudo in Hackettstown, NJ. Specializing in ramen, steamed buns, and traditional Japanese dishes.',
  openGraph: {
    title: '食堂 SHOKUDO - Authentic Japanese Cuisine',
    description: 'Experience authentic Japanese cuisine at Shokudo in Hackettstown, NJ. Specializing in ramen, steamed buns, and traditional Japanese dishes.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shokudo Japanese Restaurant',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
