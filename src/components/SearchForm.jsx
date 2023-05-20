import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [searchKeywords, setSearchKeywords] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchKeywords(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    navigate(`/movies/search/${searchKeywords}`, { replace: true });
  };

  return (
    <div className="relative flex items-center focus-within:text-gray-500">
      <form onSubmit={handleFormSubmit} className="flex">
        <input
          type="text"
          value={searchKeywords}
          onChange={handleInputChange}
          autoComplete="off"
          className="flex-grow-1 h-8 w-48 rounded-lg pr-8 text-sm font-medium text-black placeholder-slate-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 md:h-10 md:text-base"
          placeholder="Search movies..."
          name="searchMovie"
          id="searchMovie"
        />

        <button type="submit">
          <AiOutlineSearch
            className="absolute bottom-1.5 right-2.5 text-slate-600 md:bottom-2.5"
            size={20}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
