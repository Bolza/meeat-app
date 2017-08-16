import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

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
        // const provider = new firebase.auth.GoogleAuthProvider();
        // // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        // firebase.auth().signInWithRedirect(provider).then(function(result) {
        //     const token = result.credential.accessToken;
        //     const user = result.user;
        //     console.log(user, token)
        // }).catch((error) => {
        //     // ...
        // });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => dispatch(LoginSuccessAction(user)))
            // .catch(() => dispatch(LoginFailAction()))
            .catch(() => {
                // firebase.auth().createUserWithEmailAndPassword(email, password)
                //     .then(user => dispatch(LoginSuccessAction(user)))
                //     .catch(() => dispatch(LoginFailAction()));
            });
    };
};

export const LOGIN_SUCCESS_ACTION = 'Login Success';
export const LoginSuccessAction = (user) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_SUCCESS_ACTION, payload: user });
        Actions.Meeat();
        // Actions.EventList();
    };
};

export const LOGIN_FAIL_ACTION = 'Login FAIL';
export const LoginFailAction = () => {
    return {
        type: LOGIN_FAIL_ACTION,
        payload: null
    };
};
