import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../Elements/Arrow/Arrow";
import ContinueWatching from "../Elements/ContinueWatching/ContinueWatching";
import useFetchMovies from "../../hooks/useFetchMovies";

const ContinueWatchingFilm = () => {
  const { movies, loading, error } = useFetchMovies("watchingFilm");
  const sliderRef = useRef(null);
  
  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

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
        {movies.map((movie) => (
          <ContinueWatching
          key={movie.id}
          titleFilm={movie.title}
          rating={movie.vote_average}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  
          hideItemText={true}
        />
        ))}
      </Slider>
    </div>
  );
};

export default ContinueWatchingFilm;
