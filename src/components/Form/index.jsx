import React from "react";
import TextField from "@material-ui/core/TextField";

class Form extends React.Component {
   constructor(props){
    super(props);
    this.state={
        name: "",

  };
 };
    render () {
      return(
          <>
        <form>

         <TextField 
            label="Name"
            type="text"
            name="name"
            htmlFor="name"
            value={this.props.name}
            placeholder="Preencha o nome da criança"
            required
            fullWidth
          />

          <TextField 
            label="Date"
            type="date"
            name="date"
            fullWidth
            
          />
                    
                    <label for="data">{this.props.dtNasc}</label>
                    <input type="text" id="data" placeholder="Informe a data de nascimento" />
                    <br/>
                    <label for="responsavel">{this.props.responsavel}</label>
                    <input type="text" id="responsavel" placeholder="Informe o nome do responsavel" />
                    <br/>
                    <label for="telefone">{this.props.telefone}</label>
                    <input type="text" id="telefone" placeholder="Informe o telefone do responsavel" />
                    <br/>
                    <label for="emergencia">{this.props.emergencia}</label>
                    <input type="text" id="emergencia" placeholder="ex: papai mamãe avo tio...." />
                    <br/>
                    <input type="checkbox" required/>Possui alguma restição alimentar?
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