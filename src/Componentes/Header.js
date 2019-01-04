import React from 'react';
import PropTypes from 'prop-types';
const Header = (props) => {
    return (
        <div>{props.titulo}</div>
    )
}
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;