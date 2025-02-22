import { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../Elements/Arrow/Arrow";
import MovieDetailModal from "../Elements/Container/MovieDetailModal";
import ContinueWatching from "../Elements/ContinueWatching/ContinueWatching";
import useFetchMovies from "../../hooks/useFetchMovies";

const ContinueWatchingFilm = () => {
  const { movies, loading, error } = useFetchMovies("watchingFilm");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const sliderRef = useRef(null);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="relative w-[309px] sm:w-full h-full">
      <Arrow
        onScrollLeft={() => sliderRef.current.slickPrev()}
        onScrollRight={() => sliderRef.current.slickNext()}
      />
      {/* <Slider ref={sliderRef} {...settings} >
        {movies.map((movie) => (
          <ContinueWatching
          key={movie.id}
          titleFilm={movie.title}
          rating={movie.vote_average}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  
          hideItemText={true}
        />
        ))}
      </Slider> */}

      <Slider ref={sliderRef} {...settings}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="px-1 max-w-full sm:max-w-[160px] md:max-w-[200px] lg:max-w-full max-h-full sm:max-h-[180px]"
          >
            <ContinueWatching
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </Slider>

      {selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default ContinueWatchingFilm;
