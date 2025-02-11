import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../Elements/ContinueWatching/Arrow";
import ContinueWatching from "../Elements/ContinueWatching/ContinueWatching";

const ContinueWatchingFilm = () => {
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

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: "ondemand",
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative w-[309px] sm:w-full h-full">
      <Arrow
        onScrollLeft={() => sliderRef.current.slickPrev()}
        onScrollRight={() => sliderRef.current.slickNext()}
      />
      <Slider ref={sliderRef} {...settings} >
        {films.map((film, index) => (
          <ContinueWatching
          key={index}
          titleFilm={film.title}
          rating={film.rating}
          image={film.image}  
          hideItemText={true}
        />
        ))}
      </Slider>
    </div>
  );
};

export default ContinueWatchingFilm;
