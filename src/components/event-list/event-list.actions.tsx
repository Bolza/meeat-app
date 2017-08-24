import firebase from 'firebase';
import GeoFire from 'geofire';
import { values, forEach, map } from 'lodash';
import {Actions} from 'react-native-router-flux';
import { EventCreationState, LocationDetails} from '../../types';
import { DB_EVENTS, DB_EVENT_LOCATIONS } from '../../router';
import { EventZoomFetchAction } from '../event-zoom/event-zoom.actions';
import { objectValuesToArray } from '../../helpers';

let callback;
let ref;

export const EVENT_LIST_FETCH_CLOSEST_ACTION_TYPE = '[EventList] Fetch by Distance Action';
export const EventListFetchClosestAction = () => {
    return (dispatch) => {
        dispatch({ type: EVENT_LIST_FETCH_CLOSEST_ACTION_TYPE });
        const eventsRef = firebase.database().ref(DB_EVENT_LOCATIONS)
        const geofireRef = new GeoFire(eventsRef);
        const geoQuery = geofireRef.query({
            center: [15, 15],
            radius: 10000
        });
        geoQuery.on('key_entered', function(key, location, distance) {
            console.log(Math.random().toString(), key, location, distance);
        });
    };
};

export const EVENT_LIST_FETCH_ACTION_TYPE = '[EventList] FetchAction';
export const EventListFetchAction = () => {
    return (dispatch) => {
        dispatch({ type: EVENT_LIST_FETCH_ACTION_TYPE });
        if (ref && callback) {
            ref.off('value', callback);
        }
        ref = firebase.database().ref(DB_EVENTS)

        callback = ref.on('value', (snapshot) => {
            const value = snapshot.val();
            const eventsArray = objectValuesToArray(value);

            dispatch(EventListFetchSuccessAction(eventsArray));
        });
    };
};

export const EVENT_LIST_FETCH_SUCCESS_ACTION_TYPE = '[EventList] FetchAction Success';
export const EventListFetchSuccessAction = (payload) => {
     return {
        type: EVENT_LIST_FETCH_SUCCESS_ACTION_TYPE,
        payload
    };
};

export const EVENT_LIST_TO_ZOOM_ACTION_TYPE = '[EventList] EventListToZoomAction';
export const EventListToZoomAction = (eventId: string) => {
    // TODO: move this in a router interceptor?
    return (dispatch) => {
        dispatch({ type: EVENT_LIST_TO_ZOOM_ACTION_TYPE });
        dispatch(EventZoomFetchAction(eventId));
        Actions.EventZoom({type: 'reset', eventId: eventId});
    };
};
