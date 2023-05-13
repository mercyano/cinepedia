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
          className="hero-image h-[80vh] bg-no-repeat bg-cover flex flex-col"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${heroMovie.poster_path})`,
          }}
        >
          <div className="hero-content my-auto mx-10 z-10 md:mx-40">
            <h1 className="hero-title text-center text-5xl font-bold md:text-6xl">
              {heroMovie.title}
            </h1>
            <p className="hidden hero-description text-justify text-lg mt-8 md:block">
              {heroMovie.overview}
            </p>
          </div>
          <div className="animate-bounce flex justify-center items-center mb-16 mt-8 z-10">
            <AiOutlineDown size={24} />
          </div>

          <div className="hero-shadow absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default Hero;
