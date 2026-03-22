import Link from "next/link";

type SkillType = {
  col: string,
  children: any,
  scale?: any,
  bg_color?: string,
  text_color?: string,
  dark_text_color?: string,
  level?: number,
  index?: number,
  center?: number,

  hover_bg_color?: string,
  hover_text_color?: string
}


import { useTheme } from 'next-themes'



export default function Skill({col, children, scale, bg_color, text_color, dark_text_color, level, index, center, hover_bg_color}: SkillType) {

  const { theme, setTheme } = useTheme()

 return (
  <div 
    className={`
      skill-circle flex flex-col justify-center items-center place-self-center 
      rounded-full text-center w-full 
      hover:section:flex 
      sm:svg:path:scale-(--scale) 
      svg:size-16 
      *:text-3xl
      *:svg:text-7xl!
      ${dark_text_color}
    `} 
    style={{  
      '--i': index, 
      '--center': center, 
      '--scale': scale ?? "1", // Pass the scale to a CSS variable for cleaner tailwind usage
      color: (theme === 'dark' ? (dark_text_color ?? text_color) : text_color), 
      backgroundColor: (bg_color ?? "transparent")
    } as React.CSSProperties}
  >
    {children}
  </div>
)

}