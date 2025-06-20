import Link from "next/link";

type SkillType = {
  col: string,
  children: any,
  scale?: any,
  bg_color?: string,
  text_color?: string,
  level?: number,
  index?: number
  center?: number,
}




export default function Skill({col, children, scale, bg_color, text_color, level, index, center}: SkillType) {

  return (
      <div className={`skill-circle flex flex-col relative justify-center /col-span-${col} scale-[2] sm:[&>*]:scale-[${scale ?? "1"}] items-center place-self-center rounded-full text-center w-full [&>svg]:w-16 [&>svg]:h-16 `} style={{    '--i': index, '--center': center, color: (text_color ?? "black"), backgroundColor: (bg_color ?? "transparent")} as React.CSSProperties}>
        {children}
        
      </div>
  )

}