import firebase from 'firebase';
 
export const EmailChangedActionType = 'Email changed';
export const EmailChangedAction = (text) => {
    return {
        type: EmailChangedActionType,
        payload: text
    };
};

export const PasswordChangedActionType = 'Password changed';
export const PasswordChangedAction = (text) => {
    return {
        type: PasswordChangedActionType,
        payload: text
    };
};

export const LoginAttemptActionType = 'Login attempt';
export const LoginAttemptAction = ({ email, password }) => {
    return (dispatch) => {
        console.log(email, password)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => dispatch(new LoginSuccessAction(user)));
    };
};

export const LoginSuccessActionType = 'Login Success';
export const LoginSuccessAction = (user) => {
    return {
        type: LoginSuccessActionType,
        payload: user
    };
};
