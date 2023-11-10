import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PrevPage = () => {
    const nav = useNavigate('')
    const goToCreate =()=>{
        nav('/app/UserPage/createPlayer')
    }

  return (
    
       <div >
      <form action="">
        <label htmlFor="">Ingresar mis datos como jugador:</label>
        <Button onClick={goToCreate}>Ingresar datos</Button>
      </form>
    </div>
    
  )
   
}

export default PrevPage