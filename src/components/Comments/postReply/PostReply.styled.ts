import styled from 'styled-components';

export const ContainerPost = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-left: 104px;
  margin-top: 24px;
`;
export const Textarea = styled.textarea`
  border-radius: 5px;
  border: 1px solid var(--color-SecondaryBlue);
  background-color: var(--color-VeryLightGrey);
  width: 461px;
  height: 80px;
  padding: 16px 24px;
  opacity: 1;
  color: var(--color-MidnightBlue);
  font-family: 'Jost-Regular';
  font-size: 15px;
  font-weight: 400;
  resize: none;
  cursor:pointer;
  &::placeholder {
    color: var(--color-MidnightBlue);
    font-family: 'Jost-Regular';
    font-size: 15px;
    font-weight: 400;
  }
`;
export const ButtonContainer = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: var(--color-PrimaryPurple);
  width: 117px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
 &:hover{
  background-color: var(--color--Purple);
 }
`;
export const TextButton = styled.span`
  color: var(--color-LightGrey);
  font-family: 'Jost-Bold';
  font-size: 14px;
  font-weight: 700;
`;
