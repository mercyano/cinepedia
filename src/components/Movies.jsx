import { MdLocalMovies } from 'react-icons/md';
import MovieCard from './MovieCard';

const Movies = () => {
  return (
    <div className="mx-24">
      <div className="relative flex items-center mt-10 mb-6">
        <MdLocalMovies className="mr-2" color="red" size="2rem" />
        <h1 className="font-bold text-3xl">Movies</h1>
      </div>
      <MovieCard />
    </div>
  );
};

export default Movies;
