import styled from 'styled-components'

export const RoadmapDiv = styled.section`
  width: 255px;
  height: 178px;
  border-radius: 10px;
  background: var(--color-White);

  @media (width< 1120px) {
    width: 223px;
    height: 178px;
  }
  @media (width< 690px) {
    width: 0px;
    height: 0px;
    display: none;
  }
`
export const ContainerUp = styled.div`
 
  display: flex;
  justify-content: space-between;
  margin-left:24px;
  margin-right:24px;
  align-items: baseline;
  padding-top: 19px;
`
export const RoadmapText = styled.p`

  color:var(--color-DarkBlue) ;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
`
export const ViewText = styled.button`

  opacity: 0.25;
  color: var(--color-SecondaryBlue);
  font-size: 13px;
  font-weight: 600;
  text-decoration: underline;
  border: none;
  cursor: pointer;
`
export const ContainerBotton = styled.ul`
  background: var(--color-White);
  display: flex;
  flex-direction: column;
`
export const PlannedDiv = styled.li`
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  margin-bottom: 8px;
  margin-right: 24px;
`
export const InProgressDiv = styled.li`
 
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 24px;
  margin-bottom: 8px;
  margin-right: 24px;
`
export const LiveDiv = styled.li`

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
`
export const ContainerBottonText = styled.p`
  color: var(--color-SoftBlueGrey);
  background: var(--color-White);
  margin: 0;
`
export const CircleOrange = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-Coral);
  margin-right: 16px;
`
export const Circlepurple = styled(CircleOrange)`
  background: var( --color-PrimaryPurple);
`
export const CircleLightBlue = styled(CircleOrange)`
  background:var(--color-LightSkyBlue);
`
export const ContainerBottonValue = styled.p`
  color: var(--color-SoftBlueGrey);
  font-family: 'Jost';
  font-weight: 700;
  background: var(--color-White);
`
export const ContainerLeft = styled.div`
display:flex;
align-items: center;
background: var(--color-White);
`
