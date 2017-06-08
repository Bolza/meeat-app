
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
export const LoginAttemptAction = (text) => {
    return {
        type: LoginAttemptActionType,
        payload: text
    };
};
