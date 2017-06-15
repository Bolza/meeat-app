import firebase from 'firebase';
 
export const EMAIL_CHANGED_ACTION = 'Email changed';
export const EmailChangedAction = (text) => {
    return {
        type: EMAIL_CHANGED_ACTION,
        payload: text
    };
};

export const PASSWORD_CHANGED_ACTION = 'Password changed';
export const PasswordChangedAction = (text) => {
    return {
        type: PASSWORD_CHANGED_ACTION,
        payload: text
    };
};

export const LOGIN_ATTEMPT_ACTION = 'Login attempt';
export const LoginAttemptAction = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_ATTEMPT_ACTION });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => dispatch(new LoginSuccessAction(user)))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => dispatch(new LoginSuccessAction(user)))
                    .catch(() => dispatch(new LoginFailAction()));
            });
    };
};

export const LOGIN_SUCCESS_ACTION = 'Login Success';
export const LoginSuccessAction = (user) => {
    return {
        type: LOGIN_SUCCESS_ACTION,
        payload: user
    };
};

export const LOGIN_FAIL_ACTION = 'Login FAIL';
export const LoginFailAction = () => {
    return {
        type: LOGIN_FAIL_ACTION,
        payload: null
    };
};
