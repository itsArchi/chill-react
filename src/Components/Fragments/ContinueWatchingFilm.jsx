import { useState } from "react";
import Arrow from "../Elements/ContinueWatching/Arrow";
import ContinueWatching from "../Elements/ContinueWatching/ContinueWatching";

const ContinueWatchingFilm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 1; 

  const films = [
    { title: "Don't Look Up", rating: "4.5/5", image: "/assets/list-film/1dontlookup.png" },
    { title: "The Batman", rating: "4.2/5", image: "/assets/list-film/1allofus.png" },
    { title: "Blue Lock", rating: "4.6/5", image: "/assets/list-film/1bluelock.png" },
    { title: "A Man Called Otto", rating: "4.4/5", image: "/assets/list-film/1otto.png" },
    { title: "Boku no Hero Academia", rating: "4.8/5", image: "/assets/list-film/1bokunohero.png" },
    { title: "Suzume no Tajimari", rating: "4.9/5", image: "/assets/list-film/1suzume.png" },
    { title: "Ted Lasso", rating: "4.4/5", image: "/assets/list-film/1tedlasso.png" },
    { title: "Quantumania", rating: "4.3/5", image: "/assets/list-film/1quantum.png" },
    { title: "Rio", rating: "4.3/5", image: "/assets/list-film/1rio.png" },
    { title: "Sonic The Hedgehod 2", rating: "4.4/5", image: "/assets/list-film/1sonic.png" },
    { title: "Missing", rating: "4.5/5", image: "/assets/list-film/1missing.png" },
    { title: "Spiderman", rating: "4.2/5", image: "/assets/list-film/1spiderman.png" },
  ];

  const onScrollLeft = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return films.length - itemsPerPage;
      }
      return prev - itemsPerPage;
    }) 
  };

  const onScrollRight = () => {
    setCurrentIndex((prev) => {
      if (prev + itemsPerPage >= films.length) {
        return 0;
      }
      return prev + itemsPerPage; 
    });
  };

  return (
    <div className="relative w-[309px] sm:w-full h-[162px] overflow-x-scroll sm:overflow-visible">
      <div className="overflow-x-scroll sm:overflow-hidden">
        <div
          className="flex w-fit transition-transform duration-300 gap-4 sm:gap-2"
          style={{
            transform: `translateX(-${(currentIndex * 100) / films.length * itemsPerPage}%)`, 
          }}
        >
          {films.map((film, index) => (
            <div key={index} className="flex-none w-[309px] h-[150px] sm:h-full">
              <ContinueWatching
                titleFilm={film.title}
                rating={film.rating}
                image={film.image}
                hideItemText={true}
              />
            </div>
          ))}
        </div>
        <Arrow onScrollLeft={onScrollLeft} onScrollRight={onScrollRight} />
      </div>
    </div>
  );
};

export default ContinueWatchingFilm;
