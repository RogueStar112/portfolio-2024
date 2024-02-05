
'use client'

import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

import { useState } from "react"

import { Montserrat } from "next/font/google"

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })

export default function Navbar() {

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
    <nav id='navbar-desktop' className={`${montserrat.className}  [&>*]:font-bold [&>*]:self-center hidden md:flex justify-around gap-3`}>
              <Link href="/" style={{fontVariant: "small-caps"}}>Home</Link>
              <Link href="/" style={{fontVariant: "small-caps"}}>Blog</Link>
              <Link href="/" style={{fontVariant: "small-caps"}}>Projects</Link>
              <ThemeSwitch />
    </nav>

    
    <button id='navbar-mobile-btn' onClick={() => setShowMobileNav(!showMobileNav)}>

    <GiHamburgerMenu  className={`${showMobileNav ? "flex flex-col hidden md:hidden" : "md:hidden"} flex flex-col justify-around gap-3 absolute right-0 top-0`} style={{scale: "2"}}>
              
    </GiHamburgerMenu>

    <RxCross1 className={`${showMobileNav ? "flex flex-col md:hidden" : "hidden md:hidden"} flex flex-col justify-around gap-3 absolute right-0 top-0`} style={{scale: "2"}}>


    </RxCross1>

    </button>


    {/* <div className="w-screen"> */}
      <nav id='navbar-mobile' className={`${montserrat.className}  [&>*]:font-bold [&>*]:self-center ${showMobileNav ? "flex flex-col md:hidden" : "hidden"} justify-around gap-3 col-span-2 [&>*]:col-span-2 [&>*]:w-full [&>*]:text-3xl [&>*]:p-4`}>
        <Link href="/" style={{fontVariant: "small-caps"}}>Home</Link>
        <Link href="/" style={{fontVariant: "small-caps"}}>Blog</Link>
        <Link href="/" style={{fontVariant: "small-caps"}}>Projects</Link>

        <div style={{fontVariant: "small-caps"}}>
        <ThemeSwitch />
        </div>
      </nav>
    {/* </div> */}
    </>
  )

}