import { promises as fs } from 'fs';

import { useRouter } from 'next/router'

import Link from 'next/link'
import Image from 'next/image'

import { eb_garamond, montserrat } from '../../layout'

import imageHero from '../../assets/images/me_wlocationv2.png'
import { Montserrat } from 'next/font/google'
import { url } from 'inspector';

// import { blog_sample } from './blog_sample.json';



export default async function Home({ params }: { params: { id: number } }) {

  const blog_file = await fs.readFile(process.cwd() + '/src/app/blog_sample.json', 'utf8');
  const blog_JSON = JSON.parse(blog_file);


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
              <Link href="/" style={{fontVariant: "small-caps"}}>DarkMode</Link>
          </nav>

        </header>

        <main>

            {/* <h2 className='text-blue-500 font-extrabold text-left' style={{fontVariant: "small-caps"}}>{params.id}</h2> */}


            {blog_JSON.map((blog) => {
                  
                  
                  if (blog === params.id) {
                        return (
                          <article id={blog.id} className={`/max-w-[100%] /md:max-w-[33.3%] flex flex-col justify-start content-end`}>

                            <Image className="rounded-t-lg overflow-mask-vert h-[250px] object-cover " src={blog.images[0].file_path} width={864} height={300} alt={"Test"}/>
                            
                            
                  

                            <section className='rounded-b-lg p-4 relative' aria-label='blog-text'>
                          
                              <h2 className='text-blue-500 font-extrabold text-left' style={{fontVariant: "small-caps"}}>{blog.title}</h2>

                                <p className='text-stone-500 text-left'>{blog.dateTime_created}</p>


                              <p className='text-justify'>{blog.teaser_content}</p>
                            </section>



                                    <section className='p-4 flex justify-center gap-1 flex-1 justify-self-end' aria-label='post-tags'>
                                {blog.tags.map((tag) => {
                                  
                                    return (
                                        <p className='bg-blue-400 p-2 text-white text-sm max-h-[36px]'>{tag}</p>
                                    )

                                })}
                            </section>
                          </article>


                        )
                  } else {
                    return (

                      <article>404: Blog Article not found.</article>

                    )
                  }


                  
            })}
          
        </main>

        <footer></footer>


    </div>
  )
}
