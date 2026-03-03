import type { Metadata } from 'next'
import { DM_Serif_Display } from 'next/font/google'
import './styles/globals.css'

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '食堂 SHOKUDO — Ramen & Sushi · Hackettstown, NJ',
  description:
    "Shokudo is a beloved Japanese izakaya in Hackettstown, NJ. Handcrafted ramen, chef's special sushi rolls, poke bowls, and Japanese comfort food.",
  openGraph: {
    title: '食堂 SHOKUDO — Ramen & Sushi',
    description:
      "Japanese izakaya in Hackettstown, NJ. Handcrafted ramen, chef's rolls, poke bowls.",
    images: [
      {
        url: '/images/2829cb76-ecc3-4d27-91ff-3dda65e78e52.jpg',
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
    <html lang="en" className={dmSerifDisplay.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700;800&family=Noto+Sans+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
