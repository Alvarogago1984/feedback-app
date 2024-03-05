import styled from 'styled-components';
import {Iempty} from '../../types/Iempty'

export const AddfeedbackButtonHeader = styled.button<Iempty>`
  border-radius: 10px;
  background-color: ${(props) =>
    props.isEmpty ? ' var(--color--Purple)' : 'var( --color-PrimaryPurple)'};
  width: 144px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: ${(props) => (props.isEmpty ? 'not-allowed' : 'pointer')};
  flex: 0 0 auto;
  &:hover {
    background-color: var(--color--Purple);
  }
`;
export const AddfeedbackButtonTextHeader = styled.h3`
  color: var(--color-LightGrey);
  font-size: 14px;
  font-weight: 700;
`;
