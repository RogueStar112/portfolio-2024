import { promises as fs } from 'fs';
import Link from 'next/link'
import Image from 'next/image'
import { eb_garamond, montserrat } from './layout'

import imageHero from './assets/images/me_wlocationv2.png'
import { Montserrat } from 'next/font/google'
import { url } from 'inspector';

// import { blog_sample } from './blog_sample.json';



export default async function Home() {

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

          {/* <h2 className={`${eb_garamond.className} text-2xl`}>Web Developer - Lifestyle Enthusiast</h2> */}


          <div className='flex flex-col justify-between text-center py-4'>
            
            <article className='/overflow-hidden relative'>

              <article className='overflow-hidden relative'>
                
                <section className='overflow-mask h-[448px]'>
                <Image className='object-cover object-center h-inherit' src={imageHero} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{objectFit: 'cover'}} alt='My portrait'></Image>
                    <section className='absolute right-0 mr-4 top-[45%] text-white'>
                      <p className='text-4xl font-extrabold'>GREETINGS.</p>
                      <p className={`${eb_garamond.className} font-initial`}>I am a full stack Web Developer.</p>
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
            
            <h2 className='m-4 text-right text-4xl font-extrabold'>BLOG.</h2>

            <div className='grid grid-cols-3 gap-3'>
            {blog_JSON.map((blog) => {
                  
                  let isLastElement = (blog_JSON[blog_JSON.length - 1].title === blog.title);
                  return (
                  <article id={blog.id} className={`/max-w-[100%] /md:max-w-[33.3%] flex flex-col justify-start content-end ${isLastElement ? "col-span-full" : ""}`}>

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
            })}
            </div>

          </div>

          
        </main>

        <footer></footer>


    </div>
  )
}
