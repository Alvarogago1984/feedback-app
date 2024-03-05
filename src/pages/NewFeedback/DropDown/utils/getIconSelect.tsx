import IconCheck from '../../../../assets/shared/icon-check.svg';
import { ImageIconSelect } from '../DropDown.styled';

export const getIconSelect = (category: string, selectDropDown: string) => {
  const conditionIconSelect =
    category === selectDropDown ? (
      <ImageIconSelect src={IconCheck} alt="Check element select" />
    ) : null;
    
  return conditionIconSelect;
};
