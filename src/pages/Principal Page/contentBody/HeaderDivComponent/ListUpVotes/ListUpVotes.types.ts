export interface ListUpVotes {
  $isListUpVotes: boolean;
}
export interface ListUpVotesProps {
  isListUpVotes: boolean;
  setUpVotesValue: React.Dispatch<React.SetStateAction<string>> |undefined;
}