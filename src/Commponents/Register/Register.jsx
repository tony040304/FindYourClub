import  { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';



const Registro = ({ Rol }) => {
  const navigate = useNavigate("")
  const [Contrasenia, setContrasenia] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState("")
  const [Nombre, setNombre] = useState("")
  const [errors, setErrors] = useState({});
  const [isDelayedActionComplete, setDelayedActionComplete] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (handleValidation()) {
      let registerNeeded = {Nombre, Contrasenia, email, Rol}
      
      fetch("https://localhost:7102/api/Auth/register",{
        method: "POST", 
        mode: "cors", 
        cache: "no-cache",
        credentials: "same-origin", 
        headers: { "Content-Type": "application/json" },
        redirect: "follow", 
        referrerPolicy: "no-referrer", 
        body: JSON.stringify(registerNeeded),
      }).then((response)=>{
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson ? response.json() : null;
          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
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
        console.log(response)
        setTimeout(() => {
          navigate("/app/login")
          setDelayedActionComplete(true);
        }, 3000);
        return response.json()
      }).catch(err => {
          toast.error("Usuario existente, error:" + err, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
      })
    }
  }

  const handleValidation  = () => {
    let result = true
    const validationErrors = {};
    if (!Nombre.trim()) {
      result = false
      validationErrors.Nombre = 'El nombre es obligatorio';
    }
    if (!email.trim()) {
      result = false
      validationErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      result = false
      validationErrors.email = 'El correo electrónico no es válido';
    }
    if (!Contrasenia) {
      result = false
      validationErrors.Contrasenia = 'La contraseña es obligatoria';
    } else if (Contrasenia.length < 6) {
      result = false
      validationErrors.Contrasenia = 'La contraseña debe tener al menos 6 caracteres';
    }
    if (Contrasenia !== confirmPassword) {
      result = false
      validationErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('Datos válidos:');
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
    <div className="login">
      <div className="form scale-up-center form-login " >
      <h2 className="titelLog">Registro</h2>
      <Form className="form-login" onSubmit={handleSubmit}>
        <Form.Group className=""controlId="nombre">
          <Form.Control className="usuario_estilo form-control"
          placeholder='Nomre usuario'
            type="text"
            name="nombre"
            value={Nombre}
            onChange={(e)=>setNombre(e.target.value)}
            isInvalid={!!errors.Nombre}
          />
          <Form.Control.Feedback type="invalid">{errors.Nombre}</Form.Control.Feedback>
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
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
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
          />
          <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>

        <Button class="register btn btn-succes justify-content-center mt-3 " type="submit">
          Registrarse
        </Button>
      </Form>
      <Button onClick={NavToLogin} type="button" class="btn btn-outline-secondary">
          Ya tengo una cuenta
        </Button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Registro;
