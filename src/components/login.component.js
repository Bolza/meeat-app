import firebase from 'firebase';
import React, { Component } from 'react';
import { Button } from 'react-native-material-ui';
import { Text, StyleSheet } from 'react-native';

import { Card, CardSection, Input, Spinner, Container } from './common';

class Login extends Component {

    state = { 
        email: '', 
        password: '',
        error: '',
        message: '',
        loading: false,
    };
    
    componentDidMount() {
        
    }    
    
    onCreationError(resp) {
        console.log('onCreationError', resp);
        this.setState({ loading: false, message: '', error: resp.message });
    }
    onCreationSuccess(resp) {
        console.log('onCreationSuccess', resp);
        this.setState({ loading: false, error: '', message: 'Creation Success' });
    }
    onLoginSuccess(resp) {
        console.log('onLoginSuccess', resp);
        this.setState({ loading: false, error: '', message: 'Login Success' });
    }
    
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(this.onCreationSuccess.bind(this))
                    .catch(this.onCreationError.bind(this));
            });
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
            <Card>
                <CardSection>
                    <Input
                        label="email"
                        placeholder="Insert email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email: email.toLowerCase() })}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input
                        secure
                        label="password"
                        placeholder="Insert password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
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

export { Login };
