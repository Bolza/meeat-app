/* eslint-disable max-len */
import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import {GoogleSignin} from 'react-native-google-signin';

import { LoginWithGoogleAction } from './login.actions';
import { AppState } from '../../types';
import { IOS_CLIENT_ID } from '../../constants';
/* eslint-enable max-len */

interface State { [key: string]: any };
interface Props { [key: string]: any }

class LoginGoogleComponent extends Component<Props, State> {
    render() {
        return (
            <Button
                title='SignIn with Google'
                onPress={this.signin.bind(this)}
            />
        );
    }

    private signin() {
        GoogleSignin
            .configure({
                iosClientId: IOS_CLIENT_ID
            })
            .then((isOk) => {
                this.props.dispatch(LoginWithGoogleAction())
            })
            .done();
    }
}

const mapStateToProps = (state: AppState) => {
    return {
    };
};

const LoginGoogle = connect(mapStateToProps)(LoginGoogleComponent);
export {LoginGoogle};