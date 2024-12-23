import { useNavigate, useParams } from 'react-router-dom';

const PaymentButton = () => {
  const navigate = useNavigate();
  const { id, lectureId } = useParams();
  const handleClick = () => {
    navigate(`/${id}/${lectureId}/register`);
  };

  return (
    <button
      className='h-56 w-full rounded-full bg-gradient-to-r from-blue to-green px-8 py-8 text-20 font-700 text-black'
      onClick={handleClick}
    >
      신청하기
    </button>
  );
};

export default PaymentButton;
