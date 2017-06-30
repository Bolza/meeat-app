import { INPUT_CHANGED_ACTION, CREATE_EMPLOYEE_SUCCESS_ACTION } from '../actions/employee.actions';
const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_CHANGED_ACTION:
            return Object.assign({}, state, { [action.payload.prop]: action.payload.value });
        case CREATE_EMPLOYEE_SUCCESS_ACTION:
            return Object.assign({}, state, INITIAL_STATE);
        default:
            return state;
    }
};
//# sourceMappingURL=employee.reducer.js.map 
//# sourceMappingURL=employee.reducer.js.map 
//# sourceMappingURL=employee.reducer.js.map 
//# sourceMappingURL=employee.reducer.js.map 
//# sourceMappingURL=employee.reducer.js.map 
//# sourceMappingURL=employee.reducer.js.map 
//# sourceMappingURL=employee.reducer.js.map 
//# sourceMappingURL=employee.reducer.js.map 
//# sourceMappingURL=employee.reducer.js.map 
//# sourceMappingURL=employee.reducer.js.map 
//# sourceMappingURL=employee.reducer.js.map 
//# sourceMappingURL=employee.reducer.js.map