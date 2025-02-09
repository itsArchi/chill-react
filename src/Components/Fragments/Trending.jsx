import ContainerTopTen from "../Elements/Container/ContainerTopTen";
import Arrow from "../Elements/ContinueWatching/Arrow";

const Trending = () => {
  return (
    <div className="relative px-[45px] flex overflow-x-scroll sm:overflow-visible sm:justify-center sm:gap-6 gap-4 snap-x snap-mandatory sm:snap-none w-screen sm:w-full min-h-[140px] sm:h-[365px] -mt-2 sm:mt-0">
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerTopTen image="/assets/list-film/tomorrow.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerTopTen image="/assets/list-film/quantum.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerTopTen image="/assets/list-film/guardian.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerTopTen image="/assets/list-film/otto.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerTopTen image="/assets/list-film/mermaid.png" />
      </div>
      <Arrow />
    </div>
  );
};

export default Trending;
