import { IoLogoWhatsapp } from "react-icons/io";
import LoginNavBar from '../Login/LoginNavBar';
import { useNavigate } from 'react-router-dom';

const RegisterEquipo = () => {
    const navigate = useNavigate('')
    const goBack =()=>{
        navigate('/app')
    }
  return (
    <>
    <LoginNavBar/>
    <div className="card-register-equipo">
          <h3>Para crear tu equipo debes contactarte con nuestro equipo via whatsapp y ellos te proveeran info</h3>
          <div className='WhatsApp'>
            <a href="https://wa.me/5403416465444" target="blank"><IoLogoWhatsapp style={{ color: 'green'}}/></a>
          </div>
          <button onClick={goBack} type="button">Volver</button>
    </div>
    </>
  )
}

export default RegisterEquipo