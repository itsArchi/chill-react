import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ContainerFilm from "../Elements/Container/ContainerFilm";
import Arrow from "../Elements/ContinueWatching/Arrow";

const TopRating = () => {
  const films = [
    { image: "/assets/list-film/fastx.png" },
    { image: "/assets/list-film/korea.png" },
    { image: "/assets/list-film/blackadam.png" },
    { image: "/assets/list-film/bokunohero.png" },
    { image: "/assets/list-film/dontlookup.png" },
    { image: "/assets/list-film/sonic.png" },
    { image: "/assets/list-film/bighero.png" },
    { image: "/assets/list-film/jurassic.png" },
    { image: "/assets/list-film/allofus.png" },
    { image: "/assets/list-film/alice.png" },
    { image: "/assets/list-film/allofus.png" },
    { image: "/assets/list-film/batman.png" },
    { image: "/assets/list-film/baymax.png" },
    { image: "/assets/list-film/devilalltime.png" },
    { image: "/assets/list-film/dilan.png" },
    { image: "/assets/list-film/doctorstrange.png" },
    { image: "/assets/list-film/suzume.png" },
    { image: "/assets/list-film/duty.png" },
    { image: "/assets/list-film/guardian.png" },
    { image: "/assets/list-film/happiness.png" },
    { image: "/assets/list-film/quantum.png" },
    { image: "/assets/list-film/bluelock.png" },
    { image: "/assets/list-film/spiderman.png" },
    { image: "/assets/list-film/tedlasso.png" },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: "ondemand",
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="relative w-full min-h-[145px] sm:h-[365px]">
      <Arrow
        onScrollLeft={() => sliderRef.current.slickPrev()}
        onScrollRight={() => sliderRef.current.slickNext()}
      />
      <Slider ref={sliderRef} {...settings} >
        {films.map((film, index) => (
          <ContainerFilm key={index} image={film.image} />
        ))}
      </Slider>
    </div>
  );
};

export default TopRating;
