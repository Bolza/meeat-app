import React, { Component } from 'react';
import { View, Text, Button, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { InputChangedAction, CreateEmployeeAction } from '../actions/employee.actions';

class CreateEmployee extends Component {
    state = {}
    
    componentWillMount() {
        this.inputUpdated('shift', 'Mon');
    }    
    
    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.dispatch(new CreateEmployeeAction({name, phone, shift}));
    }

    inputUpdated(prop, value) {
        this.props.dispatch(new InputChangedAction({prop, value}));
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name" 
                        placeholder="Jane"
                        onChangeText={text => this.inputUpdated('name', text)} 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone" 
                        placeholder="0123" 
                        onChangeText={text => this.inputUpdated('phone', text)} 
                    />
                </CardSection>
                <CardSection style={styles.pickerSection}>
                    <Text style={styles.label}>Shift</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.inputUpdated('shift', value)}
                    > 
                        <Picker.Item label="Mon" value="Mon" />
                        <Picker.Item label="Tue" value="Tue" />
                        <Picker.Item label="Wed" value="Wed" />
                        <Picker.Item label="Thu" value="Thu" />
                        <Picker.Item label="Fri" value="Fri" />
                        <Picker.Item label="Sat" value="Sat" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button 
                        onPress={this.onButtonPress.bind(this)}
                        title="Create" placeholder="Jane" />
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    label: {
        fontSize: 18,
        paddingLeft: 20,
    },
    pickerSection: {
        // flexDirection: 'column',
    }
};

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeCreate;
    return {name, phone, shift};
};

export default connect(mapStateToProps)(CreateEmployee);
