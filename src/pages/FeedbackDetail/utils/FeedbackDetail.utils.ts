import { useLocation } from 'react-router-dom';
import { ILocationState } from '../FeddbackDetail.type';

export const SuggestionCondition = () => {
  
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

  return { suggestion, numberCommentsCondition, plusComments };
};
