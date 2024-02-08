import {
  ContainerSidebar,
  HeaderDiv,
  FilterDiv,
  RoadmapDiv,
} from './styled/StyledSidebar'

export const Sidebar = () => {
  return (
    <ContainerSidebar>
      <HeaderDiv></HeaderDiv>
      <FilterDiv></FilterDiv>
      <RoadmapDiv></RoadmapDiv>
    </ContainerSidebar>
  )
}
