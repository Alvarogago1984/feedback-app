import styled from 'styled-components';
import { Textarea } from './postReply/PostReply.styled';

export const ContanierRes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;
export const Name = styled.p`
  color: var(--color-MidnightBlue);
  font-family: 'Jost-Bold';
  font-size: 14px;
  font-weight: 700;
`;
export const Email = styled.p`
  color: var(--color-SoftBlueGrey);
  font-family: 'Jost-Regular';
  font-size: 14px;
  font-weight: 400;
  display: flex;
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
export const ContainerUser = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 17px;
  justify-content: space-between;
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  flex: 0 0 auto;
  margin-right: 32px;
`;
export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  flex: 1;
`;
export const TextReply = styled.button`
  border: none;
  background-color: var(--color-White);
  color: var(--color-SecondaryBlue);
  font-family: 'Jost-SemiBold';
  font-size: 13px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }

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
  margin-top: -46px;
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
