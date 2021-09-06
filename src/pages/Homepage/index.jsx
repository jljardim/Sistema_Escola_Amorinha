import React from "react";
import { Link } from "react-router-dom";
/* import Button from "@material-ui/core/Button"; */
import IsButton from "../../components/Button";
/* import StudentList from "../../components/StudentList";
import StudentListItem from "../../components/StudentListItem"; */
import Header from "../../components/Header";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Página do Estudante",
            onClick: "",
           // btnName:"Inicio",
        }
    }
    render () {
        return (
        <>
            <Header title={this.state.title} />
            <br />
            <Link to="/register"> 
            <IsButton  title="Cadastro"/>
            </Link>

            <Link to="/editing"> 
            <IsButton  title="Editar"/>
            </Link>

            <Link to="/list"> 
            <IsButton  title="Listar"/>
            </Link>

          
        </>
        );
    }
}
export default Homepage;