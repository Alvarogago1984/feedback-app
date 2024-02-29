import { useState } from 'react';
import IconArrowDown from '../../../assets/shared/icon-arrow-down-blue.svg';
import IconArrowUp from '../../../assets/shared/icon-arrow-up-blue.svg';
import {
  ContainerUl,
  TextLi,
  ContainerDropdown,
  LineHR,
  ContainerDivDropdown,
  ImageArrowDown,
  TextElementList,
} from './DropDown.styled';
import {
  FEATURE,
  UI,
  UX,
  ENHANCEMENT,
  BUG,
} from './Constants/DropDown.constants';
import { getIconSelect } from './utils/getIconSelect';
import {ISelectDropDown} from './DropDown.types'


export const DropDown = ({setSelectDropDown, selectDropDown}:ISelectDropDown) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(true);
 
  const chooseSvg = isDropdown ? IconArrowDown : IconArrowUp;

  const handleClickDropdown = (): void => {
    setIsDropdown(!isDropdown);
  };

  const handleClickList = (value: string) => {
    if (value !== selectDropDown) {
      setSelectDropDown(value);
      setIsDropdown(!isDropdown);
    }
  };

  return (
    <>
      <ContainerDropdown onClick={handleClickDropdown}>
        <TextElementList>{selectDropDown}</TextElementList>
        <ImageArrowDown src={chooseSvg} alt="Arrow, in Dropdown " />
      </ContainerDropdown>
      {!isDropdown &&
      <ContainerDivDropdown $isDropdown={isDropdown}>
        <ContainerUl>
          <TextLi onClick={() => handleClickList(FEATURE)}>
            {FEATURE}
            {getIconSelect(FEATURE, selectDropDown)}
          </TextLi>
          <LineHR />
          <TextLi onClick={() => handleClickList(UI)}>
            {UI}
            {getIconSelect(UI, selectDropDown)}
          </TextLi>
          <LineHR />
          <TextLi onClick={() => handleClickList(UX)}>
            {UX}
            {getIconSelect(UX, selectDropDown)}
          </TextLi>
          <LineHR />
          <TextLi onClick={() => handleClickList(ENHANCEMENT)}>
            {ENHANCEMENT}
            {getIconSelect(ENHANCEMENT, selectDropDown)}
          </TextLi>
          <LineHR />
          <TextLi onClick={() => handleClickList(BUG)}>
            {BUG}
            {getIconSelect(BUG, selectDropDown)}
          </TextLi>
        </ContainerUl>
      </ContainerDivDropdown>
}
    </>
  );
};


