import {
  HeaderDiv,
  Title,
  SubTitle,
  Hamburger,
  HeaderText,
} from './HeaderDiv.styled';
import { frontedMentor, feedbackBoard } from './constants/HeaderDiv.constants';
import IconHamburger from '../../../../assets/shared/mobile/icon-hamburger.svg';

export const HeaderDivComponent = () => {
  return (
    <HeaderDiv>
      <HeaderText>
        <Title>{frontedMentor}</Title>
        <SubTitle>{feedbackBoard}</SubTitle>
      </HeaderText>
      <Hamburger src={IconHamburger} alt="Hamburger search" />
    </HeaderDiv>
  );
};
