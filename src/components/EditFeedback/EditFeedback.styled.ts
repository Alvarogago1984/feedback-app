import styled from 'styled-components';

export const ContainerButton = styled.div`
  border-radius: 10px;
  background-color: var(--color-SecondaryBlue);
  width: 142px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: var(--color-SkyBlue);
  }
`;
export const ButtonText = styled.span`
  color: var(--color-LightGrey);
  font-size: 14px;
  font-weight: 700;
  font-style: Bold;
`;
