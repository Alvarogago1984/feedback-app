import styled from 'styled-components';
import { Textarea } from './postReply/PostReply.styled';

export const ContanierRes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;
export const EmailText = styled.span`
  color: var(--color-SoftBlueGrey);
  font-family: 'Jost-Regular';
  font-size: 14px;
  font-weight: 400;
`;
export const ContentText = styled.p`
  color: var(--color-SoftBlueGrey);
  font-size: 15px;
  font-weight: 400;
  margin-left: 104px;
  margin-right: 32px;
`;
export const HR = styled.hr`
  opacity: 0.25;
  background-color: var(--color--GrayLight);
  width: 666px;
  height: 1px;
  margin-bottom: 33px;
  margin-left: 32px;
`;
export const HRReplies = styled.hr`
  opacity: 0.25;
  width: 1px;
  background-color: var(--color-SoftBlueGrey);
  margin-left: 52px;
  margin-top: -60px;
  margin-bottom: 50px;
`;
export const ReplyingTon = styled.span`
  color: var(--color-PrimaryPurple);
  font-family: 'Jost-Bold';
  font-size: 15px;
  font-weight: 700;
`;
export const ContainerReplies = styled.div`
  display: flex;
`;
export const BodyReplies = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerPostReply = styled.div`
  ${Textarea} {
    width: 416px;
    margin-bottom: 40px;
  }
`;
