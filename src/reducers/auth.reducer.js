import { EMAIL_CHANGED_ACTION, PASSWORD_CHANGED_ACTION, LOGIN_SUCCESS_ACTION } from '../actions';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED_ACTION:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED_ACTION:
            return { ...state, password: action.payload };
        case LOGIN_SUCCESS_ACTION:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
