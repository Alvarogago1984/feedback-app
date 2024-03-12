import {
  BodyDiv,
  IconSearch,
  Title,
  Description,
} from './BodyDivComponent.styled';
import { noFeedback, description } from './constants/BodyDivComponent.constant';
import Search from '../../../../assets/suggestions/illustration-empty.svg';
import { ButtonPlusAddFeedback } from '../../../../components/';
import { NewSuggestion } from './NewSuggestion/NewSuggestion';
import { IContentBodyProp } from '../../../../types/IContentBodyProp';

export const BodyDivComponent = ({
  addFeedbackTitleDetail,
  valueApi,
  select,
  upVotesValue,
  setUpVotesValue,
  valueFetch,
}: IContentBodyProp) => {
  const feedBackTrue = localStorage.length <= 0;

  return (
    <>
      {feedBackTrue && !valueFetch ? (
        <BodyDiv>
          <IconSearch src={Search} alt="Icon search" />
          <Title>{noFeedback}</Title>
          <Description>{description}</Description>
          <ButtonPlusAddFeedback />
        </BodyDiv>
      ) : (
        <NewSuggestion
          addFeedbackTitleDetail={addFeedbackTitleDetail}
          valueApi={valueApi}
          select={select}
          upVotesValue={upVotesValue}
          setUpVotesValue={setUpVotesValue}
        />
      )}
    </>
  );
};
