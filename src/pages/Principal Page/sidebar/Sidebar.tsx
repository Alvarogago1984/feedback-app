import { ContainerSidebar } from './sidebar.styled'
import { HeaderDivComponent } from './HeaderDiv'
import { FilterDivComponent } from './FilterDiv'
import { RoadmapDivComponent } from './RoadmapDiv'
import {IclickFilter} from '../../../types/IclickFilter'

export const Sidebar = ({handleClick}:IclickFilter) => {
  return (
    <ContainerSidebar>
      <HeaderDivComponent />
      <FilterDivComponent handleClick={handleClick}/>
      <RoadmapDivComponent />
    </ContainerSidebar>
  )
}
