/* eslint-disable max-len */
import React, { Component } from 'react';
import { COLOR, ThemeProvider, Button } from 'react-native-material-ui';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { EmailChangedAction, PasswordChangedAction, LoginSuccessAction, LoginAttemptAction } from '../actions/auth.actions';
import { Card, CardSection, Input, Spinner, Container } from './common';
/* eslint-enable max-len */

class Login extends Component {

    state = { 
        email: 'asd@asd.asd', 
        password: 'asdasd',
        error: '',
        message: '',
        loading: false,
    };
    
    componentDidMount() {
        
    }    
    
    onCreationError(resp) {
        // console.log('onCreationError', resp);
        this.setState({ loading: false, message: '', error: resp.message });
    }
    onCreationSuccess(resp) {
        // console.log('onCreationSuccess', resp);
        this.setState({ loading: false, error: '', message: 'Creation Success' });
    }
    onLoginSuccess(resp) {
        // console.log('onLoginSuccess', resp);
        this.setState({ loading: false, error: '', message: 'Login Success' });
        // this.props.LoginSuccessAction(resp);
    }
    
    onButtonPress() {
        let { email, password } = this.props;
        email = 'asd@asd.asd';
        password = 'asdasd';
        this.setState({ error: '', loading: true });
        this.props.dispatch(new LoginAttemptAction({ email, password }));
    }
    
    onPasswordChange(text) {
        this.props.dispatch(new PasswordChangedAction(text));
    }

    onEmailChange(text) {
        const lowText = text.toLowerCase();
        this.props.dispatch(new EmailChangedAction(lowText));
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }
        
        const cc = { container: styles.loginButton };
        return (
            <Button 
                style={cc}
                primary raised 
                onPress={this.onButtonPress.bind(this)}
                text='Login' 
            />
        );
    }

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                
            <Card>
                <CardSection>
                    <Input
                        label="email"
                        placeholder="Insert email"
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input
                        secure
                        label="password"
                        placeholder="Insert password"
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                
                <Container
                    spring
                    loading={this.state.loading}
                    error={this.state.error}
                    message={this.state.message}
                >
                    <Text> wtf </Text>
                </Container>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>

            </ThemeProvider>
        );
    }
}
const styles = StyleSheet.create({
    error: {
        marginTop: 10,
        // fontSize: 16,
        alignSelf: 'center',
        color: '#ff0000',
    },
    message: {
        marginTop: 10,
        // fontSize: 16,
        alignSelf: 'center',
        color: '#0000ff',
    },
    loginButton: {
        flex: 1,
    }, 
});

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
    };
};

export default connect(mapStateToProps)(Login);
