import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const INPUT_CHANGED_ACTION = 'Input changed';
export const InputChangedAction = ({prop, value}) => {
    return {
        type: INPUT_CHANGED_ACTION,
        payload: {prop, value}
    };
};

export const CREATE_EMPLOYEE_ACTION = 'Create Employee';
export const CreateEmployeeAction = ({name, phone, shift}) => {
    return (dispatch) => {
        dispatch({ type: CREATE_EMPLOYEE_ACTION });
        const user = firebase.auth().currentUser;
        firebase.database().ref(`/users/${user.uid}/employees`)
            .push({name, phone, shift})
            .then(res => dispatch(new CreateEmployeeSuccessAction(res)))
            .catch(() => dispatch(new CreateEmployeeFailAction()));
    };
};

export const CREATE_EMPLOYEE_SUCCESS_ACTION = 'Create Employee Success';
export const CreateEmployeeSuccessAction = () => {
    return () => Actions.employeeList({type: 'reset'});
};

export const CREATE_EMPLOYEE_FAIL_ACTION = 'Create Employee Fail';
export const CreateEmployeeFailAction = (error) => {
    return {
        type: CREATE_EMPLOYEE_FAIL_ACTION,
        payload: error
    };
};
