import Arrow from "../Elements/ContinueWatching/Arrow";
import ContinueWatching from "../Elements/ContinueWatching/ContinueWatching";

const ContinueWatchingFilm = () => {
  return (
    <div className="relative flex w-screen sm:w-full h-[151px] sm:h-[162px] px-11 sm:px-0 gap-4 sm:gap-2 overflow-x-scroll sm:overflow-visible">
      <ContinueWatching
        titleFilm="Don't Look Up"
        rating="4.5/5"
        image="/assets/list-film/1dontlookup.png"
        hideItemText={true}
      />
      <ContinueWatching
        titleFilm="The Batman"
        rating="4.2/5"
        image="/assets/list-film/1allofus.png"
        hideItemText={true}
      />
      <ContinueWatching
        titleFilm="Blue Lock"
        rating="4.6/5"
        image="/assets/list-film/1bluelock.png"
        hideItemText={true}
      />
      <ContinueWatching
        titleFilm="A Man Called Otto"
        rating="4.4/5"
        image="/assets/list-film/1otto.png"
        hideItemText={true}
      />
      <Arrow />
    </div>
  );
};

export default ContinueWatchingFilm;
