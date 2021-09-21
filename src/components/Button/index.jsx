  import React from "react"; 
 import Button from "@material-ui/core/Button" 


const IsButton = () => {
        return ( <Button
        variant="contained"
        color="primary">
        {this.props.title}
        </Button>
    );
   
}

export default IsButton; 

