import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';


const Login = () => {
  const [Nombre, setNombre] = useState('');
  const [Contrasenia, setContrasenia] = useState('');
  const Navigate = useNavigate()
  const [isDelayedActionComplete, setDelayedActionComplete] = useState(false);

  const handleSubmitLog =(e)=>{
    e.preventDefault()
    if(!handleValidation()){
      let registerNeeded = {Nombre, Contrasenia}

        fetch('http://localhost:5222/api/Auth/login', {
          method: "POST",
          mode: "cors", 
          credentials: "same-origin", 
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerNeeded)
        }).then((response) =>{
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson ? response.json() : null;
          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          toast.success('Logueado satisfactoriamente', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          console.log(response)
          setTimeout(() => {
            Navigate("/app/login")
            setDelayedActionComplete(true);
          }, 3000);
          
          return response.json()
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
        <form className="form-login" >
          <div>
            <input placeholder="Usuario" className="usuario_estilo form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="text" value={Nombre} onChange={handleNombreChange} required maxLength="10"/>
          </div>
          
          <div>
            <input placeholder="Contraseña" className="contrasenia form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password" value={Contrasenia} onChange={handlePasswordChange} required />
          </div>
          <Button class="btn btn-success justify-content-center mt-3" type="submit" onClick={handleSubmitLog}>Iniciar sesión</Button>
        </form>
        <Button  class="btn btn-secondary justify-content-center mt-4 mb-3" type="button" onClick={goRegister}>Registrarme</Button>
      </div>

    </div>
  );
};

export default Login;