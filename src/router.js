import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/login.component';
import EmployeeListComponent from './components/employee-list.component';
import CreateEmployee from './components/create-employee.component';

const RouterComponent = () => {
    return (
        <Router sceneStyle={style}>
           
            <Scene key="main">
                <Scene
                    key="employeeList" 
                    component={EmployeeListComponent} 
                    title="Employees" 
                    rightTitle="Add"
                    onRight={() => Actions.createEmployee()}
                />
                <Scene 
                    key="createEmployee" 
                    component={CreateEmployee} 
                    title="Create Employee" 
                />
            </Scene>
             <Scene key="auth" initial>
                <Scene key="login" component={Login} title="Login"  />
            </Scene>
        </Router>
    );
};

const style = {
    paddingTop: 65
};

export default RouterComponent;
