import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker'
import { Button } from 'react-native-elements'

import { EventCreationSetDateAction, CreateEventAction} from './event-creation.actions';
import {Card, CardSection, Input, Stepper} from '../common';
import { Event, GeoRegion } from '../../types';
import EventLocation from './event-location.component';
import { LONDON } from './event-location.component';

const DEFAULT_PEOPLE = 5;
const DEFAULT_DATE = '11:30'; // Date.now().toString();

interface State {
    event: Event;
}
interface Props { [key: string]: any }

class EventCreationComponent extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                people: DEFAULT_PEOPLE,
                location: LONDON,
                date: DEFAULT_DATE
            }
        };
    }

    setDate(date: string) {
        const curEvent = {
            ...this.state.event,
            date
        };
        this.setState({event: curEvent});
        this.props.dispatch(EventCreationSetDateAction(date));
    }

    send() {
        this.props.dispatch(CreateEventAction(this.state.event));
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <EventLocation style={{flex: 1}} />
                <Card style={{flex: 1}}>
                    <CardSection>
                        <Text style={styles.label}>How Many People?</Text>
                        <Stepper
                            style={{width: 120}}
                            startFrom={DEFAULT_PEOPLE}
                            min={2}
                            max={20}
                        />
                    </CardSection>
                    <CardSection>
                        <Text style={styles.label}>When?</Text>
                        <DatePicker
                            style={{flex: 1}}
                            date={this.state.event.date}
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
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={date => this.setDate(date)}
                        />
                    </CardSection>
                    <CardSection style={{flex: 1}}>
                        <Button
                            raised
                            containerViewStyle={styles.creationButton}
                            backgroundColor="#1faadb"
                            icon={{name: 'done'}}
                            onPress={() => this.send()}
                        />
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        flex: 1,
        fontSize: 18,
        alignSelf: 'center',
        color: '#333333'
    },
    creationButton: {
        flex: 1,
        padding: 0,
        margin: 0
    }
} as any);

const mapStateToProps = (state) => {
    console.log('state', state);
    return {...state.eventCreation};
};

export default connect(mapStateToProps)(EventCreationComponent);