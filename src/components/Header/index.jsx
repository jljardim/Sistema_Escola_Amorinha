import React from "react";

class Header extends React.Component {
    render () {
        return (
            <header>
                <h1>{this.props.titulo}</h1>
                <p>Preencha o formulario abaixo</p>
            </header>
        );
    }
}

export default Header;