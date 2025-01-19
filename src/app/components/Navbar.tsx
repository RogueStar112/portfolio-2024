'use client';

import Link from "next/link"
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch"
import DyslexicFontSwitch from "./DyslexicFontSwitch"

import logo from "../../../public/images/DM_Portfolio_2025.png";
import logo_dark from "../../../public/images/DM_Portfolio_2025_DARK.png";

import { useState } from "react"

import { Montserrat } from "next/font/google"

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })

export default function NavBar() {

  const [showMobileNav, setShowMobileNav] = useState(false);

  // Added 11/02/2024, to ensure dark and light mode toggle accordingly to the body with dyslexic modes.
  const [isDarkDys, setIsDarkDys] = useState(false);

  return (
    <header className='grid grid-cols-2 justify-between relative sticky top-0 bg-inherit z-50 py-2'>

      
    <Link className='flex flex-col justify-center [&>*]:leading-[1.1rem] grow' href={'/'}>
              {/* <p className='text-2xl font-extrabold'>AZURITE</p> 
              <p className='text-2xl font-bold /text-stone-500 /dark:text-stone-400 coffee-brown dark:text-[#be9f02]'>LAKES</p> */}
              <Image src={logo_dark} height={96} width={96} alt="DM" className="hidden dark:block" />

              <Image src={logo} height={96} width={96} alt="DM" className="dark:hidden"/>
    </Link>

    <motion.nav id='navbar-desktop' className={`${montserrat.className}  [&>*]:font-bold [&>*]:self-center hidden md:flex justify-end gap-3`} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.6 } }} exit={{ opacity: 0 }}>
              <Link scroll={true} className="border-b-2 hover:border-emerald-500"href="/#about" style={{fontVariant: "small-caps"}}>About</Link>
              <Link scroll={true} className="border-b-2 hover:border-orange-500"href="/#skills" style={{fontVariant: "small-caps"}}>Skills</Link>
              <Link scroll={true} className="border-b-2 hover:border-green-500" href="/#projects" style={{fontVariant: "small-caps"}}>Projects</Link>
              <Link scroll={true} className="border-b-2 hover:border-blue-500" href="/#blog" style={{fontVariant: "small-caps"}}>Blog</Link>
              
              <div className="flex relative gap-3 border-2 border-black dark:border-white p-1">
                <ThemeSwitch />
                <DyslexicFontSwitch isDarkDys={isDarkDys} setIsDarkDys={setIsDarkDys}/>
                <p className="absolute top-[-9px] left-[12px] px-2 bg-inherit z-50 text-[8px] dark:bg-onyx bg-white text-center">ACCESSIBILITY</p>
              </div>
    </motion.nav>

    
    <motion.button id='navbar-mobile-btn' className="relative" onClick={() => setShowMobileNav(!showMobileNav)}>

    <GiHamburgerMenu  className={`${showMobileNav ? "flex-col hidden md:hidden" : "flex md:hidden"} flex flex-col justify-around gap-3 absolute right-2 top-1/3`} style={{scale: "2"}}>
              
    </GiHamburgerMenu>

    <RxCross1 className={`${showMobileNav ? "flex flex-col md:hidden" : "hidden md:hidden"} flex flex-col justify-around gap-3 absolute right-2 top-1/3`} style={{scale: "2"}}>


    </RxCross1>

    </motion.button>


      <AnimatePresence>
      {showMobileNav ? ( 
      <motion.nav key='modal' id='navbar-mobile' className={`${montserrat.className}  [&>*]:font-bold [&>*]:self-left flex flex-col md:hidden justify-around gap-3 col-span-2 [&>*]:col-span-2 [&>div]:w-full [&>a]:text-3xl [&>*]:px-4 [&>*]:py-2 [&>a]:w-full`} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.6 } }} exit={{ opacity: 0 }}>
        <Link scroll={true} href="/#about" className="border-b-2 border-orange-500" style={{fontVariant: "small-caps"}}>About me</Link>
        <Link scroll={true} href="/#skills" className="border-b-2 border-orange-500" style={{fontVariant: "small-caps"}}>Skills</Link>
        <Link scroll={true} href="/#projects" className="border-b-2 border-green-500" style={{fontVariant: "small-caps"}}>Projects</Link>
        <Link scroll={true} href="/#blog" className="border-b-2 border-blue-500" style={{fontVariant: "small-caps"}}>Blog</Link>

        <div className="grid grid-cols-6 gap-6 border-2 border-black dark:border-white p-1 /[&>*]:w-[44px] relative" style={{fontVariant: "small-caps"}}>
          <ThemeSwitch />
          <DyslexicFontSwitch isDarkDys={isDarkDys} setIsDarkDys={setIsDarkDys}/>
          <p className="absolute top-[-9px] left-[14px] px-2 bg-inherit z-50 text-[8px] dark:bg-onyx bg-white text-center">ACCESSIBILITY</p>
        </div>
      </motion.nav>
      ) : null}
      </AnimatePresence>
      
    </header>
  )

}