import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Commponents/Login/Login.jsx';
import Registro from './Commponents/Register/Register.jsx';
import ErrorPage from './Commponents/Router/ErrorPage.jsx';
import PreviousPage from './Commponents/previousPage/PreviousPage.jsx';

const router = createBrowserRouter([
  {
    path: "/app",
    element: <PreviousPage/>
  },
  {
    path: "/app/login",
    element: <Login />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/app/Registro",
    element: <Registro />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
