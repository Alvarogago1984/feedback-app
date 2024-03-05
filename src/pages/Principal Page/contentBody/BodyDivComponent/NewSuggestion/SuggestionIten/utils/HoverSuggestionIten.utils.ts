import { useState } from 'react';
import IconArrowUp from '../../../../../../../assets/shared/icon-arrow-up-blue.svg';
import IconArrowDown from '../../../../../../../assets/shared/icon-arrow-up.svg';
import { useNavigate } from 'react-router-dom';
import { ProductRequestInterface } from '../../../../../../../services/FetchGetValue.type';

export const HoverSuggestionIten = (suggestion: ProductRequestInterface) => {
  const [hover, setHover] = useState(true);

  const navigate = useNavigate();

  const handleHover = () => {
    setHover(!hover);
  };
  const conditionImg = hover ? IconArrowUp : IconArrowDown;

  const handleRouter = () => {

      navigate('/FeedbackDetail', { state: { suggestion: suggestion } });

  };

  return { conditionImg, handleHover, handleRouter };
};
