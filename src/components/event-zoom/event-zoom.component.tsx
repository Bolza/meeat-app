import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Rating, Card } from 'react-native-elements'
import { isEmpty } from 'lodash';

import { Input, Stepper, HideableView, Container } from '../common';
import { GeoRegion } from '../../types';
import { EventZoomFetchAction } from './event-zoom.actions';

interface State { [key: string]: any };
interface Props { [key: string]: any }

class EventZoomComponent extends Component<Props, State> {

    componentWillMount() {
        this.state = {};
        // this.props.dispatch(EventZoomFetchAction(this.props.eventId));
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
        if (nextProps.slots !== this.props.slots) {
            this.setState({ slots: nextProps.slots });
        }
    }

    render() {
        return (
            <Container
                fade
                style={{flex: 1}}
                success={this.state.completeVisible}
            >
                <Card>
                    {RenderDetails(this.props.item.details)}
                </Card>
                <Card>
                    <Text>Slots</Text>
                    <Text>{this.props.item.slots}</Text>
                </Card>
                <Card>
                    <Text>Date</Text>
                    <Text>{this.props.item.date}</Text>
                </Card>
                <Card>
                    <Button
                        raised
                        containerViewStyle={styles.creationButton}
                        backgroundColor='#1faadb'
                        icon={{name: 'done'}}
                        onPress={() => this.createTheEvent()}
                    />
                </Card>
            </Container>
        );
    }

    private createTheEvent() {
        this.setState({ completeVisible: true });
    }
}

const styles = StyleSheet.create({

} as any);

const mapStateToProps = (state) => {
    // console.log('mapStateToProps', state.eventCreation);
    return {...state.eventZoom};
};

const RenderDetails = (details) => {
    if (!isEmpty(details)) {
        return (
            <View>
                <Card style={{justifyContent: 'space-between'}}>
                    <Text style={styles.details}>{details.name}</Text>
                    <Text style={styles.details}>{details.rating}</Text>
                </Card>
                <Card>
                    <Text style={styles.details}>{details.address}</Text>
                </Card>
                <Card>
                    <Text style={styles.details}>{details.phone}</Text>
                </Card>
            </View>
        );
    } else {
        return null;
    }
}

export default connect(mapStateToProps)(EventZoomComponent);