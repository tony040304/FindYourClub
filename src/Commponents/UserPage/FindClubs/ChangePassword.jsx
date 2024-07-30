import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Navbar from '../../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [checkPassword, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("token")
  const navigate = useNavigate()


  

  const changePassword = () => {
    let result = true
    if (password !== checkPassword) {
      result = false
      setSuccess(false)
      setError('Las contraseñas no coinciden');
    } else if (password.length < 6) {
      result = false
      setSuccess(false)
      setError('La contraseña es muy corta. Debe tener al menos 6 caracteres');
    } else {
      setSuccess(true);
      return result
    }
  };

  const handleSubmit = () => {
    if (changePassword()) {
      fetch('https://localhost:7102/api/Jugador/CambiarContraseña', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ password, checkPassword }),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al responder');
        }

        toast.success('Contraseña cambiada', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  
        setTimeout(() => {
          navigate('/app/UserPage');
        }, 2000);
      })
      .catch(error => {
        console.error('Error al cambiar la contraseña:', error.message);
      })
    }
  }
  

  return (
    <>
    <Navbar/>
    <div className="card-container-changePasword">
      <div className="card-content">
        <input
          type="password"
          value={password}
          placeholder="ingrese su nueva contraseña" className="usuario_estilo form-control"
          maxLength='30'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          value={checkPassword}
          placeholder="Confirme su contraseña" className="usuario_estilo form-control"
          maxLength='30'
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Cambiar contraseña
        </button>
        {!success ? <p style={{ color: 'red' }}>{error}</p> : <p style={{ color: 'green' }}>Contraseña cambiada</p>}
      </div>
      <ToastContainer />
    </div>
    </>
  );
};

export default ChangePassword;
