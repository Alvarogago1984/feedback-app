import {
  suggestions,
  orderList,
  mostUpvotes,
} from './constants/HeaderDivComponent.constants';
import {
  HeaderDiv,
  IconLightBulb,
  ValueTextSuggestion,
  OrderList,
  OrderListValue,
  ArrowUp,
  ContainerSuggestionsList,
  OrderListArrow,
} from './HeaderDivComponent.styled';
import ImageSuggestion from '../../../../assets/suggestions/icon-suggestions.svg';
import IconArrowUp from '../../../../assets/shared/icon-arrow-down.svg';
import { ButtonAddFeedback } from '../../../../components/ButtonAddFeedback/ButtonAddFeedback';

export const HeaderDivComponent = () => {
  return (
    <HeaderDiv>
      <IconLightBulb src={ImageSuggestion} alt="Icon suggestions" />
      <ContainerSuggestionsList>
        <ValueTextSuggestion>0</ValueTextSuggestion>
        <ValueTextSuggestion>{suggestions}</ValueTextSuggestion>
        <OrderListArrow>
          <OrderList>{orderList}</OrderList>
          <OrderListValue>{mostUpvotes}</OrderListValue>
          <ArrowUp src={IconArrowUp} alt="Icon suggestions" />
        </OrderListArrow>
      </ContainerSuggestionsList>
      <ButtonAddFeedback />
    </HeaderDiv>
  );
};
