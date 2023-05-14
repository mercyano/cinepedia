import Footer from './components/Footer';
import Hero from './components/Hero';
import Movies from './components/Movies';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="font-monserrat text-white">
      <Navbar />
      <Hero />
      <Movies />
      <Footer />
    </div>
  );
};

export default App;
