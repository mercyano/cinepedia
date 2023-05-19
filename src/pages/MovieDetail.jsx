/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Details from '../components/Details';
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
            className="hidden relative h-[90vh] bg-no-repeat bg-cover md:flex md:flex-col"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
            }}
          >
            <div className="z-10 m-12">
              <BackButton />
            </div>
            {/* Left Shadow */}
            <div className="absolute h-[90vh] w-3/4 bg-gradient-to-r from-black to-transparent"></div>

            {/* Movie Details Content */}
            <div className="mt-24 z-10">
              <Details movieDetail={movieDetail} />
            </div>

            {/* Bottom Shadow */}
            <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent"></div>
          </div>

          {/* Mobile */}
          <div className="relative md:hidden">
            {/* Hero */}
            <div
              className="relative h-52 bg-cover"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
              }}
            >
              <div className="absolute m-12">
                <BackButton />
              </div>

              {/* Bottom Shadow */}
              <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Details */}
            <div className="mt-4">
              <Details movieDetail={movieDetail} />
            </div>
          </div>
        </div>
      )}
      <div className="h-32 bg-black md:h-4"></div>
      <Footer />
    </>
  );
};

export default MovieDetail;
