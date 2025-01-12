import Arrow from "../Elements/ContinueWatching/Arrow";
import ContinueWatching from "../Elements/ContinueWatching/ContinueWatching";

const ContinueWatcingSeries = () => {
  return (
    <div className="relative flex w-screen sm:w-full h-[151px] sm:h-[162px] px-11 sm:px-0 gap-4 sm:gap-2 overflow-x-scroll sm:overflow-visible">
      <ContinueWatching
        titleFilm="Alice in Borderland"
        rating="4.5/5"
        image="/assets/list-film/1alice.png"
      />
      <ContinueWatching
        titleFilm="The Perfect Stanger"
        rating="4.6/5"
        image="/assets/list-film/1korea.png"
      />
      <ContinueWatching
        titleFilm="All of Us Are Dead"
        rating="4.2/5"
        image="/assets/list-film/1allofus.png"
      />
      <ContinueWatching
        titleFilm="Ted Lasso"
        rating="4.4/5"
        image="/assets/list-film/1tedlasso.png"
      />
      <Arrow />
    </div>
  );
};

export default ContinueWatcingSeries;
