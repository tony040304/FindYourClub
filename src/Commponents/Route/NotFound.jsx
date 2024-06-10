import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TbPlayFootball } from "react-icons/tb";

const NotFound = () => {
    const navigate = useNavigate()
    const goBack=()=>{
        navigate("..", { relative: "path" })
    }
  return (
    <div>
        <div className='notFound'>
            <h1 className='notFoundh'>Not Found 404</h1>
            <h1 className='notFoundh'>Esta pagina no existe o useted no tiene acceso</h1>
            <TbPlayFootball className='notFoundIcon'/><br />
            <button type='button' onClick={goBack}>Volver a la pagina anterior</button>
        </div>
    </div>
  )
}

export default NotFound