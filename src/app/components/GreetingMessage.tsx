'use client'

import Link from "next/link"
import Image from "next/image"

import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { PiReadCvLogo } from "react-icons/pi"
import { MdOutlineEmail } from "react-icons/md";

import { EB_Garamond } from 'next/font/google'

import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"

const eb_garamond = EB_Garamond({weight: ['500', '600'], style: ['normal'], subsets: ['latin']});

import { track } from '@vercel/analytics';

// import { useRouter } from "next/navigation";

export default function GreetingMessage() {
  // const router = useRouter();

  // router.refresh();

  return (
    <section className='/md:absolute bottom-0 left-4 md:right-0 /mr-4  sm:h-full text-white md:text-white dark:text-white flex flex-col items-start /md:items-end justify-start /md:justify-end /mt-12 '>
      <div className="h-fit w-full /sm:w-fit /md:absolute bottom-0 sm:h-full sm:flex sm:flex-col sm:justify-center sm:items-center p-4 sm:p-0 /sm:pr-24 bg-linear-to-b to-blue-800 sm:bg-linear-to-r from-transparent sm:from-transparent sm:to-blue-800">
                        <motion.div className="w-full sm:text-left sm:px-32 text-center text-3xl md:text-4xl font-extrabold text-yellow-500 italic  bg-gradient-to-r from-transparent via-blue-800 to-blue-800" initial={{y: -50, opacity: 0}} animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" }  }}>
                    
                        <div className="relative">
                          <span className="relative z-1 opacity-90 text-white text-left sm:text-7xl text-3xl">GREETINGS.</span>
                              <Image src={'/images/LAKE_DISTRICT.jpg'} className="[mask-image:url('/images/Mask_Greetings_Decoration_IV.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] absolute z-0 -top-[260%] /left-1/4 sm:right-0 object-cover" width={512} height={256} alt={'Greetings decoration'}></Image>
                        </div>
                        </motion.div>
                        <motion.p className={`${eb_garamond.className} font-initial text-center relative z-9999`} initial={{opacity: 0}} animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeInOut" }  }}>Web Developer | Lifestyle Enthusiast</motion.p>
                        <motion.p className={`${eb_garamond.className} font-initial text-center relative z-9999`} initial={{opacity: 0}} animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeInOut" }  }}>📍 United Kingdom</motion.p>


                        <div className='flex-col w-full'>
                        {/* <motion.p className={`${eb_garamond.className} font-initial`} initial={{x: 250, opacity: 0}} animate={{x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" }  }}>_____________________________________</motion.p> */}
                        <motion.section id='socials' className='flex justify-around m-4' initial={{opacity: 0}} animate={{opacity: 1, transition: { duration: 1.2, ease: "easeInOut" }  }}>

                                  <div className='flex gap-8 *:*:scale-[2] /[&>*]:[&>*]:text-neutral-500' aria-label='socials'>
                          <Link target="_blank" className="text-white sm:text-neutral-500 dark:*:text-white md:text-white md:hover:*:text-yellow-500 md:dark:hover:*:text-yellow-500 *:duration-150" href={'https://github.com/RogueStar112'} onClick={() => {track('Visited GitHub')}}>
                                <FaGithub />
                          </Link>
                          <Link target="_blank" className="text-white sm:text-neutral-500 dark:*:text-white md:text-white md:hover:*:text-yellow-500 md:dark:hover:*:text-yellow-500 *:duration-150" href={'https://www.linkedin.com/in/demie-mistica-049779296/'} onClick={() => {track('Visited LinkedIn')}}><FaLinkedin /></Link>
                          <Link target="_blank" className="text-white sm:text-neutral-500 dark:*:text-white md:text-white md:hover:*:text-yellow-500 md:dark:hover:*:text-yellow-500 *:duration-150 hover:[&>span]:block" onClick={() => {track('Downloaded CV')}} href={'https://docs.google.com/document/d/12QaCgjy6Db6pvGVqAARgoHSXmBJ-l3IWbG0eG_7n7JY/edit?usp=sharing'}><PiReadCvLogo /></Link>
                          <Link target="_blank" className="text-white sm:text-neutral-500 dark:*:text-white md:text-white md:hover:*:text-yellow-500 md:dark:hover:*:text-yellow-500 *:duration-150 hover:[&>span]:block" onClick={() => {track('Downloaded CV')}} href={'mailto:mistica.demie@gmail.com'}><MdOutlineEmail /></Link>
                          
                        </div>

                        </motion.section>
                        </div>
                      </div>
                    </section>
  )
}