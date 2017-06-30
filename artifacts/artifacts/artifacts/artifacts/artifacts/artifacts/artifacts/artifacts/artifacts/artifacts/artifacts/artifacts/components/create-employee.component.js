import React, { Component } from 'react';
import { Text, Button, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { InputChangedAction, CreateEmployeeAction } from '../actions/employee.actions';
class CreateEmployee extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    componentWillMount() {
        this.inputUpdated('shift', 'Mon');
    }
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.dispatch(new CreateEmployeeAction({ name, phone, shift }));
    }
    inputUpdated(prop, value) {
        this.props.dispatch(new InputChangedAction({ prop, value }));
    }
    render() {
        return (React.createElement(Card, null, React.createElement(CardSection, null, React.createElement(Input, { label: "Name", placeholder: "Jane", onChangeText: text => this.inputUpdated('name', text) })), React.createElement(CardSection, null, React.createElement(Input, { label: "Phone", placeholder: "0123", onChangeText: text => this.inputUpdated('phone', text) })), React.createElement(CardSection, { style: styles.pickerSection }, React.createElement(Text, { style: styles.label }, "Shift"), React.createElement(Picker, { style: { flex: 1 }, selectedValue: this.props.shift, onValueChange: value => this.inputUpdated('shift', value) }, React.createElement(Picker.Item, { label: "Mon", value: "Mon" }), React.createElement(Picker.Item, { label: "Tue", value: "Tue" }), React.createElement(Picker.Item, { label: "Wed", value: "Wed" }), React.createElement(Picker.Item, { label: "Thu", value: "Thu" }), React.createElement(Picker.Item, { label: "Fri", value: "Fri" }), React.createElement(Picker.Item, { label: "Sat", value: "Sat" }))), React.createElement(CardSection, null, React.createElement(Button, { onPress: this.onButtonPress.bind(this), title: "Create", placeholder: "Jane" }))));
    }
}
const styles = {
    label: {
        fontSize: 18,
        paddingLeft: 20,
    },
    pickerSection: {}
};
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeCreate;
    return { name, phone, shift };
};
export default connect(mapStateToProps)(CreateEmployee);
//# sourceMappingURL=create-employee.component.js.map 
//# sourceMappingURL=create-employee.component.js.map 
//# sourceMappingURL=create-employee.component.js.map 
//# sourceMappingURL=create-employee.component.js.map 
//# sourceMappingURL=create-employee.component.js.map 
//# sourceMappingURL=create-employee.component.js.map 
//# sourceMappingURL=create-employee.component.js.map 
//# sourceMappingURL=create-employee.component.js.map 
//# sourceMappingURL=create-employee.component.js.map 
//# sourceMappingURL=create-employee.component.js.map 
//# sourceMappingURL=create-employee.component.js.map 
//# sourceMappingURL=create-employee.component.js.map