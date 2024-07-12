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

import { Quote } from '@/app/components/Quote';

let path = require('path');
// import { blog_sample } from './blog_sample.json';

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] });
const eb_garamond = EB_Garamond({weight: ['500', '600'], style: ['normal'], subsets: ['latin']});

// const textParser = (str: string) => {
//   const regex = /<q>(.*?)<a>(.*?)<\/a><\/q>/g;
//   const parts = str.split(regex);

//   return parts.map((part, index) => {
//     if (index % 2 === 1) {
//       return <Quote key={index}>{part}</Quote>;
//     }
//     return part;
//   });
// };

const textParser = (str: string) => {
  const regex = /<q>(.*?)<a>(.*?)<\/a><\/q>/g;
  const parts = [];
  let match;

  // Using regex.exec() to find all matches in the string
  while ((match = regex.exec(str)) !== null) {
    parts.push(match);
  }

  // Construct the resulting array of React elements and strings
  const result = [];
  let lastIndex = 0;

  parts.forEach((part, index) => {
    const [fullMatch, quote, author] = part;
    const matchIndex = part.index;

    // Push the text before the current match
    if (lastIndex < matchIndex) {
      result.push(str.substring(lastIndex, matchIndex));
    }

    // Push the Quote component with the parsed quote and author
    result.push(<Quote key={index} author={author}>{quote}</Quote>);

    // Update the last index to be the end of the current match
    lastIndex = matchIndex + fullMatch.length;
  });

  // Push the remaining text after the last match
  if (lastIndex < str.length) {
    result.push(str.substring(lastIndex));
  }

  return result;
};

export default async function Home({ params }: { params: { id: number } }) {

  const blog_file = path.join(process.cwd(), 'src/app', 'blog_sample.json');
  // const blog_JSON = JSON.parse(blog_file);
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

                            <section className='grid grid-cols-1 /md:grid-cols-2 md:grid-cols-[3fr_2fr]'>
                    
                              <section className='rounded-b-lg p-2 relative' aria-label='blog-text'>
                            
                                <h2 className='text-blue-500 dark:text-orange-500 text-3xl md:text-4xl font-extrabold text-center md:text-left whitespace-normal' style={{fontVariant: "small-caps"}}>{blog.title}</h2>

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

                            <p className='p-2 text-justify text-xl col-span-2 md:w-[80%]'>{blog.teaser_content}</p>

                            <section className='p-2 first-letter:font-bold first-letter:text-2xl' style={{ whiteSpace: 'pre-line' }} aria-label='article-text'>
                              <p className='md:w-[80%] mt-2 pl-2'>
                              {textParser(blog.full_content + "\n\n")}
                              </p>
                              {blog.additional_content ? blog.additional_content.map((add_content: any) => {
                                return ( 
                                  add_content + "\n\n"
                                )
                              }) : ""}

                              {blog.additional_images ? blog.additional_images.map((add_image: any, add_index: any) => {
                                
                                return (

                                  <section key={`additional_image_${add_index}`} className={`block /md:flex justify-${add_image.alignment} gap-4 mb-6`}>
                                    
                                    
                                    <h2 className='w-full text-blue-500 dark:text-orange-500 text-xl md:text-2xl font-extrabold whitespace-normal text-left' style={{fontVariant: "small-caps"}}>{add_image.heading}</h2>

                                    <section>

                                      <section className='flex flex-col'>
                                        
                                        <section className='relative'>
                                          <Image src={add_image.file_path} className={`max-h-[256px] md:w-full /md:max-w-[800px] md:max-h-[600px] object-cover mt-4 order-first object-center-top object-top`}  width={864} height={400} style={{top: `${add_image.position_y}`, objectPosition: `${add_image.obj_cover}`, height: `${add_image.height ? add_image.height: 400}`}} alt=''/>
                                          <span key={`img_span_${add_index}`} className={`absolute bottom-0 w-fit p-2 select-none bg-onyx dark:bg-black text-white`}>{add_image.caption_img ? add_image.caption_img : ""}</span>
                                        </section>

                                        <caption className='mt-2 pl-2 border-l-2 border-blue-500 dark:border-orange-500 w-full text-left mb-4'>    {add_image.caption_outside}</caption>
                                      </section>
                      
                                    <p className='md:w-[80%] mt-2 pl-2'>{textParser(add_image.text_content)}</p>

                                    <aside className='relative'>

                                    {/* <h2 className='text-blue-500 dark:text-orange-500 text-xl md:text-2xl font-extrabold whitespace-normal m-2 text-center' style={{fontVariant: "small-caps"}}>{add_image.heading}</h2> */}

                                      {/* <ImageCollection images={add_image}></ImageCollection> */}
                                      
                                      
                                        
                                    </aside>
                                    </section>


                                  </section>

                                )

                              }) : ""}
                            </section>

                            
                            
                            <section className='flex justify-between mx-4'>

                                


                                <Link className={`text-center text-blue-500 dark:text-orange-500 flex justify-center place-items-center`} href={`/blog/${blog_JSON[index+1] ? blog.id+1 : "1"}`}><IoMdArrowDropleft />Previous article<br></br>{blog_JSON[index+1] ? blog_JSON[index+1].title : blog_JSON[0].title}`</Link>

                                <Link className={`text-center text-blue-500 dark:text-orange-500 flex justify-center place-items-center`} href={`/blog/${blog_JSON[index-1] ? blog.id-1 : blog_JSON.length}`}>Next article<br></br>{blog_JSON[index-1] ? blog_JSON[index-1].title : blog_JSON[blog_JSON.length-1].title}<IoMdArrowDropright /></Link>
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
