import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";
import NewEpisode from "../Elements/TagFilm/NewEpisode";
import TopTen from "../Elements/TagFilm/TopTen";

const FilmContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[512px] py-10 px-80 gap-8 border border-solid border-blue-600">
      <HeadingTitle title="Top Rating Film dan Series Hari ini" />
      <div className="w-full h-[365px] gap-7 border border-solid border-green-600 flex justify-center">
        <div className="relative w-[234px] h-[365px] gap-2.5 border border-solid border-red-600">
          <img
            className="rounded-lg w-[234px] h-[365px]"
            src="/src/assets/list-film/suzume.png"
            alt=""
          />
          <NewEpisode />
          <TopTen />
        </div>
        <div className="w-[234px] h-[365px] gap-2.5 border border-solid border-cyan-600">
          <img
            className="rounded-lg w-[234px] h-[365px]"
            src="/src/assets/list-film/tomorrow.png"
            alt=""
          />
        </div>
        <div className="w-[234px] h-[365px] gap-2.5 border border-solid border-cyan-600">
          <img
            className="rounded-lg w-[234px] h-[365px]"
            src="/src/assets/list-film/tomorrow.png"
            alt=""
          />
        </div>
        <div className="w-[234px] h-[365px] gap-2.5 border border-solid border-cyan-600">
          <img
            className="rounded-lg w-[234px] h-[365px]"
            src="/src/assets/list-film/tomorrow.png"
            alt=""
          />
        </div>
        <div className="w-[234px] h-[365px] gap-2.5 border border-solid border-cyan-600">
          <img
            className="rounded-lg w-[234px] h-[365px]"
            src="/src/assets/list-film/tomorrow.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FilmContainer;
