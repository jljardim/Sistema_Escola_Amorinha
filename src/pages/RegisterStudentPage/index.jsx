import React from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";

class RegisterStudantPage extends React.Component {
  
    render () {
        return (
        <>
            <Header title={"BEM VINDO A ESCOLA AMORINHA"}
            init="/" />
            <Form 
                //tituloDoForm={"Cadastro de alunos"}
                lblName={"Nome: "} 
                lblDate={"Date: "} 
                lblResponsavel={"Responsavel: "} 
                lblTelefone={"Telefone: "} 
                lblEmergencia={"Emergencia: "} 
                plch_name={"informe o nome do aluno"}
                plch_responsavel={"informe o nome do responsavel"}
                plch_emergencia={"informe o nome do responsavel"}
                dtNasc={"Data Nascimento: "}
                emergencia={"Emergencia avisar: "}
                restricoes={"Restrição alimentar"}
                lista={"Quem pode buscar a criança"}
                observacoes={"observações adicionais"} 
                />
        </>
        );
    }
}
export default RegisterStudantPage;