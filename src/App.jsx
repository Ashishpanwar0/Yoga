import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home'
import Pagess from './Pages/Pagess'
import Photos from '../src/Pages/Photos'
import ContactUs from './Pages/ContactUs';
import Shop from './Pages/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Page",
    element: <Pagess/>,
  },
  {
  path: "/Photo",
  element: <Photos/>,
},
{
  path: "/Shop",
  element: <Shop/>,
},
{
  path: "/Contact",
  element: <ContactUs/>
}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;