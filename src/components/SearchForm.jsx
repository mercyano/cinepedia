// import { AiOutlineSearch } from 'react-icons/ai';

const SearchForm = () => {
  return (
    <div className="relative flex items-center focus-within:text-gray-500">
      <input
        type="search"
        className="h-6 text-black rounded-md placeholder-slate-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 md:w-full md:h-full"
        placeholder="Search movies..."
        name="searchMovie"
        id="searchMovie"
      />

      {/* <AiOutlineSearch
        className="absolute right-2 pointer-events-none text-slate-300"
        size={20}
      /> */}
    </div>
  );
};

export default SearchForm;
