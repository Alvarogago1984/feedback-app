import { createContext, useState } from 'react';
import {
  FilterFeedbackContextType,
  FilterFeedbackIdProviderProps,
} from './filterFeedback.type';

export const FilterFeedbackContext = createContext<FilterFeedbackContextType>({
  filterID: null, // Valor inicial compatible
  updateFeedbackId: () => {}, // Función vacía como marcador de posición
});

export const FilterFeedbackIdContext = ({
  children,
}: FilterFeedbackIdProviderProps) => {
  const [filterID, setFilterID] = useState<number | null>(null);

  const updateFeedbackId = (id: number) => {
    setFilterID(id);
  };

  return (
    <FilterFeedbackContext.Provider value={{ filterID, updateFeedbackId }}>
      {children}
    </FilterFeedbackContext.Provider>
  );
};
