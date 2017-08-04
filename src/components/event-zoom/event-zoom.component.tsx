import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card } from 'react-native-elements';
import { isEmpty, forOwn, forEach } from 'lodash';

import { Input, Stepper, HideableView, Container, LocationCard } from '../common';
import { GeoRegion } from '../../types';
import { EventZoomFetchAction, EventZoomJoinAction } from './event-zoom.actions';
import { UserList } from './user-list.component';

interface State { [key: string]: any };
interface Props { [key: string]: any }

class EventZoomComponent extends Component<Props, State> {

    componentWillMount() {
        this.state = {};
    }
    // componentWillReceiveProps (nextProps) {}

    render() {
        return (
            <Container
                fade
                style={{flex: 1}}
                success={this.state.completeVisible}
            >
                <Card>
                    <LocationCard item={this.props.item.details} />
                </Card>
                <Card>
                    <Text>Free Slots</Text>
                    <Text>{this.props.item.slots}</Text>
                </Card>
                <Card>
                    <Text>Date</Text>
                    <Text>{this.props.item.date}</Text>
                </Card>
                <Card>
                    <Text>Guests</Text>
                    <UserList items={this.props.item.guests} />
                </Card>
                <Card>
                    <Button
                        raised
                        containerViewStyle={styles.creationButton}
                        backgroundColor='#1faadb'
                        icon={{name: 'done'}}
                        onPress={() => this.joinTheEvent()}
                    />
                </Card>
            </Container>
        );
    }

    private joinTheEvent() {
        this.props.dispatch(EventZoomJoinAction(this.props.item.id));
        // this.setState({ completeVisible: true });
    }
}

const styles = StyleSheet.create({

} as any);

const mapStateToProps = (state) => {
    console.log(state.eventZoom)
    return {...state.eventZoom};
};

export default connect(mapStateToProps)(EventZoomComponent);