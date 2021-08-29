  import React from "react"; 
 import Button from "@material-ui/core/Button" 
 
 class  IsButton extends React.Component {
    render() {
        return <Button
        variant="contained"
        color="primary">
        {this.props.title}
        </Button>
    }
}

export default IsButton; 

