import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {EventCreationSetLocationAction, EventCreationSetDateAction, CreateEventAction} from './event-creation.actions';
import { GeoRegion } from '../../types';

interface State { current: GeoRegion }
interface Props { [key: string]: any }

const ZOOM_CITY = 0.3;
const ZOOM_PLACE = 0.001;

const LONDON: GeoRegion = {
    latitude: 51.531, // 37.78825,
    longitude: -0.120, // -122.4324,
    latitudeDelta: ZOOM_CITY,
    longitudeDelta: ZOOM_CITY,
};

class EventLocation extends Component<Props, State> {
    map: any;

    initialRegion = {
        latitude: LONDON.latitude,
        longitude: LONDON.longitude,
        latitudeDelta: ZOOM_CITY,
        longitudeDelta: ZOOM_CITY,
    };

    constructor(props) {
       super(props);
        this.state = {
            current: LONDON
        };
    }

    componentDidUpdate() {
        console.log('componentDidUpdate', this.state)
        // TODO error when not setting location
        this.animateTo(this.state.current);
    }
    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps', this.props, nextProps)
    }
    render() {
        return (
            <View style={[styles.container, this.props.style] as any}>
                <MapView
                    style={{flex: 1}}
                    ref={ref => { this.map = ref; }}
                    initialRegion={this.initialRegion}
                    region={this.state.current}
                    onRegionChangeComplete={this.onRegionChange}
                    onPress={this.onMapPress}
                />
                <GooglePlacesAutocomplete
                    textInputProps={{
                        "autoCorrect": false
                    }}
                    placeholder='Enter Location'
                    minLength={3}
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
            </View>
        );
    }

    private onRegionChange(region) {
        // console.log('onRegionChangex', region);
    }

    private composeLocalQuery() {
        return {
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyBvTWMfJksaVNBhMnYpuNddgunzP1KUMIw',
            language: 'en', // language of the results
            types: 'establishment',
            location: {
                latitude: this.state.current.latitude,
                longitude: this.state.current.longitude
            },
            components: 'country:uk|country:it'
        };
    }

    private onPlaceSelection(details) {
        // console.log('onPlaceSelection', details);
        this.props.dispatch(EventCreationSetLocationAction({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng
        }));
    }

    // TODO should we kill the map selection?
    private onMapPress(e) {
        // console.log(e.nativeEvent.coordinate);
    }

    private animateTo(coords: GeoRegion) {
        console.log('animateTo', coords);
        const {latitude, longitude} = coords;
        this.map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: ZOOM_PLACE,
            longitudeDelta: ZOOM_PLACE,
        }, 500);
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
    }
} as any);

const mapStateToProps = (state) => {
    // console.log('state', state);
    return {current: state.eventCreation.location};
};

export default connect(mapStateToProps)(EventLocation);
