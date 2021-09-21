import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";


const Form = (props) => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [avisar, setAvisar] = useState(['Pai', 'Mãe', 'Tio', 'Tia', 'Avós'])
  const [selectedPosition, setSelectedPosition] = useState('')
/* class Form extends React.Component {
   constructor(props){
    super(props);
    this.state={
        name: "",
        date: "",
        avisar: ["Pai", "Mãe", "Tio", "Tia", "Avós"],
        selectedPosition: "",


  };
 }; */

 const handleChange = (event) => {
  const inputName = event.target.name;
  const value = event.target.value;
  if (inputName === "phone") {
    this.setPhone(value);
  } else {
    this.setState({ [inputName]: event.target.value });
  }
};

  const onSubmit = (event) => {
    console.log({event});
    event.preventDefault();

  }

/*  componentDidMount () {
  const posicao = this.props.avisar;
  this.setState({
    posicao,
  });
 } */

      return(
          
        <form onSubmit={onSubmit}>

         <TextField 
            label={props.lblName}
            type="text"
            name="name"
            htmlFor="name"
            value={props.name}
            placeholder={props.plch_name}
            required
            fullWidth
          />

          <TextField 
            label={props.lblDate}
            type="date"
            name="date"
            fullWidth
            
          />

          <TextField 
             label={props.lblResponsavel}
             type="text"
             name="responsabel"
             htmlFor="responsavel"
             value={props.responsavel}
             placeholder={props.plch_responsavel}
             required
             fullWidth
              />
        
          <TextField 
               label="Telefone"
               type="tel"
               name="telefone"
               htmlFor="telefone"
               value={props.telefone}
               required
               fullWidth
          
          />
          <TextField
              label={props.lblEmergencia}
              select
              value={selectedPosition} 
              onChange={handleChange}
              name="selectedPosition" 
              fullWidth
          >
            {avisar.map((item, index) => {
              console.log(item);
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </TextField >
          <TextField 
            type="checkbox"
            text="Possui alguma restição alimentar?"
            required
          />
                    <label for="restri">{props.restricoes}</label>
                    <input type="text" id="restri" disabled placeholder="Informe quais restrições a criança tem" />
                    <br/>
                    <input type="checkbox" required/>Autorizo o uso de imagems e videos para fins escolar?
                    <br/>
                    <select>{props.lista}
                        <option value="">Turma</option>
                        <optgroup></optgroup>
                    </select>
                    <br/><br/>
                    <textarea>{props.observacoes}</textarea>
                    <br/>
                    <input type="submit"/>
               {/*  </fieldset> */}
            </form>
            
        );
}

export default Form;