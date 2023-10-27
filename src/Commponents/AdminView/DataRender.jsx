import { Component } from 'react';
import EquipoFetch from './EquipoFetch'
import JugadorFetch from './JugadoFetch'
import BorrarJugador from './BorrarJugador'
import Buttonadmin from './Buttonadmin';
import BorrarEquipo from './BorrarEquipo';

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
          <Buttonadmin></Buttonadmin>
      </div>
    );
  }
}

export default DataRender;



