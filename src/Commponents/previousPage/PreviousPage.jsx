import { Container } from "react-bootstrap"
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
    <div className="">
     <div className="text-span"> <span className="style-span">LA PAGINA DONDE VAS A PODER CONCEGUIR TU EQUIPO/JUGADORES DE FUTBOL</span> </div>
     
        <div className="paginaPrevia">
            <button className="prev" onClick={navegarAlLogin}>Tengo una cuenta</button>
            <button className="prevRe" onClick={navegarAlRegisterE}>Reguistrarme como equipo</button>
            <button className="prevRE" onClick={navegarAlRegister}>Reguistrarme como jugador</button>
        </div>
    
    
        
    </div>
   
  )
}

export default PreviousPage