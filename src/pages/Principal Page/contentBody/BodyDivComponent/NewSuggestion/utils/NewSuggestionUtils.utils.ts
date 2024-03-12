import { ProductRequestInterface } from '../../../../../../services/FetchGetValue.type';
import { IdetailTitle } from '../../../../../../types/IContentBodyProp';

export const NewSuggestionUtils = (
  addFeedbackTitleDetail: IdetailTitle | undefined,
  select: string | undefined,
  valueApi: ProductRequestInterface[]
) => {
  const additionalSuggestion: ProductRequestInterface | null =
    addFeedbackTitleDetail && select
      ? {
          title: addFeedbackTitleDetail.Title,
          description: addFeedbackTitleDetail.Detail,
          category: select,
          upvotes: 0,
          comments: [],
          id: Date.now(),
        }
      : null;

  const suggestionsWithAdditional = additionalSuggestion
    ? [additionalSuggestion, ...valueApi]
    : valueApi;

  return { suggestionsWithAdditional };
};
