import { Component } from 'react';
import Cookies from 'universal-cookie';
import { useState } from 'react';

const cookies = new Cookies();
const token = cookies.get("token")
//console.log(token)
class MyPostuFetch extends Component {
    state = {
      loading: true
    };
  
    componentDidMount() {
      fetch('https://localhost:7102/api/Jugador/MisPostulaciones', {
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
          this.props.setData(data); // Actualizar los datos en el estado de Userpag
          this.setState({ loading: false });
        })
        .catch((error) => {
          console.error('Hubo un error al obtener los datos:', error);
          this.setState({ loading: false });
        });
    }
  
    render() {
      // Renderiza los datos utilizando la función de render prop
      // que se pasa como prop a este componente
      return this.props.render(this.state.loading);
    }
  }
  
  export default MyPostuFetch;
  