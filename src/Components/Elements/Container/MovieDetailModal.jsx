/* eslint-disable react/prop-types */
import { FaPlay, FaRegBookmark } from "react-icons/fa";

const MovieDetailModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-lg max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 sm:h-60">
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt={movie.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl"
          >
            ✖
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">{movie.title}</h2>
          <p className="text-sm text-gray-300">{movie.overview}</p>

          <div className="flex items-center gap-4 mt-4">
            <button className="flex items-center justify-center bg-white text-black rounded-full w-10 h-10">
              <FaPlay />
            </button>

            <button className="flex items-center justify-center bg-gray-800 text-white rounded-full w-10 h-10">
              <FaRegBookmark />
            </button>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-md">
              {movie.adult ? "18+" : "13+"}
            </span>

            <span className="text-white font-bold text-sm">
              {movie.runtime ? `${movie.runtime} Menit` : `${movie.episode_count} Episode`}
            </span>
          </div>

          <div className="mt-4 text-gray-300 text-sm">
            {movie.genres?.map((genre, index) => (
              <span key={genre.id}>
                {genre.name}
                {index !== movie.genres.length - 1 && " • "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
