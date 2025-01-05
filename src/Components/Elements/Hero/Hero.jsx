/* eslint-disable react/prop-types */
const Hero = (props) => {
  const { title, description, image } = props;
  return (
    <div className="w-full h-[587px] flex justify-center relative">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 16.89%, rgba(16, 18, 19, 0.86) 59.37%, #181A1C 100%), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute w-4/5 h-[233px] gap-10 flex flex-col  justify-center bottom-20">
        <div className="w-[730px] gap-5">
          <h1 className="text-white text-5xl font-bold leading-[52.8px] mb-5">
            {title}
          </h1>
          <p className="text-white text-xl font-medium leading-[25.2px] tracking-[0.2px]">
            {description}
          </p>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[350px] flex justify-between items-center gap-2.5">
            <button className="border-[#0F1E93] rounded-[48px] bg-[#0F1E93] w-24 h-12 text-white text-base font-bold leading-[22.4px] tracking-[0.2px] py-2.5px px-6.5 ">
              Mulai
            </button>
            <button className="border-[#22282A] bg-[#22282A] rounded-[48px] w-[185px] h-11 py-2.5 px-6.5 text-white text-base font-bold leading-[22.4px] tracking-[0.2px] flex justify-center items-center gap-2">
              <img className="w-6 h-6" src="/information.png" alt="" />
              Selengkapnya
            </button>
            <p className="border border-solid border-[#C1C2C4] rounded-3xl w-[52px] h-[45px] p-2.5 gap-2.5 text-white text-lg leading-[25.2px] tracking-[0.2px] flex justify-center items-center">
              18+
            </p>
          </div>
          <div className="border border-solid border-[#C1C2C4] rounded-3xl w-11 h-11 flex justify-center items-center">
            <img className="w-6 h-6" src="/volume-off.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
