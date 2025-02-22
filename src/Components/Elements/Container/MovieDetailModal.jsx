const MovieDetailModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          ✖
        </button>
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p className="text-sm text-gray-600">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailModal;
