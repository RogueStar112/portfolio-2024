import { promises as fs } from 'fs';
import Link from 'next/link'
import Image from 'next/image'
import { Inter, Teko, Montserrat, Merriweather, EB_Garamond } from 'next/font/google'


import { url } from 'inspector';

import { readFileSync } from 'fs';

// import { blog_sample } from './blog_sample.json';

let path = require('path');

import ThemeSwitch from '../../../components/ThemeSwitch';

const montserrat = Montserrat({ weight: ['300', '500', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })
const merriweather = Merriweather({ weight: ['300', '400', '700'], style: ['normal', 'italic'], subsets: ['latin'] })
const teko = Teko({ weight: ['300', '400', '700'], style: ['normal'], subsets: ['latin'] })
const eb_garamond = EB_Garamond({weight: ['500', '600'], style: ['normal'], subsets: ['latin']});

export default async function Home({ params }: { params: { tag: string } }) {

  const blog_file = path.join(process.cwd(), 'src/app', 'blog_sample.json');
  const blog_JSON = JSON.parse(readFileSync(blog_file, 'utf-8'));

  return (
    <div className='p-4 dark:bg-onyx h-screen dark:text-mint-cream mx-auto text-current max-w-4xl'>

        <header className='flex justify-between'>
          
          <div className='flex flex-col flex-start [&>*]:leading-[1.1rem]'>

            <p className='text-2xl font-extrabold'>DEMIE</p> 
            <p className='text-2xl font-bold text-stone-500'>MISTICA</p>
          
          </div>
          
          {/* <h1 className='font-montserrat p-logo'>DEMIE<br></br>MISTICA</h1> */}

          <nav id='navbar' className={`${montserrat.className} [&>*]:font-bold flex justify-around gap-3`}>
              <Link href="/" style={{fontVariant: "small-caps"}}>Home</Link>
              <Link href="/" style={{fontVariant: "small-caps"}}>Blog</Link>
              <Link href="/" style={{fontVariant: "small-caps"}}>Projects</Link>
              <ThemeSwitch />
          </nav>

        </header>

        <main>

            {/* <h2 className='text-blue-500 font-extrabold text-left' style={{fontVariant: "small-caps"}}>{params.id}</h2> */}


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

                            <section className='grid grid-cols-1 /md:grid-cols-2 md:grid-cols-[4fr_1fr]'>
                    
                              <section className='rounded-b-lg p-2 relative' aria-label='blog-text'>
                            
                                <h2 className='text-blue-500 dark:text-orange-500 text-4xl font-extrabold text-left break-all' style={{fontVariant: "small-caps"}}>{blog.title}</h2>

                                  <p className='text-stone-500 text-left'>{blog.dateTime_created}</p>


                                <p className='text-justify'>{blog.teaser_content}</p>
                              </section>



                              <section className='md:order-last /order-first p-2 flex justify-around w-full md:w-initial md:justify-center gap-1 flex-1 justify-self-end' aria-label='post-tags'>
                                  {blog.tags.map((tag: any) => {
                                    
                                      return (
                                          <Link key={tag} href={`/blog/tag/${tag}`} className='bg-blue-400 dark:bg-orange-700 grow md:grow-0 text-center p-2 text-white text-sm max-h-[40px]'>{tag}</Link>
                                      )

                                  })}
                              </section>

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

        <footer></footer>


    </div>
  )
}