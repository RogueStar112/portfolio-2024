import type { Metadata } from 'next'
import { Inter, Teko, Montserrat, Merriweather, EB_Garamond } from 'next/font/google'
import './globals.css'
import './hero_overflow.css'

// export const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })
  


export const metadata: Metadata = {
  title: 'Demie Mistica - Web Developer',
  description: 'Powered by NextJS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} max-w-5xl mx-auto blur-none`}>{children}</body>
    </html>
  )
}
