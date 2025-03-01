import  { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LoginNavBar from '../Login/LoginNavBar';


const Registro = () => {
  const navigate = useNavigate("")
  const [Contrasenia, setContrasenia] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState("")
  const [NombreApellido, setNombre] = useState("")
  const [Posicion, setPosicion] = useState("")
  const [FechaNacimiento, setNacimiento] = useState("")
  const [errors, setErrors] = useState({});

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (handleValidation()) {
      
      fetch("https://localhost:7102/api/Auth/register",{
        method: "POST", 
        mode: "cors", 
        cache: "no-cache",
        credentials: "same-origin", 
        headers: { "Content-Type": "application/json" },
        redirect: "follow", 
        referrerPolicy: "no-referrer", 
        body: JSON.stringify({ NombreApellido, Contrasenia, email, Posicion, FechaNacimiento }),
      }).then((response)=>{
          if (response.ok) {
            toast.success('Registrado satisfactoriamente', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          })
          setTimeout(() => {
            navigate("/app/login")
          }, 3000);
          }
          if (!response.ok) {
            toast.error('Usuario existente', {
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
      }).catch(err => {
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
            console.log(err)
      })
    }
  }

  const handleValidation  = () => {
    const birthdateObj = new Date(FechaNacimiento);
    const today = new Date();
    let age = today.getFullYear() - birthdateObj.getFullYear();
    const monthDifference = today.getMonth() - birthdateObj.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdateObj.getDate())) {
      age--;
    }
    let result = true
    const validationErrors = {};
    if (!NombreApellido.trim()) {
      result = false
      validationErrors.NombreApellido = 'El nombre es obligatorio';
    } else if (NombreApellido.includes("'", '"')) {
      result = false
      validationErrors.NombreApellido = "No se permiten comillas"
    }
    if (!email.trim()) {
      result = false
      validationErrors.email = 'El correo electrónico es obligatorio';
    } if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      result = false
      validationErrors.email = 'El correo electrónico no es válido';
    } else if (email.includes("'") || email.includes('"')) {
      result = false
      validationErrors.email = "No se permiten comillas"
    }
    if (!Contrasenia) {
      result = false
      validationErrors.Contrasenia = 'La contraseña es obligatoria';
    } if (Contrasenia.length < 6) {
      result = false
      validationErrors.Contrasenia = 'La contraseña debe tener al menos 6 caracteres';
    }else if (Contrasenia.includes("'") || Contrasenia.includes('"')) {
      result = false
      validationErrors.Contrasenia = "No se permiten comillas"
    }
    if (Contrasenia !== confirmPassword) {
      result = false
      validationErrors.confirmPassword = 'Las contraseñas no coinciden';
    }else if (confirmPassword.includes("'") || confirmPassword.includes('"')) {
      result = false
      validationErrors.confirmPassword = "No se permiten comillas"
    }
    if (!Posicion.trim()) {
      result = false
      validationErrors.Posicion = 'La posicion es obligatoria';
    }
    if (!FechaNacimiento.trim()) {
      result = false
      validationErrors.FechaNacimiento = 'La fecha de nacimiento es obligatoria';
    }
    if (age < 16) {
      result = false;
      validationErrors.FechaNacimiento = 'Es obligatorio tener más de 16 años';
    }
    if (Object.keys(validationErrors).length === 0) {
      result = true
    } else {
      result = false
      setErrors(validationErrors);
    }
    return result
  };

  const NavToLogin = () => {
    navigate("/app/login")
  }

  return (
    <>
    <LoginNavBar/>
    <div className="login">
      <div className="form scale-up-center form-login" >
      <h2 className="titelLog">Registro</h2>
      <Form className="form-login" onSubmit={handleSubmit}>
        <Form.Group className=""controlId="nombre">
          <Form.Control className="usuario_estilo form-control"
          placeholder='Nomre usuario'
            type="text"
            name="nombre"
            value={NombreApellido}
            onChange={(e)=>setNombre(e.target.value)}
            isInvalid={!!errors.NombreApellido}
            maxLength="20"
          />
          <Form.Control.Feedback type="invalid">{errors.NombreApellido}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control
            className="contrasenia form-control"
            placeholder='Email'
            type="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            isInvalid={!!errors.email}
            maxLength="50"
          />
          <Form.Control.Feedback  type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            className="contrasenia form-control"
            placeholder='Contraseña'
            type="password"
            name="password"
            value={Contrasenia}
            onChange={(e)=>setContrasenia(e.target.value)}
            isInvalid={!!errors.Contrasenia}
            maxLength="30"
          />
          <Form.Control.Feedback type="invalid">{errors.Contrasenia}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Control
            className="contrasenia form-control"
            placeholder='Confirma contraseña'
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            isInvalid={!!errors.confirmPassword}
            maxLength="30"
          />
          <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="posicion">
          <select className="select-form-control" value={Posicion} onChange={(e)=>setPosicion(e.target.value.trim())}>
          {!!errors.Posicion}
            <option value="">Posicion</option>
            <option value="DFC">DFC</option>
            <option value="LD">LD</option>
            <option value="LI">LI</option>
            <option value="MC">MC</option>
            <option value="MCD">MCD</option>
            <option value="MCO">MCO</option>
            <option value="EI">EI</option>
            <option value="ED">ED</option>
            <option value="DC">DC</option>
          </select>
          <Form.Control.Feedback type="invalid">{errors.Posicion}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Control
            className="contrasenia form-control"
            placeholder='Ingrese su fecha de nacimiento'
            type="Date"
            value={FechaNacimiento}
            onChange={(e)=>setNacimiento(e.target.value)}
            isInvalid={!!errors.FechaNacimiento}
          />
          <Form.Control.Feedback type="invalid">{errors.FechaNacimiento}</Form.Control.Feedback>
        </Form.Group>

        <Button className="register btn btn-succes justify-content-center mt-3 " type="submit">
          Registrarse
        </Button>
      </Form>
      <Button onClick={NavToLogin} type="button" className="btn btn-outline-secondary">
          Ya tengo una cuenta
        </Button>
      </div>
      <ToastContainer/>
    </div>
    </>
  );
};

export default Registro;
