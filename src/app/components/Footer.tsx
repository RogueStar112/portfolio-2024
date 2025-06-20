import Link from "next/link"

import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { PiReadCvLogo } from "react-icons/pi"
import { MdOutlineEmail } from "react-icons/md";

let yearUpdate = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className='border-t-2 mt-4 p-4 border-neutral-500 flex justify-between w-full'>

            <p>&copy; {yearUpdate}</p>
            
            <div className='flex gap-8 [&>*]:[&>*]:scale-[2] /[&>*]:[&>*]:text-neutral-500' aria-label='socials'>
              <Link target="_blank" className="[&>*]:text-neutral-500 dark:[&>*]:text-white md:text-neutral-500 md:[&>*]:hover:text-blue-500 md:dark:[&>*]:hover:text-black [&>*]:duration-150" href={'https://github.com/RogueStar112'}>
                    <FaGithub />
              </Link>
              <Link target="_blank" className="[&>*]:text-[#0077B5] md:text-neutral-500 md:[&>*]:hover:text-blue-500 md:[&>*]:hover:text-[#0077B5] [&>*]:duration-150" href={'https://www.linkedin.com/in/demie-mistica-049779296/'}><FaLinkedin /></Link>
                <Link target="_blank" className="text-black sm:text-neutral-500 dark:[&>*]:text-white md:text-black md:[&>*]:hover:text-yellow-500 md:dark:[&>*]:hover:text-yellow-500 [&>*]:duration-150 [&>span]:hover:block" href={'https://docs.google.com/document/d/12QaCgjy6Db6pvGVqAARgoHSXmBJ-l3IWbG0eG_7n7JY/edit?usp=sharing'}><PiReadCvLogo /></Link>
                <Link target="_blank" className="text-black sm:text-neutral-500 dark:[&>*]:text-white md:text-black md:[&>*]:hover:text-yellow-500 md:dark:[&>*]:hover:text-yellow-500 [&>*]:duration-150 [&>span]:hover:block" href={'mailto:mistica.demie@gmail.com'}><MdOutlineEmail /></Link>
                    
            </div>

        </footer>
    )
}