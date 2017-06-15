import React, { Component } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import { Spinner } from './';

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

class Container extends Component {
    state = {
        loading: this.props.loading,
        message: this.props.message,
        error: this.props.error,
        spring: this.props.spring,
        springAnim: new Animated.Value(0),
    }

    componentWillReceiveProps(newProps) {
        this.setState({ ...this.state, ...newProps });
        return true;        
    }

    renderContent() {
        // console.log(this.state);
        if (this.state.loading) {
            return <Spinner />;
        } else if (this.state.error) {
            return <Text style={styles.error}>{this.state.error}</Text>;
        } else if (this.state.message) {
            return <Text style={styles.message}>{this.state.message}</Text>;
        }
        return this.props.children || null;
    }

    render() {
        const toValue = this.state.loading || this.state.message || this.state.error ? 60 : 0;
        Animated.spring(this.state.springAnim, { toValue, friction: 10 }).start();
        
        return (
            <Animated.View style={{ height: this.state.springAnim }}>
                <ThemeProvider uiTheme={uiTheme}>
                    {this.renderContent()}  
                </ThemeProvider>
            </Animated.View>
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
});

export { Container };
