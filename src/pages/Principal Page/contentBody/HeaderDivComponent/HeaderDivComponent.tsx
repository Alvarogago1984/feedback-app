import {
  SUGGESTIONS,
  ORDER_LIST,
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
import IconArrowDown from '../../../../assets/shared/icon-arrow-up.svg';
import { ButtonPlusAddFeedback } from '../../../../components/ButtonPlusAddFeedback/ButtonPlusAddFeedback';
import { IContentBodyProp } from '../../../../types/IContentBodyProp';
import { ListUpVotes } from './ListUpVotes/ListUpVotes';
import { useState } from 'react';

export const HeaderDivComponent = ({
  valueApi,
  upVotesValue,
  setUpVotesValue,
}: IContentBodyProp) => {
  const [isListUpVotes, setIsListUpVotes] = useState<boolean>(true);

  const handleClikListUpVotes = () => {
    setIsListUpVotes(!isListUpVotes);
  };

  return (
    <HeaderDiv>
      <IconLightBulb src={ImageSuggestion} alt="Icon suggestions" />
      <ContainerSuggestionsList>
        <ValueTextSuggestion>{valueApi.length}</ValueTextSuggestion>
        <ValueTextSuggestion>{SUGGESTIONS}</ValueTextSuggestion>
        <OrderListArrow onClick={handleClikListUpVotes}>
          <OrderList>{ORDER_LIST}</OrderList>
          <OrderListValue>{upVotesValue}</OrderListValue>
          <ArrowUp
            src={isListUpVotes ? IconArrowUp : IconArrowDown}
            alt="Icon suggestions"
          />
          <ListUpVotes
            isListUpVotes={isListUpVotes}
            setUpVotesValue={setUpVotesValue}
          />
        </OrderListArrow>
      </ContainerSuggestionsList>
      <ButtonPlusAddFeedback />
    </HeaderDiv>
  );
};
