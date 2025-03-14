'use client'

import Link from "next/link"

import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { PiReadCvLogo } from "react-icons/pi"

import { EB_Garamond } from 'next/font/google'

import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"

const eb_garamond = EB_Garamond({weight: ['500', '600'], style: ['normal'], subsets: ['latin']});

import { track } from '@vercel/analytics';

export default function GreetingMessage() {
  return (
    <section className='md:absolute bottom-0 left-4 md:right-0 mr-4 h-screen sm:h-full text-black md:text-white dark:text-white flex flex-col items-center md:items-end justify-center /md:justify-end /mt-12'>
      <div className="h-fit absolute text-white ">
                        <motion.p className='text-center md:text-right text-3xl md:text-4xl font-extrabold' initial={{y: -50, opacity: 0}} animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" }  }}>GREETINGS.</motion.p>
                        <motion.p className={`${eb_garamond.className} font-initial md:text-right`} initial={{opacity: 0}} animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeInOut" }  }}>Web Developer | Lifestyle Enthusiast</motion.p>
                        <motion.p className={`${eb_garamond.className} font-initial md:text-right`} initial={{opacity: 0}} animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeInOut" }  }}>📍 Cambridge, UK</motion.p>


                        <div className='flex-col w-full'>
                        <motion.p className={`${eb_garamond.className} font-initial md:text-right`} initial={{x: 250, opacity: 0}} animate={{x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" }  }}>____________________</motion.p>
                        <section id='socials' className='flex justify-around md:justify-end m-4'>

                                  <div className='flex gap-8 [&>*]:[&>*]:scale-[2] /[&>*]:[&>*]:text-neutral-500' aria-label='socials'>
                          <Link target="_blank" className="text-white sm:text-neutral-500 dark:[&>*]:text-white md:text-white md:[&>*]:hover:text-yellow-500 md:dark:[&>*]:hover:text-yellow-500 [&>*]:duration-150" href={'https://github.com/RogueStar112'} onClick={() => {track('Visited GitHub')}}>
                                <FaGithub />
                          </Link>
                          <Link target="_blank" className="text-white sm:text-neutral-500 dark:[&>*]:text-white md:text-white md:[&>*]:hover:text-yellow-500 md:dark:[&>*]:hover:text-yellow-500 [&>*]:duration-150" href={'https://www.linkedin.com/in/demie-mistica-049779296/'} onClick={() => {track('Visited LinkedIn')}}><FaLinkedin /></Link>
                          <Link target="_blank" className="text-white sm:text-neutral-500 dark:[&>*]:text-white md:text-white md:[&>*]:hover:text-yellow-500 md:dark:[&>*]:hover:text-yellow-500 [&>*]:duration-150 [&>span]:hover:block" onClick={() => {track('Downloaded CV')}} href={'https://docs.google.com/document/d/12QaCgjy6Db6pvGVqAARgoHSXmBJ-l3IWbG0eG_7n7JY/edit?usp=sharing'}><PiReadCvLogo /></Link>
                        </div>

                        </section>
                        </div>
                      </div>
                    </section>
  )
}