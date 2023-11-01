import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Cookies } from 'react-cookie';


const Login = () => {
  const [Nombre, setNombre] = useState('');
  const [Contrasenia, setContrasenia] = useState('');
  const [token, setToken] = useState()
  const [user, setUser] = useState()
  const Navigate = useNavigate()
  const [isDelayedActionComplete, setDelayedActionComplete] = useState(false);

  const handleSubmitLog = async (e)=>{
    e.preventDefault()
    if(!handleValidation()){
      let registerNeeded = {Nombre, Contrasenia}
      try{
        const response = await fetch('https://localhost:7102/api/Auth/login', {
          method: "POST",
          mode: "cors", 
          credentials: "same-origin", 
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerNeeded)
        })
        if(response.data && response.data.token){
          const token = response.data.token
        localStorage.setItem('token', token)
      }else{
        console.error("No se recibió un token");
      }
      }
      catch (error){
        console.error("Error al loguearse", error)
      }
    }
  }

  // const loginUser =(token)=>{
  //   const myDecodedToken = decodeToken(token)
  //   setToken(token)
  //   setUser(myDecodedToken)
  //   Cookies.set("user", JSON.stringify(myDecodedToken))
  //   Cookies.set("UserToken", token)
  // }

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