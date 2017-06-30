import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export const INPUT_CHANGED_ACTION = 'Input changed';
export const InputChangedAction = ({ prop, value }) => {
    return {
        type: INPUT_CHANGED_ACTION,
        payload: { prop, value }
    };
};
export const CREATE_EMPLOYEE_ACTION = 'Create Employee';
export const CreateEmployeeAction = ({ name, phone, shift }) => {
    return (dispatch) => {
        dispatch({ type: CREATE_EMPLOYEE_ACTION });
        const user = firebase.auth().currentUser;
        firebase.database().ref(`/users/${user.uid}/employees`)
            .push({ name, phone, shift })
            .then(res => dispatch(new CreateEmployeeSuccessAction(res)))
            .catch(() => dispatch(new CreateEmployeeFailAction()));
    };
};
export const CREATE_EMPLOYEE_SUCCESS_ACTION = 'Create Employee Success';
export const CreateEmployeeSuccessAction = () => {
    return (dispatch) => {
        dispatch({ type: CREATE_EMPLOYEE_SUCCESS_ACTION });
        Actions.employeeList({ type: 'reset' });
    };
};
export const CREATE_EMPLOYEE_FAIL_ACTION = 'Create Employee Fail';
export const CreateEmployeeFailAction = (error) => {
    return {
        type: CREATE_EMPLOYEE_FAIL_ACTION,
        payload: error
    };
};
// XXX Listener should be added once
export const EMPLOYEES_FETCH_ACTION = 'Fetch Employees';
export const FetchEmployeesAction = () => {
    return (dispatch) => {
        const user = firebase.auth().currentUser;
        firebase.database().ref(`/users/${user.uid}/employees`)
            .on('value', (snapshot) => {
            dispatch(new FetchEmployeesSuccessAction(snapshot.val()));
        });
    };
};
export const EMPLOYEES_FETCH_ACTION_SUCCESS = 'Fetch Employees Success';
export const FetchEmployeesSuccessAction = (newEmployee) => {
    return {
        type: EMPLOYEES_FETCH_ACTION_SUCCESS,
        payload: newEmployee
    };
};
export const EMPLOYEES_ZOOM_ACTION = 'Zoom Employee';
export const EmployeesZoomAction = (employeeId) => {
    return (dispatch) => {
        //   should be stored by reducer
        dispatch({ type: EMPLOYEES_ZOOM_ACTION, payload: employeeId });
        Actions.createEmployee({ type: 'reset', id: employeeId });
    };
};
//# sourceMappingURL=employee.actions.js.map 
//# sourceMappingURL=employee.actions.js.map 
//# sourceMappingURL=employee.actions.js.map 
//# sourceMappingURL=employee.actions.js.map