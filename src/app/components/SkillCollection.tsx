'use client';

import Skill from './Skill';
import Skillset from './Skillset';

// ICONS

import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaDigitalOcean } from "react-icons/fa";
import { TbBrandNextjs } from 'react-icons/tb';
import { FaDatabase } from 'react-icons/fa';

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SkillCollection() {

    return (

      <div className='overflow-mask overflow-hidden'>
        <article className='slide-animation-mobile skills-carousel flex /min-w-[1728px] sm:[&>*]:scale-2 mx-auto md:mx-0 /md:grid /grid-cols-1 justify-around px-4 [&>*]:grow /overflow-mask /border-b-4 /border-orange-500 /h-fit /h-72 py-12 relative text-sm'>
                            
                            {/* <div className='absolute hidden sm:block -left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 text-black dark:text-white [&>*]:scale-[3]'>
                                               <FaLongArrowAltLeft />
                            </div>
        
                            <div className='absolute hidden sm:block -right-8 top-1/2 -translate-y-1/2 translate-x-1/2 text-black dark:text-white [&>*]:scale-[3]'>
                                              <FaLongArrowAltRight />
                            </div>
                  */}
                            
                            <Skillset>
                            {/* <section className='grid grid-cols-3 items-center [&>div>svg]:scale-[3] /[&>div>svg]:mx-auto /[&>div>svg]:mt-4  [&>*]:relative [&>*]:flex [&>*]:flex-col [&>*]:justify-center'> */}
                                <Skill col='1' scale={2} bg_color="transparent" text_color="#ff9800" index={4} center={4}>
                                  {/* <p>HTML</p> */}
                                  <FaHtml5></FaHtml5>
                                  HTML

                                  <div className='flex w-full  gap-2 relative [&>*]:grow text-center [&>*>*]:mx-auto'>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStarHalfAlt /></div>
                                  </div>
                                </Skill>
                                <Skill col='1' scale={2}  bg_color="transparent" text_color="#2196f3" index={3} center={4}>
                                  {/* <p>CSS</p> */}
                                  <FaCss3Alt></FaCss3Alt>
                                  CSS

                                  <div className='flex w-full  gap-2 relative [&>*]:grow text-center [&>*>*]:mx-auto'>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStarHalfAlt /></div>
                                  </div>
                                </Skill>
        
        
                                <Skill col='1' scale={2}  bg_color="transparent" text_color="black" index={2} center={4}>
        
                                      {/* <p>JS</p> */}
                                      <IoLogoJavascript></IoLogoJavascript>
                                      JavaScript

                                        <div className='flex w-full  gap-2 relative [&>*]:grow text-center [&>*>*]:mx-auto'>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStar /></div>
                                        </div>
                                </Skill>
        
                            {/* </section> */}
        
                                {/* <div class="scale-[2] [&>*]:scale-[2]"></div> */}
                            {/* <section className='grid grid-cols-2 items-center [&>div>svg]:scale-[3] /[&>div>svg]:mx-auto /[&>div>svg]:mt-4  [&>*]:relative [&>*]:flex [&>*]:flex-col [&>*]:justify-center '> */}
                                <Skill col='1' scale={2} bg_color="transparent" text_color="#8892bf" index={1} center={4}>
                                  {/* <p>PHP</p> */}
                                  <FaPhp></FaPhp>
                                  PHP

                                  <div className='flex w-full  gap-2 relative [&>*]:grow text-center [&>*>*]:mx-auto'>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStarHalfAlt /></div>
                                        </div>
                                </Skill>
        
                                <Skill col='1' scale={2} bg_color="transparent" text_color="#F05340" index={0} center={4}>
                                  {/* <p>Laravel</p> */}
                                  <FaLaravel></FaLaravel>
                                  Laravel

                                  <div className='flex w-full  gap-2 relative [&>*]:grow text-center [&>*>*]:mx-auto'>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStarHalfAlt /></div>
                                        </div>
                                </Skill>
        
                            {/* </section> */}
        
                          {/* <section className='grid grid-cols-3 items-center [&>div>svg]:scale-[3] /[&>div>svg]:mx-auto /[&>div]:m-4 /[&>div>svg]:mt-4  [&>*]:relative [&>*]:flex [&>*]:flex-col [&>*]:justify-center'> */}
                                <Skill col='1' scale={2} bg_color="transparent" text_color="#61DBFB" index={1} center={4}>
                                  {/* <p>React</p> */}
                                  <FaReact></FaReact>
                                  React

                                  <div className='flex w-full  gap-2 relative [&>*]:grow text-center [&>*>*]:mx-auto'>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStarHalfAlt /></div>
                                          <div className='text-yellow-500'><FaRegStar /></div>
                                  </div>
                                </Skill>
        
                                <Skill col='1' scale={2} bg_color="transparent" text_color="black" index={2} center={4}>
                                  {/* <p>NextJS</p> */}
                                <TbBrandNextjs></TbBrandNextjs>
                                Next.js

                                <div className='flex w-full  gap-2 relative [&>*]:grow text-center [&>*>*]:mx-auto'>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaRegStar /></div>
                                  </div>
                                </Skill>
                       
        
                                <Skill col='1' scale={2} bg_color="transparent" text_color="black" index={3} center={4}>
                                {/* <p>SQL</p> */}
                                  <FaDatabase></FaDatabase>
                                  SQL

                                  <div className='flex w-full  gap-2 relative [&>*]:grow text-center [&>*>*]:mx-auto'>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaRegStar /></div>
                                  </div>
                                </Skill>
        
                                <Skill col='1' scale={2} bg_color="transparent" text_color="#0080FF" index={4} center={4}>
                                {/* <p>SQL</p> */}
                                  <FaDigitalOcean></FaDigitalOcean>
                                  DigitalOcean

                                  <div className='flex w-full justify-center  gap-2 relative [&>*]:grow text-center [&>*>*]:mx-auto'>
                                          <div className='text-yellow-500'><FaStar /></div>
                                          <div className='text-yellow-500'><FaRegStar /></div>
                                          <div className='text-yellow-500'><FaRegStar /></div>
                                  </div>
                                </Skill>
                            {/* </section> */}

                            
                           </Skillset>

             
        
                    </article>
        </div>
        
    )
}