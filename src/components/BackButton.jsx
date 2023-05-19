import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to={'/'}>
      <div>
        <button>
          <AiOutlineArrowLeft size={32} />
        </button>
      </div>
    </Link>
  );
};

export default BackButton;
