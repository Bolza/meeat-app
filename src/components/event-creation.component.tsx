import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker'

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {EventCreationSetLocationAction, EventCreationSetDateAction} from '../actions';
import {Card, CardSection, Input, Stepper} from '../components/common';

const ZOOM_CITY = 0.3;
const ZOOM_PLACE = 0.01;

const LONDON = {
    latitude: 51.531, // 37.78825,
    longitude: -0.120, // -122.4324,
    latitudeDelta: ZOOM_CITY,
    longitudeDelta: ZOOM_CITY,
};

interface State {
    date: string;
    location: {
        latitude: number,
        longitude: number,
        latitudeDelta: number,
        longitudeDelta: number,
    };
}
interface Props { [key: string]: any }

class EventCreationComponent extends Component<Props, State> {
    map: any;

    initialRegion = {
        latitude: LONDON.latitude,
        longitude: LONDON.longitude,
        latitudeDelta: ZOOM_CITY,
        longitudeDelta: ZOOM_CITY,
    };

    onRegionChange(region) {
        console.log('onRegionChangex', region);
    }

    constructor(props) {
        super(props);
        this.state = {
            location: LONDON,
            date: '11/11/2011'
        };
    }

    animateTo({latitude, longitude}) {
        this.map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: ZOOM_PLACE,
            longitudeDelta: ZOOM_PLACE,
        }, 100);
    }

    componentDidUpdate() {
        console.log(this.props)
        // TODO error when not setting location
        // this.animateTo({...this.props.location});
    }

    composeLocalQuery() {
        return {
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyBvTWMfJksaVNBhMnYpuNddgunzP1KUMIw',
            language: 'en', // language of the results
            types: 'establishment',
            location: {
                latitude: this.state.location.latitude,
                longitude: this.state.location.longitude
            },
            components: 'country:uk|country:it'
        };
    }

    onPlaceSelection(details) {
        console.log('onPlaceSelection', details);
        this.props.dispatch(EventCreationSetLocationAction({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng
        }));
    }

    // TODO should we kill the map selection?
    onMapPress(e) {
        console.log(e.nativeEvent.coordinate);
    }

    setDate(date: string) {
        this.setState({date});
        // this.props.dispatch(EventCreationSetDateAction(date));
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    ref={ref => { this.map = ref; }}
                    initialRegion={this.initialRegion}
                    region={this.state.location}
                    onRegionChangeComplete={this.onRegionChange}
                    onPress={this.onMapPress}
                />
                <GooglePlacesAutocomplete
                    placeholder='Enter Location'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'default'}
                    fetchDetails
                    styles={{
                        textInputContainer: styles.textInputContainer,
                        textInput: styles.textInput,
                        predefinedPlacesDescription: styles.predefinedPlacesDescription
                    }}
                    currentLocation
                    debounce={200}
                    query={this.composeLocalQuery()}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        types: 'establishment',
                    }}
                    onPress={(data, details) => this.onPlaceSelection.call(this, details, data)}
                />
                <Card style={{flex: 1}}>
                    <CardSection>
                        <Text style={{flex: 1, fontSize: 18, alignSelf: 'center'}}>How Many People?</Text>
                        <Stepper
                            style={{width: 120}}
                            startFrom={5}
                            min={2}
                            max={20}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label='experiment'
                            placeholder='experiment'
                            onChangeText={text => this.setDate(text)}
                            value={this.state.date}
                        />
                    </CardSection>
                    <CardSection>
                        <DatePicker
                            style={{width: 200}}
                            date={this.state.date}
                            mode='date'
                            placeholder='select date'
                            format='DD-MM-YYYY'
                            minDate='01-05-2017'
                            maxDate='01-05-2018'
                            confirmBtnText='Confirm'
                            cancelBtnText='Cancel'
                            customStyles={{
                                dateIcon: {
                                    display: 'none'
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
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
    // ...StyleSheet.absoluteFillObject,
        flex: 1
    },
    textInputContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    textInput: {
        marginLeft: 0,
        marginRight: 0,
        height: 38,
        color: '#5d5d5d',
        fontSize: 16
    },
    predefinedPlacesDescription: {
        color: '#1faadb'
    },
} as any);

const mapStateToProps = (state) => {
    console.log('state', state);
    return {...state.eventCreation};
};

export default connect(mapStateToProps)(EventCreationComponent);