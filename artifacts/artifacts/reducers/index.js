import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import EmployeeCreateReducer from './employee.reducer';
import EmployeesReducer from './employees.reducer';
import EventCreationReducer from './eventCreation.reducer';
export default combineReducers({
    auth: AuthReducer,
    employeeCreate: EmployeeCreateReducer,
    employees: EmployeesReducer,
    eventCreation: EventCreationReducer,
});
//# sourceMappingURL=index.js.map 
//# sourceMappingURL=index.js.map