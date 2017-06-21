import { INPUT_CHANGED_ACTION } from '../actions/employee.actions';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_CHANGED_ACTION:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            };
        default:
            return state;
    }
};
