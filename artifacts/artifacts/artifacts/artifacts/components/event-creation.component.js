import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { EventCreationSetLocationAction } from '../actions';
const ZOOM_CITY = 0.3;
const ZOOM_PLACE = 0.01;
const LONDON = {
    latitude: 51.531,
    longitude: -0.120,
};
class EventCreationComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
        this.initialRegion = {
            latitude: LONDON.latitude,
            longitude: LONDON.longitude,
            latitudeDelta: ZOOM_CITY,
            longitudeDelta: ZOOM_CITY,
        };
    }
    onRegionChange(region) {
        // console.log('onRegionChange', region);
    }
    animateTo({ latitude, longitude }) {
        // console.log({latitude, longitude});
        this.map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: ZOOM_PLACE,
            longitudeDelta: ZOOM_PLACE,
        }, 100);
    }
    componentDidUpdate() {
        this.animateTo(Object.assign({}, this.props.location));
    }
    composeQuery() {
        return {
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyBvTWMfJksaVNBhMnYpuNddgunzP1KUMIw',
            language: 'en',
            types: 'establishment',
            location: { latitude: LONDON.latitude, longitude: LONDON.longitude },
            components: 'country:uk|country:it'
        };
    }
    onPlaceSelection(details) {
        this.props.dispatch(new EventCreationSetLocationAction({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng
        }));
    }
    onMapPress(e) {
        console.log(e.nativeEvent.coordinate);
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } }, React.createElement(MapView, { ref: ref => { this.map = ref; }, style: { flex: 1 }, initialRegion: this.initialRegion, region: this.state.location, onRegionChangeComplete: this.onRegionChange, onPress: this.onMapPress }), React.createElement(GooglePlacesAutocomplete, { placeholder: 'Enter Location', minLength: 2, autoFocus: false, returnKeyType: 'default', fetchDetails: true, styles: {
                textInputContainer: styles.textInputContainer,
                textInput: styles.textInput,
                predefinedPlacesDescription: styles.predefinedPlacesDescription
            }, currentLocation: true, debounce: 200, query: this.composeQuery(), GooglePlacesSearchQuery: {
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                types: 'establishment',
            }, onPress: (data, details) => this.onPlaceSelection.call(this, details) })));
    }
}
const styles = StyleSheet.create({
    map: Object.assign({}, StyleSheet.absoluteFillObject),
    textInputContainer: {
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
});
const mapStateToProps = (state) => {
    console.log('state', state);
    return Object.assign({}, state.eventCreation);
};
export default connect(mapStateToProps)(EventCreationComponent);
//# sourceMappingURL=event-creation.component.js.map 
//# sourceMappingURL=event-creation.component.js.map 
//# sourceMappingURL=event-creation.component.js.map 
//# sourceMappingURL=event-creation.component.js.map