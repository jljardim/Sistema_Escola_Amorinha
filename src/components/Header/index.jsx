import React from "react";
import PropTypes from "prop-types";
import { AppBar,
         Button,
         Toolbar,
         Typography,
         } from "@material-ui/core";
import { Link } from "react-router-dom";
import { KeyboardArrowLeft } from "@material-ui/icons";
import SimpleMenu from "../Menu";

class Header extends React.Component {
    static propTypes ={
        title: PropTypes.string,
        init: PropTypes.string,

    };

    render () {
        return (
            <AppBar position="static">
                <Toolbar>
                   
                       {/*  <SimpleMenu /> */}
                    
                    {this.props.init && (
                        <Link 
                            to={this.props.init}>
                                <KeyboardArrowLeft />
                        </Link>
                    )}
                <Typography>
                    {this.props.title}
                </Typography>
                <Button color="inherit">{this.props.btnName}</Button>
                </Toolbar>
            </AppBar>
            
        );
    }
}

export default Header;