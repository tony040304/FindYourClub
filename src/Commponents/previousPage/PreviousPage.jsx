import { useNavigate } from "react-router-dom"


const PreviousPage = () => {
  const navigate = useNavigate('')

  const navegarAlLogin = () => {
    navigate('/app/login')
  }
  const navegarAlRegisterE = () => {
    navigate('/app/RegistroEquipo')
  }
  const navegarAlRegister = () => {
    navigate('/app/Registro')
  }
  return (
    <div className="paginaPrevia">
        <div>
            <h1>Bienvenido a la mejor pagina para encontrar tus equipos/jugadores </h1>
            <button className="prev" onClick={navegarAlLogin}>Tengo una cuenta</button>
            <button className="prevRe" onClick={navegarAlRegisterE}>Reguistrarme como equipo</button>
            <button className="prevRE" onClick={navegarAlRegister}>Reguistrarme como jugador</button>
        </div>
    </div>
  )
}

export default PreviousPage