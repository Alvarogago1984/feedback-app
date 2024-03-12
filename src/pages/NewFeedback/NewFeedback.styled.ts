import styled from 'styled-components';
import { Iempty } from '../../types/Iempty';

export const ContainerNewFeedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-VeryLightGrey);
  margin-bottom: 30px;
`;
export const ContainerCreate = styled.div`
  width: 540px;
  height: 657px;
  background: var(--color-White);
  position: relative;
  margin-top: 68px;
`;
export const ImageCircleFeedback = styled.img`
  position: absolute;
  top: -28px;
  left: 42px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 92px;
  margin-left: 42px;
`;
export const Title = styled.h1`
  color: var(--color-MidnightBlue);
  font-size: 24px;
  font-weight: 700;
  margin-top: 52px;
  margin-left: 42px;
  margin-bottom: 40px;
`;
export const TitleCategory = styled.h3`
  color: var(--color-MidnightBlue);
  font-size: 14px;
  font-weight: 700;
  margin-left: 42px;
  margin-bottom: 2px;
`;
export const Subtitle = styled.p`
  color: var(--color-SoftBlueGrey);
  font-size: 14px;
  font-weight: 400;
  margin-left: 42px;
  margin-bottom: 16px;
`;
export const InputFeedback = styled.input`
  border-radius: 5px;
  background-color: var(--color-VeryLightGrey);
  width: 456px;
  margin-bottom: 24px;
  margin-left: 42px;
  cursor: pointer;
  border: none;
  color: var(--color-MidnightBlue);
  font-size: 15px;
  font-weight: 400;
  padding: 13px 24px;
`;

export const DescriptionDetail = styled.textarea<Iempty>`
  margin-left: 42px;
  border-radius: 5px;
  background-color: var(--color-VeryLightGrey);
  width: 456px;
  height: 96px;
  margin-bottom: ${(props) => (props.isEmpty ? '4px' : '40px')};
  border: ${(props) => (props.isEmpty ? '2px solid var(--color-Red)' : 'none')};
  resize: none;
  cursor: pointer;
  color: var(--color-MidnightBlue);
  font-size: 15px;
  font-weight: 400;
  padding: 13px 13px 13px 24px;
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-right: 42px;
`;

export const EmptyText = styled.h4<Iempty>`
  color: var(--color-Red);
  font-family: 'Jost-Regular';
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
  margin-left: 42px;
  display: ${(props) => (props.isEmpty ? 'block' : 'none')};
`;
