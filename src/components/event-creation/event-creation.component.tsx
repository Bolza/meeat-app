import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker'
import { Button } from 'react-native-elements'
import  {HideableView, Container} from '../common'
import { isEmpty } from 'lodash';
import moment from 'moment';

import { EventCreationSetDateAction, CreateEventAction} from './event-creation.actions';
import {Card, CardSection, Input, Stepper} from '../common';
import { GeoRegion } from '../../types';
import EventLocation from './event-location.component';
import { LONDON } from './event-location.component';
import {INITIAL_STATE} from './event-creation.reducer';

const DEFAULT_PEOPLE = 5;
const DEFAULT_DATE = moment().format('LT');

interface State { [key: string]: any };
interface Props { [key: string]: any }

class EventCreationComponent extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.details !== this.props.details) {
            this.setState({ details: nextProps.details });
        }
        if (nextProps.date !== this.props.date) {
            this.setState({ date: nextProps.date });
        }
        if (nextProps.people !== this.props.people) {
            this.setState({ people: nextProps.people });
        }
    }

    render() {
        return (
            <View
                style={{flex: 1}}
            >
                <EventLocation
                    style={{flex: 1}}
                    onListVisibility={(visible) => this.setListVisibility(visible)}
                />
                <HideableView visible={!this.state.listVisible} >
                    {RenderDetails(this.props.details)}
                    <Card>
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
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={date => this.setDate(date)}
                            />
                        </CardSection>
                        <CardSection>
                            <Button
                                raised
                                containerViewStyle={styles.creationButton}
                                backgroundColor='#1faadb'
                                icon={{name: 'done'}}
                                onPress={() => this.send()}
                            />
                        </CardSection>
                    </Card>
                </HideableView>
                <Container
                    spring
                    style={{flex: 1}}
                    success={this.state.completeVisible}
                ></Container>
            </View>
        );
    }

    private setDate(date: string) {
        this.props.dispatch(EventCreationSetDateAction(date));
    }

    private send() {
        // this.props.dispatch(CreateEventAction(this.state));
        this.setState({ completeVisible: true });
    }

    private closeComplete() {
        this.setState({ completeVisible: false });
    }

    private setListVisibility(visible) {
        this.setState({ listVisible: visible });
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
    },
    details: {
        fontSize: 11
    },
    completeButton: {
        flex: 1
    }
} as any);

const mapStateToProps = (state) => {
    // console.log('mapStateToProps', state.eventCreation);
    return {...state.eventCreation};
};

const RenderDetails = (details) => {
    if (!isEmpty(details)) {
        return (
            <Card>
                <CardSection>
                    <Text style={styles.details}>{details.name}</Text>
                </CardSection>
                <CardSection>
                    <Text style={styles.details}>{details.address}</Text>
                </CardSection>
                <CardSection>
                    <Text style={styles.details}>{details.rating}</Text>
                </CardSection>
                <CardSection>
                    <Text style={styles.details}>{details.phone}</Text>
                </CardSection>
            </Card>
        );
    } else {
        return <View></View>;
    }
}

export default connect(mapStateToProps)(EventCreationComponent);