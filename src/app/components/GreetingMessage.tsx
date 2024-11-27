'use client'

import Link from "next/link"

import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { PiReadCvLogo } from "react-icons/pi"

import { Inter, Teko, Montserrat, Merriweather, EB_Garamond } from 'next/font/google'

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })
const merriweather = Merriweather({ weight: ['300', '400', '700'], style: ['normal', 'italic'], subsets: ['latin'] })
const teko = Teko({ weight: ['300', '400', '700'], style: ['normal'], subsets: ['latin'] })
const eb_garamond = EB_Garamond({weight: ['500', '600'], style: ['normal'], subsets: ['latin']});


export default function GreetingMessage() {
  return (
    <section className='md:absolute bottom-0 left-4 md:right-0 mr-4 h-screen sm:h-full text-black md:text-white dark:text-white flex flex-col items-center md:items-end justify-center /md:justify-end /mt-12'>
                      <p className='text-center md:text-right text-3xl md:text-4xl font-extrabold'>GREETINGS.</p>
                      <p className={`${eb_garamond.className} font-initial md:text-right`}>Web Developer | Lifestyle Enthusiast<br></br>📍 Cambridge, UK</p>


                      <div className='flex-col w-full'>
                      <p className={`${eb_garamond.className} font-initial md:text-right`}>____________________</p>
                      <section id='socials' className='flex justify-around md:justify-end m-4'>

                                <div className='flex gap-8 [&>*]:[&>*]:scale-[2] /[&>*]:[&>*]:text-neutral-500' aria-label='socials'>
                        <Link target="_blank" className="text-neutral-500 dark:[&>*]:text-white md:text-white md:[&>*]:hover:text-yellow-500 md:dark:[&>*]:hover:text-yellow-500 [&>*]:duration-150" href={'https://github.com/RogueStar112'}>
                              <FaGithub />
                        </Link>
                        <Link target="_blank" className="text-neutral-500 dark:[&>*]:text-white md:text-white md:[&>*]:hover:text-yellow-500 md:dark:[&>*]:hover:text-yellow-500 [&>*]:duration-150" href={'https://www.linkedin.com/in/demie-mistica-049779296/'}><FaLinkedin /></Link>
                        <Link target="_blank" className="text-neutral-500 dark:[&>*]:text-white md:text-white md:[&>*]:hover:text-yellow-500 md:dark:[&>*]:hover:text-yellow-500 [&>*]:duration-150 [&>span]:hover:block" href={'https://docs.google.com/document/d/1T-FvQfNCqpm93mP-az5CdBPWtWYkuwc4CF6ov12hxB4/edit?usp=sharing'}><PiReadCvLogo /></Link>
                      </div>

                      </section>
                      </div>
   
                    </section>
  )
}