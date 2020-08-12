import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
    return (
        <div>
            <Router>

                <HeaderComponent/>

                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListEmployeeComponent}></Route>
                        <Route path="/employees" component={ListEmployeeComponent}></Route>
                        <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                        <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
                        <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
                    </Switch>

                </div>

                <FooterComponent/>

            </Router>
        </div>

    );
}

export default App;
