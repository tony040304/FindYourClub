import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Commponents/Login/Login.jsx';
import Register from './Commponents/Register/Register.jsx'
import PreviousPage from './Commponents/previousPage/PreviousPage.jsx';
import Admin from './Commponents/AdminView/Admin';
import DataRender from './Commponents/AdminView/Render/DataRender.jsx';
import DataIdRender from './Commponents/AdminView/Render/DataIdRender';
import { ClubPage, ClubPage2 } from './Commponents/ClubPage/ClubPage.jsx';
import ClubPostulation from './Commponents/ClubPage/Containers/ClubPostulation.jsx';
import PrevPage from './Commponents/UserPage/PrevPage.jsx';
import Userpage from './Commponents/UserPage/FindClubs/Containers/Userpage.jsx';
import PostuPage from './Commponents/UserPage/FindClubs/Containers/PostuPage.jsx';
import MyTeam from './Commponents/UserPage/FindClubs/Fetchs/MyTeam.jsx';
import ChangePassword from './Commponents/UserPage/FindClubs/ChangePassword.jsx';
import { ClubContracts } from './Commponents/ClubPage/Containers/ClubContracts.jsx';
import PlantelPage from './Commponents/ClubPage/Containers/PlantelPage.jsx';
import ChangeClubPassword from './Commponents/ClubPage/ChangeClubPassword.jsx';
import ChangeData from './Commponents/ClubPage/ChangeData.jsx';
import MyClubPage from './Commponents/ClubPage/Containers/MyClubPage.jsx'


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
    element: <Register />
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
    path: '/app/ClubPage2',
    element: <ClubPage2/>
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
    path: '/app/ClubPage/MyTeam',
    element: <MyClubPage/>
  },
  {
    path: '/app/ClubPage/Plantel',
    element: <PlantelPage/>
  },
  {
    path: '/app/ClubPage/ChangeClubPassword',
    element: <ChangeClubPassword/>
  },
  {
    path: '/app/ClubPage/CambiarDatos',
    element: <ChangeData/>
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
