
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"


import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })

export default function Navbar() {

  return (
    <nav id='navbar' className={`${montserrat.className} [&>*]:font-bold [&>*]:self-center flex justify-around gap-3`}>
              <Link href="/" style={{fontVariant: "small-caps"}}>Home</Link>
              <Link href="/" style={{fontVariant: "small-caps"}}>Blog</Link>
              <Link href="/" style={{fontVariant: "small-caps"}}>Projects</Link>
              <ThemeSwitch />
    </nav>
  )

}