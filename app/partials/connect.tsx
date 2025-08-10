import Image from "next/image";

const Skill = ({
  url,
  label,
  img_url,
}: {
  url: string;
  label: string;
  img_url: string;
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="flex gap-2 bg-black/20 hover:bg-white/20 transition-all items-center h-16 rounded-xl p-1 px-2 border-l-2">
        <div
          className={
            "rounded-xl h-12 w-12 flex items-center justify-center p-1 "
          }
        >
          <Image src={img_url} alt={`${label} url`} width={50} height={50} />
        </div>
        <span>{label}</span>
      </div>
    </a>
  );
};

export default Skill;
