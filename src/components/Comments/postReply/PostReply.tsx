import {
  ContainerPost,
  Textarea,
  ButtonContainer,
  TextButton,
} from './PostReply.styled';
import { POST_REPLY } from './contants/PostReply.contants';
import { Iprops } from '../postReply/PostReply.type';

export const PostReply = ({ isHidden }: Iprops) => {
  if (isHidden) {
    return null;
  }
  return (
    <ContainerPost>
      <Textarea placeholder="Type your comment here" />
      <ButtonContainer>
        <TextButton>{POST_REPLY}</TextButton>
      </ButtonContainer>
    </ContainerPost>
  );
};
