import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


const ClubPage = () => {
  const navigate = useNavigate("")

  const goToContracts =()=>{
    navigate("/app/ClubPage/Contratos")
  }
  const gpToSoli =()=>{
    navigate("/app/ClubPage/Clubdashbooard")
  }

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
    <Button type='button' onClick={gpToSoli}>Ver mi equipo</Button>
  </form>
  <form className='userForm'>
    <h3 className='userH'>Cambiar mi contraseña:</h3><br />
    <Button type='button' onClick={gpToSoli}>Cambiar contraseña</Button>
  </form>
  </div>
</>
  )
}

export default ClubPage