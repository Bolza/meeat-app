import { combineReducers } from 'redux';
import AuthReducer from '../components/login/auth.reducer';
import EmployeeCreateReducer from './employee.reducer';
import EmployeesReducer from './employees.reducer';
import EventCreationReducer from '../components/event-creation/event-creation.reducer';

export default combineReducers({
    auth: AuthReducer,
    employeeCreate: EmployeeCreateReducer,
    employees: EmployeesReducer,
    eventCreation: EventCreationReducer,
});
