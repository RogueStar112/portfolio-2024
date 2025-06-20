import Link from 'next/link'
import Image from 'next/image'

export default function Blog(blog: any) {
  let isLastElement = false;
  
  return (

    <article key={blog.id} id={blog.id} className={`/col-span-full border-2 border-blue-200 dark:border-orange-500 overflow-hidden rounded-lg /max-w-[100%] /md:max-w-[33.3%] grid grid-cols-[80px_1fr] md:flex md:flex-col justify-start content-end ${isLastElement ? "col-span-full" : ""}`}>
                    
                    <Link href={`blog/${blog.id}`} className='w-full overflow-hidden max-h-fit md:min-h-[206px] md:max-h-[206px]'>
                      <Image className="border-r-2 border-white dark:border-onyx md:rounded-t-lg md:overflow-mask-vert overflow-hidden /h-[250px] h-full object-cover hover:scale-110 duration-150" src={blog.images[0].file_path ?? ""} width={864} height={300} alt={"Test"}/>
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
}