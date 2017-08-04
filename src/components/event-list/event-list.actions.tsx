import firebase from 'firebase';
import { values, forEach, map } from 'lodash';
import {Actions} from 'react-native-router-flux';
import { EventCreationState, LocationDetails} from '../../types';
import { DB_EVENTS } from '../../router';
import { EventZoomFetchAction } from '../event-zoom/event-zoom.actions';

let callback;
let ref;

export const EVENT_LIST_FETCH_ACTION_TYPE = '[EventList] FetchAction';
export const EventListFetchAction = () => {
    return (dispatch) => {
        dispatch({ type: EVENT_LIST_FETCH_ACTION_TYPE });
        const user = firebase.auth().currentUser;
        if (ref && callback) {
            ref.off('value', callback);
        }
        ref = firebase.database().ref(DB_EVENTS)
        callback = ref.on('value', (snapshot) => {
            const value = snapshot.val();
            const eventsArray = objToArray(value);

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

function objToArray(obj) {
    let array = [];
    forEach(obj, (v, k) => {
        array.push({...v, id: k});
    });
    return array;
}