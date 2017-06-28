import { forOwn } from 'lodash';

import { EMPLOYEES_FETCH_ACTION_SUCCESS } from '../actions/employee.actions';

const INITIAL_STATE = {
    employeeList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_ACTION_SUCCESS: 
            
            return {
                ...state,
                employeeList: [
                    ...state.employeeList,
                    ...normalizeAPIResponse(action.payload),
                ]
            };
        
        default:
            return state;
    }
};

const normalizeAPIResponse = (response) => {
    const result = [];
    forOwn(response, (value, key) => {
       result.push({...value, id: key});
    });
    return result;
};
