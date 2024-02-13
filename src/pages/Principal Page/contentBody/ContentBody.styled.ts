import styled from 'styled-components'

export const ContainerContentBody = styled.section`
  display: flex;
  flex-direction: column;

  @media (width <1120px) {
    justify-content: center;
  }
  @media (width < 690px) {
    align-items: center;
  }
`

