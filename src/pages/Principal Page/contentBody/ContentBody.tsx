import { ContainerContentBody } from './ContentBody.styled';
import { HeaderDivComponent } from './HeaderDivComponent';
import { BodyDivComponent } from './BodyDivComponent';
import { IContentBodyProp } from '../../../types/IContentBodyProp';

export const ContentBody = ({
  addFeedbackTitleDetail,
  valueApi,
  select,
  upVotesValue,
  setUpVotesValue,
  valueFetch,
}: IContentBodyProp) => {
  return (
    <ContainerContentBody>
      <HeaderDivComponent
        valueApi={valueApi}
        upVotesValue={upVotesValue}
        setUpVotesValue={setUpVotesValue}
      />
      <BodyDivComponent
        addFeedbackTitleDetail={addFeedbackTitleDetail}
        valueApi={valueApi}
        select={select}
        upVotesValue={upVotesValue}
        setUpVotesValue={setUpVotesValue}
        valueFetch={valueFetch}
      />
    </ContainerContentBody>
  );
};
