import tmdb_logo from '../assets/tmdb_logo.svg';

const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center mt-16 mb-8 space-y-2">
      <p className="text-sm text-slate-100">
        Made with ❤️ by{' '}
        <a
          href="https://github.com/mercyano"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:decoration-cyan-400 hover:font-semibold"
        >
          mercyano
        </a>
      </p>
      <p className="text-sm text-slate-400">
        Powered by{' '}
        <span>
          <a href="https://www.themoviedb.org/">
            <img src={tmdb_logo} alt="" />
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
