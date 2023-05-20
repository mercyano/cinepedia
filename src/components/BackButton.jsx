import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft size={32} />
      </button>
    </div>
  );
};

export default BackButton;
