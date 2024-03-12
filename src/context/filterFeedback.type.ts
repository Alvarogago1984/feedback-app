import { ReactNode } from 'react';

export interface FilterFeedbackContextType {
  filterID: number | null;
  updateFeedbackId: (id: number) => void;
}

export interface FilterFeedbackIdProviderProps {
  children: ReactNode;
}