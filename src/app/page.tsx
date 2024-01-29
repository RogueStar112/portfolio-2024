import Image from 'next/image'
import { eb_garamond, montserrat } from './layout'

import imageHero from './assets/images/me_wlocationv2.png'
import { Montserrat } from 'next/font/google'



export default function Home() {
  return (
    <div className='p-4 dark:bg-onyx h-screen dark:text-mint-cream mx-auto text-current max-w-4xl'>

        <header className='flex justify-between'>
          
          <div className='flex flex-col flex-start [&>*]:leading-[1.1rem]'>

            <p className='text-2xl font-extrabold'>DEMIE</p> 
            <p className='text-2xl font-bold text-stone-500'>MISTICA</p>
          
          </div>
          
          {/* <h1 className='font-montserrat p-logo'>DEMIE<br></br>MISTICA</h1> */}

          <nav id='navbar' className={`${montserrat.className} [&>*]:font-bold flex justify-around gap-3`}>
              <p style={{fontVariant: "small-caps"}}>Home</p>
              <p style={{fontVariant: "small-caps"}}>Blog</p>
              <p style={{fontVariant: "small-caps"}}>Projects</p>
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
              
              <h2 className='m-4'>BLOG</h2>
            </article>
            
            {/*  
            <article>
              <p className={`${montserrat.className} font-extrabold`}>Welcome to my domain.</p>
              <p className={`${eb_garamond.className} font-initial`}>I am a firm believer that the best life is a frugal one.</p>
              <p>I embark on this web developer journey with an open mind and canvas, ready to unleash full-on creativity.</p>
             <p>I make websites which allow productivity to be the star of the show.</p> 
            </article>
            */}
            

          </div>
        </main>

        <footer></footer>


    </div>
  )
}
