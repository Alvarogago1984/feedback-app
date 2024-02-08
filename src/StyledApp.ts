import styled from 'styled-components'

export const ConteinerApp = styled.main`
  background: var(--color-VeryLightGrey);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 94px;

  @media (width<768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0px;
    margin-top: 56px;
    align-items: center;
    height: auto;
  }
  @media (width<375px) {
    margin-top: 0px;
  }
`
