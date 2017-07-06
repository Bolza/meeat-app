import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {EventCreationSetLocationAction} from '../actions';
import {Card, CardSection, Input} from '../components/common';

const ZOOM_CITY = 0.3;
const ZOOM_PLACE = 0.01;

const LONDON = {
    latitude: 51.531, // 37.78825,
    longitude: -0.120, // -122.4324,
};

interface State { [key: string]: any }
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
        this.state = {};
    }

    animateTo({latitude, longitude}) {
        // console.log({latitude, longitude});
        this.map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: ZOOM_PLACE,
            longitudeDelta: ZOOM_PLACE,
        }, 100);
    }

    componentDidUpdate() {
        console.log(this.props)
        this.animateTo({...this.props.location});
    }

    composeQuery() {
        return {
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyBvTWMfJksaVNBhMnYpuNddgunzP1KUMIw',
            language: 'en', // language of the results
            types: 'establishment',
            location: {latitude: LONDON.latitude, longitude: LONDON.longitude},
            components: 'country:uk|country:it'
        };
    }

    onPlaceSelection(details) {
        this.props.dispatch(EventCreationSetLocationAction({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng
        }));
    }

    onMapPress(e) {
        console.log(e.nativeEvent.coordinate);
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
                    query={this.composeQuery()}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        types: 'establishment',
                    }}
                    onPress={(data, details) => this.onPlaceSelection.call(this, details, data)}
                />
                <Card styles={{flex: 1}}>
                    <CardSection>
                        <Input
                            label='people'
                            placeholder='How many people?'
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
