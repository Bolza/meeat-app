import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'

interface State {
    counter: number;
}
interface Props {
    startFrom: number;
    max: number;
    min: number;
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
        if (counter <= this.props.max) {
            this.setState({counter});
        }
    }
    decrease() {
        const counter = this.state.counter - 1;
        if (counter >= this.props.min) {
            this.setState({counter});
        }
    }

    render() {
        return (
        <View style={styles.label}>
            <Text>{this.state.counter}</Text>
            <Button
                large
                iconRight
                icon={{name: 'code'}}
                title='Up'
                onPress={() => this.increase()}
            />
            <Button
                large
                iconRight
                icon={{name: 'code'}}
                title='Down'
                onPress={() => this.decrease()}
            />
        </View>
        );
    }
}

const styles = {
    label: {
    }
};

export { Stepper };
