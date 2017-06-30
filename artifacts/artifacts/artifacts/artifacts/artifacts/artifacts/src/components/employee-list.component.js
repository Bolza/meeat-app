import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ListView, TouchableHighlight } from 'react-native';
import { FetchEmployeesAction, EmployeesZoomAction } from '../actions/employee.actions';
class EmployeeListComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
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
        return (React.createElement(TouchableHighlight, { onPress: this.onPressRow.bind(this, item) }, React.createElement(Text, null, item.name)));
    }
    render() {
        return (React.createElement(ListView, { enableEmptySections: true, dataSource: this.dataSource, renderRow: this.renderRow.bind(this) }));
    }
}
const mapStateToProps = (state) => {
    const { employeeList } = state.employees;
    console.log(employeeList);
    return { employeeList };
};
export default connect(mapStateToProps)(EmployeeListComponent);
//# sourceMappingURL=employee-list.component.js.map 
//# sourceMappingURL=employee-list.component.js.map 
//# sourceMappingURL=employee-list.component.js.map 
//# sourceMappingURL=employee-list.component.js.map 
//# sourceMappingURL=employee-list.component.js.map 
//# sourceMappingURL=employee-list.component.js.map