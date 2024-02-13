import {
  FilterDiv,
  ButtonUp,
  TextSpan,
  ButtonMiddleBig,
  ButtonMiddleSmall,
  ButtonBottonSmall,
} from './FilterDivComponents.styled'
import {
  all,
  ui,
  ux,
  enhancement,
  bug,
  feature,
} from './constants/FilterDivComponent.constants'

export const FilterDivComponent = () => {
  return (
    <FilterDiv>
      <ButtonUp>
        <TextSpan>{all}</TextSpan>
      </ButtonUp>
      <ButtonUp>
        <TextSpan>{ui}</TextSpan>
      </ButtonUp>
      <ButtonUp>
        <TextSpan>{ux}</TextSpan>
      </ButtonUp>
      <ButtonMiddleBig>
        <TextSpan>{enhancement}</TextSpan>
      </ButtonMiddleBig>
      <ButtonMiddleSmall>
        <TextSpan>{bug}</TextSpan>
      </ButtonMiddleSmall>
      <ButtonBottonSmall>
        <TextSpan>{feature}</TextSpan>
      </ButtonBottonSmall>
    </FilterDiv>
  )
}
