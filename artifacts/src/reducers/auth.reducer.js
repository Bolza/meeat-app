/* eslint-disable max-len */
import { EMAIL_CHANGED_ACTION, PASSWORD_CHANGED_ACTION, LOGIN_SUCCESS_ACTION, LOGIN_FAIL_ACTION, LOGIN_ATTEMPT_ACTION } from '../actions';
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: null,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED_ACTION:
            return Object.assign({}, state, { email: action.payload });
        case PASSWORD_CHANGED_ACTION:
            return Object.assign({}, state, { password: action.payload });
        case LOGIN_ATTEMPT_ACTION:
            return Object.assign({}, state, { error: null });
        case LOGIN_SUCCESS_ACTION:
            return Object.assign({}, state, { user: action.payload });
        case LOGIN_FAIL_ACTION:
            return Object.assign({}, state, { error: LOGIN_FAIL_ACTION });
        default:
            return state;
    }
};
//# sourceMappingURL=auth.reducer.js.map