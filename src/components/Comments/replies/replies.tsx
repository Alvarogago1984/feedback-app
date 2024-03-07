import React from 'react';
import {
  Name,
  Email,
  EmailText,
  ContanierRes,
  TextReply,
  ContentText,
  Image,
  ContainerUser,
  ContainerName,
  HR,
  ReplyingTon,
  HRReplies,
  ContainerReplies,
  BodyReplies,
  ContainerPostReply,
} from '../Comments.styled';
import { Icommentes } from '../comments.type';
import { REPLY } from '../Constants/Comments.constants';
import { getImagePath } from '../utils/getImageName.utils';
import { PostReply } from '../postReply/PostReply';

export const Replies = ({
  comments,
  handleClickReplies,
  selectedReplyId,
}: Icommentes) => {
  return (
    <>
      {comments.map(
        (res, index) =>
          res.replies &&
          res.replies.map((item, replyIndex) => (
            <React.Fragment key={replyIndex}>
              <ContainerReplies>
                <HRReplies />
                <BodyReplies>
                  <ContanierRes>
                    <ContainerUser>
                      <Image
                        src={getImagePath(item.user.image.split('/').pop())}
                        alt="User"
                      />
                      <ContainerName>
                        <Name>{item.user.name}</Name>
                        <Email>
                          <EmailText>@</EmailText>
                          {item.user.username}
                        </Email>
                      </ContainerName>
                      <TextReply
                        onClick={() => handleClickReplies(item.user.username)}
                      >
                        {REPLY}
                      </TextReply>
                    </ContainerUser>
                    <ContentText>
                      <EmailText>@</EmailText>
                      <ReplyingTon>{item.replyingTo}</ReplyingTon>
                      {item.content}
                    </ContentText>
                  </ContanierRes>
                  <ContainerPostReply>
                    <PostReply
                      isHidden={selectedReplyId !== item.user.username}
                    />
                  </ContainerPostReply>
                  {index !== comments.length - 1 && <HR />}
                </BodyReplies>
              </ContainerReplies>
            </React.Fragment>
          ))
      )}
    </>
  );
};
