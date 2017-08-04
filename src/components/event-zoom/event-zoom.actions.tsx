import firebase from 'firebase';
import { values, forEach } from 'lodash';
import {Actions} from 'react-native-router-flux';
import { EventCreationState, LocationDetails} from '../../types';
import { DB_EVENTS } from '../../router';

let callback;
let ref;

export const EVENT_ZOOM_FETCH_ACTION_TYPE = '[EventZoom] FetchAction';
export const EventZoomFetchAction = (eventId) => {
    return (dispatch) => {
        dispatch({ type: EVENT_ZOOM_FETCH_ACTION_TYPE });
        const user = firebase.auth().currentUser;
        if (ref && callback) {
            ref.off('value', callback);
        }
        ref = firebase.database().ref(DB_EVENTS).child(eventId);
        callback = ref.on('value', (snapshot) => {
            const value = snapshot.val();
            dispatch(EventZoomFetchSuccessAction({id: eventId, ...value}));
        });
    };
};

export const EVENT_ZOOM_FETCH_SUCCESS_ACTION_TYPE = '[EventZoom] FetchAction Success';
export const EventZoomFetchSuccessAction = (payload) => {
     return {
        type: EVENT_ZOOM_FETCH_SUCCESS_ACTION_TYPE,
        payload
    };
};

export const EVENT_ZOOM_JOIN_ACTION_TYPE = '[EventZoom] Join';
export const EventZoomJoinAction = (eventId) => {
    return (dispatch) => {
        dispatch({ type: EVENT_ZOOM_JOIN_ACTION_TYPE, payload: eventId });
        const user = firebase.auth().currentUser || {uid: 'bolza'};
        const guests = firebase.database().ref(DB_EVENTS).child(eventId).child('guests');
        guests.push(user.uid)
            .then(res => {
                console.log('success', res.val())
                dispatch(EventZoomJoinSuccessAction(res.val()));
            })
            .catch(err => {
                console.log('error', err)
                // dispatch(CreateEventFailAction(err));
            });
    };
};

export const EVENT_ZOOM_JOIN_SUCCESS_ACTION_TYPE = '[EventZoom] Join Success';
export const EventZoomJoinSuccessAction = (payload) => {
     return {
        type: EVENT_ZOOM_JOIN_SUCCESS_ACTION_TYPE,
        payload
    };
};