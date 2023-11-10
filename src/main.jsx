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
import DataRender from './Commponents/AdminView/DataRender';
import DataIdRender from './Commponents/AdminView/DataIdRender';
import ClubPage from './Commponents/ClubPage/ClubPage.jsx';
import ClubDashboard from './Commponents/ClubPage/Clubdashbooard';
import CreateClub from './Commponents/ClubPage/CreateClub.jsx'
import PrevPage from './Commponents/UserPage/PrevPage';
import CreatePlayer from './Commponents/UserPage/CreatePlayer';
import Userpage from './Commponents/UserPage/Userpage.jsx';



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
    element: <DataRender/>
  },
  {
    path: "/app/adminview/jugadorId",
    element: <DataIdRender/>
  },
  {
    path: '/app/ClubPage',
    element: <ClubPage/>
  },
  {
    path:"/app/ClubPage/Clubdashbooard",
    element: <ClubDashboard />
  },
  {
    path:"/app/ClubPage/CreateClub",
    element: <CreateClub/>
  },
  {
    path: '/app/UserPage',
    element:<PrevPage/>
  },
  {
    path: '/app/UserPage/createPlayer',
    element:<CreatePlayer/>
  },
  {
    path: '/app/UserPage/Userpage',
    element:<Userpage />
  }

    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
