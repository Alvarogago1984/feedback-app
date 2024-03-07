import { CommentInterface } from '../../services/FetchGetValue.type';
import { ProductRequestInterface } from '../../services/FetchGetValue.type';

type SelectType = number | string | null;
export interface Icommentes {
  comments: CommentInterface[];
  selectedReplyId: SelectType;
  handleClickReplies: (username: SelectType) => void;
}
export interface ICommentsProps {
  suggestion: ProductRequestInterface;
  handleClickReply: (id: SelectType) => void;
  handleClickReplies: (username: SelectType) => void;
  selectedReplyId: SelectType;
}
