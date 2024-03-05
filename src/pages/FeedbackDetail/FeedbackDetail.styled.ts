import styled from 'styled-components';
import { ContainerSuggestions } from '../Principal Page/contentBody/BodyDivComponent/NewSuggestion/SuggestionIten/SuggestionIten.styled';
export const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 730px;
  margin-top: 80px;
  margin-bottom: 24px;
`;
export const SuggestionItenWrapper = styled(ContainerSuggestions)`
  width: 730px;
  margin-bottom: 24px;
`;
export const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 730px;
  background-color: var(--color-White);
`;
export const NumberComments = styled.p`
  color: var(--color-MidnightBlue);
  font-family: 'Jost-Bold';
  font-size: 18px;
  font-weight: 700;
  margin-left:34px;
  margin-top: 24px;
  margin-bottom: 28px;
`;
