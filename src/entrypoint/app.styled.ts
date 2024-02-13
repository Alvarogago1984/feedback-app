import styled from 'styled-components'

export const ConteinerApp = styled.main`

  background: var(--color-VeryLightGrey);
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 94px;

  @media (width<1120px) {
    flex-direction: column;
    gap: 0px;
    margin-top: 56px;
    align-items: center;
    height: auto;
  }
  @media (width<690px) {
    align-content: flex-start;
    align-items: flex-start;
    margin-top: 0px;
  }
`
