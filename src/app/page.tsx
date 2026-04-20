
import { promises as fs } from 'fs';
import Link from 'next/link'
import Image from 'next/image'
import { Inter, Teko, Montserrat, Merriweather, EB_Garamond } from 'next/font/google'

import imageHero from './assets/images/me_wlocationv2.png'
import patternSmallOne from './assets/images/stitchpatternshortv2.png'

import { url } from 'inspector';

import { readFileSync } from 'fs';



// COMPONENTS 

import Navbar from './components/Navbar';
import Skill from './components/Skill';
import Footer from './components/Footer';
import Blog from './components/Blog';
import GreetingMessage from './components/GreetingMessage';
import ProjectDetails from './components/ProjectDetails';
import SkillCollection from './components/SkillCollection';
import SkillGallery from './components/SkillGallery'

// ICONS

import { TiHtml5 } from "react-icons/ti";
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { PiReadCvLogo } from "react-icons/pi";
import { FaLinkedin } from 'react-icons/fa';

import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaDigitalOcean } from "react-icons/fa";
import { TbBrandNextjs } from 'react-icons/tb';
import { FaDatabase } from 'react-icons/fa';
import { FaCrown } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import { motion } from "motion/react"

import DM_MOTTO from '../../public/./images/DM_MOTTO_TC_V2.svg'
import DM_MOTTO_DARK from '../../public/images/DM_MOTTO_TC_V2_WHITE.svg';

import DM_HERO from '../../public/./images/DM_21032026.jpg'
import DM_ABOUT from '../../public/./images/DM_ABOUT_1.jpg'

import { track } from '@vercel/analytics';
import { div } from 'motion/react-client';
import MainContent from './components/MainContent';
// import { blog_sample } from './blog_sample.json';

let path = require('path');

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })
const merriweather = Merriweather({ weight: ['300', '400', '700'], style: ['normal', 'italic'], subsets: ['latin'] })
const teko = Teko({ weight: ['300', '400', '700'], style: ['normal'], subsets: ['latin'] })
const eb_garamond = EB_Garamond({weight: ['500', '600'], style: ['normal'], subsets: ['latin']});

export default async function Home() {




  return (

    <div className="grid min-h-screen grid-cols-[1fr_minmax(auto,40rem)_1fr] sm:grid-cols-[1fr_minmax(auto,48rem)_1fr] lg:grid-cols-[1fr_minmax(auto,80rem)_1fr]">

      {/* <div className='hidden /sm:block sm:absolute left-6 top-256 z-9999 cursor-pointer'>

            <Image className='w-full h-full' src={'/images/london_portal.gif'} width="512" height="512" alt="My face"/>
      
      </div>

      <div className='hidden /sm:block sm:absolute right-6 top-512 z-9999 cursor-pointer'>

            <Image className='w-full h-full invert' src={'/images/london_portal.gif'} width="512" height="512" alt="My face"/>
      
      </div> */}

    <aside className='hidden'>

    </aside>
        
        <MainContent content="" />
        
    <aside  className='hidden'></aside>
    
    </div>
  )
}
