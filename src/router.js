import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/login.component';
import EmployeeListComponent from './components/employee-list.component';


const RouterComponent = () => {
    return (
        <Router sceneStyle={style}>
            <Scene key="login" component={Login} title="Login" initial />
            <Scene key="employeelist" component={EmployeeListComponent} title="Employees" />
        </Router>
    );
};

const style = {
    paddingTop: 65
};

export default RouterComponent;
