'use client';

import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import DyslexicFontSwitch from "./DyslexicFontSwitch"


import { useState } from "react"

import { Montserrat } from "next/font/google"

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })

export default function NavBar() {

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
    <nav id='navbar-desktop' className={`${montserrat.className}  [&>*]:font-bold [&>*]:self-center hidden md:flex justify-end gap-3 sticky top-0`}>
              <Link scroll={true} className="border-b-2 hover:border-orange-500"href="/#skills" style={{fontVariant: "small-caps"}}>Skills</Link>
              <Link scroll={true} className="border-b-2 hover:border-green-500" href="/#projects" style={{fontVariant: "small-caps"}}>Projects</Link>
              <Link scroll={true} className="border-b-2 hover:border-blue-500" href="/#blog" style={{fontVariant: "small-caps"}}>Blog</Link>
              
              <div className="flex relative gap-3 border-2 border-black dark:border-white p-1">
                <ThemeSwitch />
                <DyslexicFontSwitch />
                <p className="absolute top-[-9px] left-[14px] px-2 bg-white dark:bg-onyx z-50 text-[8px] text-center">ACCESSIBILITY</p>
              </div>
    </nav>

    
    <button id='navbar-mobile-btn' className="relative" onClick={() => setShowMobileNav(!showMobileNav)}>

    <GiHamburgerMenu  className={`${showMobileNav ? "flex-col hidden md:hidden" : "flex md:hidden"} flex flex-col justify-around gap-3 absolute right-2 top-3`} style={{scale: "2"}}>
              
    </GiHamburgerMenu>

    <RxCross1 className={`${showMobileNav ? "flex flex-col md:hidden" : "hidden md:hidden"} flex flex-col justify-around gap-3 absolute right-2 top-3`} style={{scale: "2"}}>


    </RxCross1>

    </button>


 
      <nav id='navbar-mobile' className={`${montserrat.className}  [&>*]:font-bold [&>*]:self-left ${showMobileNav ? "flex flex-col md:hidden" : "hidden"} justify-around gap-3 col-span-2 [&>*]:col-span-2 [&>div]:w-full [&>a]:text-3xl [&>*]:px-4 [&>*]:py-2 [&>a]:w-full`}>
        <Link scroll={true} href="/#skills" className="border-b-2 border-orange-500" style={{fontVariant: "small-caps"}}>Skills</Link>
        <Link scroll={true} href="/#projects" className="border-b-2 border-green-500" style={{fontVariant: "small-caps"}}>Projects</Link>
        <Link scroll={true} href="/#blog" className="border-b-2 border-blue-500" style={{fontVariant: "small-caps"}}>Blog</Link>

        <div className="grid grid-cols-6 gap-6 border-2 border-black dark:border-white p-1 /[&>*]:w-[44px] relative" style={{fontVariant: "small-caps"}}>
          <ThemeSwitch />
          <DyslexicFontSwitch />
          <p className="absolute top-[-9px] left-[14px] px-2 bg-white dark:bg-onyx z-50 text-[8px] text-center">ACCESSIBILITY</p>
        </div>
      </nav>

    </>
  )

}