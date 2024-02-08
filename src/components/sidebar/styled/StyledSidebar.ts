import styled from 'styled-components'
import backgroundHeader from '../../../assets/suggestions/desktop/background-header.png'
import backgroundHeaderTablet from '../../../assets/suggestions/tablet/background-header.png'
import backgroundHeaderMobile from '../../../assets/suggestions/mobile/background-header.png'

export const ContainerSidebar = styled.section`
  @media (width< 768px) {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  @media (width< 375px) {
    gap: 0px;
  }
`
export const HeaderDiv = styled.section`
  width: 255px;
  height: 137px;
  border-radius: 10px;
  background-image: url(${backgroundHeader});
  margin-bottom: 24px;

  @media (width < 768px) {
    width: 223px;
    height: 178px;
    background-image: url(${backgroundHeaderTablet});
  }
  @media (width < 375px) {
    width: 375px;
    height: 72px;
    background-image: url(${backgroundHeaderMobile});
    border-radius: 0px;
    margin-bottom: 0px;
  }
`
export const FilterDiv = styled.section`
  width: 255px;
  height: 166px;
  border-radius: 10px;
  background: var(--color-White);
  margin-bottom: 24px;

  @media (width< 768px) {
    width: 223px;
    height: 178px;
  }
  @media (width< 375px) {
    width: 0px;
    height: 0px;
  }
`
export const RoadmapDiv = styled.section`
  width: 255px;
  height: 178px;
  border-radius: 10px;
  background: var(--color-White);

  @media (width< 768px) {
    width: 223px;
    height: 178px;
  }
  @media (width< 375px) {
    width: 0px;
    height: 0px;
  }
`
