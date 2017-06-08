import { EmailChangedActionType, PasswordChangedActionType } from '../actions';

const INITIAL_STATE = {
    email: '',
    password: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EmailChangedActionType:
            return { ...state, email: action.payload };
        case PasswordChangedActionType:
            return { ...state, password: action.payload };
        default:
            return state;
    }
};
