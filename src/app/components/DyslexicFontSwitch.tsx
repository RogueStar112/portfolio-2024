import { useState, useEffect } from "react"

import localFont from 'next/font/local'; 

const opendyslexic = localFont({src: '../../../public/fonts/OpenDyslexic-Regular.otf'});

import Image from "next/image";

export default function DyslexicFontSwitch() {

  const [mounted, setMounted] = useState(false)
  useEffect(() =>  setMounted(true), [])

  const [DysFont, SetDysFont] = useState(false);

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

  if (DysFont === true) {
    return <button style={{fontVariant: "small-caps"}} className={ `${opendyslexic.className} flex gap-4 dark:bg-white dark:text-onyx rounded-full p-2 text-sm`} onClick={() => SetDysFont(!DysFont)}>Dys</button>
  }

  if (DysFont === false) {
    return <button style={{fontVariant: "small-caps"}} className={ `${opendyslexic.className} flex gap-4 bg-onyx text-white rounded-full p-2  text-sm`} onClick={() => SetDysFont(!DysFont)}>Dys
</button>
  }

}