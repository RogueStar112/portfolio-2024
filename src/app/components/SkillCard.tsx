
interface SkillCardProps {
  name: string;
  description: string;
}

export default function SkillCard({ name, description }: SkillCardProps) {
  return (
    <div className="relative group flex flex-col items-center">

      <span className="/mt-2 font-medium">{name}</span>

      {/* Tooltip */}
      <div className="!overflow-visible absolute bottom-[375%] left-[125%] w-[250px] mb-2 hidden w-40 text-sm text-white bg-black p-2 rounded group-hover:block z-[999999] text-center">
        {description}
      </div>
    </div>
  );
}