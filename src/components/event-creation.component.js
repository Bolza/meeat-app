import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

class EventCreationComponent extends Component {
    state = {}

    initialRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    onRegionChange(region) {
       
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    initialRegion={this.initialRegion}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                />
                <GooglePlacesAutocomplete
                    placeholder='Enter Location'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'default'}
                    fetchDetails
                    styles={{
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
                    }}
                    currentLocation
                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: 'AIzaSyBvTWMfJksaVNBhMnYpuNddgunzP1KUMIw',
                        language: 'en', // language of the results
                        types: 'establishment',
                    }}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        types: 'establishment',
                    }}
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        /*console.log(data);*/
                        console.log(details.geometry.location);
                        this.setState({region: details.geometry.location});
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const mapStateToProps = (state) => {
    console.log('state', state);
    return {...state};
};

export default connect(mapStateToProps)(EventCreationComponent);
