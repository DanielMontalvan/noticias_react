import React, { Component } from "react";

import Header from "./Header";
import Noticias from "./Noticias";
import Formulario from "./Formulario";
class App extends Component {
  state = {
    noticias: []
  };
  componentDidMount() {
    this.consultarNoticias();
  }
  consultarNoticias = (categoria = 'General') => {
    console.log(categoria)
    let url = `https://newsapi.org/v2/top-headLines?country=mx&category=${categoria}&apiKey=f8e45f2d74704609bdd951e575ffcf63`;
    console.log(url)
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({ noticias: noticias.articles });
      });
  };
  render() {
    //const api = 'f8e45f2d74704609bdd951e575ffcf63';
    return (
      <div className="contenedor-app">
        <Header titulo="Noticias" />
        <div className="contendor white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <Noticias noticias={this.state.noticias} />
        </div>
      </div>
    );
  }
}
export default App;
