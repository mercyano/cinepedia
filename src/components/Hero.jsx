import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const Hero = () => {
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
    <div className="hero">
      {heroMovie && (
        <div
          className="hero-image mt-12 flex h-[80vh] flex-col bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${heroMovie.poster_path})`,
          }}
        >
          <div className="hero-content z-10 mx-10 my-auto md:mx-40">
            <h1 className="hero-title text-center text-5xl font-bold md:text-6xl">
              {heroMovie.title}
            </h1>
            <p className="hero-description mt-8 hidden text-justify text-lg md:block">
              {heroMovie.overview}
            </p>
          </div>
          <div className="z-10 mb-16 mt-8 flex items-center justify-center">
            <AiOutlineDown className="animate-bounce" size={24} />
          </div>

          <div className="hero-shadow absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default Hero;
