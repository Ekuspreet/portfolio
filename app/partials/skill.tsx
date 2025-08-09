import Image from "next/image";

const Skill = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <div className="flex gap-2 bg-black/20 items-center h-16 rounded-xl p-1 px-2 border-l-2">
      <div
        className={
          "rounded-xl h-12 w-12 flex items-center justify-center p-1 " +
          (["Next.js", "Node.js", "Docker", "Canva"].includes(name)
            ? "bg-white/80"
            : "") +
          (["MongoDB"].includes(name) ? "bg-gray-200/60" : "")
        }
      >
        <Image src={icon} alt={`${name} icon`} width={50} height={50} />
      </div>
      <span>{name}</span>
    </div>
  );
};

export default Skill;
