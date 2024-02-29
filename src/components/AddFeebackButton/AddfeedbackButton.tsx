import { ADD_FEEDBACK } from './constants/AddfeedbackButton.constants';
import {
  AddfeedbackButtonHeader,
  AddfeedbackButtonTextHeader,
} from './AddfeedbackButton.styled';
import {IonClick} from './AddfeeedbackButton.types'

export const AddfeedbackButton = ({ onClick }: IonClick) => {
  return (
    <AddfeedbackButtonHeader onClick={onClick}>
      <AddfeedbackButtonTextHeader>{ADD_FEEDBACK}</AddfeedbackButtonTextHeader>
    </AddfeedbackButtonHeader>
  );
};
