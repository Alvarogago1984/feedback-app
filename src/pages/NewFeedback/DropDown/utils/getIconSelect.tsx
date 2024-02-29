import IconCheck from '../../../../assets/shared/icon-check.svg';
import { ImageIconSelect } from '../DropDown.styled';

export const getIconSelect = (category: string, selectDropDown:string ) => {

  return category === selectDropDown ? (
    <ImageIconSelect src={ IconCheck } alt="Check element select"  /> 
  ) : null 
};

