import React from "react";

class StudentList extends React.Component {
    render () {
        return <ul>{this.props.children}</ul>
    }
}

export default StudentList;