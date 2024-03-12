import {
  Name,
  Email,
  EmailText,
  TextReply,
  Image,
  ContainerUser,
  ContainerName,
} from './User.styled';
import { getImagePath } from '../utils/getImageName.utils';
import { REPLY } from '../Constants/Comments.constants';
import {
  CommentInterface,
  ReplyInterface,
  DataInterface,
  UserInterface,
} from '../../../types/FetchGetValue.type';

export interface Iuser  {
  res?: CommentInterface;
  item?: ReplyInterface;
  valueFetch?: DataInterface;
  handleClickReply?: (id: number |UserInterface) => void;
  handleClickReplies?: (username: string | UserInterface) => void;
}

export const User = ({
  res,
  item,
  handleClickReply,
  handleClickReplies,
  valueFetch,
}: Iuser) => {
  const currentUser: UserInterface = valueFetch?.currentUser || {
    name: '',
    username: '',
    image: '',
  };
  const commentUser: UserInterface | undefined = res?.user;
  const repliesUser: UserInterface | undefined = item?.user;

  const valueUser = (
    commentUser?: UserInterface,
    repliesUser?: UserInterface,
    currentUser: UserInterface = { name: '', username: '', image: '' }
  ): UserInterface => {
    return commentUser || repliesUser || currentUser;
  };
  const handle = (
    id?: number,
    username?: string,
    currentUser?: UserInterface
  ) => {
    if (id) {
      return handleClickReply ? handleClickReply(id) : '';
    } else if (username) {
      return handleClickReplies ? handleClickReplies(username) : '';
    } else if (currentUser) {
      return handleClickReply ? handleClickReply(currentUser) : '';
    }
  };
  return (
    <ContainerUser>
      <Image
        src={getImagePath(
          valueUser(commentUser, repliesUser, currentUser)
            .image.split('/')
            .pop()
        )}
        alt="User"
      />
      <ContainerName>
        <Name>{valueUser(commentUser, repliesUser, currentUser).name}</Name>
        <Email>
          <EmailText>@</EmailText>
          {valueUser(commentUser, repliesUser, currentUser).username}
        </Email>
      </ContainerName>
      <TextReply
        onClick={() =>
          handle(res?.id || 0, item?.user.username || '', currentUser)
        }
      >
        {REPLY}
      </TextReply>
    </ContainerUser>
  );
};
