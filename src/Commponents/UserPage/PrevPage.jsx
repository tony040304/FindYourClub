import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PrevPage = () => {
    const nav = useNavigate('')
    const goToPostulaciones =()=>{
        nav('/app/UserPage/Postulaciones')
    }
    const goToSearch =()=>{
      nav('/app/UserPage/Equipos')
  }
  return (
    <>
    <Navbar/>
    <div className='userDiv'>
  <form className='userForm'>
    <h3 className='userH'>Buscar equipo por liga o posición:</h3><br />
    <Button type='button' onClick={goToSearch}>Buscar equipo</Button>
  </form>
  <form className='userForm'>
    <h3 className='userH'>Ver mis postulaciones:</h3><br />
    <Button type='button' onClick={goToPostulaciones}>Postulaciones</Button>
  </form>
  </div>
  <div className='userDiv2'>
  <form className='userForm'>
    <h3 className='userH'>Mi equipo:</h3><br />
    <Button type='button' onClick={goToSearch}>Ver mi equipo</Button>
  </form>
  <form className='userForm'>
    <h3 className='userH'>Cambiar mi contraseña:</h3><br />
    <Button type='button' onClick={goToSearch}>Cambiar contraseña</Button>
  </form>
  </div>
</>
  
    
  )
   
}

export default PrevPage