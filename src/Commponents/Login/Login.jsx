import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import LoginNavBar from './LoginNavBar';
import 'react-toastify/dist/ReactToastify.css';
import { set } from 'date-fns';

const Login = () => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [errorN, setErrorN] = useState('')
  const [errorP, setErrorP] = useState('')
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(()=>{
    console.clear()
  }, [])

  const handleSubmitLog = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        const response = await fetch('https://localhost:7102/api/Auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, password }),
        });

        if (response.status === 404) {
          toast.error('Nombre/Contraseña incorrecta', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return;
        }
        const token = await response.text(); // Obtener el token como texto
        const decodeToken = jwtDecode(token);
        const role = decodeToken.role;
        const tokenName = decodeToken.Nombre;
        let cookieName;
        let navigatePath;
          if(role == "1"){
            cookieName = "tokenAdmin";
            navigatePath = "/app/adminview";
          }
          else if(role == "2"){
            cookieName = "token";
            navigatePath = "/app/UserPage";
          }
          else if(role == "3"){
            cookieName = "tokenTeam";
            navigatePath = "/app/ClubPage";
          }
          else{
            toast.error('Rol desconocido', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            return;
          }
        cookies.set(cookieName, token, { path: '/' });
        cookies.set("nombreUser", tokenName, { path: '/' })
        toast.success('Logeado satisfactoriamente', {
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
          navigate(navigatePath, { state: { token } });
        }, 1000);

      } catch (error) {
          toast.error("Ocurrió un error en el servidor", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
      
      }
    }
  };

  const handleValidation = ()=>{
    let result = true
    if (nombre.includes('"') || nombre.includes("'")) {
      result = false
      setErrorN("No se permiten comillas")
    }else{
      setErrorN()
    }
    
    if (password.includes('"') || password.includes("'")) {
      result = false
      setErrorP("No se permiten comillas")
    }else{
      setErrorP()
    }

    return result
  }

  return (
    <>
      <LoginNavBar />
      <div className="login">
        <div className="form scale-up-center form-login">
          <h1 className="titelLog">Iniciar sesión</h1>
          <p className='subtitlelog'>Ingrese sus credenciales para continuar.</p>
          <form className="form-login" onSubmit={handleSubmitLog}>
            <div>
              <input
                placeholder="Usuario"
                className="usuario_estilo form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                maxLength="50"
              />
            </div>
            {errorN && <p style={{ color: 'red' }}>{errorN}</p>}
            <div>
              <input
                placeholder="Contraseña"
                className="contrasenia form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                maxLength="50"
              />
            </div>
            {errorP && <p style={{ color: 'red' }}>{errorP}</p>}
            <Button className="btn btn-success justify-content-center mt-3" type="submit">
              Iniciar sesión
            </Button>
          </form>
          <Button
            className="btn btn-secondary justify-content-center mt-4 mb-3"
            type="button"
            onClick={() => navigate('/app/RegistroEquipo')}
          >
            Registrarme como equipo
          </Button>
          <Button
            className="btn btn-secondary justify-content-center mt-4 mb-3"
            type="button"
            onClick={() => navigate('/app/Registro')}
          >
            Registrarme como jugador
          </Button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
