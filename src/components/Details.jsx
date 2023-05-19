/* eslint-disable react/prop-types */

const Details = ({ movieDetail }) => {
  return (
    <>
      <div className="px-12 z-10 lg:pl-12 lg:w-1/2">
        {/* Title */}
        <h1 className="font-bold md:text-4xl">{movieDetail.original_title}</h1>

        {/* Release Date, Runtime, Rating */}
        <div className="text-slate-400 mt-4">
          <p>
            {movieDetail.release_date && movieDetail.release_date.slice(0, 4)} |{' '}
            {movieDetail.runtime} mins | ⭐{' '}
            {movieDetail.vote_average &&
              Number.parseFloat(movieDetail.vote_average).toFixed(1)}
          </p>
        </div>

        {/* Genres */}
        <div className="mt-4">
          {movieDetail.genres &&
            movieDetail.genres.map((genre) => (
              <span
                key={genre.id}
                className="text-xs px-0.5 py-0.5 mr-0.5 rounded text-center bg-darkBlue text-white md:text-sm md:mr-3 md:px-1 md:py-1"
              >
                {genre.name}
              </span>
            ))}
        </div>

        {/* Overview */}
        <div className="mt-4 text-sm text-white md:text-medium md:font-medium md:text-base">
          <p>{movieDetail.overview}</p>
        </div>

        {/* IMDB Link */}
        <div className="mt-4 text-black font-bold text-sm md:mt-6 md:text-base">
          <a
            href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F7A209] p-1  rounded md:p-2"
          >
            View on IMDB
          </a>
        </div>
      </div>
    </>
  );
};

export default Details;
