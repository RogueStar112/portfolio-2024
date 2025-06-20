'use client';

import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaDigitalOcean } from "react-icons/fa";
import { TbBrandNextjs } from 'react-icons/tb';
import { FaDatabase } from 'react-icons/fa';

import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';

export default function SkillGallery() {

    return (
           <div className='grid grid-cols-[1fr_3fr] h-[32rem] w-full'>

              <div className='bg-orange-500 grid grid-rows-[1fr_1fr]'>

                <div className="bg-white m-4 [&>*]:w-full [&>*]:h-full">

                    <FaHtml5 />
                  
                </div>


                <div className='grid grid-cols-[3fr_1fr] text-white justify-between w-full'>

                    <div>

                        Semantic HTML

                    </div>
                    <div></div>

                    <div></div>
                    <div></div>


                </div>
              </div>

              <div className='bg-yellow-500 grid grid-rows-[1fr_6fr] [&>*]:w-full [&>*]:h-full'>

                <div className='bg-blue-500 flex text-4xl justify-between [&>*]:w-full [&>*]:text-white items-center'>

                        <div>HTML</div>
                        <div>

                                <div className='flex w-full  gap-2 relative /[&>*]:grow [&>*>*]:h-12 [&>*>*]:w-12 text-center [&>*>*]:mx-auto justify-center w-full h-full'>
                                    <div className='text-yellow-500'><FaStar /></div>
                                    <div className='text-yellow-500'><FaStar /></div>
                                    <div className='text-yellow-500'><FaStarHalfAlt /></div>
                                </div>
                        </div>

                </div>

                <div>



                </div>

              </div>
            </div>
    )
}