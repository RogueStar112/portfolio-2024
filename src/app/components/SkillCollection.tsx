'use client';

import Skill from './Skill';
import Skillset from './Skillset';

// ICONS
import { FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaPhp, FaDigitalOcean, FaDatabase, FaStar, FaStarHalfAlt, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaRegStar } from "react-icons/fa6";
import { SiSupabase } from 'react-icons/si';

export default function SkillCollection() {
  return (
    <div className='overflow-mask overflow-hidden'>
      {/* v4 Note: 'slide-animation-mobile' and 'overflow-mask' are assumed custom CSS.
          v4 handles child selectors natively with '*:'.
      */}
      <article className='slide-animation-mobile skills-carousel flex justify-around px-4 pt-8 pb-12 relative text-sm mx-auto md:mx-0 sm:*:scale-[1] /sm:*:*:*:*:svg:scale-[2] *:grow'>
        
        <Skillset>
          {/* HTML SKILL */}
          <Skill col='1' scale={1} bg_color="transparent" text_color="#ff9800" hover_bg_color='#ff9800' index={4} center={4}>

            <div className='text-7xl!'> 
              <FaHtml5 />
            </div>

            HTML
            {/* v4 Note: Nested arbitrary variants like [&>*>*] still work, 
                but using the '*' variant is cleaner.
            */}
            <div className='flex w-full relative *:grow text-center *:[&_svg]:mx-auto *:[&_svg]:scale-[1]'>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStarHalfAlt /></div>
            </div>
          </Skill>

          {/* CSS SKILL */}
          <Skill col='1' scale={1} bg_color="transparent" text_color="#2196f3" index={3} center={4}>
            
            <div className='text-7xl!'> 
              <FaCss3Alt />
            </div>


            CSS
            <div className='flex w-full relative *:grow text-center *:[&_svg]:mx-auto *:[&_svg]:scale-[1]'>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStarHalfAlt /></div>
            </div>
          </Skill>

          {/* JS SKILL */}
          <Skill col='1' scale={1} bg_color="transparent" text_color="black" dark_text_color='white' index={2} center={4}>

            <div className='text-7xl!'> 
              <IoLogoJavascript />
            </div>

            JavaScript
            <div className='flex w-full relative *:grow text-center *:[&_svg]:mx-auto *:[&_svg]:scale-[1]'>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStar /></div>
            </div>
          </Skill>

          {/* PHP SKILL */}
          <Skill col='1' scale={1} bg_color="transparent" text_color="#8892bf" index={1} center={4}>
            
            <div className='text-7xl!'> 
              <FaPhp />
            </div>

            PHP
            <div className='flex w-full relative *:grow text-center *:[&_svg]:mx-auto *:[&_svg]:scale-[1]'>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStarHalfAlt /></div>
            </div>
          </Skill>

          {/* LARAVEL SKILL */}
          <Skill col='1' scale={1} bg_color="transparent" text_color="#F05340" index={0} center={4}>

            <div className='text-7xl!'> 
              <FaLaravel />
            </div>


            Laravel
            <div className='flex w-full relative *:grow text-center *:[&_svg]:mx-auto *:[&_svg]:scale-[1]'>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStarHalfAlt /></div>
            </div>
          </Skill>

          {/* REACT SKILL */}
          <Skill col='1' scale={1} bg_color="transparent" text_color="#61DBFB" index={1} center={4}>

            <div className='text-7xl!'> 
              <FaReact />
            </div>


            React
            <div className='flex w-full relative *:grow text-center *:[&_svg]:mx-auto *:[&_svg]:scale-[1]'>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaRegStar /></div>
            </div>
          </Skill>

          {/* NEXTJS SKILL */}
          <Skill col='1' scale={1} bg_color="transparent" text_color="black" index={2} center={4}>

            <div className='text-7xl!'> 
              <TbBrandNextjs />
            </div>


            Next.js
            <div className='flex w-full relative *:grow text-center *:[&_svg]:mx-auto *:[&_svg]:scale-[1]'>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaRegStar /></div>
            </div>
          </Skill>

          {/* SQL SKILL */}
          <Skill col='1' scale={1} bg_color="transparent" text_color="black" index={3} center={4}>

            <div className='text-7xl!'> 
              <FaDatabase />
            </div>


            SQL
            <div className='flex w-full relative *:grow text-center *:[&_svg]:mx-auto'>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaRegStar /></div>
            </div>
          </Skill>

          {/* SUPABASE SKILL */}
          <Skill col='1' scale={1} bg_color="transparent" text_color="#34b27b" index={4} center={4}>

            <div className='text-7xl!'> 
              <SiSupabase />
            </div>


            Supabase
            <div className='flex w-full justify-center relative *:grow text-center *:[&_svg]:mx-auto'>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaStar /></div>
              <div className='text-yellow-500'><FaRegStar /></div>
            </div>
          </Skill>
        </Skillset>
      </article>
    </div>
  );
}