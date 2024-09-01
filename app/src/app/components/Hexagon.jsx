

const Hexagon = () => {
  return (
    <div className="left-6 relative group flex items-center justify-center hover:cursor-pointer">
      <div
        className="absolute z-40 group-hover:-translate-y-[4px] group-hover:-translate-x-[4px] transition-transform"
        id="hexa"
      >
        <div className="w-0 h-0 border-r-[20px] border-r-transparent border-b-[10px] border-b-Navy border-l-[20px] border-l-transparent"></div>
        <div className="w-[40px] h-[24px] bg-Navy text-center">
            <p className="text-Green font-calibre text-2xl">M</p>
        </div>
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[10px] border-t-Navy border-r-[20px] border-r-transparent"></div>
      </div>
      <div
        className="absolute z-30 scale-[1.15]"
        id="shadow"
      >
        <div className="w-0 h-0 border-r-[20px] border-r-transparent border-b-[10px] border-b-Green border-l-[20px] border-l-transparent"></div>
        <div className="w-[40px] h-[24px] bg-Green border-y border-y-Green"></div>
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[10px] border-t-Green border-r-[20px] border-r-transparent"></div>
      </div>
    </div>
  );
};

export default Hexagon;