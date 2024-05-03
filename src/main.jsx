import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Commponents/Login/Login.jsx';
import RegisterJugador from './Commponents/Register/RegisterJugador'
import RegisterEquipo from './Commponents/Register/RegisterEquipo';
import PreviousPage from './Commponents/previousPage/PreviousPage.jsx';
import Admin from './Commponents/AdminView/Admin';
import DataRender from './Commponents/AdminView/Render/DataRender.jsx';
import DataIdRender from './Commponents/AdminView/Render/DataIdRender';
import ClubPage from './Commponents/ClubPage/ClubPage.jsx';
import ClubPostulation from './Commponents/ClubPage/ClubPostulation';
import PrevPage from './Commponents/UserPage/PrevPage.jsx';
import Userpage from './Commponents/UserPage/FindClubs/Fetchs/Userpage.jsx';
import PostuPage from './Commponents/UserPage/FindClubs/Fetchs/PostuPage.jsx';
import MyTeam from './Commponents/UserPage/FindClubs/Fetchs/MyTeam.jsx';
import ChangePassword from './Commponents/UserPage/FindClubs/ChangePassword.jsx';
import { ClubContracts } from './Commponents/ClubPage/ClubContracts.jsx';


const router = createBrowserRouter([
  
  {
    path: "/app",
    element: <PreviousPage/>
  },
  {
    path: "/app/login",
    element: <Login/>,
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
    element: <ClubPostulation />
  },
  {
    path: '/app/ClubPage/Contratos',
    element: <ClubContracts/>
  },
  {
    path: '/app/UserPage',
    element:<PrevPage/>
  },
  {

    path: '/app/UserPage/Equipos',
    element:<Userpage/>
  },
  {
    path:'/app/UserPage/Postulaciones',
    element:<PostuPage/>
  },
  {
    path:'/app/UserPage/Contrato',
    element:<MyTeam/>
  },
  {
    path:'/app/UserPage/ChangePassword',
    element: <ChangePassword/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
