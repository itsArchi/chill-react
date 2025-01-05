import ContainerFilm from "../Elements/Container/ContainerFilm";
import ContainerNewEpisode from "../Elements/Container/ContainerNewEpisode";
import Arrow from "../Elements/ContinueWatching/Arrow";

const TopRating = () => {
  return (
    <div className="relative w-full h-[365px] gap-7 flex justify-center items-center">
      <ContainerNewEpisode image="/src/assets/list-film/suzume.png" />
      <ContainerFilm image="/src/assets/list-film/jurassic.png" />
      <ContainerFilm image="/src/assets/list-film/sonic.png" />
      <ContainerNewEpisode image="/src/assets/list-film/allofus.png" />
      <ContainerFilm image="/src/assets/list-film/bighero.png" />
      <Arrow />
    </div>
  );
};

export default TopRating;
