// import firebase from 'firebase';
// import {Actions} from 'react-native-router-flux';

export const INPUT_CHANGED_ACTION = 'Input changed';
export const InputChangedAction = ({prop, value}) => {
    return {
        type: INPUT_CHANGED_ACTION,
        payload: {prop, value}
    };
};

export const CREATE_EMPLOYEE_ACTION = 'Create Employee';
export const CreateEmployeedAction = ({name, phone, shift}) => {
    return {
        type: CREATE_EMPLOYEE_ACTION,
        payload: {name, phone, shift}
    };
};
