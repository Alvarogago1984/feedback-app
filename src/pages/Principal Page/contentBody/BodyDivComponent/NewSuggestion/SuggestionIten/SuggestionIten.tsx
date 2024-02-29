import {
  ContainerSuggestions,
  Upvotes,
  UpvotesText,
  Description,
  Comments,
  TitleDescription,
  Details,
  Select,
  SelectText,
  CommentsText,
  UpVotesImg,
} from './SuggestionIten.styled';

import IconComment from '../../../../../../assets/shared/icon-comments.svg';
import {
  NUMBER_UP_VOTES,
  NUMBER_COMMENTS,
} from '../constants/NewSuggestion.constants';
import { Isuggestions } from './SuggestionIten.types';
import { HoverSuggestionIten } from './utils/HoverSuggestionIten.utils';

export const SuggestionIten = ({ suggestion }: Isuggestions) => {
  const { conditionImg, handleHover } = HoverSuggestionIten();

  return (
    <ContainerSuggestions key={suggestion.id}  >
      <Upvotes onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <UpVotesImg src={conditionImg} alt="Arrow up" />
        <UpvotesText>{suggestion.upvotes || NUMBER_UP_VOTES}</UpvotesText>
      </Upvotes>
      <Description>
        <TitleDescription>
          {suggestion.title || suggestion.title}
        </TitleDescription>
        <Details>{suggestion.description || suggestion.description}</Details>
        <Select>
          <SelectText>{suggestion.category || suggestion.category}</SelectText>
        </Select>
      </Description>
      <Comments>
        <img src={IconComment} alt="Comment" />
        <CommentsText>
          {suggestion.comments?.length || NUMBER_COMMENTS}
        </CommentsText>
      </Comments>
    </ContainerSuggestions>
  );
};
