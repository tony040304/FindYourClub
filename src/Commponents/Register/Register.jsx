import  { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Registro = () => {

  const navigate = useNavigate("")

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.nombre.trim()) {
      validationErrors.nombre = 'El nombre es obligatorio';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
      validationErrors.email = 'El correo electrónico no es válido';
    }
    if (!formData.password) {
      validationErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('Datos válidos:', formData);
      navigate("/login")
    } else {
      setErrors(validationErrors);
    }
    
  };

  const NavToLogin = () => {
    navigate("/login")
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
            value={formData.nombre}
            onChange={handleChange}
            isInvalid={!!errors.nombre}
          />
          <Form.Control.Feedback type="invalid">{errors.nombre}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control
            className="contrasenia form-control"
            placeholder='Email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Control
            className="contrasenia form-control"
            placeholder='Confirma contraseña'
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
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
    </div>
  );
};

export default Registro;
