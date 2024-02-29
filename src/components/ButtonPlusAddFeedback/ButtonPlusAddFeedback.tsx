import { useNavigate } from 'react-router-dom';
import { ButtonHeader, ButtonTextHeader } from './ButtonPlusAddFeedback.styled';
import { addFeedback } from './Constants/ButtonPlusAddFeedback.constants';

export const ButtonPlusAddFeedback = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate('/newfeedback');
  };

  return (
    <ButtonHeader onClick={handleClick}>
      <ButtonTextHeader>{addFeedback}</ButtonTextHeader>
    </ButtonHeader>
  );
};
