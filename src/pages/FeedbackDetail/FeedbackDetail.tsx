import {
  ContainerDetail,
  ContainerButtons,
  SuggestionItenWrapper,
  ContainerComments,
  NumberComments,
} from './FeedbackDetail.styled';
import { COMMENTS } from './constants/FeedbackDetail.constants';
import { Goback, EditFeedback, Comments, AddComment } from '../../components';
import { SuggestionIten } from '../Principal Page/contentBody/BodyDivComponent/NewSuggestion/SuggestionIten/SuggestionIten';
import { SuggestionCondition } from './utils/FeedbackDetail.utils';
import { SelectedReplyId } from '../../components/Comments/utils/SelectedReplyId';

export const FeedbackDetail = () => {
  const { suggestion, numberCommentsCondition, plusComments } =
    SuggestionCondition();
  const { selectedReplyId, handleClickReply, handleClickReplies } =
    SelectedReplyId();

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
          <Comments
            suggestion={suggestion}
            handleClickReply={handleClickReply}
            selectedReplyId={selectedReplyId}
            handleClickReplies={handleClickReplies}
          />
        </ContainerComments>
      )}

      <AddComment />
    </ContainerDetail>
  );
};
