import ContainerFilm from "../Elements/Container/ContainerFilm";
import ContainerNewEpisode from "../Elements/Container/ContainerNewEpisode";
import ContainerTopTen from "../Elements/Container/ContainerTopTen";
import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";

const MyList = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-6 sm:py-20 sm:my-0 px-2 sm:px-52 gap-4 sm:gap-8">
      <HeadingTitle title="Daftar Saya" />
      <div className=" flex flex-col sm:flex-row justify-center items-center w-full h-full gap-4">
        <div className="w-full h-full flex flex-row gap-6 sm:gap-4 justify-center items-center">
          <ContainerNewEpisode image="/assets/list-film/allofus.png" />
          <ContainerFilm image="/assets/list-film/baymax.png" />
          <ContainerNewEpisode image="/assets/list-film/bokunohero.png" />
        </div>
        <div className="w-full h-full flex flex-row gap-6 sm:gap-4 justify-center items-center">
          <ContainerNewEpisode image="/assets/list-film/bluelock.png" />
          <ContainerNewEpisode image="/assets/list-film/tedlasso.png" />
          <ContainerNewEpisode image="/assets/list-film/duty.png" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full gap-4">
        <div className="w-full h-full flex flex-row gap-6 sm:gap-4 justify-center items-center">
          <ContainerTopTen image="/assets/list-film/suzume.png" />
          <ContainerTopTen image="/assets/list-film/guardian.png" />
          <ContainerFilm image="/assets/list-film/spiderman.png" />
        </div>
        <div className="w-full h-full flex flex-row gap-6 sm:gap-4 justify-center items-center">
          <ContainerFilm image="/assets/list-film/sonic.png" />
          <ContainerFilm image="/assets/list-film/megan.png" />
          <ContainerFilm image="/assets/list-film/dilan.png" />
        </div>
      </div>
    </div>
  );
};

export default MyList;
