import  { useState } from 'react';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  

  return (
    <div className="login">
      <div className="form scale-up-center">
        <h1 className="titelLog">Iniciar sesión</h1>
        <p>Ingrese sus credenciales para continuar.</p>
        <form >
          <div>
            <input placeholder="Usuario" className="usuario_estilo form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="email" value={email} onChange={handleEmailChange} required />
          </div>
          
          <div>
            <input placeholder="Contraseña" className="contrasenia form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button className="btn btn-success justify-content-center mt-3 " type="submit">Iniciar sesión</button>
        </form>
        <button className="btn btn-secondary justify-content-center mt-3 ">Registrarme</button>
      </div>

    </div>
  );
};

export default Login;