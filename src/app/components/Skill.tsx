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
      <div className={`skill-circle [&>section]:hover:flex flex flex-col /relative justify-center /col-span-${col} scale-[2] sm:[&>*]:scale-[${scale ?? "1"}] items-center place-self-center rounded-full text-center w-full [&>svg]:w-16 [&>svg]:h-16 ${dark_text_color} `} 
      style={{    '--i': index, '--center': center, color: (theme === 'dark' ? (dark_text_color ?? text_color) : text_color), backgroundColor: (bg_color ?? "transparent")} as React.CSSProperties}>
        {children}
        
      </div>
  )

}