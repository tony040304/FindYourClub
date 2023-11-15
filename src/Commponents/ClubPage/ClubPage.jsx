import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const ClubPage = () => {
  const navigate = useNavigate("")

  const goToCreate =()=>{
    navigate("/app/ClubPage/CreateClub")
  }
  const gpToSoli =()=>{
    navigate("/app/ClubPage/Clubdashbooard")
  }

  return (
    <div>
        <form className='form-club'>
        <label htmlFor="">Ingresar mis datos como equipo:</label>
        <Button onClick={goToCreate}>Ingresar datos</Button>
        </form>
        <form className='form-club'>
        <label htmlFor="">Ver solicitudes de jugadores:</label>
        <Button onClick={gpToSoli}>Ver solicitudes</Button>
        </form>
    </div>
  )
}

export default ClubPage