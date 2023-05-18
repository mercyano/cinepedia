/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const MovieDetail = () => {
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState([]);
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          { params: { api_key: TMDB_API_KEY } }
        );
        setMovieDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetail();
  });
  return (
    <>
      {movieDetail && (
        <div>
          {/* Hero Image */}
          <div
            className="relative h-[90vh] bg-no-repeat bg-cover flex flex-col"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
            }}
          >
            {/* Left Shadow */}
            <div className="absolute h-[90vh] w-3/4 bg-gradient-to-r from-black to-transparent"></div>

            {/* Hero Content */}
            <div className="z-10 pl-12 w-2/5">
              {/* Left Arrow Button */}
              <Link to={'/'}>
                <div className="mt-12">
                  <button>
                    <AiOutlineArrowLeft size={32} />
                  </button>
                </div>
              </Link>

              {/* Title */}
              <h1 className="font-bold md:text-4xl mt-44">
                {movieDetail.original_title}
              </h1>

              {/* Release Date, Runtime, Rating */}
              <div className="text-slate-400 mt-4">
                <p>
                  {movieDetail.release_date &&
                    movieDetail.release_date.slice(0, 4)}{' '}
                  | {movieDetail.runtime} mins | ⭐{' '}
                  {movieDetail.vote_average &&
                    Number.parseFloat(movieDetail.vote_average).toFixed(1)}
                </p>
              </div>

              {/* Genres */}
              <div className=" mt-4">
                {movieDetail.genres &&
                  movieDetail.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-1 py-1 text-sm rounded text-center bg-darkBlue text-white mr-3"
                    >
                      {genre.name}
                    </span>
                  ))}
              </div>

              {/* Overview */}
              <div className="mt-4 font-medium text-white">
                <p>{movieDetail.overview}</p>
              </div>

              {/* IMDB Link */}
              <div className="mt-8 text-black font-bold">
                <a
                  href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F7A209] p-2 rounded"
                >
                  View on IMDB
                </a>
              </div>
            </div>
            {/* Bottom Shadow */}
            <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MovieDetail;
