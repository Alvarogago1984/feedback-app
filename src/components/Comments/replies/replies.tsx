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
  BodyReplies
} from '../Comments.styled';
import { Icommentes } from '../comments.type'
import { REPLY } from '../Constants/Comments.constants';
import { getImagePath } from '../utils/getImageName.utils'

export const Replies = ({ comments }: Icommentes) => {
  return (
    <>
      {comments.map((res, index) => (
        res.replies && res.replies.map((item, replyIndex) => (
          <React.Fragment key={replyIndex}>
            <ContainerReplies>
              <HRReplies />
              <BodyReplies>
                <ContanierRes>
                  <ContainerUser>
                    <Image src={getImagePath(item.user.image.split('/').pop())} alt="User" />
                    <ContainerName>
                      <Name>{item.user.name}</Name>
                      <Email>
                        <EmailText>@</EmailText>
                        {item.user.username}
                      </Email>
                    </ContainerName>
                    <TextReply>{REPLY}</TextReply>
                  </ContainerUser>
                  <ContentText>
                    <EmailText>@</EmailText>
                    <ReplyingTon>{item.replyingTo}</ReplyingTon>
                    {item.content}
                  </ContentText>
                </ContanierRes>
                {index !== comments.length - 1 && <HR />}
              </BodyReplies>
            </ContainerReplies>
          </React.Fragment>
        ))
      ))}
    </>
  );
};
