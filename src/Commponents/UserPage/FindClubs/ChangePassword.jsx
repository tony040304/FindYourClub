import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

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
  
        // Agregar un delay de 2 segundos antes de navegar
        setTimeout(() => {
          navigate('/app/UserPage');
        }, 1000);
      })
      .catch(error => {
        console.error('Error al cambiar la contraseña:', error.message);
      })
    }
  }
  

  return (
    <div className="card-container-changePasword">
      <div className="card-content">
        <input
          type="password"
          value={password}
          placeholder="ingrese su contraseña" className="usuario_estilo form-control"
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
    </div>
  );
};

export default ChangePassword;
