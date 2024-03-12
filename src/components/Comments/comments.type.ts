import { CommentInterface } from '../../types/FetchGetValue.type';
import {
  ProductRequestInterface,
  UserInterface,
} from '../../types/FetchGetValue.type';

export interface Icommentes {
  comments: CommentInterface[];
  selectedReplyId: UserInterface | null | string | number;
  handleClickReplies?: (username: UserInterface | string) => void;
}
export interface ICommentsProps {
  suggestion: ProductRequestInterface;
  handleClickReply?: (id: UserInterface | number) => void;
  handleClickReplies?: (username: UserInterface | string) => void;
  selectedReplyId: UserInterface | null | number | string;
}
