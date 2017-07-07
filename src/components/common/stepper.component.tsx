import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements'

interface State {
    counter: number;
}
interface Props {
    style?: any;
    startFrom?: number;
    max?: number;
    min?: number;
}

class Stepper extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.startFrom || this.props.min || 0,
        };
    }

    increase() {
        const counter = this.state.counter + 1;
        if (counter <= this.props.max || isNaN(this.props.max)) {
            this.setState({counter});
        }
    }
    decrease() {
        const counter = this.state.counter - 1;
        if (counter >= this.props.min || isNaN(this.props.min)) {
            this.setState({counter});
        }
    }

    render() {
        return (
            <View style={[styles.container, this.props.style] as any}>
                <Text style={styles.number}>{this.state.counter}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={styles.button}
                        icon={{name: 'keyboard-arrow-up'}}
                        onPress={() => this.increase()}
                    />
                    <Button
                        buttonStyle={styles.button}
                        icon={{name: 'keyboard-arrow-down'}}
                        onPress={() => this.decrease()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        width: 32,
        height: 32,
        padding: 0,
        paddingLeft: 6,
        margin: 0
    },
    number: {
        fontSize: 26
    },
    buttonContainer: {
        alignSelf: 'flex-end',
        margin: 0
    }
} as any);

export { Stepper };
