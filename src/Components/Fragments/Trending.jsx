import ContainerTopTen from "../Elements/Container/ContainerTopTen";
import Arrow from "../Elements/ContinueWatching/Arrow";

const Trending = () => {
  return (
    <div className="relative w-full h-[365px] gap-7 flex justify-center items-center">
      <ContainerTopTen image="/src/assets/list-film/tomorrow.png" />
      <ContainerTopTen image="/src/assets/list-film/quantum.png" />
      <ContainerTopTen image="/src/assets/list-film/guardian.png" />
      <ContainerTopTen image="/src/assets/list-film/otto.png" />
      <ContainerTopTen image="/src/assets/list-film/mermaid.png" />
      <Arrow />
    </div>
  );
};

export default Trending;
