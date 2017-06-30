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
    constructor() {
        super(...arguments);
        this.state = {
            loading: this.props.loading,
            message: this.props.message,
            error: this.props.error,
            spring: this.props.spring,
            springAnim: new Animated.Value(0),
        };
    }
    componentWillReceiveProps(newProps) {
        this.setState(Object.assign({}, this.state, newProps));
        return true;
    }
    renderContent() {
        // console.log(this.state);
        if (this.state.loading) {
            return React.createElement(Spinner, null);
        }
        else if (this.state.error) {
            return React.createElement(Text, { style: styles.error }, this.state.error);
        }
        else if (this.state.message) {
            return React.createElement(Text, { style: styles.message }, this.state.message);
        }
        return this.props.children || null;
    }
    render() {
        const toValue = this.state.loading || this.state.message || this.state.error ? 60 : 0;
        Animated.spring(this.state.springAnim, { toValue, friction: 10 }).start();
        return (React.createElement(Animated.View, { style: { height: this.state.springAnim } }, React.createElement(ThemeProvider, { uiTheme: uiTheme }, this.renderContent())));
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
//# sourceMappingURL=container.component.js.map 
//# sourceMappingURL=container.component.js.map