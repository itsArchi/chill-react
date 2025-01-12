import ContainerPremium from "../Elements/Container/ContainerPremium";
import Arrow from "../Elements/ContinueWatching/Arrow";

const SeriesOffering = () => {
  return (
    <div className="relative px-[45px] flex overflow-x-scroll sm:overflow-visible sm:justify-center sm:gap-6 gap-4 snap-x snap-mandatory sm:snap-none w-screen sm:w-full min-h-[145px] sm:h-[365px] -mt-2 sm:mt-0">
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerPremium image="/assets/list-film/mermaid.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerPremium image="/assets/list-film/duty.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerPremium image="/assets/list-film/bighero.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerPremium image="/assets/list-film/allofus.png" />
      </div>
      <div className="flex-shrink-0 snap-center sm:flex-shrink">
        <ContainerPremium image="/assets/list-film/missing.png" />
      </div>
      <Arrow />
    </div>
  );
};

export default SeriesOffering;
