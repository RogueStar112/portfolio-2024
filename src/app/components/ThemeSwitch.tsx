// app/components/ThemeSwitch.tsx
'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from '../../../node_modules/next-themes/dist/index'
import Image from 'next/image'

import { track } from '@vercel/analytics';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  
  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={40}
      height={40}
      sizes="40x40"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  )

  function toggleDarkDysToBody() {
    document.body.classList.toggle('dark');
    
  }

  if (resolvedTheme === 'dark') {
    return <button style={{fontVariant: "small-caps"}} className="flex gap-4 dark:bg-white dark:text-onyx w-[40px] rounded-full p-2" onClick={() => {setTheme('light'); track('Light Mode Set')}}><FiSun className="[&>*]:p-2 m-auto"></FiSun><span className="hidden md:visible">Light Mode</span></button>
  }

  if (resolvedTheme === 'dark-dys') {
    return <button style={{fontVariant: "small-caps"}} className="flex gap-4 bg-white text-onyx w-[40px] rounded-full p-2" onClick={() => {setTheme('light-dys'); toggleDarkDysToBody(); track('Light Dys Set')}}><FiSun className="[&>*]:p-2 m-auto"></FiSun><span className="hidden md:visible">Light Mode</span></button>
  }


  if (resolvedTheme === 'light-dys') {
     return <button style={{fontVariant: "small-caps"}} className="flex gap-4 bg-onyx text-white w-[40px] rounded-full p-2" onClick={() => {setTheme('dark-dys'); toggleDarkDysToBody();  track('Dark Dys Set')}}><FiMoon className="[&>*]:p-2 m-auto"></FiMoon><span className="hidden md:visible">Light Mode</span></button>
  }

  if (resolvedTheme === 'light') {
    return <button style={{fontVariant: "small-caps"}} className="flex gap-4 bg-onyx text-white w-[40px] rounded-full p-2" onClick={() => {setTheme('dark'); track('Dark Mode Set')}}>
<FiMoon className="dark:bg-onyx rounded-full [&>*]:p-2 m-auto"></FiMoon><span className="hidden md:visible">Dark Mode</span></button>
  }

}