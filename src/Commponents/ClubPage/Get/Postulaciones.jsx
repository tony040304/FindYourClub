import { Component } from 'react';

class Postulaciones extends Component {
  state = {
    data: null,
    loading: true,
  };

  componentDidMount() {
    fetch('https://localhost:7102/api/Equipo/GetPostulacionListaxEquipo')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al responder');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ data, loading: false });
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    // Renderiza los datos utilizando la función de render prop
    // que se pasa como prop a este componente
    return this.props.render(this.state.data, this.state.loading);
  }
}
export default Postulaciones