import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root, { loader as rootLoader } from '../routes';
import './App.css';
import ErrorPage from './Error';
import Contact from '../routes/contact';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children:[
      {
        path: "contacts/:contactId",
        element: <Contact /> 
      }
    ]
  },
])
function App() {
  return (
      <RouterProvider router={router} />
  );
}
export default App;
