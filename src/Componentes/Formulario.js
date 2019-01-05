import PropTypes from "prop-types";
import React, { Component } from "react";
class Formulario extends Component {
  state = {};
  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8  offset-m2">
          <form>
            <h2>Noticias por Categoria</h2>
            <div className="input-field cols12 m8">
              <select>
                <option value="general">general</option>
                <option value="business">business</option>
                <option value="entertainment">entertainment</option>
                <option value="health">health</option>
                <option value="science">science</option>
                <option value="sports">sports</option>
                <option value="technology">technology</option>
                <option value="general">science</option>
              </select>
            </div>
            <div className="input-field col s12 m4 enviar">
              <input
                type="submit"
                className="btn amber danker-2"
                value="buscar"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;
