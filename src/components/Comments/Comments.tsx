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
} from './Comments.styled';
import { REPLY } from './Constants/Comments.constants';
import { Replies } from './replies/replies';
import { getImagePath } from './utils/getImageName.utils';
import { ICommentsProps } from './comments.type';

export const Comments = ({ suggestion }: ICommentsProps) => {
  const comments = suggestion.comments;
console.log(comments)
  return (
    <>
      {comments &&
        comments.map((res, index) => (
          <React.Fragment key={index}>
            <ContanierRes>
              <ContainerUser>
                <Image
                  src={getImagePath(res.user.image.split('/').pop())}
                  alt="User"
                />
                <ContainerName>
                  <Name>{res.user.name}</Name>
                  <Email>
                    <EmailText>@</EmailText>
                    {res?.user.username}
                  </Email>
                </ContainerName>
                <TextReply>{REPLY}</TextReply>
              </ContainerUser>
              <ContentText>{res.content}</ContentText>
            </ContanierRes>
            {!res.replies && index !== comments.length - 1 && <HR />}
          </React.Fragment>
        ))}
      <Replies comments={comments} />
    </>
  );
};
