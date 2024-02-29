import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Route } from 'react-router-dom';
import App from './App';
import { NewFeedback } from '../pages/NewFeedback';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/newfeedback" element={<NewFeedback />} />
    </>
  )
);
