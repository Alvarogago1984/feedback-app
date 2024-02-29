import React from 'react';
import ReactDOM from 'react-dom/client';
import {  RouterProvider } from 'react-router-dom';
import GlobalStyled from './global.style';
import {router} from './entrypoint/router'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <>
   <GlobalStyled />
    <RouterProvider router={router} />
  </>
   
  // </React.StrictMode>
);
