import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = () => {
  const [upcomingMovie, setupcomingMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchUpcomingMovie = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/upcoming',
          {
            params: {
              api_key: TMDB_API_KEY,
              page: page,
            },
          }
        );

        setupcomingMovie((prevMovies) => [
          ...prevMovies,
          ...response.data.results,
        ]);

        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUpcomingMovie();
  }, [page]);

  const handleLoadButtonClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-1 place-items-center gap-x-4 gap-y-12  md:grid-cols-3 lg:grid-cols-4">
        {upcomingMovie &&
          upcomingMovie.map((movie, index) => {
            return (
              <Link
                to={`/movies/${movie.id}`}
                className="flex w-56 flex-col overflow-hidden rounded-md"
                key={index}
              >
                <div className="card-image">
                  <div className="h-[336px] w-[224px] bg-slate-800 bg-gradient-to-t from-black to-slate-700">
                    <img
                      src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                      alt=""
                    />
                  </div>

                  <div className="card-body m-2">
                    <h1 className="text-md mb-2 truncate font-semibold">
                      {movie.title}
                    </h1>
                    <div className="flex flex-row items-center text-sm">
                      <p className=" text-slate-400">
                        {movie.release_date.slice(0, 4)}
                      </p>
                      <p className="ml-auto">
                        ⭐ {Number.parseFloat(movie.vote_average).toFixed(1)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      {/* Load More Button */}

      {page < totalPages && (
        <button
          className="mx-auto my-8 flex rounded bg-darkBlue p-2"
          onClick={handleLoadButtonClick}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default MovieCard;
