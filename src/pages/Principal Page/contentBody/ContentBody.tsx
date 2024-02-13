import { ContainerContentBody } from './ContentBody.styled'
import { HeaderDivComponent } from './HeaderDivComponent'
import { BodyDivComponent } from './BodyDivComponent'

export const ContentBody = () => {
  return (
    <ContainerContentBody>
      <HeaderDivComponent />
      <BodyDivComponent />
    </ContainerContentBody>
  )
}
