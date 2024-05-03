import React from 'react'
import { useNavigate } from 'react-router-dom'


const GoBackButt = () => {
    const nav = useNavigate('')

    const goBack =()=>{
      nav('/app/UserPage')
    }
  return (
    <>
        <button className='cardButton' onClick={goBack}>Volver a la pagina previa</button>
    </>
  )
}

export default GoBackButt