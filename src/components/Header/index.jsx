import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
    static propTypes ={
        title: PropTypes.string,
    };

    render () {
        return (
            <header>
                <h1>{this.props.title}</h1>
                <p>Preencha o formulario abaixo</p>
            </header>
            
        );
    }
}

export default Header;