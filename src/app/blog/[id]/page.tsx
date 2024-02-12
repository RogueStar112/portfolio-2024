import { promises as fs } from 'fs';

import { useRouter } from 'next/router'

import { readFileSync } from 'fs';

import Link from 'next/link'
import Image from 'next/image'

import { Inter, Teko, Montserrat, Merriweather, EB_Garamond } from 'next/font/google'

import imageHero from '../../assets/images/me_wlocationv2.png'
import { url } from 'inspector';

import ThemeSwitch from '../../components/ThemeSwitch';

import Navbar from '@/app/components/Navbar';

import Footer from '@/app/components/Footer';

import ImageCollection from '@/app/components/ImageCollection';

// ICONS

import { TiHtml5 } from "react-icons/ti";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdArrowDropleft } from 'react-icons/io';
import { IoMdArrowDropright } from 'react-icons/io';


let path = require('path');
// import { blog_sample } from './blog_sample.json';

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] });
const eb_garamond = EB_Garamond({weight: ['500', '600'], style: ['normal'], subsets: ['latin']});

export default async function Home({ params }: { params: { id: number } }) {

  const blog_file = path.join(process.cwd(), 'src/app', 'blog_sample.json');
  // const blog_JSON = JSON.parse(blog_file);
  const blog_JSON = JSON.parse(readFileSync(blog_file, 'utf-8'));





  return (
    <div className='p-4 dark:bg-onyx h-screen dark:text-mint-cream mx-auto text-current max-w-4xl'>

        <header className='grid grid-cols-2 justify-between relative sticky top-0 bg-inherit z-50 py-2'>
          
          <Link className='flex flex-col justify-center [&>*]:leading-[1.1rem] grow' href={'/'}>
              <p className='text-2xl font-extrabold'>DEMIE</p> 
              <p className='text-2xl font-bold text-stone-500 dark:text-stone-400'>MISTICA</p>
          </Link>

          
          {/* <h1 className='font-montserrat p-logo'>DEMIE<br></br>MISTICA</h1> */}

          <Navbar />

        </header>

        <main>

            {/* <h2 className='text-blue-500 font-extrabold text-left' style={{fontVariant: "small-caps"}}>{params.id}</h2> */}


            {blog_JSON.map((blog: any, index: any) => {
                  
                  
                  if (blog.id == params.id) {

                        // credit to: https://stackoverflow.com/questions/42068/how-do-i-handle-newlines-in-json.
                        // This replaces \n with newline.
                        // blog.full_content = blog.full_content.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
                        return (
                          <article key={blog.id} id={blog.id} className={`/max-w-[100%] /md:max-w-[33.3%] py-4 flex flex-col justify-start content-end`}>
                            

                            
                            {/* <Image className="rounded-t-lg overflow-mask-vert h-[400px] object-cover is-main-image" src={blog.images[0].file_path} width={864} height={400} alt={"Test"}/>
                             */}
                            {/* <p aria-label='image-caption' className='p-2 italic'>{[blog.images[0].caption ? blog.images[0].caption  : ""]}</p> */}

                            <ImageCollection images={blog.images}>
                              {/* {blog.images.map((image: any, index: any) => {
                                
                                if(image.is_main_image != 1) {
                                  return (
                                    
                                    <Image key={`img_${blog.id}_${index}`} className='rounded-lg md:overflow-mask-vert object-cover max-h-[60px] md:max-h-[156px]' src={image.file_path} width={864} height={400} alt={"Test"}/>

                                  )
                                } else {
                                  return (

                                    <Image key={`img_${blog.id}_${index}`} className="col-span-4 order-first rounded-t-lg overflow-mask-vert h-[400px] object-cover is-main-image" src={blog.images[0].file_path} width={864} height={400} alt={"Test"}/>
                            

                                  )
                                }
                              })} */}
                            </ImageCollection>

                            <section className='grid grid-cols-1 /md:grid-cols-2 md:grid-cols-[2fr_1fr]'>
                    
                              <section className='rounded-b-lg p-2 relative' aria-label='blog-text'>
                            
                                <h2 className='text-blue-500 dark:text-orange-500 text-4xl font-extrabold text-center md:text-left whitespace-normal' style={{fontVariant: "small-caps"}}>{blog.title}</h2>

                                  <p className='text-stone-500 text-center md:text-left'>Published on {blog.dateTime_created}</p>


                      
                              </section>



                              <section className='md:order-last /order-first py-2 pl-2 flex justify-around w-full md:w-initial md:justify-center gap-1 flex-1 justify-self-end' aria-label='post-tags'>
                                  {blog.tags.map((tag: any) => {
                                    
                                      return (
                                          <Link key={tag} href={`/blog/tag/${tag}`} className='bg-blue-400 dark:bg-orange-700 grow /md:grow-0 text-center p-2 text-white text-sm max-h-[40px]'>{tag}</Link>
                                      )

                                  })}
                              </section>


                            

                            </section>

                            <p className='p-2 text-justify text-xl col-span-2'>{blog.teaser_content}</p>

                            <section className='p-2 first-letter:font-bold first-letter:text-2xl' style={{ whiteSpace: 'pre-line' }} aria-label='article-text'>
                              {blog.full_content + "\n\n"}

                              {blog.additional_content ? blog.additional_content.map((add_content: any) => {
                                return ( 
                                  add_content + "\n\n"
                                )
                              }) : ""}
                            </section>

                            
                            
                            <section className='flex justify-between mx-4'>
                                <Link className='text-blue-500 dark:text-orange-500 flex justify-center place-items-center' href={`/blog/${blog.id-1}`}><IoMdArrowDropleft />Previous article<br></br></Link>

                                <Link className='text-blue-500 dark:text-orange-500 flex justify-center place-items-center' href={`/blog/${blog.id+1}`}>Next article<IoMdArrowDropright /></Link>
                            </section>
                          </article>


                        )
                  } else {

                    return (
                      <></>
                    )
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
