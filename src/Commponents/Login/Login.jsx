import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { jwtDecode } from "jwt-decode";
import Cookies from 'universal-cookie';

const Login = () => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [Rol, setRol] = useState('');
  const Navigate = useNavigate()
  const cookies = new Cookies();
  const handleSubmitLog = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://localhost:7102/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, password }),
      });

      if (!response.ok) {
        throw new Error('Credenciales incorrectas');
      }
  
      const token = await response.text(); // Obtener el token como texto
      const decodeToken = jwtDecode(token)
      const Role = decodeToken.role
      if (Role == 2) {
        cookies.set("token", token, {path: '/'})
        
        Navigate('/app/UserPage')
      }
      console.log('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      // Manejar el error (por ejemplo, mostrar un mensaje de error al usuario)
    }
  };


  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const goRegisterE = () => {
    Navigate('/app/RegistroEquipo')
  }
  const goRegisterJ = () => {
    Navigate('/app/Registro')
  }
  
  

  return (
    <div className="login">
      <div className="form scale-up-center form-login ">
        <h1 className="titelLog">Iniciar sesión</h1>
        <p className='subtitlelog'>Ingrese sus credenciales para continuar.</p>
        <form className="form-login" >
          <div>
            <input placeholder="Usuario" className="usuario_estilo form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="text" value={nombre} onChange={handleNombreChange} required maxLength="20"/>
          </div>
          
          <div>
            <input placeholder="Contraseña" className="contrasenia form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password" value={password} onChange={handlePasswordChange} required maxLength="30"/>
          </div>
          <Button class="btn btn-success justify-content-center mt-3" type="submit" onClick={handleSubmitLog}>Iniciar sesión</Button>
        </form>
        <Button  class="btn btn-secondary justify-content-center mt-4 mb-3" type="button" onClick={goRegisterE}>Registrarme como equipo</Button>
        <Button  class="btn btn-secondary justify-content-center mt-4 mb-3" type="buttonl" onClick={goRegisterJ}>Registrarme como jugador</Button>
      </div>

    </div>
  );
};


export default Login;