/* eslint-disable react/prop-types */
import React from 'react';
import { Component } from 'react';
import Cookies from 'universal-cookie';


const cookies = new Cookies();
const token = cookies.get("tokenTeam")


class Postulaciones extends Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    fetch('https://localhost:7102/api/Equipo/GetPostulacionListaxEquipo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`, // Incluir el token JWT en el encabezado de autorización
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al responder');
      }
      return response.json();

    })
    .then((data) => {
      this.setState({ data, loading: false });
      this.props.setData(data); // Actualizamos los datos en el componente padre
    })
    .catch((error) => {
      console.error('Hubo un error al obtener los datos:', error);
      this.setState({ loading: false });
    });
}

render() {
  // Renderiza los datos utilizando la función de render prop
  // que se pasa como prop a este componente
  return this.props.render(this.state.loading, this.state.data);
}
}
export default Postulaciones