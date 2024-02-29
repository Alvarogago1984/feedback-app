import styled from 'styled-components'

export const ButtonHeader = styled.button`
  border-radius: 10px;
  width: 158px;
  height: 44px;
  background-color: var( --color-PrimaryPurple);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-right: 16px;
  flex: 0 0 auto;
  &:hover {
    background-color: var(--color--Purple);
  }
`
export const ButtonTextHeader = styled.h3`

  color: var(--color-LightGreyBlue);
  font-size: 14px;
  font-weight: 700;
`