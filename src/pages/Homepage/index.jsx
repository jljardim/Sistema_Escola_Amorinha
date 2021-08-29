import React from "react";
import { Link } from "react-router-dom";
/* import Button from "@material-ui/core/Button"; */
import IsButton from "../../components/Button";
/* import StudentList from "../../components/StudentList";
import StudentListItem from "../../components/StudentListItem"; */
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Studants Directory",
            onClick: "",
        }
    }
    render () {
        return (
        <>
            <Header title={this.state.title}/>
            <SearchBar onSearch={this.onSearch} />
            <br />
            <Link to="/register"> 
            <IsButton  title="Cadastro"/>
            </Link>

           {/*  <Button 
               title="Cadastro" 
               onClick="/register"
               /> */}
          
        </>
        );
    }
}
export default Homepage;