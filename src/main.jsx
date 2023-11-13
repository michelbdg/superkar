import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.jsx'
import Customizer from './pages/customizer/Customizer.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

// Routes de l'application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/customizer",
    element: <Customizer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);