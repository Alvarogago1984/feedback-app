import styled from 'styled-components'

export const ContainerContentBody = styled.section`
  display: flex;
  flex-direction: column;

  @media (width <768px) {
    justify-content: center;
  }
  @media (width < 375px) {
    align-items: center
  }
`
export const HeaderDiv = styled.section`
  max-width: 825px;
  height: 72px;
  background-color: var(--color-DarkBlue);
  border-radius: 10px;
  margin-bottom: 24px;
  @media (width<768px) {
    max-width: 689px;
  }
  @media (width < 375px) {
    width: 375px;
    border-radius: 0px;
    height: 56px;
  margin-bottom: 32px;
  }
`
export const BodyDiv = styled.section`
  width: 825px;
  height: 600px;
  border-radius: 10px;
  background-color: var(--color-White);
  @media (width < 768px) {
    max-width: 689px;
  }
  @media (width < 375px) {
    width: 327px;
    height: 460px;
  }
`
