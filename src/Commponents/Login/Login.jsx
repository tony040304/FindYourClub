import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';


const Login = () => {
  const [Nombre, setNombre] = useState('');
  const [Contrasenia, setContrasenia] = useState('');
  const Navigate = useNavigate()
  const [isDelayedActionComplete, setDelayedActionComplete] = useState(false);

  const handleSubmit = (e) => {
    e.PreventDefault()
    if (handleValidation()) {
      let loginNeeded = {Nombre, Contrasenia}

      fetch('http://localhost:5222/api/Auth/login', {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json",  "Accept": "accept:text/plain" },
        body: JSON.stringify(loginNeeded) 
      }).then((Response) => {
          const isJson = Response.headers.get('content-type')?.includes('application/json');
          const data = isJson ? Response.json() : null;
          if(!Response.ok){
            const error = (data && data.message) || Response.status;
            return Promise.reject(error);
          }
          toast.success('logeado satisfactoriamente', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"})
            setTimeout(() => {
              Navigate("/app/Registro")
              setDelayedActionComplete(true);
            }, 3000);
          return Response.json()
      }).catch(error => {
        console.log("error::", error)
      })
    }
  }

  const handleValidation =()=>{
    let result = true
    if (Nombre.trim()) {
      result = false
    }
    if (Contrasenia.trim()) {
      result = false
    }
    return result
  }

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setContrasenia(e.target.value);
  };
  const goRegister = () => {
    Navigate('/app/Registro')
  }
  
  

  return (
    <div className="login">
      <div className="form scale-up-center form-login ">
        <h1 className="titelLog">Iniciar sesión</h1>
        <p>Ingrese sus credenciales para continuar.</p>
        <form className="form-login" onSubmit={handleSubmit}>
          <div>
            <input placeholder="Usuario" className="usuario_estilo form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="text" value={Nombre} onChange={handleNombreChange} required maxLength="10"/>
          </div>
          
          <div>
            <input placeholder="Contraseña" className="contrasenia form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password" value={Contrasenia} onChange={handlePasswordChange} required />
          </div>
          <Button class="btn btn-success justify-content-center mt-3" type='submit'>Iniciar sesión</Button>
        </form>
        <Button  class="btn btn-secondary justify-content-center mt-4 mb-3" type="button" onClick={goRegister}>Registrarme</Button>
      </div>

    </div>
  );
};

export default Login;