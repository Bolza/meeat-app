import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import {InputChangedAction} from '../actions/employee.actions';

class CreateEmployee extends Component {
    state = {}

    inputUpdated(prop, value) {
        this.props.dispatch(new InputChangedAction({prop, value}));
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Name" placeholder="Jane" onChangeText={text => this.inputUpdated('name', text)} />
                </CardSection>
                <CardSection>
                    <Input label="Phone" placeholder="0123" onChangeText={text => this.inputUpdated('phone', text)} />
                </CardSection>
                <CardSection>
                    <Input label="email" placeholder="Jane" />
                </CardSection>
                <CardSection>
                    <Button title="Create" placeholder="Jane" />
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeCreate;
    return {name, phone, shift};
};

export default connect(mapStateToProps)(CreateEmployee);
