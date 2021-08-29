import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
/* import Button from "./components/Button"; */
import EditingStudantPage from "./pages/EditingEstudentPage";
import Homepage from "./pages/Homepage";
import RegisterStudantPage from "./pages/RegisterStudentPage";

class Routes extends React.Component {

    render() { 
        return (  
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Homepage />
                    </Route>

                {/*     <Route path="/register">
                        <RegisterStudantPage />
                    </Route> */}
                    <Route path="/register" component={RegisterStudantPage}/>

                    <Route path="/editing">
                        <EditingStudantPage />
                    </Route>

                    <Route>
                        404 NOT FOUND
                    </Route>
                </Switch>
            </Router>
        );
    } 
}
 
export default Routes;