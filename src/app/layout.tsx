import type { Metadata } from 'next'
import { Inter, Teko, Montserrat, Merriweather, EB_Garamond } from 'next/font/google'
import './globals.css'
import './hero_overflow.css'

import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react';

import localFont from 'next/font/local';

const opendyslexic = localFont({ src: './OpenDyslexic-Regular.otf'});



// export const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })
  


export const metadata: Metadata = {
  title: 'Demie Mistica - Web Developer',
  description: 'My personal portfolio, built with NextJS.',
  keywords: ["web developer", "web developers near me", "front dev", "front end developer"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth w-full relative overflow-x-hidden" lang="en" suppressHydrationWarning>
      
      {/* Credit to: https://ibelick.com/blog/create-grid-and-dot-backgrounds-with-css-tailwind-css for grid-dot background styling*/}

      <body className={`${montserrat.className} /max-w-5xl /mx-auto blur-none bg-transparent dark:bg-onyx [&>*]:dark:bg-onyx dark:duration-500 relative z-[999]`}>
        <div className='absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(#cccccc_1px,transparent_1px)] dark:bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:36px_36px] select-none z-0'></div>
        
        <div className='max-w-5xl mx-auto'>
          <Providers>
            {children}
            <Analytics />
          </Providers>
        </div>
      </body>
    </html>
  )
}
