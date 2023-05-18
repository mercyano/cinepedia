/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MovieDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      {console.log(id)}
    </>
  );
};

export default MovieDetail;
