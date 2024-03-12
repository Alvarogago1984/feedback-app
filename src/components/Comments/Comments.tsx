import React from 'react';
import { ContanierRes, ContentText, HR } from './Comments.styled';
import { Replies } from './replies/replies';
import { User } from './User/User';
import { ICommentsProps } from './comments.type';
import { PostReply } from '../../components/Comments/postReply/PostReply';

export const Comments = ({
  suggestion,
  handleClickReply,
  selectedReplyId,
  handleClickReplies,
}: ICommentsProps) => {
  const comments = suggestion.comments;

  return (
    <>
      {comments &&
        comments.map((res, index) => (
          <React.Fragment key={index}>
            <ContanierRes>
              <User res={res} handleClickReply={handleClickReply} />
              <ContentText>{res.content}</ContentText>
              <PostReply isHidden={selectedReplyId !== res.id}/>
            </ContanierRes>
            {!res.replies && index !== comments.length - 1 && <HR />}
            
          </React.Fragment>
          
        ))}
      <Replies
        comments={comments}
        selectedReplyId={selectedReplyId}
        handleClickReplies={handleClickReplies}
      />
      
    </>
  );
};
