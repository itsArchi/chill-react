const Arrow = () => {
  return (
    <div className="absolute w-full h-full">
      <div className="absolute w-11 h-11 bg-[#2F3334] border border-solid border-[#E7E3FC3B] rounded-full flex justify-center items-center p-2.5 gap-2.5 -left-6 top-[50%] -translate-y-1/2">
        <img className="w-6 h-6" src="/arrow-left.png" alt="" />
      </div>
      <div className="absolute w-11 h-11 bg-[#2F3334] border border-solid border-[#E7E3FC3B] rounded-full flex justify-center items-center p-2.5 gap-2.5 -right-6 top-[50%] -translate-y-1/2">
        <img className="w-6 h-6" src="/arrow-right.png" alt="" />
      </div>
    </div>
  );
};

export default Arrow;
