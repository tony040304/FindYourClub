import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


const Admin = () => {
  const navigate = useNavigate('')

  const GoMostrarJugadores =()=>{
    navigate('/app/adminview/viewplayers')
  }
  const CreateClub =()=>{
    navigate('/app/adminview/CreateClub')
  }
  const GoMostrarClub =()=>{
    navigate("/app/adminview/viewClubs")
  }
  const GoMostrarCcontrato =()=>{
    navigate("/app/adminview/ContratoRender")
  }
  const GoMostrarPostrulaciones =()=>{
    navigate("/app/adminview/PostulacionRender")
  }

  return (
    <div className='admin'>
      <Navbar/>
        <form className="form-admin">
          <h2>Ver lista de jugadores</h2>
            <Button onClick={GoMostrarJugadores}>Mostrar jugadores</Button>
        </form>
        <form className="form-admin">
          <h2>Ver lista de Equipos</h2>
            <Button onClick={GoMostrarClub}>Mostrar equipos</Button>
        </form>
        <form className="form-admin">
          <h2>Crear Equipo</h2>
            <Button onClick={CreateClub}>Ingresar los datos del equipo</Button>
        </form>
        <form className="form-admin">
          <h2>Ver contraros</h2>
            <Button onClick={GoMostrarCcontrato}>Mostrar contratos</Button>
        </form>
        <form className="form-admin">
          <h2>Ver postulasciones</h2>
            <Button onClick={GoMostrarPostrulaciones}>Mostrar postulasciones</Button>
        </form>
    </div>
  )
}

export default Admin