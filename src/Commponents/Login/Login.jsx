import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const goRegister = () => {
    Navigate('/Registro')
  }
  
  

  return (
    <div className="login">
      <div className="form scale-up-center form-login ">
        <h1 className="titelLog">Iniciar sesión</h1>
        <p>Ingrese sus credenciales para continuar.</p>
        <form className="form-login" >
          <div>
            <input placeholder="Usuario" className="usuario_estilo form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="email" value={email} onChange={handleEmailChange} required />
          </div>
          
          <div>
            <input placeholder="Contraseña" className="contrasenia form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <Button class="btn btn-success justify-content-center mt-3 " type="submit">Iniciar sesión</Button>
        </form>
        <Button  class="btn btn-secondary justify-content-center mt-4 mb-3" type="button" onClick={goRegister}>Registrarme</Button>
      </div>

    </div>
  );
};

export default Login;