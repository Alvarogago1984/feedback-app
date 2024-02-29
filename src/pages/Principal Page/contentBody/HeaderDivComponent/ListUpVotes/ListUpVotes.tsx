import {
  MOST_UP_VOTES,
  LEAST_UP_VOTES,
  MOST_COMMENTS,
  LEAST_COMMENTS,
} from './constants/ListUpVotes.constants';
import {
  ListUpVotesDiv,
  ListUpVotesUl,
  ListUpVotesLi,
  LineHR,
} from './ListUpVotes.styled';

interface ListUpVotesProps {
  isListUpVotes: boolean;
  setUpVotesValue: React.Dispatch<React.SetStateAction<string>> |undefined;
}
export const ListUpVotes = ({ isListUpVotes, setUpVotesValue }: ListUpVotesProps) => {

const handleClicMostLeast = (evt: { target: any; }) => {
  if(setUpVotesValue){
  setUpVotesValue(evt.target.innerHTML)
  }
}
  return (
    <ListUpVotesDiv $isListUpVotes={isListUpVotes}>
      <ListUpVotesUl>
        <ListUpVotesLi onClick={handleClicMostLeast}>{MOST_UP_VOTES}</ListUpVotesLi>
        <LineHR />
        <ListUpVotesLi onClick={handleClicMostLeast}>{LEAST_UP_VOTES}</ListUpVotesLi>
        <LineHR />
        <ListUpVotesLi onClick={handleClicMostLeast}>{MOST_COMMENTS}</ListUpVotesLi>
        <LineHR />
        <ListUpVotesLi onClick={handleClicMostLeast}>{LEAST_COMMENTS}</ListUpVotesLi>
      </ListUpVotesUl>
    </ListUpVotesDiv>
  );
};
