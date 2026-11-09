function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className="relative overflow-hidden min-h-96 rounded-3xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 shadow-xl transition hover:-translate-y-1.5 hover:border-brand-600/50 hover:shadow-2xl">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full md:h-72 md:object-cover block bg-neutral-800"
      />
      <h2 className="px-4 pt-4 pb-1.5 text-base leading-tight text-neutral-900 dark:text-white">
        {movie.Title}
      </h2>
      <p className="px-4 pb-4 text-sm text-neutral-600 dark:text-white/60">{movie.Year}</p>
      {movie.Type && (
      <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/60 border-white/10 rounded-full text-white/60 text-semibold text-[10px] uppercase tracking-wide backdrop-blur">
        {movie.Type}
      </span>
      )}
      <button
        onClick={() => onToggleFavorite(movie)}
        className="absolute top-3 right-3 w-10 h-10 rounded-full border-0 bg-black/65 text-brand-500 text-xl backdrop-blur cursor-pointer transition hover:scale-110 hover:bg-brand-600 hover:text-white"
      >
        {isFavorite ? "♥" : "♡"}
      </button>
    </div>
  );
}

export default MovieCard;
