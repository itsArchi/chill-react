import NewEpisode from "../TagFilm/NewEpisode";

/* eslint-disable react/prop-types */
const ContinueWatching = (props) => {
  const { titleFilm, rating, image, hideItemText = false } = props;
  return (
      <div className="relative min-w-[309px] sm:w-full h-full sm:h-[162px] gap-6 sm:gap-2.5">
        <NewEpisode itemHide={hideItemText} />
        <img
          className="rounded-lg w-[309px] sm:w-[309px] h-full sm:h-[162px] object-cover"
          src={image}
          alt=""
        />
        <div
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 37.04%, rgba(0, 0, 0, 0.5) 100%)",
          }}
        ></div>
        <div className="absolute flex justify-center items-center w-full h-[54px] p-4 bottom-0">
          <h6 className="text-white text-sm sm:text-lg font-bold leading-[19.6px] sm:leading-[21.6px]">
            {titleFilm}
          </h6>
          <div className="flex items-center gap-1 sm:gap-2 ml-auto">
            <img className="w-3 sm:w-4 h-3 sm:h-4" src="/star.png" alt="" />
            <p className="text-white text-xs sm:text-sm font-normal leading-[19.6px] tracking-[0.2px]">
              {rating}
            </p>
          </div>
        </div>
      </div>
  );
};

export default ContinueWatching;
