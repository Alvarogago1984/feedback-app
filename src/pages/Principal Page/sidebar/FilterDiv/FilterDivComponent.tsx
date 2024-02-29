import {
  FilterDiv,
  ButtonUp,
  TextSpan,
  ButtonMiddleBig,
  ButtonMiddleSmall,
  ButtonBottonSmall,
} from './FilterDivComponents.styled';
import {
  all,
  ui,
  ux,
  enhancement,
  bug,
  feature,
} from './constants/FilterDivComponent.constants';
import {IclickFilter} from '../../../../types/IclickFilter'

export const FilterDivComponent = ({handleClick}:IclickFilter) => {

  return (
    <FilterDiv >
      <ButtonUp onClick={handleClick}>
        <TextSpan>{all}</TextSpan>
      </ButtonUp>
      <ButtonUp onClick={handleClick} >
        <TextSpan>{ui}</TextSpan>
      </ButtonUp>
      <ButtonUp onClick={handleClick} >
        <TextSpan>{ux}</TextSpan>
      </ButtonUp>
      <ButtonMiddleBig  onClick={handleClick}>
        <TextSpan>{enhancement}</TextSpan>
      </ButtonMiddleBig>
      <ButtonMiddleSmall onClick={handleClick}>
        <TextSpan>{bug}</TextSpan>
      </ButtonMiddleSmall>
      <ButtonBottonSmall onClick={handleClick}>
        <TextSpan>{feature}</TextSpan>
      </ButtonBottonSmall>
    </FilterDiv>
  );
};
