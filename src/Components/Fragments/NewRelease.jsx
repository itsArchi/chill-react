import ContainerFilm from "../Elements/Container/ContainerFilm";
import ContainerNewEpisode from "../Elements/Container/ContainerNewEpisode";
import ContainerTopTen from "../Elements/Container/ContainerTopTen";
import Arrow from "../Elements/ContinueWatching/Arrow";

const NewRelease = () => {
  return (
    <div className="relative w-full h-[365px] gap-7 flex justify-center items-center">
      <ContainerTopTen image="/src/assets/list-film/mermaid.png" />
      <ContainerNewEpisode image="/src/assets/list-film/duty.png" />
      <ContainerFilm image="/src/assets/list-film/bighero.png" />
      <ContainerNewEpisode image="/src/assets/list-film/allofus.png" />
      <ContainerFilm image="/src/assets/list-film/missing.png" />
      <Arrow />
    </div>
  );
};

export default NewRelease;
