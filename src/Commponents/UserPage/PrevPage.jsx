import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PrevPage = () => {
    const nav = useNavigate('')
    const goToCreate =()=>{
        nav('/app/UserPage/createPlayer')
    }
    const goToSearch =()=>{
      nav('/app/UserPage/UserPage')
  }
  return (
    
       <div >
      <form action="">
        <h3 htmlFor="">Ingresar mis datos como jugador:</h3><br />
        <Button onClick={goToCreate}>Ingresar datos</Button>
      </form>
      <form action="">
        <Button onClick={goToSearch}>Buscar equipo</Button>
      </form>
    </div>
    
  )
   
}

export default PrevPage