/* eslint-disable react/prop-types */
import { useState } from "react";

const ContinueWatching = ({ movie, onClick }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      onMouseDown={() => setIsDragging(false)}
      onMouseMove={() => setIsDragging(true)}
      onClickCapture={() => {
        if (!isDragging) {
          onClick();
        }
      }}
      className="relative cursor-pointer transform transition-transform duration-300 hover:scale-110"
    >
      {/* Gambar */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
        className="rounded-lg w-full object-cover"
      />

      {/* Overlay untuk teks */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-lg">
        <div className="flex items-center justify-between">
          {/* Judul Film */}
          <h6 className="text-white text-sm sm:text-lg font-bold truncate">
            {movie.title}
          </h6>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <img src="/star.png" alt="Star" className="w-4 h-4" />
            <p className="text-white text-xs sm:text-sm font-normal">
              {movie.vote_average.toFixed(1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
