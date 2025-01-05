import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";
import ContinueWatchingFilm from "../Fragments/ContinueWatchingFilm";

const ContinueWatchingFilmLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[309px] py-10 px-80 gap-8 border border-solid border-red-600">
      <HeadingTitle title="Melanjutkan Tonton Film"/>
      <ContinueWatchingFilm /> 
    </div>
  );
};

export default ContinueWatchingFilmLayout;
