import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/login.component';
import EmployeeListComponent from './components/employee-list.component';
import CreateEmployee from './components/create-employee.component';
import EventCreationComponent from './components/event-creation.component';
const RouterComponent = () => {
    return (React.createElement(Router, { sceneStyle: style }, React.createElement(Scene, { key: "meeat", initial: true }, React.createElement(Scene, { key: "EventCreation", component: EventCreationComponent, title: "EventCreationComponent" })), React.createElement(Scene, { key: "main" }, React.createElement(Scene, { key: "employeeList", component: EmployeeListComponent, title: "Employees", rightTitle: "Add", onRight: () => Actions.createEmployee() }), React.createElement(Scene, { key: "createEmployee", component: CreateEmployee, title: "Create Employee" })), React.createElement(Scene, { key: "auth" }, React.createElement(Scene, { key: "login", component: Login, title: "Login" }))));
};
const style = {
    paddingTop: 65
};
export default RouterComponent;
//# sourceMappingURL=router.js.map 
//# sourceMappingURL=router.js.map 
//# sourceMappingURL=router.js.map 
//# sourceMappingURL=router.js.map 
//# sourceMappingURL=router.js.map 
//# sourceMappingURL=router.js.map 
//# sourceMappingURL=router.js.map 
//# sourceMappingURL=router.js.map 
//# sourceMappingURL=router.js.map 
//# sourceMappingURL=router.js.map