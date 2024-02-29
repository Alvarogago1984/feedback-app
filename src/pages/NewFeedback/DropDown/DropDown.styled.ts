import styled from "styled-components";
import { IContainerDropdownProps } from './DropDown.types';

export const ContainerDropdown = styled.button`
  margin-left: 42px;
  margin-bottom: 16px;
  width: 456px;
  height: 48px;
  border-radius: 5px;
  background-color: var(--color-VeryLightGrey);
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:focus {
    border: 2px solid var(--color-SecondaryBlue);
  }
`;
export const ContainerDivDropdown = styled.div<IContainerDropdownProps>`
  position: relative;
  display: ${(props) => (props.$isDropdown ? 'none' : 'block')};
`;
export const TextElementList = styled.span`
  color: var(--color-MidnightBlue);
  font-size: 15px;
  font-weight: 400;
  padding-left: 24px;
`;
export const ContainerUl = styled.ul`
  list-style-type: none;
  width: 456px;
  border-radius: 10px;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35);
  background-color: var(--color-White);
  margin-left: 42px;
  position: absolute;
`;
export const TextLi = styled.li`
  color: var(--color-SoftBlueGrey);
  font-size: 16px;
  font-weight: 400;
  padding-top: 12px;
  padding-left: 24px;
  padding-bottom: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    color: var(--color-PrimaryPurple);
  }
`;
export const ImageIconSelect = styled.img`
  padding-right: 24px;
`;
export const LineHR = styled.hr`
  opacity: 0.15;
  background-color: var(--color-MidnightBlue);
`;
export const ImageArrowDown = styled.img`
  margin-right: 24px;
`;