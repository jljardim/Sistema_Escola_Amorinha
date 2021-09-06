import React from "react";
import {Link} from "react-router-dom";
//import IsButton from "../../components/Button";
import Button from "@material-ui/core/Button";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";


class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <Header title="Lista de Estudante"
               init="/"/>

            <SearchBar />

            <br/>

             <Link to="/register"> 
            <Button variant="contained" color="primary">Home Page</Button>
            </Link>

     </>
   );
  }
}
 
export default StudentList ;
