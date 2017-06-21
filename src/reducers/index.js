import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import EmployeeCreateReducer from './employee.reducer';

export default combineReducers({
    auth: AuthReducer,
    employeeCreate: EmployeeCreateReducer
});
