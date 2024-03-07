import styled from 'styled-components';

export const ContaierAddComment = styled.div`
  margin-top: 24px;
  margin-bottom:44px ;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
background-color: var(--color-White);
`;
export const TextAddcomment = styled.h1`
  color: var(--color-MidnightBlue);
  font-family: 'Jost-Bold';
  font-size: 18px;
  font-weight: 700;
  margin: 24px 0 24px 34px;
`;
export const TextareaAddcomment = styled.textarea`
  margin: 0 32px 16px 34px;
  padding: 16px 24px;
  width: 664px;
  height: 80px;
  resize: none;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid var(--color-SecondaryBlue);
  opacity: 1;
  background-color: var(--color-VeryLightGrey);
  color: var(--color--GrayLight);
  font-family: 'Jost-Regular';
  font-size: 15px;
  font-weight: 400;
`;
export const ContainerCharactersButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const Character = styled.h4`
  color: var(--color-SoftBlueGrey);
  font-family: 'Jost-Regular';
  font-size: 15px;
  font-weight: 400;
  margin-left: 34px;
`;
export const ContainerButton = styled.div`
  width: 142px;
  height: 44px;
  border-radius: 10px;
  background-color: var(--color-PrimaryPurple);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  margin-right: 32px;
  cursor: pointer;
 &:hover{
  background-color: var(--color--Purple);
 }
`;
export const ButtonText = styled.span`
  color: var(--color-LightGrey);
  font-family: 'Jost-Bold';
  font-size: 14px;
  font-weight: 700;
`;
