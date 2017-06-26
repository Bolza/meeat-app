import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import {FetchEmployeesAction} from '../actions/employee.actions';

class EmployeeListComponent extends Component {
    state = {}

    componentWillMount() {
        this.props.dispatch(new FetchEmployeesAction());
    }

    render() {
        return (
            <View>
                <Text>Element1</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {employeeList} = state.employees;
    console.log(employeeList)
    return {employeeList};
};

export default connect(mapStateToProps)(EmployeeListComponent);
