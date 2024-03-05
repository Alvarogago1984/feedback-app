import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Route } from 'react-router-dom';
import App from './App';
import { NewFeedback } from '../pages/NewFeedback';
import {FeedbackDetail} from '../pages/FeedbackDetail/FeedbackDetail'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/newfeedback" element={<NewFeedback />} />
      <Route path="/FeedbackDetail" element={<FeedbackDetail/>} />
    </>
  )
);
