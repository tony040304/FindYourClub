import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Commponents/Login/Login.jsx';
import RegisterJugador from './Commponents/Register/RegisterJugador'
import RegisterEquipo from './Commponents/Register/RegisterEquipo';
import ErrorPage from './Commponents/Router/ErrorPage.jsx';
import PreviousPage from './Commponents/previousPage/PreviousPage.jsx';
import Admin from './Commponents/AdminView/Admin';
import HandleJugadores from './Commponents/AdminView/HandleJugadores';
import TraerJugadoresID from './Commponents/AdminView/TraerJugadoresID';


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
    element: <RegisterJugador />
  },
  {
    path: "/app/RegistroEquipo",
    element: <RegisterEquipo />
  },
  {
    path: "/app/adminview",
    element: <Admin/>
  },
  {
    path: "/app/adminview/viewplayers",
    element: <HandleJugadores/>
  },
  {
    path: "/app/adminview/jugadorId",
    element: <TraerJugadoresID/>
  }
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
