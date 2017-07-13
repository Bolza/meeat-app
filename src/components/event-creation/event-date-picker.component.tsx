import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

import { EventCreationSetDateAction } from './event-creation.actions';

interface State { [key: string]: any }
interface Props { [key: string]: any }

const DEFAULT_DATE = moment().format('LT');

class DatePickerComponent extends Component<Props, State> {
    constructor(props) {
       super(props);
       this.state = {};
    }

    render() {
        return (
            <DatePicker
                style={[{flex: 1}, this.props.style]}
                date={this.props.date || DEFAULT_DATE}
                mode='time'
                placeholder='select date'
                format='hh:mm'
                is24Hour={true}
                confirmBtnText='Confirm'
                cancelBtnText='Cancel'
                customStyles={{
                    dateIcon: {
                        display: 'none'
                    },
                    dateText: {
                        fontSize: 24,
                    },
                    dateInput: {
                        borderWidth: 0,
                        flex: 1,
                        alignSelf: 'flex-end'
                    }
                }}
                onDateChange={date => this.setDate(date)}
            />
        );
    }

    private setDate(date: string) {
        this.props.dispatch(EventCreationSetDateAction(date));
    }
}

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        paddingLeft: 20,
    }
} as any);

const mapStateToProps = (state) => {
    return {date: state.eventCreation.date};
};

export default connect(mapStateToProps)(DatePickerComponent)
