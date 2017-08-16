/* eslint-disable max-len */
import React, { Component } from 'react';
import { COLOR, ThemeProvider, Button } from 'react-native-material-ui';
import { Text, StyleSheet } from 'react-native';
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
            <GoogleSigninButton
                style={{width: 48, height: 48}}
                size={GoogleSigninButton.Size.Icon}
                color={GoogleSigninButton.Color.Dark}
                onPress={this.signin.bind(this)}
            />
        );
    }

    private signin() {
        GoogleSignin.signIn()
            .then((user) => {
                console.log(user);
                this.setState({user: user});
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
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