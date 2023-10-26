import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Buttonadmin = () => {
    const navigate = useNavigate('')

    const goBack =()=>{
        navigate('/app/adminview')
      }
  
  return (
    <div>
        <Button onClick={goBack}>Volver atras</Button>
    </div>
  )
}

export default Buttonadmin