import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate('')

  const GoMostrarJugadores =()=>{
    navigate('/app/adminview/viewplayers')
  }
  const GoMostrarJugadoresId =()=>{
    navigate('/app/adminview/jugadorId')
  }

  return (
    <div>
        <form action="form-login">
            <Button onClick={GoMostrarJugadores}>Mostrar jugadores</Button>
            <Button onClick={GoMostrarJugadoresId}>Mostrar jugadores por id</Button>
        </form>
    </div>
  )
}

export default Admin