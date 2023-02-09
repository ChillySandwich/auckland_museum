//REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

//MISC
import './index.css';
import reportWebVitals from './reportWebVitals';

//ROUTES
import Root from "./routes/root";
import ErrorPage from './routes/error-page';
import Project from './routes/project';
import TouchPointId from './routes/touchPointId';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },

  {
    path: "/projects/:projectId",
    element: <Project />
  },
  {
    path: "/projects/:projectId/:touchPointId",
    element: <TouchPointId/>,
  },


    
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();