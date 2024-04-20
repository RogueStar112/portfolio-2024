import Link from "next/link";

type SkillType = {
  col: string,
  children: any,
  scale?: any
}

export default function Skill({col, children, scale}: SkillType) {

  return (
      <div className={`col-span-${col} scale-[${scale ? scale : "1"}] place-self-center`}>
        {children}
      </div>
  )

}