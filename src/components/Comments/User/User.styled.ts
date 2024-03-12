import styled from 'styled-components';

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
export const TextReply = styled.button`
  border: none;
  background-color: var(--color-White);
  color: var(--color-SecondaryBlue);
  font-family: 'Jost-SemiBold';
  font-size: 13px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  flex: 0 0 auto;
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
export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  flex: 1;
`;
