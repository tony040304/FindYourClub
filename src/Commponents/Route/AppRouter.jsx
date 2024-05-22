import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import React from 'react'
import PreviousPage from '../previousPage/PreviousPage'
import Login from '../Login/Login'
import Register from '../Register/Register'

import PrevPage from '../UserPage/PrevPage'
import Userpage from '../UserPage/FindClubs/Containers/Userpage'
import PostuPage from '../UserPage/FindClubs/Containers/PostuPage'
import MyTeam from '../UserPage/FindClubs/Fetchs/MyTeam'
import ChangePassword from '../UserPage/FindClubs/ChangePassword'

import { ClubPage, ClubPage2 } from '../ClubPage/ClubPage'
import ClubPostulation from '../ClubPage/Containers/ClubPostulation'
import { ClubContracts } from '../ClubPage/Containers/ClubContracts'
import MyClubPage from '../ClubPage/Containers/MyClubPage'
import PlantelPage from '../ClubPage/Containers/PlantelPage'
import ChangeData from '../ClubPage/ChangeData'
import ChangeClubPassword from '../ClubPage/ChangeClubPassword'

import Admin from '../AdminView/Admin'
import DataUserRender from '../AdminView/Render/DataUserRender'
import CreateClub from '../AdminView/Render/CreateClub'
import DataClubRender from '../AdminView/Render/DataClubRender'
import ContratoRender from '../AdminView/Render/ContratoRender'
import PostulacionesRender from '../AdminView/Render/PostulacionesRender'
import RegisterEquipo from '../Register/RegisterEquipo'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/app' element={<PreviousPage/>} />
        <Route path='/app/login' element={<Login/>} />
        <Route path='/app/Registro' element={<Register />} />
        <Route path='/app/RegistroEquipo' element={<RegisterEquipo />} />

        <Route path='/app/UserPage' element={<PrevPage/>} />
        <Route path='/app/UserPage/Equipos' element={<Userpage/>} />
        <Route path='/app/UserPage/Postulaciones' element={<PostuPage/>} />
        <Route path='/app/UserPage/Contrato' element={<MyTeam/>} />
        <Route path='/app/UserPage/ChangePassword' element={<ChangePassword/>} />

        <Route path='/app/ClubPage' element={<ClubPage/>} />
        <Route path='/app/ClubPage2' element={<ClubPage2/>} />
        <Route path='/app/ClubPage/Clubdashbooard' element={<ClubPostulation />} />
        <Route path='/app/ClubPage/Contratos' element={<ClubContracts/>} />
        <Route path='/app/ClubPage/MyTeam' element={<MyClubPage/>} />
        <Route path='/app/ClubPage/Plantel' element={<PlantelPage/>} />
        <Route path='/app/ClubPage/CambiarDatos' element={<ChangeData/>} />
        <Route path='/app/ClubPage/ChangeClubPassword' element={<ChangeClubPassword/>} />

        <Route path='/app/adminview' element={<Admin/>} />
        <Route path='/app/adminview/viewplayers' element={<DataUserRender/>} />
        <Route path='/app/adminview/CreateClub' element={<CreateClub/>} />
        <Route path='/app/adminview/viewClubs' element={<DataClubRender/>} />
        <Route path='/app/adminview/ContratoRender' element={<ContratoRender/>} />
        <Route path='/app/adminview/PostulacionRender' element={<PostulacionesRender/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter