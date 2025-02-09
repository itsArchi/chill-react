import { useState } from "react";
import ContainerTopTen from "../Elements/Container/ContainerTopTen";
import Arrow from "../Elements/ContinueWatching/Arrow";

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1;

  const films = [
    { image: "/assets/list-film/tomorrow.png" },
    { image: "/assets/list-film/quantum.png" },
    { image: "/assets/list-film/guardian.png" },
    { image: "/assets/list-film/otto.png" },
    { image: "/assets/list-film/mermaid.png" },
    { image: "/assets/list-film/tomorrow.png" },
    { image: "/assets/list-film/quantum.png" },
    { image: "/assets/list-film/guardian.png" },
    { image: "/assets/list-film/otto.png" },
    { image: "/assets/list-film/mermaid.png" },
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
            <div key={index} className="flex-none w-24 sm:w-[234px] h-full">
              <ContainerTopTen image={film.image} />
            </div>
          ))}
        </div>
        <Arrow onScrollLeft={onScrollLeft} onScrollRight={onScrollRight} />
      </div>
    </div>
  );
};

export default Trending;
