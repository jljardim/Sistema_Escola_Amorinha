import React from "react";
import AlunoList from "../../components/AlunosList";
import AlunosListItem from "../../components/AlunosListItem";
import Form from "../../components/Form";
import Header from "../../components/Header";

class Homepage extends React.Component {
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
            <AlunoList/>
            <AlunosListItem/>
        
        </>
        );
    }
}
export default Homepage;