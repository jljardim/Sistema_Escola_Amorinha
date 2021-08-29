import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Form from "../../components/Form";
import Header from "../../components/Header";

class RegisterStudantPage extends React.Component {
  
    render () {
        return (
        <>
            <Header titulo={"BEM VINDO A ESCOLA AMORINHA"}/>
            <Form 
                tituloDoForm={"Cadastro de alunos"}
                nome={"Nome: "} 
                dtNasc={"Data Nascimento: "}
                responsavel={"Responsavel: "}
                telefone={"Telefone: "}
                emergencia={"Emergencia avisar: "}
                restricoes={"Restrição alimentar"}
                lista={"Quem pode buscar a criança"}
                observacoes={"observações adicionais"} 
                />
                <Link to="/">
                <Button variant="contained" color="primary">back</Button>
                </Link>
        </>
        );
    }
}
export default RegisterStudantPage;