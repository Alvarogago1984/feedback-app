import IconBack from '../../assets/shared/icon-arrow-left.svg';
import { GO_BACK } from './contants/Goback.constants';
import { ContainerBack, TitleBack } from './Goback.styled';

export const Goback = () => {
  return (
    <ContainerBack to="/">
      <img src={IconBack} alt="Icon go back" />
      <TitleBack>{GO_BACK}</TitleBack>
    </ContainerBack>
  );
};
