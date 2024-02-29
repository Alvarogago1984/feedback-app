import {CANCEL} from './constants/CancelButton.constants'
import {CancelHeader, CancelTextHeader} from './CancelButton.styled'

export const CancelButton = () => {
 
  return (
    <CancelHeader >
      <CancelTextHeader>{CANCEL}</CancelTextHeader>
    </CancelHeader>
  );
  
}
