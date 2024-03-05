import {
  ContainerDetail,
  ContainerButtons,
  SuggestionItenWrapper,
  ContainerComments,
  NumberComments,
} from './FeedbackDetail.styled';
import { COMMENTS } from './constants/FeedbackDetail.constants';
import { Goback, EditFeedback, Comments } from '../../components';
import { SuggestionIten } from '../Principal Page/contentBody/BodyDivComponent/NewSuggestion/SuggestionIten/SuggestionIten';
import { useLocation } from 'react-router-dom';
import { ProductRequestInterface } from '../../services/FetchGetValue.type';

interface ILocationState {
  suggestion: ProductRequestInterface;
}

export const FeedbackDetail = () => {

  const location = useLocation();
  const state = location.state as ILocationState;
  const suggestion = state?.suggestion;
  const numberComments = suggestion.comments.length;
  const numberCommentsReplies = suggestion.comments.map((item) =>
    item.replies ? item.replies?.length : 0
  );
  const valueReplais = numberCommentsReplies.reduce(
    (value, actualValue) => value + actualValue,
    0
  );
  const plusComments = numberComments + valueReplais;
  const numberCommentsCondition = numberComments !== 0;

  return (
    <ContainerDetail>
      <ContainerButtons>
        <Goback />
        <EditFeedback />
      </ContainerButtons>

      <SuggestionItenWrapper>
        <SuggestionIten suggestion={suggestion} />
      </SuggestionItenWrapper>

      {numberCommentsCondition && (
        <ContainerComments>
          <NumberComments>
            {plusComments} {COMMENTS}
          </NumberComments>
          <Comments suggestion={suggestion} />
        </ContainerComments>
      )}

      <div></div>
    </ContainerDetail>
  );
};
