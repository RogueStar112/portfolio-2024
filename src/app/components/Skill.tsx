import Link from "next/link";

type SkillType = {
  col: string,
  children: any,
  scale?: string
}

export default function Skill({col, children, scale}: SkillType) {

  return (
      <p className={`col-span-${col} scale-[${scale ? scale : "1"}] place-self-center`}>{children}</p>
  )

}