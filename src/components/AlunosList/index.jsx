import React from "react";

class AlunoList extends React.Component {
    render () {
        return <ul>{this.props.children}</ul>
    }
}

export default AlunoList;