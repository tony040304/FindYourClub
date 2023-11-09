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
    <div className='admin'>
        <form className="form-admin">
            <Button onClick={GoMostrarJugadores}>Mostrar jugadores y equipo</Button>
        </form>
        <form className="form-admin">
            <Button onClick={GoMostrarJugadoresId}>Mostrar jugadores y equipo</Button>
        </form>
    </div>
  )
}

export default Admin