import { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get("tokenTeam");

class Contratos extends Component {
  state = {
    loading: true,
    data: [],
  };

  componentDidMount() {
    fetch('https://localhost:7102/api/Equipo/GetContratoListaxEquipo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
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
      this.props.setData(data);
    })
    .catch((error) => {
      console.error('Hubo un error al obtener los datos:', error);
      this.setState({ loading: false });
    });
  }

  render() {
    return this.props.render(this.state.loading, this.state.data);
  }
}

export default Contratos;
