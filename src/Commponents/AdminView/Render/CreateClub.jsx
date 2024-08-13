import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import { Form } from 'react-bootstrap';
import Navbar from '../../Navbar/Navbar';

const CreateClub = () => {
  const [password, setContrasenia] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [descripcion, setDescripcion] = useState("")
  const [Nombre, setNombre] = useState("")
  const [liga, setLiga] = useState("")
  const [errors, setErrors] = useState({});
  const [posicionesSeleccionadas, setPosicionesSeleccionadas] = useState([]);
  const navigate = useNavigate('')
  const cookies = new Cookies()
  const token = cookies.get("tokenAdmin")

  const handleValidation  = () => {
    let result = true
    const validationErrors = {};
    if (!Nombre.trim()) {
      result = false
      validationErrors.Nombre = 'El nombre es obligatorio';
    }
    // if (!email.trim()) {
    //   result = false
    //   validationErrors.email = 'El correo electrónico es obligatorio';
    // } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    //   result = false
    //   validationErrors.email = 'El correo electrónico no es válido';
    // }
    if (!password) {
      result = false
      validationErrors.password = 'La contraseña es obligatoria';
    } else if (password.length < 6) {
      result = false
      validationErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    if (password !== confirmPassword) {
      result = false
      validationErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    if (posicionesSeleccionadas == null) {
      result = false
      validationErrors.posicionesSeleccionadas = 'La posicion es obligatoria';
    }
    if (!liga.trim()) {
        result = false
        validationErrors.liga = 'La liga es obligatoria';
      }
    if (Object.keys(validationErrors).length === 0) {
      result = true
    } else {
      result = false
      setErrors(validationErrors);
    }
    return result
  };

  const submitClub =(e)=>{
    e.preventDefault()
    if (handleValidation()) {
        fetch("https://localhost:7102/api/Admin/CreateEquipo",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
        body: JSON.stringify({ nombre: Nombre, password: password,
           descripcion: descripcion, posiciónRequerida: posicionesSeleccionadas.toString(), liga: liga }),
      }).then((response)=>{
        if (response.ok) {
        toast.success('Equipo creado', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate('/app/adminview');
        }, 2000);
      }
        if (!response.ok) {
          throw new Error('Error al responder');
        }
      }).catch(err => {
            toast.error("Ocurrio un error en la aplicacion"+err, {
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

 
    const handleSelectChange = (e) => {
      const selectedOption = e.target.value;
      if (!posicionesSeleccionadas.includes(selectedOption)) {
          setPosicionesSeleccionadas([...posicionesSeleccionadas, selectedOption]);
      }
    };
    const handleRemovePosition = (position) => {
      setPosicionesSeleccionadas(posicionesSeleccionadas.filter(pos => pos !== position));
  };  

  return (
    <>
    <Navbar/>
    <div className="login">
      
        <div className="form scale-up-center form-login" >
        <h3>Crear equipo</h3>
        <Form className="form-login" onSubmit={submitClub}>
        <Form.Group className=""controlId="nombre">
            <input placeholder="Nombre equipo" className="usuario_estilo form-control" aria-label="Default" isInvalid={!!errors.Nombre}
             aria-describedby="inputGroup-sizing-default" type="invalid" value={Nombre} onChange={(e)=>setNombre(e.target.value)}  maxLength="20"/>
           <Form.Control.Feedback type="invalid">{errors.Nombre}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="descripcion">
            <input placeholder="Descripcion equipo" className="usuario_estilo form-control" aria-label="Default" isInvalid={!!errors.descripcion}
             aria-describedby="inputGroup-sizing-default" type="text" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} maxLength="20"/>
          <Form.Control.Feedback  type="invalid">{errors.descripcion}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="posicion">
            <select
                className='usuario_estilo form-control' 
                onChange={handleSelectChange}
            >
                <option value="">Posicion requerida</option>
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
            <div>
                {posicionesSeleccionadas.map((posicion, index) => (
                    <span key={index} className="badge badge-primary" onClick={() => handleRemovePosition(posicion)}>{posicion} <i className="fa fa-times"></i></span>
                ))}
            </div>
            <Form.Control.Feedback type="invalid">{errors.posicionesSeleccionadas}</Form.Control.Feedback>
        </Form.Group>


        <Form.Group controlId="liga">
            <select
                className='usuario_estilo form-control' value={liga} onChange={(e)=>setLiga(e.target.value)} isInvalid={!!errors.liga}
            >
                <option value="">Liga</option>
                <option value="Liga Cañadiense de Futbol">Liga Cañadiense De Futbol</option>
                <option value="Liga Rosarina Profesional">Liga Rosarina Profesional</option>
            </select>
            <Form.Control.Feedback type="invalid">{errors.liga}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password">
            <input placeholder="Contraseña equipo" className="usuario_estilo form-control" aria-label="Default" isInvalid={!!errors.password}
             aria-describedby="inputGroup-sizing-default" type="text" value={password} onChange={(e)=>setContrasenia(e.target.value)}  maxLength="20"/>
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
            <input placeholder="Confirmar contraseña" className="usuario_estilo form-control" aria-label="Default" isInvalid={!!errors.confirmPassword}
             aria-describedby="inputGroup-sizing-default" type="text" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} maxLength="20"/>
          <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>

          <button class="btn btn-success justify-content-center mt-3" type="submit">Crear equipo</button>
        </Form>
      </div>
        <ToastContainer />
    </div>
    </>
  )
}

export default CreateClub