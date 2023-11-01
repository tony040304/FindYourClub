import { Component } from 'react';
class EquipoFetch extends Component {
    state = {
      data: null,
      loading: true
    };
    
    componentDidMount() {
        fetch('http://localhost:7102/api/Admin/GetListaEquipo')
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
      return this.props.render(this.state.data);
    }
  }

  export default EquipoFetch