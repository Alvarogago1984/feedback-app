import { useState } from 'react';
import IconArrowUp from '../../../../../../../assets/shared/icon-arrow-up-blue.svg';
import IconArrowDown from '../../../../../../../assets/shared/icon-arrow-up.svg';

export const HoverSuggestionIten = () => {
  const [hover, setHover] = useState(true);

  const handleHover = () => {
    setHover(!hover);
  };
  const conditionImg = hover ? IconArrowUp : IconArrowDown;

  return { conditionImg, handleHover };
};
