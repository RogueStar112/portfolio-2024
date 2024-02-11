'use client'

import { useState, useEffect } from "react"

import localFont from 'next/font/local'; 

import { useTheme } from '../../../node_modules/next-themes/dist/index'

const opendyslexic = localFont({src: '../../../public/fonts/OpenDyslexic-Regular.otf'});

import Image from "next/image";

type darkDysCheck = {
  isDarkDys: any,
  setIsDarkDys: any,
}


export default function DyslexicFontSwitch({isDarkDys, setIsDarkDys}: darkDysCheck) {

  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() =>  setMounted(true), [])

  // Added 11/02/2024, to ensure dark and light mode toggle accordingly to the body with dyslexic modes.
 // Refactoring will be added to avoid confusion.
  function toggleDarkDysToBody() {
    document.body.classList.toggle('dark');
    
  }


  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading DysToggle"
      priority={false}
      title="Loading DysToggle"
    />
  )

  if (resolvedTheme === 'dark') {
    return <button style={{fontVariant: "small-caps"}} className={ `${opendyslexic.className} flex gap-4 border-2 border-solid border-white bg-onyx text-white text-center rounded-full p-2 text-sm w-[40px]`} onClick={() => {setTheme('dark-dys'); toggleDarkDysToBody()} }>Dys</button>
  }

  if (resolvedTheme === 'dark-dys') {
    return <button style={{fontVariant: "small-caps"}} className={ `${opendyslexic.className} flex gap-4 border-2 border-solid border-white bg-white text-onyx text-center dark:bg-white dark:text-onyx rounded-full p-2 text-sm w-[40px]`} onClick={() => {setTheme('dark'); toggleDarkDysToBody()}}>Dys</button>
  }


  if (resolvedTheme === 'light-dys') {
    return <button style={{fontVariant: "small-caps"}} className={ `${opendyslexic.className} flex gap-4 border-2 border-solid border-onyx bg-onyx text-white text-center rounded-full p-2 text-sm w-[40px]`} onClick={() => setTheme('light')}>Dys
</button>
  }

   if (resolvedTheme === 'light') {
    return <button style={{fontVariant: "small-caps"}} className={ `${opendyslexic.className} flex gap-4 border-2 border-solid border-onyx dark:bg-white text-center dark:text-onyx rounded-full p-2 text-sm w-[40px]`} onClick={() => setTheme('light-dys')}>Dys</button>
  }

}