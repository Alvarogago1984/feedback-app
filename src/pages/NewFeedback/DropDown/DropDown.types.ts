export interface IContainerDropdownProps {
  $isDropdown: boolean;
}
export interface ISelectDropDown {
  setSelectDropDown: React.Dispatch<React.SetStateAction<string>>,
  selectDropDown: string,
}