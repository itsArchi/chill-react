import Arrow from "../Elements/ContinueWatching/Arrow";
import ContinueWatching from "../Elements/ContinueWatching/ContinueWatching";

const ContinueWatchingFilm = () => {
  return (
    <div className="relative flex w-full h-[162px] gap-6">
      <ContinueWatching
        titleFilm="Don't Look Up"
        rating="4.5/5"
        image="/src/assets/list-film/1dontlookup.png"
      />
      <ContinueWatching
        titleFilm="The Batman"
        rating="4.2/5"
        image="/src/assets/list-film/1allofus.png"
      />
      <ContinueWatching
        titleFilm="Blue Lock"
        rating="4.6/5"
        image="/src/assets/list-film/1bluelock.png"
      />
      <ContinueWatching
        titleFilm="A Man Called Otto"
        rating="4.4/5"
        image="/src/assets/list-film/1otto.png"
      />
      <Arrow />
    </div>
  );
};

export default ContinueWatchingFilm;
