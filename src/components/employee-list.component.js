import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import {FetchEmployeesAction, EmployeesZoomAction} from '../actions/employee.actions';

class EmployeeListComponent extends Component {
    state = {}

    componentWillMount() {
        this.props.dispatch(new FetchEmployeesAction());
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = this.dataSource.cloneWithRows(this.props.employeeList);
    }

    componentWillReceiveProps(next) {
        this.dataSource = this.dataSource.cloneWithRows(next.employeeList);
    }

    onPressRow(row) {
        this.props.dispatch(new EmployeesZoomAction(row.id));
    }

    renderRow(item) {
        return (
            <TouchableHighlight onPress={this.onPressRow.bind(this, item)}>
                <Text >{item.name}</Text>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const {employeeList} = state.employees;
    console.log(employeeList);
    return {employeeList};
};

export default connect(mapStateToProps)(EmployeeListComponent);
