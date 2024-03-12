import { SuggestionIten } from './SuggestionIten/SuggestionIten';
import { IContentBodyProp } from '../../../../../types/IContentBodyProp';
import { ProductRequestInterface } from '../../../../../services/FetchGetValue.type';
import { NewSuggestionUtils } from './utils/NewSuggestionUtils.utils';

export const NewSuggestion = ({
  addFeedbackTitleDetail,
  valueApi,
  select,
  upVotesValue,
  setUpVotesValue,
}: IContentBodyProp) => {
  const { suggestionsWithAdditional } = NewSuggestionUtils(
    addFeedbackTitleDetail,
    select,
    valueApi,

  );

  const orderUpdates = () => {
    if (upVotesValue === 'Least Upvotes') {
      return suggestionsWithAdditional
        .sort((a, b) => a.upvotes - b.upvotes)
        .map((res: ProductRequestInterface) => (
          <SuggestionIten key={res.id} suggestion={res} />
        ));
    } else if (upVotesValue === 'Most Upvotes') {
      return suggestionsWithAdditional
        .sort((a, b) => b.upvotes - a.upvotes)
        .map((res: ProductRequestInterface) => (
          <SuggestionIten key={res.id} suggestion={res}  />
        ));
    } else if (upVotesValue === 'Most Comments') {
      return suggestionsWithAdditional
        .sort(
          (a, b) =>
            a.comments && b.comments && b.comments.length - a.comments.length
        )
        .map((res: ProductRequestInterface) => (
          <SuggestionIten key={res.id} suggestion={res}  />
        ));
    } else if (upVotesValue === 'Least Comments') {
      return suggestionsWithAdditional
        .sort(
          (a, b) =>
            a.comments && b.comments && a.comments.length - b.comments.length
        )
        .map((res: ProductRequestInterface) => (
          <SuggestionIten key={res.id} suggestion={res} />
        ));
    }
  };

  return <>{orderUpdates()}</>;
};
