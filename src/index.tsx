import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import GlobalStyled from './global.styled';
import { router } from './entrypoint/router';
import { FilterFeedbackIdContext } from './context/filterFeedbackId.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FilterFeedbackIdContext>
      <GlobalStyled />
      <RouterProvider router={router} />
    </FilterFeedbackIdContext>
  </React.StrictMode>
);
