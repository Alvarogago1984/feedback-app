import styled from 'styled-components';
import {ListUpVotes} from '../ListUpVotes/ListUpVotes.types'

export const ListUpVotesDiv = styled.div<ListUpVotes>`
  border-radius: 10px;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35);
  background-color: var(--color-White);
  position: absolute;
  margin-top: 42px;
  display: ${(props) => (props.$isListUpVotes ? 'none' : 'block')};
`;
export const ListUpVotesUl = styled.ul`
  list-style-type: none;
  margin: 0;
`;
export const ListUpVotesLi = styled.li`
  margin: 12px 140px 12px 24px;
  text-align: left;
  color: var(--color-SoftBlueGrey);
  font-family: 'Jost';
  font-size: 16px;
  font-weight: 400;
  &:hover {
    color: var(--color-PrimaryPurple);
  }
`;

export const LineHR = styled.hr`
  opacity: 0.15;
  background-color: var(--color-MidnightBlue);
`;
