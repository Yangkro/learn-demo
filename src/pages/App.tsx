import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from '../routes';
import './App.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
