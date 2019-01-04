import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Noticia from './Noticia'

class Noticias extends Component {
    render() {
        return (
            <div className='row'>
                {this.props.noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </div>

        );
    }
}

Noticias.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default Noticias;
