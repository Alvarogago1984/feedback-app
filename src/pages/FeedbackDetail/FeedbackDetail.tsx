import {
  ContainerDetail,
  ContainerButtons,
  SuggestionItenWrapper,
  ContainerComments,
  NumberComments,
  ContanierRes,
  ContentText,
  HR
} from './FeedbackDetail.styled';
import { COMMENTS } from './constants/FeedbackDetail.constants';
import { Goback, EditFeedback, Comments, AddComment } from '../../components';
import { SuggestionIten } from '../Principal Page/contentBody/BodyDivComponent/NewSuggestion/SuggestionIten/SuggestionIten';
import { SuggestionCondition } from './utils/FeedbackDetail.utils';
import { SelectedReplyId } from '../../components/Comments/utils/SelectedReplyId';
import { FetchGetValueBody } from '../../services/FetchGetValue';
import { User } from '../../components/Comments/User/User';
import { AddCommentChange } from '../../components/AddComment/utils/AddCommentChange';
import { getLocalStorageCommentValue } from './utils/getLocalStorageCommentValue.utils';
import { useContext } from 'react';
import { FilterFeedbackContext } from '../../context/filterFeedbackId.context';

export const FeedbackDetail = () => {
  const { filterID, updateFeedbackId } = useContext(FilterFeedbackContext);

  const { suggestion, numberCommentsCondition, plusComments } =
    SuggestionCondition();

  const { selectedReplyId, handleClickReply, handleClickReplies } =
    SelectedReplyId();
  const { valueFetch } = FetchGetValueBody();

  const { valueCaracters, texto, handleChange } = AddCommentChange();

  const { storageComment, storageValue } = getLocalStorageCommentValue();

  const handleChangePost = () => {
    localStorage.setItem('Value current user', JSON.stringify(valueFetch));
    localStorage.setItem('Comment Feedback', JSON.stringify(texto));
    updateFeedbackId(suggestion.id);
  };

  const filterFeedbackId = filterID === suggestion.id;

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
            {filterFeedbackId ? plusComments + 1 : plusComments} {COMMENTS}
          </NumberComments>
          <Comments
            suggestion={suggestion}
            handleClickReply={handleClickReply}
            selectedReplyId={selectedReplyId}
            handleClickReplies={handleClickReplies}
          />
          {storageValue && filterFeedbackId && (
            <ContanierRes>
              <HR />
              <User valueFetch={storageValue} />
              <ContentText>{storageComment}</ContentText>
            </ContanierRes>
          )}
        </ContainerComments>
      )}

      <AddComment
        handleChangePost={handleChangePost}
        valueCaracters={valueCaracters}
        texto={texto}
        handleChange={handleChange}
      />
    </ContainerDetail>
  );
};
