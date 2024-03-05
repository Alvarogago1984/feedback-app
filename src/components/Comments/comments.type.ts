import { CommentInterface } from '../../services/FetchGetValue.type';
import { ProductRequestInterface } from '../../services/FetchGetValue.type';

export interface Icommentes {
  comments: CommentInterface[];
}
export interface ICommentsProps {
  suggestion: ProductRequestInterface;
}
