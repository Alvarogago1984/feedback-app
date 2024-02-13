import {
  RoadmapDiv,
  ContainerUp,
  ContainerBotton,
  RoadmapText,
  ViewText,
  PlannedDiv,
  InProgressDiv,
  LiveDiv,
  ContainerBottonText,
  CircleOrange,
  Circlepurple,
  CircleLightBlue,
  ContainerBottonValue,
  ContainerLeft,
} from './RoadmapDivComponent.styled'
import {
  roadmap,
  view,
  planned,
  inProgress,
  live,
} from './constants/RoadmapDivComponent.constants'

export const RoadmapDivComponent = () => {
  return (
    <RoadmapDiv>
      <ContainerUp>
        <RoadmapText>{roadmap}</RoadmapText>
        <ViewText>{view}</ViewText>
      </ContainerUp>
      <ContainerBotton>
        <PlannedDiv>
          <ContainerLeft>
            <CircleOrange />
            <ContainerBottonText>{planned}</ContainerBottonText>
          </ContainerLeft>
          <ContainerBottonValue>0</ContainerBottonValue>
        </PlannedDiv>
        <InProgressDiv>
          <ContainerLeft>
            <Circlepurple />
            <ContainerBottonText>{inProgress}</ContainerBottonText>
          </ContainerLeft>
          <ContainerBottonValue>0</ContainerBottonValue>
        </InProgressDiv>
        <LiveDiv>
          <ContainerLeft>
            <CircleLightBlue />
            <ContainerBottonText>{live}</ContainerBottonText>
          </ContainerLeft>
          <ContainerBottonValue>0</ContainerBottonValue>
        </LiveDiv>
      </ContainerBotton>
    </RoadmapDiv>
  )
}
