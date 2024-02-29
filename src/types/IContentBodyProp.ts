import { ProductRequestInterface } from '../services/FetchGetValue.type';
import {DataInterface} from '../services/FetchGetValue.type'

export interface IdetailTitle {
  upvotes: number;
  Detail: string;
  Title: string;
}
export interface IContentBodyProp {
  addFeedbackTitleDetail?: IdetailTitle;
  valueApi: ProductRequestInterface[];
  select?: string | undefined;
  upVotesValue?:string;
  setUpVotesValue?: React.Dispatch<React.SetStateAction<string>>;
  valueFetch?:DataInterface;
}
