import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/login.component';
import EmployeeListComponent from './components/employee-list.component';

const RouterComponent = () => {
    return (
        <Router sceneStyle={style}>
            <Scene key="auth">
                <Scene key="login" component={Login} title="Login" initial />
            </Scene>
            <Scene key="main">
                <Scene key="employeeList" component={EmployeeListComponent} title="Employees" />
            </Scene>
        </Router>
    );
};

const style = {
    paddingTop: 65
};

export default RouterComponent;
