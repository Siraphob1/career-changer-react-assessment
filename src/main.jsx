import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import Home from './pages/Home';
import Homeuser from './pages/Homeuser';
import Homeadmin from './pages/Homeadmin';
import Owner from './pages/Owner';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,    
  },
  {
    path: "/homeuser",
    element: <Homeuser />,    
  },
  {
    path: "/homeadmin",
    element: <Homeadmin />,    
  },
  {
    path: "/owner",
    element: <Owner />,    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


