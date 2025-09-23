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

import DM_HERO from '../../public/./images/DM_HERO_26112024_SHADED.png'
import DM_ABOUT from '../../public/./images/DM_ABOUT_1.jpg'

import { track } from '@vercel/analytics';
import { div } from 'motion/react-client';
// import { blog_sample } from './blog_sample.json';

let path = require('path');

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })
const merriweather = Merriweather({ weight: ['300', '400', '700'], style: ['normal', 'italic'], subsets: ['latin'] })
const teko = Teko({ weight: ['300', '400', '700'], style: ['normal'], subsets: ['latin'] })
const eb_garamond = EB_Garamond({weight: ['500', '600'], style: ['normal'], subsets: ['latin']});

export default async function Home() {

  const blog_file = path.join(process.cwd(), 'src/app', 'blog_sample.json');
  const blog_JSON = JSON.parse(readFileSync(blog_file, 'utf-8')).reverse();

  const projects_file = path.join(process.cwd(), 'src/app', 'projects.json');
  const projects_JSON = JSON.parse(readFileSync(projects_file, 'utf-8'));


  const reveal_file = path.join(process.cwd(), 'src/app', 'app_reveal.json');
  

  const revealProject = (index: number) => {

    const revealDetails = JSON.parse(readFileSync(reveal_file[index], 'utf-8'));



  }



  return (
    <div className='p-4 bg-transparent dark:bg-transparent h-full dark:text-mint-cream mx-auto text-current max-w-7xl relative'>

       
          
          {/* <h1 className='font-montserrat p-logo'>DEMIE<br></br>MISTICA</h1> */}

        <Navbar />

  


        <main className='dark:bg-onyx transition-500'>

          {/* <h2 className={`${eb_garamond.className} text-2xl`}>Web Developer - Lifestyle Enthusiast</h2> */}
          <div>

          </div>

          <div className='flex flex-col justify-between text-center /py-4'>

            {/* <div className='object-cover bg-repeat-x w-full h-[16px]' style={{backgroundImage: `url('${patternSmallOne.src}')`}}/>          */}

            <article className='/overflow-hidden relative'>

              <article className='overflow-hidden relative'>

                <div className='relative'> 
                  <section className='h-[620px] md:h-fit'>

                  <Image className='/hidden object-cover object-[25%_75%] sm:object-[50%_50%] brightness-[0.8] sm:brightness-[0.7] sm:object-cover h-full sm:h-fit absolute sm:static z-0 sm:block overflow-mask' src={'/images/DM_MOTTO_23092025.png'} width="1920" height="512" alt="My face"/>
                  {/* <Image className='object-cover object-center h-inherit w-[512px]' src={`/images/DM_TRANSPARENT_II.PNG`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='My portrait'></Image> */}
                    
                  
                  <GreetingMessage />
                  </section>
                </div>
                
                
              </article>
              
              
            </article>
            
            {/*  
            <article>
              <p className={`${montserrat.className} font-extrabold`}>Welcome to my domain.</p>
              <p className={`${eb_garamond.className} font-initial`}>I am a firm believer that the best life is a frugal one.</p>
              <p>I embark on this web developer journey with an open mind and canvas, ready to unleash full-on creativity.</p>
             <p>I make websites which allow productivity to be the star of the show.</p> 
            </article>
            */}


            {/* <h2 className='m-4 text-right text-4xl font-extrabold'>ABOUT.</h2>

            <article>
              <p className={`${eb_garamond.className} text-2xl`}>Most of life's challenges become stepping stones in the face of courage.</p>
              
              <section aria-label='About-'>
                  <p>When it comes to neurodivergence, </p>
              </section>
            </article>
            
            <h2 className='m-4 text-right text-4xl font-extrabold'>PROJECTS.</h2> */}
            
            <h2 id='about' className='overflow-mask dark:text-white /dark:text-black p-4 text-right text-4xl font-extrabold border-b-4 border-emerald-500 bg-gradient-to-r dark:from-onyx from-transparent dark:to-emerald-500 to-emerald-500 from-70% to-100%'>ABOUT.</h2>
              
            {/* <Image className=' mx-auto mt-6 dark:hidden' src={DM_MOTTO} alt='From slinging spreadsheets to wrangling websites' />

            <Image className=' mx-auto mt-6 hidden dark:block' src={DM_MOTTO_DARK} alt='From slinging spreadsheets to wrangling websites' /> */}
            {/* <h3 className='mt-4 text-left italic uppercase'>From slinging spreadsheets to wrangling websites</h3> */}
            
            
            <div className='flex flex-col md:flex-row items-center'>


              <div className='flex w-full justify-center md:justify-start '>

              <Image className="p-4 rounded-full" src={DM_ABOUT} width="384" height="384" alt="About picture"/>

              </div>
            
            <div className='flex flex-col'>
              <Image className=' mx-auto dark:hidden' src={DM_MOTTO} alt='From slinging spreadsheets to wrangling websites' />

              <Image className=' mx-auto hidden dark:block' src={DM_MOTTO_DARK} alt='From slinging spreadsheets to wrangling websites' />
            <p className='mt-4 text-justify'>Name&apos;s Demie. I&apos;m 26. As the motto suggests, my web development journey started through a budgeting spreadsheet. A colleague suggested to turn it into a website, and hence, in 2020, I tapped into the world of HTML.<br></br><br></br>

            I hail from the stormy capital of 🇵🇭 Manila, Philippines. In my birth year of 1999, the computer was in its early stages. Thus, I was exposed to technology at a very young age. It was later on in my 20s that I then realized, this webdev stuff could become more than just a hobby.
            <br></br><br></br>
            Hence to this day, I dedicate to making websites that leave their mark. Lastly, don&apos;t miss out on my <Link className='text-blue-500' href="/#blog">blog posts right here!</Link></p>
            </div>
            </div>

            <h2 id='skills' className='overflow-mask dark:text-white /dark:text-black p-4 mt-2 text-right text-4xl font-extrabold border-b-4 border-orange-500 dark:from-transparent bg-gradient-to-r from-transparent dark:to-orange-500 to-orange-500 from-70% to-100%'>SKILLS.</h2>

            <SkillCollection />
            
            {/* <SkillGallery /> */}

            <article className='flex flex-col md:grid grid-cols-2 justify-around px-4 [&>*]:grow overflow-mask /border-b-4 /border-orange-500'>
                
                {/* <section className='text-2xl /md:border-4 /md:border-orange-500 p-4' style={{fontVariant: "small-caps"}} aria-label="skills-frontend">
                    <h2 className='font-extrabold text-3xl'>Frontend</h2>

                    <section className='md:grid md:grid-cols-6 md:grid-rows-2'>
                        <p className='col-span-2'>HTML</p>
                        <p className='col-span-2'>CSS</p>
                        <p className='col-span-2'>JS</p>
                        <p className='col-span-3'>React</p>
                        <p className='col-span-3'>Next</p>  
                    </section>                    
                </section>

                <section className='text-2xl p-4' style={{fontVariant: "small-caps"}} aria-label="skills-backend">
                    <h2 className='font-extrabold text-3xl'>Backend</h2>

                    <section className='md:grid md:grid-cols-6 md:grid-rows-2'>
                        <p className='col-span-2'>PHP</p>
                        <p className='col-span-2'>Laravel</p>
                        <p className='col-span-2'>JS</p>
                        <p className='col-span-3'>Next</p>
                        <p className='col-span-3'>SQL</p>
                    </section> 
                </section> */}

                {/* <section className='col-span-2 mb-4 border-t-4 border-orange-500 pt-4'>
                      <h2 className='font-extrabold text-3xl pt-4 z-0' style={{fontVariant: "small-caps"}}>Soft Skills</h2>
                      <section className='flex flex-col md:grid md:grid-cols-3 [&>*]:text-2xl md:[&>*]:mb-4'>
                        <p>Considerate</p>
                        <p>Punctual</p>
                        <p>Enthusiastic</p>
                        <p>Analytical</p>
                        <p>Creative</p>
                        <p>Diligent</p>
                      </section>
                </section> */}
            </article>

            {/* <div aria-label="section-skillset"  className='grid grid-cols-3 [&>*]:grow'>
                  
                <Image className="p-4" src={`/images/Laravel_logo.png`} width={288} height={256} alt='Laravel'></Image>

            </div> */}
            
            <h2 id='projects' className='overflow-mask p-4 my-2 dark:text-white text-right text-4xl font-extrabold border-b-4 border-green-500 bg-gradient-to-r dark:from-onyx from-transparent dark:to-green-500 to-green-500 from-70% to-100%'>PROJECTS.</h2>

            {projects_JSON.map((project: any, index: number) => {
              
              return (
                <div key={index} className='max-w-7xl /mx-auto grid grid-cols-3 grid-flow-row md:grid-flow-col rounded-lg /md:max-h-[281px] my-4 gap-4 md:gap-4'>

                    <div className="col-span-3 md:col-span-1 md:row-span-3 gap-24 ...">
                      
                      <Image src={project.img_src} width={277} height={520} className='object-cover /max-h-[281px] md:rounded-lg w-full rounded-lg md:mx-auto md:mx-0'
                    alt='Project Image'/>
                    </div>


                    <div className={`col-span-3 md:col-span-2 row-span-3 grid grid-cols-3 border-b-4 dark:border-green-900 border-green-100 bg-gradient-to-b md:bg-gradient-to-r dark:from-onyx from-transparent dark:to-green-900 to-green-100 from-70% to-100% p-2 rounded-r-lg gap-4 md:gap-0 ${project.is_featured ? "border-yellow-500 dark:border-yellow-100 to-yellow-100 dark:to-yellow-600 from-20%" : ""}`}>

                      <div className={`${project.is_featured ? "text-yellow-600 dark:text-yellow-200" : ""} col-span-full inline-block text-green-600 `}>

                        <div className='flex justify-between flex-col md:flex-row'>
                        <p className='text-left text-2xl font-extrabold' style={{fontVariant: "small-caps"}}>{project.name}</p>
                        <p className='text-left md:text-right'>📅 {project.date}</p>
                        </div>
                        <p className='text-left text-black dark:text-mint-cream'>{project.description}</p>
                      </div>
                      <div className="col-span-full gap-4 flex ... text-left flex-col md:flex-row">
                        
                        <div className='flex gap-1 [&>*]:h-min [&>*]:w-max [&>*]:basis-0 grow'>
                        {project.tech_stack.map((tech_tag: any, index: number) => {
                        return (
                          <p key={index} className='p-1 rounded-lg bg-blue-500 text-white dark:text-mint-cream grow text-center'>{tech_tag}</p>
                        )
                      })}
                      </div>

                      <div className='flex gap-1 [&>*]:h-min [&>*]:w-max grow'>
                      {project.soft_stack.map((soft_tag: any, index: number) => {
                        return (
                          <p key={index} className={`p-1 rounded-lg dark:bg-emerald-600 bg-emerald-500 text-white dark:text-mint-cream grow text-center ${project.is_featured ? "bg-yellow-600 dark:bg-yellow-700 " : ""}}`}>{soft_tag}</p>
                        )
                      })}
                      </div>
                    
                    </div>

                    <div className={`${project.github_url ? `` : `opacity-60`} col-span-2 md:col-span-2 ${project.is_featured ? "" : "col-span-full md:col-span-full"}  ... [&>*>*]:scale-[3] p-4 flex gap-16 justify-center md:justify-start items-center w-full`}>
                      
                      <Link href={project.github_url ?? ""}>
                      <FaGithub />
                      </Link>

                      <Link href={project.url  ?? ""}>
                      <FaGlobe />
                      </Link>

                    </div>
                    
                    {project.is_featured ? 
                    <div className='flex flex-col gap-2 [&>*>*]:scale-[2.4] md:[&>*>*]:scale-[3.4] items-center justify-center md:place-self-end text-yellow-600 dark:text-yellow-200'>
                      <div className='flex flex-col md:mb-4'>
                        <FaCrown />
                        
                      </div>
                      Featured
                    </div>
                    
                    : <></>
                    }

                    </div>
                </div>
              )

            })}

            



            <h2 id='blog' className='overflow-mask p-4 my-2 dark:text-white text-right text-4xl font-extrabold border-b-4 border-blue-500 bg-gradient-to-r dark:from-onyx from-transparent dark:to-blue-500 to-blue-500 from-70% to-100%'>BLOG.</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {blog_JSON.map((blog: any) => {
                  
             

                  return (

                    <Blog {...blog} key={blog.id} />

                )
            })}
            </div>

          </div>

          
        </main>

        <Footer />


    </div>
  )
}
