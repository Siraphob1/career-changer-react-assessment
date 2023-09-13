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
    path: "/home-user",
    element: <Homeuser />,    
  },
  {
    path: "/home-admin",
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


//  https://www.youtube.com/
//https://www.youtube.com/watch?v=1QYBiNRu1ok&list=RD1QYBiNRu1ok&start_radio=1