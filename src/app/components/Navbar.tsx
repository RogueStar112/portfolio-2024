
'use client'

import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

import { useState } from "react"

import { Montserrat } from "next/font/google"

import { GiHamburgerMenu } from "react-icons/gi";

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

    
    <GiHamburgerMenu id='navbar-mobile-btn' onClick={() => setShowMobileNav(!showMobileNav)} className={`${montserrat.className} ${showMobileNav ? "flex flex-col md:hidden" : "md:hidden"} flex flex-col justify-around gap-3 absolute right-0 top-0`} style={{scale: "2"}}>
              
    </GiHamburgerMenu>
    

    {/* <div className="w-screen"> */}
      <nav id='navbar-mobile' className={`${montserrat.className}  [&>*]:font-bold [&>*]:self-center ${showMobileNav ? "flex flex-col md:hidden" : "hidden"} justify-around gap-3 [&>*]:w-full`}>
        <Link href="/" style={{fontVariant: "small-caps"}}>Home</Link>
        <Link href="/" style={{fontVariant: "small-caps"}}>Blog</Link>
        <Link href="/" style={{fontVariant: "small-caps"}}>Projects</Link>
        <ThemeSwitch />
      </nav>
    {/* </div> */}
    </>
  )

}