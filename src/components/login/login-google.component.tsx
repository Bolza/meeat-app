/* eslint-disable max-len */
import React, { Component } from 'react';
// import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import { EmailChangedAction, PasswordChangedAction, LoginSuccessAction, LoginAttemptAction } from './login.actions';
import { Card, CardSection, Input, Spinner, Container } from '../common/index';
import { AuthState, AppState } from '../../types';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
/* eslint-enable max-len */

interface State { [key: string]: any };
interface Props { [key: string]: any }

class LoginGoogleComponent extends Component<Props, State> {
    render() {
        return (
            <Button
                title='login'
                onPress={this.signin.bind(this)}
            />
        );
    }

    private signin() {
        console.log('260439457350');
        GoogleSignin
            .configure({
                iosClientId: '260439457350-ds1ochruf7fb2uvg881o39tm9ko5ac1n.apps.googleusercontent.com'
            })
            .then((isOk) => {
                if (isOk) {
                    GoogleSignin
                        .signIn()
                        .then((user) => {
                            console.log(user);
                            this.setState({user: user});
                        })
                        .catch((err) => {
                            console.log('WRONG SIGNIN', err);
                        })
                        .done();
                }
            })
            .done();
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
    };
};

export {LoginGoogleComponent as LoginGoogle};