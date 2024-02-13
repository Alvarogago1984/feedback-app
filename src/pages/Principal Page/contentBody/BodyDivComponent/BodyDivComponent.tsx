import { BodyDiv, IconSearch, Title, Description } from './BodyDivComponent.styled';
import { noFeedback, description } from './constants/BodyDivComponent.constant';
import Search from '../../../../assets/suggestions/illustration-empty.svg';
import { ButtonAddFeedback} from '../../../../components/ButtonAddFeedback'

export const BodyDivComponent = () => {
  return (
    <BodyDiv>
      <IconSearch src={Search} alt="Icon search" />
      <Title>{noFeedback}</Title>
      <Description>{description}</Description>
      <ButtonAddFeedback/>
    </BodyDiv>
  );
};
