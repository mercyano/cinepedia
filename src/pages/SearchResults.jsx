/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function SearchResults() {
  const { query } = useParams();

  const [movieDetail, setMovieDetail] = useState([]);
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/search/movie',
          {
            params: {
              api_key: TMDB_API_KEY,
              query: query,
            },
          }
        );
        setMovieDetail(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetail();
  });

  return (
    <div>
      <Navbar />

      <div className="mx-4 mb-6 mt-20 font-medium text-slate-200 md:mx-24 md:text-xl md:font-semibold">
        <h1>Search results for: &quot;{query}&quot;</h1>
      </div>

      {movieDetail.length != 0 ? (
        <div className="grid grid-cols-1 place-items-center gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {movieDetail.map((movie, index) => {
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
      ) : (
        <div className="flex h-screen items-center justify-center font-semibold text-slate-600 md:text-lg">
          <h1>Movie title not found...</h1>
        </div>
      )}

      <Footer />
    </div>
  );
}
