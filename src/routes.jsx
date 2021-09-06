import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
/* import Button from "./components/Button"; */
import EditingStudantPage from "./pages/EditingEstudentPage";
import Homepage from "./pages/Homepage";
import RegisterStudantPage from "./pages/RegisterStudentPage";
import StudentList from "./pages/ListStudentPage";

class Routes extends React.Component {

    render() { 
        return (  
            <Router>
                <Switch>
                    <Route path="/" component={Homepage} exact />

                    <Route path="/register" component={RegisterStudantPage}/>

                    <Route path="/editing" component={EditingStudantPage}/>

                    <Route path="/list" component={StudentList}/>
                    <Route>
                        404 NOT FOUND
                    </Route>
                </Switch>
            </Router>
        );
    } 
}
 
export default Routes;