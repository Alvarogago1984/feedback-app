import styled from 'styled-components'
import backgroundHeaderMobile from '../../../assets/suggestions/mobile/background-header.png';

export const ContainerSidebar = styled.section`
display: flex;
flex-direction: column;

  @media (width< 1120px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
    flex-wrap: wrap;
    min-width: 374px;
  }
  @media (width< 690px) {
    gap: 0px;
    width: 100%;
    background-image: url(${backgroundHeaderMobile});
    background-size: cover;
    margin-bottom: 0px;
  }
`
