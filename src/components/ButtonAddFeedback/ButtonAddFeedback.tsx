import { ButtonHeader, ButtonTextHeader } from './ButtonAddFeedback.styled';
import { addFeedback } from './Constants/ButtonAddFeedback.constants';

export const ButtonAddFeedback = () => {
  return (
    <ButtonHeader>
      <ButtonTextHeader>{addFeedback}</ButtonTextHeader>
    </ButtonHeader>
  );
};
