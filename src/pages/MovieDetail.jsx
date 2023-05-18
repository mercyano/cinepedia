/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
      <Navbar />

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
            <div className="z-10">
              <h1>{movieDetail.original_title}</h1>
              <p>{movieDetail.release_date}</p>
            </div>
            {/* Bottom Shadow */}
            <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent z-20"></div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MovieDetail;
