import axios from 'axios';
import { useEffect, useState } from 'react';

const MovieCard = () => {
  const [heroMovie, setHeroMovie] = useState(null);

  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchHeroMovie = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/upcoming',
          {
            params: {
              api_key: TMDB_API_KEY,
            },
          }
        );
        const movie = response.data.results[0];
        setHeroMovie(movie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHeroMovie();
  }, []);
  return (
    <div className="flex flex-col w-56">
      {heroMovie && (
        <div className="card-image">
          <img
            src={`https://image.tmdb.org/t/p/original${heroMovie.poster_path}`}
            alt=""
          />
          <div className="card-body m-2">
            <h1 className="text-md font-semibold truncate mb-2">
              {heroMovie.title}
            </h1>
            <div className="flex flex-row items-center text-sm">
              <p className=" text-slate-400">
                {heroMovie.release_date.slice(0, 4)}
              </p>
              <p className="ml-auto">⭐ {heroMovie.vote_average}</p>
            </div>

            <br />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
