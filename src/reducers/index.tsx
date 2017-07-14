import { combineReducers } from 'redux';
import AuthReducer from '../components/login/auth.reducer';
import EmployeeCreateReducer from './employee.reducer';
import EmployeesReducer from './employees.reducer';
import EventCreationReducer from '../components/event-creation/event-creation.reducer';
import EventListReducer from '../components/event-list/event-list.reducer';
import { AppState } from '../types';

type AppReducers = {
    [P in keyof AppState]: any;
};

const appReducers: AppReducers = {
    auth: AuthReducer,
    // employeeCreate: EmployeeCreateReducer,
    // employees: EmployeesReducer,
    eventCreation: EventCreationReducer,
    events: EventListReducer,
};

export default combineReducers(appReducers);
