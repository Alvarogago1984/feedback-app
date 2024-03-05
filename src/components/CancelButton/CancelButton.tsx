import { CANCEL } from './constants/CancelButton.constants';
import { CancelHeader, CancelTextHeader } from './CancelButton.styled';
import {IonClickCancel} from './CancelButton.types'

export const CancelButton = ({ onClick }: IonClickCancel) => {
  return (
    <CancelHeader onClick={onClick}>
      <CancelTextHeader>{CANCEL}</CancelTextHeader>
    </CancelHeader>
  );
};
