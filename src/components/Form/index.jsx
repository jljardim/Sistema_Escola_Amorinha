import React from "react";
import TextField from "@material-ui/core/TextField";

class Form extends React.Component {
   constructor(props){
    super(props);
    this.state={
        name: "",
        date: "",
        avisar: ["Pai", "Mãe", "Tio", "Tia", "Avós"],


  };
 };
 componentDidMount () {
  const posicao = this.props.avisar;
  this.setState({
    posicao,
  });
 }
    render () {
      return(
          <>
        <form>

         <TextField 
            label={this.props.lblName}
            type="text"
            name="name"
            htmlFor="name"
            value={this.props.name}
            placeholder={this.props.plch_name}
            required
            fullWidth
          />

          <TextField 
            label={this.props.lblDate}
            type="date"
            name="date"
            fullWidth
            
          />

          <TextField 
             label={this.props.lblResponsavel}
             type="text"
             name="responsabel"
             htmlFor="responsavel"
             value={this.props.responsavel}
             placeholder={this.props.plch_responsavel}
             required
             fullWidth
          
          />
          <TextField 
               label="Telefone"
               type="tel"
               name="telefone"
               htmlFor="telefone"
               value={this.props.telefone}
               required
               fullWidth
          
          />
          <TextField 
              label={this.props.lblEmergencia}
              select
              value={this.state.posicao} 
              name="emergencia" 
              fullWidth
          />
          <TextField 
            type="checkbox"
            text="Possui alguma restição alimentar?"
            required
          />

                    {/* <input type="checkbox" required/>Possui alguma restição alimentar? */}
                    <br/>
                    <label for="restri">{this.props.restricoes}</label>
                    <input type="text" id="restri" disabled placeholder="Informe quais restrições a criança tem" />
                    <br/>
                    <input type="checkbox" required/>Autorizo o uso de imagems e videos para fins escolar?
                    <br/>
                    <select>{this.props.lista}
                        <option value="">Turma</option>
                        <optgroup></optgroup>
                    </select>
                    <br/><br/>
                    <textarea>{this.props.observacoes}</textarea>
                    <br/>
                    <input type="submit"/>
               {/*  </fieldset> */}
            </form>
            </>
        );
    }
}

export default Form;