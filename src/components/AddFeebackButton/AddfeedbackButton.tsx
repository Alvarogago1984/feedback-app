import { ADD_FEEDBACK } from './constants/AddfeedbackButton.constants';
import {
  AddfeedbackButtonHeader,
  AddfeedbackButtonTextHeader,
} from './AddfeedbackButton.styled';
import {IonClick} from './AddfeeedbackButton.types'

export const AddfeedbackButton = ({ onClick, isEmpty, disabled }: IonClick) => {
  return (
    <AddfeedbackButtonHeader onClick={onClick} disabled={disabled} isEmpty={isEmpty}>
      <AddfeedbackButtonTextHeader>{ADD_FEEDBACK}</AddfeedbackButtonTextHeader>
    </AddfeedbackButtonHeader>
  );
};
