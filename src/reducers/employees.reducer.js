import { FETCH_EMPLOYEES_SUCCESS } from '../actions/employee.actions';

const INITIAL_STATE = {
    employeeList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employeeList: [
                    ...state.employeeList,
                    ...action.payload,
                ]
            };
        default:
            return state;
    }
};
