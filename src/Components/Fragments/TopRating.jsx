import { useState } from "react";
import ContainerFilm from "../Elements/Container/ContainerFilm";
import Arrow from "../Elements/ContinueWatching/Arrow";

const TopRating = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 1;

  const films = [
    { image: "/assets/list-film/suzume.png" },
    { image: "/assets/list-film/jurassic.png" },
    { image: "/assets/list-film/sonic.png" },
    { image: "/assets/list-film/allofus.png" },
    { image: "/assets/list-film/bighero.png" },
    { image: "/assets/list-film/suzume.png" },
    { image: "/assets/list-film/jurassic.png" },
    { image: "/assets/list-film/sonic.png" },
    { image: "/assets/list-film/allofus.png" },
    { image: "/assets/list-film/bighero.png" },
    { image: "/assets/list-film/suzume.png" },
    { image: "/assets/list-film/jurassic.png" },
    { image: "/assets/list-film/sonic.png" },
    { image: "/assets/list-film/allofus.png" },
    { image: "/assets/list-film/bighero.png" },
  ];

  const onScrollLeft = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return films.length - itemsPerPage;
      }
      return prev - itemsPerPage;
    });
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
    <div className="relative px-[45px] sm:px-0 flex overflow-x-scroll sm:overflow-visible sm:justify-center sm:gap-6 gap-4 snap-x snap-mandatory sm:snap-none w-screen sm:w-full min-h-[145px] sm:h-[365px]">
      <div className="overflow-x-scroll sm:overflow-hidden">
        <div
          className="flex w-screen transition-transform duration-300 gap-4 sm:gap-[22px]"
          style={{
            transform: `translateX(-${
              ((currentIndex * 100) / films.length) * itemsPerPage
            }%)`,
          }}
        >
          {films.map((film, index) => (
            <div
              key={index}
              className="flex-none w-24 sm:w-[234px] h-full"
            >
              <ContainerFilm image={film.image} />
            </div>
          ))}
        </div>
        <Arrow onScrollLeft={onScrollLeft} onScrollRight={onScrollRight} />
      </div>
    </div>
  );
};

export default TopRating;
