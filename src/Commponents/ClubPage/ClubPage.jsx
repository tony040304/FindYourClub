import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import ClubNavbar from './ClubNavbar'


const ClubPage = () => {
  const navigate = useNavigate("")

  const goToContracts =()=>{
    navigate("/app/ClubPage/Contratos")
  }
  const gpToSoli =()=>{
    navigate("/app/ClubPage/Clubdashbooard")
  }
  const goToPlantel =()=>{
    navigate('/app/ClubPage/Plantel')
  }
  const goToChangePass=()=>{
    navigate('/app/ClubPage/ChangeClubPassword')
  }

  useEffect(() => {
    // Verificar si la página ya ha sido recargada
    const haRecargado = localStorage.getItem('haRecargadoE');

    if (!haRecargado) {
      // Marcar que la página ha sido recargada
      localStorage.setItem('haRecargadoE', 'true');
      
      // Recargar la página
      window.location.reload();
    }
  }, []);

  return (
    <>
    <Navbar/>
    <div className='userDiv'>
  <form className='userForm'>
    <h3 className='userH'>Ver jugadores que se postularon:</h3><br />
    <Button type='button' onClick={gpToSoli}>Buscar jugadores</Button>
  </form>
  <form className='userForm'>
    <h3 className='userH'>Ver mis contratos:</h3><br />
    <Button type='button' onClick={goToContracts}>Contratos</Button>
  </form>
  </div>
  <div className='userDiv2'>
  <form className='userForm'>
    <h3 className='userH'>Mi equipo:</h3><br />
    <Button type='button' onClick={goToPlantel}>Ver mi equipo</Button>
  </form>
  <form className='userForm'>
    <h3 className='userH'>Cambiar mi contraseña:</h3><br />
    <Button type='button' onClick={goToChangePass}>Cambiar contraseña</Button>
  </form>
  </div>
  <ClubNavbar/>
</>
  )
}
 

const ClubPage2 = () => {
  const navigate = useNavigate("")

  const goToChangeData =()=>{
    navigate("/app/ClubPage/CambiarDatos")
  }
  const goToMyData =()=>{
    
    navigate("/app/ClubPage/MyTeam")
  }


  return (
    <>
    <Navbar/>
    <div className='userDiv'>
      <form className='userForm'>
        <h3 className='userH'>Mis datos:</h3><br />
        <Button type='button' onClick={goToMyData}>Ver mis datos</Button>
      </form>
      <form className='userForm'>
        <h3 className='userH'>Cambiar datos del equipo:</h3><br />
        <Button type='button' onClick={goToChangeData}>Cambiar datos</Button>
      </form>
  </div>
  <ClubNavbar/>
  </>
  )
}

export { ClubPage, ClubPage2 }