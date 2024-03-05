export interface UserInterface {
  image: string;
  name: string;
  username: string;
}

export interface ReplyInterface extends UserInterface {
  user: UserInterface;
  content: string;
  replyingTo: string;
}


export interface CommentInterface extends UserInterface {
  user: UserInterface;
  id: number;
  content: string;
  replies?: ReplyInterface[];
}

export interface ProductRequestInterface {
  id: string;
  title: string;
  category: string;
  upvotes: number;
  status?: string;
  description: string;
  comments: CommentInterface[];
}

export interface DataInterface {
  currentUser: UserInterface;
  productRequests: ProductRequestInterface[];
}
