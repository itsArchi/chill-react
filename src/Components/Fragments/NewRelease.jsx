import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Slider from "react-slick";
import Arrow from "../Elements/Arrow/Arrow";
import ContainerNewEpisode from "../Elements/Container/ContainerNewEpisode";
import useFetchMovies from "../../hooks/useFetchMovies";

const NewRelease = () => {
  const { movies, loading, error } = useFetchMovies("new")
  const sliderRef = useRef(null);

  if (loading) return <p>Loading movies...</p>
  if (error) return <p>Error loading movies: {error.message}</p>

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
    <div className="relative w-full min-h-[145px] sm:h-[365px]">
      <Arrow
        onScrollLeft={() => sliderRef.current.slickPrev()}
        onScrollRight={() => sliderRef.current.slickNext()}
      />
      <Slider ref={sliderRef} {...settings} >
        {movies.map((movie) => (
          <ContainerNewEpisode key={movie.id} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        ))}
      </Slider>
    </div>
  );
};

export default NewRelease;
