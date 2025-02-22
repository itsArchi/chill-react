/* eslint-disable react/prop-types */
import { useState } from "react";
import NewEpisode from "../TagFilm/NewEpisode";

const ContainerNewEpisode = ({ movie, onClick }) => {
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
      className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg"
      />
      <NewEpisode />
    </div>
  );
};

export default ContainerNewEpisode;
