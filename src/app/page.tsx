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
import ProjectDetails from './components/ProjectDetails';

// ICONS

import { TiHtml5 } from "react-icons/ti";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaDatabase } from 'react-icons/fa';

// import { blog_sample } from './blog_sample.json';

let path = require('path');

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })
const merriweather = Merriweather({ weight: ['300', '400', '700'], style: ['normal', 'italic'], subsets: ['latin'] })
const teko = Teko({ weight: ['300', '400', '700'], style: ['normal'], subsets: ['latin'] })
const eb_garamond = EB_Garamond({weight: ['500', '600'], style: ['normal'], subsets: ['latin']});

export default async function Home() {

  const blog_file = path.join(process.cwd(), 'src/app', 'blog_sample.json');
  const blog_JSON = JSON.parse(readFileSync(blog_file, 'utf-8')).reverse();

  const reveal_file = path.join(process.cwd(), 'src/app', 'app_reveal.json');
  

  const revealProject = (index: number) => {

    const revealDetails = JSON.parse(readFileSync(reveal_file[index], 'utf-8'));



  }

  return (
    <div className='p-4 bg-white dark:bg-onyx h-full dark:text-mint-cream mx-auto text-current max-w-4xl relative'>

        <header className='grid grid-cols-2 justify-center relative sticky top-0 bg-inherit z-50 py-2'>
          
          <div className='flex flex-col justify-center [&>*]:leading-[1.1rem] grow'>

            <Link className='flex flex-col justify-center [&>*]:leading-[1.1rem]' href={'/'}>
              <p className='text-2xl font-extrabold'>DEMIE</p> 
              <p className='text-2xl font-bold /text-stone-500 /dark:text-stone-400 coffee-brown dark:text-[#be9f02]'>MISTICA</p>
            </Link>


          </div>
          
          {/* <h1 className='font-montserrat p-logo'>DEMIE<br></br>MISTICA</h1> */}

          <Navbar />

        </header>


        <main className='dark:bg-onyx transition-500'>

          {/* <h2 className={`${eb_garamond.className} text-2xl`}>Web Developer - Lifestyle Enthusiast</h2> */}
          <div>

          </div>

          <div className='flex flex-col justify-between text-center /py-4'>

            {/* <div className='object-cover bg-repeat-x w-full h-[16px]' style={{backgroundImage: `url('${patternSmallOne.src}')`}}/>          */}

            <article className='/overflow-hidden relative'>

              <article className='overflow-hidden relative'>
                
                <section className='overflow-mask h-[448px]'>
                <Image className='object-cover object-center h-inherit' src={`/images/Hero2Filtered.png`} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{objectFit: 'cover'}} alt='My portrait'></Image>
                    <section className='absolute bottom-4 left-4 md:right-0 mr-4 md:top-[45%] text-white'>
                      <p className='text-center md:text-right text-3xl md:text-4xl font-extrabold'>GREETINGS.</p>
                      <p className={`${eb_garamond.className} font-initial md:text-right`}>Web Developer | Lifestyle Enthusiast</p>
                    </section>
                </section>


                
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

            <h2 id='skills' className='overflow-mask dark:text-white /dark:text-black p-4 mt-2 text-right text-4xl font-extrabold border-b-4 border-orange-500'>SKILLS.</h2>

            <article className='flex flex-col md:grid grid-cols-1 justify-around px-4 [&>*]:grow overflow-mask border-b-4 border-orange-500 /h-fit h-72 '>
                    
                    <section className='grid grid-cols-3 items-center [&>div>svg]:scale-[3] [&>div>svg]:mx-auto [&>div>svg]:mt-4  [&>*]:relative [&>*]:flex [&>*]:flex-col [&>*]:justify-center'>
                        <Skill col='1' scale={3}>
                          <p>HTML</p>
                          <FaHtml5></FaHtml5>
                        </Skill>
                        <Skill col='1' scale={3}>
                          <p>CSS</p>
                          <FaCss3Alt></FaCss3Alt>
                        </Skill>
                        <div>

                        <p>JavaScript</p>
<IoLogoJavascript></IoLogoJavascript></div>
                    </section>


                    <section className='grid grid-cols-2 items-center [&>div>svg]:scale-[3] [&>div>svg]:mx-auto [&>div>svg]:mt-4  [&>*]:relative [&>*]:flex [&>*]:flex-col [&>*]:justify-center '>
                        <div>
                          <p>PHP</p>
                          <FaPhp></FaPhp>
                        </div>
                        <div>
                          <p>Laravel</p>
                          <FaLaravel></FaLaravel>
                        </div>

                    </section>

                  <section className='grid grid-cols-3 items-center [&>div>svg]:scale-[3] [&>div>svg]:mx-auto [&>div]:m-4 [&>div>svg]:mt-4  [&>*]:relative [&>*]:flex [&>*]:flex-col [&>*]:justify-center'>
                        <div className=''>
                          <p>React</p>
                          <FaReact></FaReact>
                        </div>
                        <div>
                          <p>NextJS</p>
                        <TbBrandNextjs></TbBrandNextjs>

                        </div>
                        <div>

                        <p>SQL</p>
                          <FaDatabase></FaDatabase>
                        </div>
                    </section>

            </article>


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

                <section className='col-span-2 mb-4'>
                      <h2 className='font-extrabold text-3xl pt-4 z-0' style={{fontVariant: "small-caps"}}>Soft Skills</h2>
                      <section className='flex flex-col md:grid md:grid-cols-3 [&>*]:text-2xl md:[&>*]:mb-4'>
                        <p>Considerate</p>
                        <p>Punctual</p>
                        <p>Enthusiastic</p>
                        <p>Analytical</p>
                        <p>Creative</p>
                        <p>Diligent</p>
                      </section>
                </section>
            </article>

            {/* <div aria-label="section-skillset"  className='grid grid-cols-3 [&>*]:grow'>
                  
                <Image className="p-4" src={`/images/Laravel_logo.png`} width={288} height={256} alt='Laravel'></Image>

            </div> */}
            
            <h2 id='projects' className='overflow-mask p-4 my-2 dark:text-white text-right text-4xl font-extrabold border-b-4 border-green-500'>PROJECTS.</h2>

            

            <article className='/collapse md:visible grid grid-cols-3 auto-rows-[81px] md:auto-rows-[192px] gap-4'>
              {[...Array(7)].map((_, i) => {
                    return (
                        <div key={`bento-${i}`} className={`rounded-xl border-2 border-green-400/10 dark:bg-onyx bg-neutral-100 place-items-center ${i === 0 ? "col-span-2 row-span-2 primary-project"  : ""} ${i === 4 || i === 5 ? "row-span-2 secondary-project" : ""} ${i === 3 || i === 6 || i === 2 || i === 1 ? "tertiary-project" : ""}`}>
                              
                              <h2 className={`${i === 0 ? "md:col-span-2 md:row-span-2 text-4xl [&>*]:block [&>*]:overflow-auto" : "text-lg [&>*]:block [&>*]:overflow-auto"}`}>
                                  {/* {i} */}
                                  {/* {i === 0 ? "MyBudget" : ""}
                                  {i === 1 ? "Drag n' Drop Pizza Game" : ""}
                                  {i === 2 ? "TuneMasher" : ""}
                                  {i === 3 ? "MoodCanvas" : ""} */}

                                  <Link href={`${i === 0 ? "https://github.com/RogueStar112/MyBudget" : ""}${i === 1 ? "https://pizza-game-oct2023.vercel.app/" : ""}${i === 3 ? "https://roguestar112.github.io/mood-journal/index.html" : ""}${i === 4 ? "https://github.com/RogueStar112/MyNutrition" : ""}${i === 5 ? "https://todoproject-dev.vercel.app/" : ""}`}>
                                    <Image className='rounded-lg'  src={`${i === 0 ? "/images/MyBudgetBannerv4.png" : ""}${i === 1 ? "/images/PizzaGamev2.png" : ""}${i === 2 ? "/images/MyJournalTBA.png" : ""}${i === 3 ? "/images/MoodCanvasBannerv2.png" : ""}${i === 4 ? "/images/MyNutritionProjectGridv3.png" : ""}${i === 5 ? "/images/TodoAppPlaceholder.png" : ""}${i === 6 ? "/images/RouteRaterTBA.png" : ""}`} 
width={`${i === 0 ? "570" : "0"}${i === 4 || i === 5 || i == 2 || i == 6 || i == 3|| i == 1 ? "277" : "0"}`} height={`${i === 0|| i == 1 || i == 2 || i === 4 || i === 5 ? "400" : "0"}${i === 3 || i === 6  ? "192" : ""}`} alt={'BentoImage'}/>
                                  </Link>
                                  {/* {i === 5 ? "Todo App" : ""}
                                  {i === 6 ? "Route Rater" : ""} */}
                                  {/* {i === 5 ? "Todo App" : ""} 
                                  {i === 5 ? "Todo App" : ""} */}
                              </h2>

                              {/* <div className="collapse" aria-label="project-tags" className={`${i === 4 || i === 5 ? "w-full h-full" : ""}`}>
                                {i === 3 ? "Mood tracking app. Done as a group project." : ""}
                                {i === 4 ? "Nutrition-tracking app. Powered with PHP & Laravel." : ""}
                                {i === 5 ? "Get stuff done and on time with this mobile-friendly app!" : ""}
                              </div> */}

                        </div>
                    )  
                })}
              {/* <div>

              </div> */}
            </article>



            <h2 id='blog' className='overflow-mask p-4 my-2 dark:text-white text-right text-4xl font-extrabold border-b-4 border-blue-500'>BLOG.</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {blog_JSON.map((blog: any) => {
                  
                  // let isLastElement = (blog_JSON[blog_JSON.length - 1].title === blog.title);
                  let isLastElement = false;
                  // ${isLastElement ? "col-span-full" : ""}
                  return (
                  <article key={blog.id} id={blog.id} className={`border-2 border-blue-200 dark:border-orange-500 overflow-hidden rounded-lg /max-w-[100%] /md:max-w-[33.3%] grid grid-cols-[80px_1fr] md:flex md:flex-col justify-start content-end ${isLastElement ? "col-span-full" : ""}`}>
                    
                    <Link href={`blog/${blog.id}`} className='w-full overflow-hidden max-h-fit md:min-h-[206px] md:max-h-[206px]'>
                      <Image className="border-r-2 border-white dark:border-onyx md:rounded-t-lg md:overflow-mask-vert overflow-hidden /h-[250px] h-full object-cover hover:scale-110 duration-150" src={blog.images[0].file_path} width={864} height={300} alt={"Test"}/>
                    </Link>
          

                    <section className='flex flex-col justify-between rounded-b-lg relative grow' aria-label='blog-text'>
                   
                      <Link href={`blog/${blog.id}`} className={`text-blue-500 mt-2 pl-2 dark:text-orange-500 font-extrabold text-left /border-b-4 dark:border-orange-500 hover:text-orange-500 duration-200 ${isLastElement ? "text-3xl" : "text-xl md:text-base"}`} style={{fontVariant: "small-caps"}}>{blog.title}</Link>


                
                         {/* <p className='text-stone-500 text-left'>{blog.dateTime_created}</p> */}


                      <p className={`${isLastElement ? "text-center" : "text-left"} px-2`}>{blog.teaser_content}</p>

                      <section className='relative py-4 flex justify-center items-end gap-1 flex-1 mx-2' aria-label='post-tags'>
                              
                              {/* <span className='absolute text-2xl md:text-5xl left-0 md:right-0 z-10 user-select opacity-35 select-none top-0 text-blue-500 dark:text-orange-500'>#</span> */}
                                {blog.tags.map((tag: any) => {
                                  
                                    return (
                                        <Link key={tag} href={`/blog/tag/${tag}`} className='z-0 bg-blue-400 grow dark:bg-orange-700 dark:hover:bg-blue-700 hover:bg-orange-700 duration-200 p-2 text-white text-sm max-h-[40px] rounded-full'>{tag}</Link>
                                    )

                                })}
                            </section>
                
                      
                      {/* <section> */}
                            <section className='w-full'>
                              <Link className='block bg-blue-400 grow dark:bg-orange-700 dark:hover:bg-orange-800 hover:bg-orange-700 duration-200 p-4 w-full text-white md:rounded-b-lg' key={`read-more-${blog.id}`} href={`/blog/${blog.id}`}>Read more</Link>
                            </section>
                        </section>
                            
                    {/* </section> */}
                  </article>


                )
            })}
            </div>

          </div>

          
        </main>

        <Footer />


    </div>
  )
}
