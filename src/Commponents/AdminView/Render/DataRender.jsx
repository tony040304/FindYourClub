import { Component } from 'react';
import EquipoFetch from '../Fetchs/EquipoFetch'
import JugadorFetch from '../Fetchs/JugadoFetch'
import BorrarJugador from '../Fetchs/Borrar/BorrarJugador'
import Buttonadmin from '../Buttonadmin';
import BorrarEquipo from '../Fetchs/Borrar/BorrarEquipo';
import UsuarioFetch from '../Fetchs/UsuarioFetch';
import ContratoFetch from '../Fetchs/ContratoFetch'
import PostulacionFetch from '../Fetchs/PostulacionFetch';
import BorrarPostulacion from '../Fetchs/Borrar/BorrarPostulacion'
import BorrarContrato from '../Fetchs/Borrar/BorrarContrato';

class DataRender extends Component {

  render() {
    return (
      <div>
        <h1>Equipos registrados</h1>
        <EquipoFetch
          render={(data) => (
            <div>
              {data ? (
                <ul>
                  {data.map((item) => (
                    <li key={item.equipoId}>{item.equipoId}, {item.nombre}, {item.descripcion}</li>
                  ))}
                </ul>
              ) : (
                <p>Cargando datos...</p>
              )}
            </div>
          )}
        />
        <BorrarJugador/>
        <h1>Jugadores registrados</h1>
        <JugadorFetch render={(data) => (
            <div>
              {data ? (
                <ul>
                  {data.map((item) => (
                    <li key={item.jugadorId}>{item.jugadorId}, {item.nombre}, {item.apellido}, {item.descripcion}, {item.posicion}</li>
                  ))}
                </ul>
              ) : (
                <p>Cargando datos...</p>
              )}
            </div>
          )}/>
          <BorrarEquipo/>
        <UsuarioFetch render={(data) => (
            <div>
              {data ? (
                <ul>
                  {data.map((item) => (
                    <li key={item.usuarioId}>{item.usuarioId}, {item.nombre}, {item.contrasenia}, {item.rol}, {item.email}</li>
                  ))}
                </ul>
              ) : (
                <p>Cargando datos...</p>
              )}
            </div>
          )}/>
        <ContratoFetch render={(data) => (
            <div>
              {data ? (
                <ul>
                  {data.map((item) => (
                    <li key={item.contratoId}>{item.equipoId}, {item.jugadorId}, {item.salario}, {item.fecha}, {item.montoTraspaso}</li>
                  ))}
                </ul>
              ) : (
                <p>Cargando datos...</p>
              )}
            </div>
          )}/>
          <BorrarContrato/>
          <PostulacionFetch render={(data) => (
            <div>
              {data ? (
                <ul>
                  {data.map((item) => (
                    <li key={item.postulacionId}>{item.postulacionId}, {item.fechaPostulacion}, {item.idjugador}, {item.idequipo}</li>
                  ))}
                </ul>
              ) : (
                <p>Cargando datos...</p>
              )}
            </div>
          )}
          />
          <BorrarPostulacion/>
          <Buttonadmin></Buttonadmin>
      </div>
    );
  }
}

export default DataRender;



