const Section = () => {
  return (
    <div
      className="w-full h-[2000px] mt-96 animate-bgFade"
      style={{
        backgroundColor: "#b66060", // final color
        WebkitMaskImage: "url('/separator.png')",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: "url('/separator.png')",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
    ></div>
  );
};

export default Section;
