import { promises as fs } from 'fs';
import Link from 'next/link'
import Image from 'next/image'
import { Inter, Teko, Montserrat, Merriweather, EB_Garamond } from 'next/font/google'


import { url } from 'inspector';

import { readFileSync } from 'fs';

// import { blog_sample } from './blog_sample.json';

let path = require('path');

import ThemeSwitch from '../../../components/ThemeSwitch';

// COMPONENTS 

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

// ICONS

import { TiHtml5 } from "react-icons/ti";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })
const merriweather = Merriweather({ weight: ['300', '400', '700'], style: ['normal', 'italic'], subsets: ['latin'] })
const teko = Teko({ weight: ['300', '400', '700'], style: ['normal'], subsets: ['latin'] })
const eb_garamond = EB_Garamond({weight: ['500', '600'], style: ['normal'], subsets: ['latin']});

export default async function Home({ params }: { params: { tag: string } }) {

  const blog_file = path.join(process.cwd(), 'src/app', 'blog_sample.json');
  const blog_JSON = JSON.parse(readFileSync(blog_file, 'utf-8'));

  return (
    <div className='p-4 bg-white dark:bg-onyx h-full dark:text-mint-cream mx-auto text-current max-w-4xl'>

        <header className='grid grid-cols-2 justify-between relative sticky top-0 bg-inherit z-50 py-2'>
          
          <Link className='flex flex-col justify-center [&>*]:leading-[1.1rem] grow' href={'/'}>
              <p className='text-2xl font-extrabold'>DEMIE</p> 
              <p className='text-2xl font-bold /text-stone-500 /dark:text-stone-400 coffee-brown dark:text-[#be9f02]'>MISTICA</p>
          </Link>
          
          {/* <h1 className='font-montserrat p-logo'>DEMIE<br></br>MISTICA</h1> */}

          <Navbar />

        </header>

        <main>

            {/* <h2 className='text-blue-500 font-extrabold text-left' style={{fontVariant: "small-caps"}}>{params.id}</h2> */}


            <h2 className='py-4 text-2xl'>Blog articles with #{params.tag}</h2>

            {blog_JSON.map((blog: any) => {
                  
                  let tagFound = false;

                  if (blog.tags.includes(params.tag)) {
                    tagFound = true;
                  }

                  if (tagFound) {
                        return (
                          <article key={blog.id} id={blog.id} className={`/max-w-[100%] /md:max-w-[33.3%] py-4 flex flex-col justify-start content-end`}>
                            


                            <Image className="rounded-t-lg overflow-mask-vert max-h-[150px] md:max-h-[400px] h-[400px] object-cover " src={blog.images[0].file_path} width={864} height={400} alt={"Test"}/>
                            
                            {/* <p aria-label='image-caption' className='p-2 italic'>{[blog.images[0].caption ? blog.images[0].caption  : ""]}</p> */}

                            <section className='grid grid-cols-4 gap-2'>
                              {blog.images.map((image: any, index: any) => {
                                
                                if(image.is_main_image != 1) {
                                  return (
                                    
                                    <Image key={`img_${blog.id}_${index}`} className='rounded-lg overflow-mask-vert' src={image.file_path} width={864} height={400} alt={"Test"}/>

                                  )
                                }
                              })}
                            </section>

                            <section className='grid grid-cols-1 /md:grid-cols-2 /md:grid-cols-[2fr_1fr]'>
                    
                              <section className='rounded-b-lg p-2 relative' aria-label='blog-text'>
                            
                                <Link href={`/blog/${blog.id}`} className='text-blue-500 dark:text-orange-500 text-center md:text-left text-2xl md:text-4xl font-extrabold text-left whitespace-normal' style={{fontVariant: "small-caps"}}>{blog.title}</Link>

                                  <p className='w-full md:w-fit text-stone-500 text-md md:text-xl text-left'>Published on {blog.dateTime_created}</p>


                                  <section className='flex justify-between'>
                                              <p className='text-justify text-md md:text-xl col-span-2'>{blog.teaser_content}</p>
                                  </section>

                              </section>

                              
                              <section className=' py-2 pl-2 flex justify-around w-full md:w-initial md:justify-center gap-1 flex-1 justify-self-end' aria-label='post-tags'>
                                  {blog.tags.map((tag: any) => {
                                    
                                      return (
                                          <Link key={tag} href={`/blog/tag/${tag}`} className='bg-blue-400 dark:bg-orange-700 grow /md:grow-0 text-center py-2 pl-2 text-white text-sm max-h-[40px]'>{tag}</Link>
                                      )

                                  })}
                              </section>

                              {/* <section className='col-span-2'>
                    
                              </section> */}



                            </section>

                            <section className='p-2' aria-label='article-text'>
                              {/* {blog.full_content} */}
                            </section>
                            
                            
                          </article>


                        )
                  } else {
                    // return (

                    //   <article key="NaN">404: Blog Article not found.</article>

                    // )
                  }


                  
            })}
          
        </main>

        <Footer />


    </div>
  )
}
