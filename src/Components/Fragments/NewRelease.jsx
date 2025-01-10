import ContainerFilm from "../Elements/Container/ContainerFilm";
import ContainerNewEpisode from "../Elements/Container/ContainerNewEpisode";
import ContainerTopTen from "../Elements/Container/ContainerTopTen";
import Arrow from "../Elements/ContinueWatching/Arrow";

const NewRelease = () => {
  return (
    <div className="relative px-[45px] flex overflow-x-scroll sm:overflow-visible sm:justify-center sm:gap-6 gap-4 snap-x snap-mandatory sm:snap-none w-screen sm:w-full min-h-[145px] sm:h-[365px] -mt-2 sm:mt-0">
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerTopTen image="/src/assets/list-film/mermaid.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerNewEpisode image="/src/assets/list-film/duty.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerFilm image="/src/assets/list-film/bighero.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerNewEpisode image="/src/assets/list-film/allofus.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerFilm image="/src/assets/list-film/missing.png" />
      </div>
      <Arrow />
    </div>
  );
};

export default NewRelease;
