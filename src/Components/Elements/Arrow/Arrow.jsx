/* eslint-disable react/prop-types */
const Arrow = ({ onScrollLeft, onScrollRight }) => {
  return (
    <div className="absolute top-0 -left-6 -right-2 h-full hidden sm:flex justify-between items-center z-10">
      <button
        onClick={onScrollLeft}
        className="w-11 h-11 bg-[#2F3334] border border-solid border-[#E7E3FC3B] rounded-full flex justify-center items-center p-2.5 gap-2.5 sm:flex"
      >
        <img className="w-6 h-6" src="/arrow-left.png" alt="Arrow Left" />
      </button>
      <button
        onClick={onScrollRight}
        className="w-11 h-11 bg-[#2F3334] border border-solid border-[#E7E3FC3B] rounded-full flex justify-center items-center p-2.5 gap-2.5 sm:flex"
      >
        <img className="w-6 h-6" src="/arrow-right.png" alt="Arrow Right" />
      </button>
    </div>
  );
};

export default Arrow;
