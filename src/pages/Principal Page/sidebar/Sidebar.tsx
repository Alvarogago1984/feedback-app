import { ContainerSidebar } from './sidebar.styled'
import { HeaderDivComponent } from './HeaderDiv'
import { FilterDivComponent } from './FilterDiv'
import { RoadmapDivComponent } from './RoadmapDiv'

export const Sidebar = () => {
  return (
    <ContainerSidebar>
      <HeaderDivComponent />
      <FilterDivComponent />
      <RoadmapDivComponent />
    </ContainerSidebar>
  )
}
