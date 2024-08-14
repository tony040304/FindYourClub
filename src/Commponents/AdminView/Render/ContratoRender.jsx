import {useState} from 'react'
import ContratoCard from '../Cards/ContratoCard'
import ContratoFetch from '../Fetchs/ContratoFetch'
import ContratoFetchId from '../Fetchs/ContratoFetchId';
import Navbar from '../../Navbar/Navbar';

const ContratoRender = () => {
    const [mostrarTodosContratos, setMostrarTodosContratos] = useState(false);

  return (
    <div>
        <Navbar/>
        <div className="Admin-render-user">
        <h1>Buscar contratos por nombre</h1>
        <ContratoFetchId
          render={({ userClubNombre, userClub, loading, setUserClubNombre, fetchUser })=>(
            <div>
                <input
                  className='admin-input'
                  type="text"
                  placeholder="Ingrese el nombre de jugador o equipo"
                  value={userClubNombre}
                  onChange={(e) => setUserClubNombre(e.target.value)}
                />
                <button type='submit' onClick={fetchUser}>Buscar</button>
                {loading && <p>Cargando...</p>}
                {userClub && (
                  <ContratoCard
                  Data={userClub}
                />
                )}
              </div>
          )}
        />
        {
          mostrarTodosContratos === false ?
          (<button type='button' onClick={() => setMostrarTodosContratos(true)}>Mostrar Todos los contratos</button>)
            :
          (<button type='button' onClick={() => setMostrarTodosContratos(false)}>Ocultar Todos los contratos</button>)
        }
        <ContratoFetch render={(data) => (
          <div>
            {data && data.length > 0 ? (
              <ul>
                {mostrarTodosContratos && data.map((item, index) => (
                  <ContratoCard
                    key={index}
                    Data={item}
                  />
                ))}
              </ul>
            ) : (
              <p>No hay datos...</p>
            )}
          </div>
        )} />
      </div>
    </div>
  )
}

export default ContratoRender