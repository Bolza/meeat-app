import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';

class CreateEmployee extends Component {
    state = {}

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Name" placeholder="Jane" />
                </CardSection>
                <CardSection>
                    <Input label="Phone" placeholder="0123" />
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
export default CreateEmployee;
