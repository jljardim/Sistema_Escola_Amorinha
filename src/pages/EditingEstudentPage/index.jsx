import React from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";

class EditingStudantPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
           <Header
             title="Editar Registro de Alunos" 
             init="/" />
             <Form />
             </>
         );
    }
}
 
export default EditingStudantPage;