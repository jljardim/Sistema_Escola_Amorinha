import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/icons/Menu";
import MenuItem  from "@material-ui/core/MenuItem";

export default function SimpleMenu() {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
    setAnchorEl(null);
   };
  
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Menu
                </Button>
            <Menu
             id="simple-menu"
             anchorEl={anchorEl}
             KeepMounted
             open={Boolean(anchorEl)}
             onClose={handleClose}
             >
            <MenuItem onClick={handleClose}>Cadastro</MenuItem>
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Listar</MenuItem>
            </Menu>

        </div>
    );
}