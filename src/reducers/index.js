import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import EmployeeCreateReducer from './employee.reducer';
import EmployeesReducer from './employees.reducer';

export default combineReducers({
    auth: AuthReducer,
    employeeCreate: EmployeeCreateReducer,
    employees: EmployeesReducer
});
