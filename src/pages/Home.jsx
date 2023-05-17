import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="font-monserrat text-white">
      <Navbar />
      <Hero />
      <Movies />
      <Footer />
    </div>
  );
};

export default Home;
